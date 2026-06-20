#!/usr/bin/env bash
#
# Выложить этот сайт в интернет на Битрикс24 Вайбкод — одной командой:
#
#     VIBE_KEY=vibe_api_ВАШ_КЛЮЧ  bash deploy/deploy.sh
#
# Скрипт сам соберёт сайт, поднимет (или переиспользует) сервер, зальёт статику
# под nginx, сделает сайт публичным и не засыпающим и напечатает адрес.
# Зачем именно так — читай deploy/README.md.

API="https://vibecode.bitrix24.tech/v1"
PLAN="bc-small"          # тариф сервера (дешевле — bc-agent; см. README)
REGION="ru-central1-a"   # дата-центр (Москва)
NAME="ui-gallery"        # имя сервера на платформе

HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"
IDFILE="$HERE/.vibe-server"   # сюда запомним id созданного сервера (в гит не нужен)

if [ -z "${VIBE_KEY:-}" ]; then
  echo "❌ Не задан ключ. Запусти так:  VIBE_KEY=vibe_api_... bash deploy/deploy.sh"
  exit 1
fi

api() { curl -s -H "X-Api-Key: $VIBE_KEY" "$@"; }
# вытащить строковое поле из JSON-ответа (чтобы не зависеть от jq)
field() { grep -oE "\"$1\":\"[^\"]*\"" | head -1 | sed -E "s/.*:\"([^\"]*)\"/\1/"; }

echo "→ 1/5  Собираю сайт (npm run build)…"
( cd "$ROOT" && npm run build >/dev/null ) || { echo "❌ Сборка упала"; exit 1; }

echo "→ 2/5  Пакую dist + nginx.conf…"
WORK="$(mktemp -d)"
# Подстраховка: вешаем уборку, только если временная папка реально создалась.
# Иначе при пустом $WORK trap выполнил бы `rm -rf ""` — у нас это безвредно
# (exit 0, ничего не трогает), но полагаться на форму команды не стоит.
[ -n "$WORK" ] && [ -d "$WORK" ] || { echo "❌ Не удалось создать временную папку"; exit 1; }
trap 'rm -rf "$WORK"' EXIT
mkdir "$WORK/stage"
cp -r "$ROOT/dist/." "$WORK/stage/"
cp "$HERE/nginx.conf" "$WORK/stage/nginx.conf"
tar -czf "$WORK/app.tgz" -C "$WORK/stage" .

# Рантайм (nginx) ставится ОДИН раз — при создании сервера; он остаётся на
# диске и переживает обновления. Поэтому на обновлениях параметр не передаём
# (иначе nginx переустанавливался бы зря и тратил время на каждый деплой).
RUNTIME=()
if [ -f "$IDFILE" ]; then
  SID="$(cat "$IDFILE")"
  echo "→ 3/5  Использую существующий сервер: $SID"
else
  RUNTIME=(-F "runtime=static")   # ставим nginx только на новом сервере
  echo "→ 3/5  Создаю сервер ($PLAN, $REGION)… (это платный шаг)"
  IMAGE="$(api "$API/infra/providers/bitrix-cloud/images" | field id)"
  RESP="$(api -X POST "$API/infra/servers" -H "Content-Type: application/json" \
      -d "{\"provider\":\"bitrix-cloud\",\"name\":\"$NAME\",\"plan\":\"$PLAN\",\"region\":\"$REGION\",\"image\":\"$IMAGE\"}")"
  SID="$(printf '%s' "$RESP" | field id)"
  if [ -z "$SID" ]; then echo "❌ Сервер не создался: $RESP"; exit 1; fi
  printf '%s' "$SID" > "$IDFILE"
  printf "   жду готовности сервера"
  for _ in $(seq 1 30); do
    if api "$API/infra/servers/$SID" | grep -q '"blackholeStatus":"CONNECTED"'; then break; fi
    printf "."; sleep 6
  done
  echo " — готов"
fi

echo "→ 4/5  Заливаю сайт на сервер…"
DRESP="$(api -X POST "$API/infra/servers/$SID/deploy?stream=false" \
    -F "archive=@$WORK/app.tgz" "${RUNTIME[@]}" \
    -F "start=nginx -c /opt/app/nginx.conf" -F "port=3000" -F "cleanDeploy=true")"
if ! printf '%s' "$DRESP" | grep -q '"success":true'; then
  echo "❌ Деплой не удался:"; echo "$DRESP"; exit 1
fi
URL="$(printf '%s' "$DRESP" | field appUrl)"

echo "→ 5/5  Делаю сайт публичным и не засыпающим…"
api -X PATCH "$API/infra/servers/$SID/access-policy" -H "Content-Type: application/json" -d '{"accessPolicy":"PUBLIC"}' >/dev/null
api -X PATCH "$API/infra/servers/$SID/sleep"         -H "Content-Type: application/json" -d '{"sleepAfterMinutes":null}' >/dev/null

echo
echo "✅ Готово! Твой сайт онлайн:"
echo "   $URL"
