#!/usr/bin/env bash
#
# Деплой сайта как ПРИЛОЖЕНИЕ GALAXY (контейнер на общем хосте), а не отдельная VM.
#
#     VIBE_KEY=vibe_api_ВАШ_КЛЮЧ  bash deploy/deploy-galaxy.sh
#
# Чем отличается от deploy/deploy.sh (standalone-VM):
#   • один запрос create-with-source — provider/plan/region НЕ нужны;
#   • источник только base64 в source.content (для galaxy иначе нельзя);
#   • рантайм `static` + наш deploy/nginx.conf (тот же, что у VM-деплоя);
#   • ждём status=running (НЕ blackholeStatus=CONNECTED — galaxy его не достигает);
#   • после сборки делаем публичным (PATCH access-policy PUBLIC); sleep у galaxy нет;
#   • не расходует квоту VM, стоимость — за общий хост.
#
# Примечание: маршрут galaxy-vs-standalone платформа решает per-request (зависит от
# готовности galaxy-хоста в момент запроса). Иногда create уводит в standalone и
# возвращает SOURCE_AT_CREATE_GALAXY_ONLY — скрипт сам ретраит этот случай (до 5 раз).

set -u
API="https://vibecode.bitrix24.tech/v1"
NAME="ui-gallery-galaxy"                 # имя приложения на платформе

HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"
IDFILE="$HERE/.vibe-galaxy"        # id galaxy-приложения (локально, в .gitignore)

if [ -z "${VIBE_KEY:-}" ]; then
  echo "❌ Не задан ключ. Запусти:  VIBE_KEY=vibe_api_... bash deploy/deploy-galaxy.sh"
  exit 1
fi
api()   { curl -s -H "X-Api-Key: $VIBE_KEY" "$@"; }
field() { grep -oE "\"$1\":\"[^\"]*\"" | head -1 | sed -E "s/.*:\"([^\"]*)\"/\1/"; }

echo "→ 1/5  Собираю сайт (npm run build)…"
( cd "$ROOT" && npm run build >/dev/null ) || { echo "❌ Сборка упала"; exit 1; }

echo "→ 2/5  Пакую dist + nginx.conf и кодирую в base64…"
WORK="$(mktemp -d)"; [ -d "$WORK" ] || { echo "❌ Не создать временную папку"; exit 1; }
trap 'rm -rf "$WORK"' EXIT
mkdir "$WORK/stage"
cp -r "$ROOT/dist/." "$WORK/stage/"
cp "$HERE/nginx.conf" "$WORK/stage/nginx.conf"
tar -czf "$WORK/app.tgz" -C "$WORK/stage" .
# base64 крупный — JSON-тело кладём в файл, не в командную строку (argv лимит)
{
  printf '{"name":"%s","runtime":"static","port":3000,"start":"nginx -c /opt/app/nginx.conf","source":{"content":"' "$NAME"
  base64 -w0 "$WORK/app.tgz"
  printf '"}}'
} > "$WORK/body.json"

if [ -f "$IDFILE" ]; then
  SID="$(cat "$IDFILE")"
  echo "→ 3/5  Передеплой galaxy-приложения: $SID"
  RESP="$(api -X POST "$API/infra/servers/$SID/deploy?stream=false" \
      -H "Content-Type: application/json" --data-binary @"$WORK/body.json")"
else
  echo "→ 3/5  Создаю galaxy-приложение (one-shot, с исходниками)…"
  SID=""
  for attempt in $(seq 1 5); do
    RESP="$(api -X POST "$API/infra/servers" \
        -H "Content-Type: application/json" --data-binary @"$WORK/body.json")"
    SID="$(printf '%s' "$RESP" | field id)"
    [ -n "$SID" ] && break
    # Ретраим ТОЛЬКО «мигание» режима портала; любую другую ошибку — наружу
    if printf '%s' "$RESP" | grep -q "SOURCE_AT_CREATE_GALAXY_ONLY"; then
      echo "   попытка $attempt/5: портал ушёл в standalone (SOURCE_AT_CREATE_GALAXY_ONLY), повтор через 8с…"
      sleep 8
      continue
    fi
    echo "❌ Не создалось: $RESP"; exit 1
  done
  if [ -z "$SID" ]; then
    echo "❌ Не удалось создать galaxy-приложение за 5 попыток (портал упорно резолвится в standalone)."
    exit 1
  fi
  printf '%s' "$SID" > "$IDFILE"
fi

echo "→ 4/5  Жду сборку контейнера (status=running)…"
URL=""
for _ in $(seq 1 40); do
  INFO="$(api "$API/infra/servers/$SID")"
  ST="$(printf '%s' "$INFO" | field status)"
  case "$ST" in
    running)
      URL="$(printf '%s' "$INFO" | field appUrl)"
      [ -z "$URL" ] && URL="$(printf '%s' "$INFO" | grep -oE 'https://[a-z0-9.-]+\.vibecode\.bitrix24\.tech' | head -1)"
      break ;;
    error)
      echo; echo "❌ Сборка упала: $(printf '%s' "$INFO" | field provisionError)"
      echo "$INFO"; exit 1 ;;
  esac
  printf "."; sleep 6
done
echo

if [ -z "$URL" ]; then
  echo "⚠️  Не дождался running за ~4 мин. Проверь вручную: GET $API/infra/servers/$SID"
  exit 1
fi

echo "→ 5/5  Делаю приложение публичным (access-policy → PUBLIC)…"
api -X PATCH "$API/infra/servers/$SID/access-policy" \
    -H "Content-Type: application/json" -d '{"accessPolicy":"PUBLIC"}' >/dev/null

echo
echo "✅ Galaxy-приложение онлайн (публичное):"
echo "   $URL"
