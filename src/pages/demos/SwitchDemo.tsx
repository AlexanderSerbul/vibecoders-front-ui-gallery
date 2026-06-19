import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const settings = [
  {
    id: "email",
    label: "Email-уведомления",
    desc: "Письма о важных событиях аккаунта.",
  },
  {
    id: "marketing",
    label: "Маркетинговые рассылки",
    desc: "Новости, акции и советы — раз в неделю.",
  },
  {
    id: "autosave",
    label: "Автосохранение",
    desc: "Сохранять черновики каждые 30 секунд.",
  },
]

export function SwitchDemo() {
  const [state, setState] = useState<Record<string, boolean>>({
    email: true,
    marketing: false,
    autosave: true,
  })

  const onLabels = settings.filter((s) => state[s.id]).map((s) => s.label)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Switch
        </h1>
        <p className="mt-2 text-muted-foreground">
          Переключатель «вкл/выкл» — тумблер для настроек, которые применяются
          сразу. На основе Radix, доступен с клавиатуры и для скринридеров.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Switch против Checkbox</CardTitle>
          <CardDescription>
            Похожи (оба про «да/нет»), но используются по-разному.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Switch — мгновенное действие:</strong> настройка
              применяется сразу по щелчку (тёмная тема, уведомления). Checkbox —
              выбор, который подтверждаешь позже кнопкой (в форме).
            </li>
            <li>
              <strong>Простое «вкл/выкл»:</strong> у переключателя всего два
              состояния — включён или выключен.
            </li>
            <li>
              <strong>Удобно нажимать:</strong> переключается мышью или пробелом,
              доступен с клавиатуры и для скринридеров.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <div className="w-full max-w-md divide-y rounded-lg border">
          {settings.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-between gap-4 p-4"
            >
              <div className="space-y-0.5">
                <Label htmlFor={s.id}>{s.label}</Label>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <Switch
                id={s.id}
                checked={state[s.id]}
                onCheckedChange={(checked) =>
                  setState((prev) => ({ ...prev, [s.id]: checked }))
                }
              />
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          Включено:{" "}
          <strong>{onLabels.length ? onLabels.join(", ") : "ничего"}</strong>
        </p>
      </div>
    </div>
  )
}
