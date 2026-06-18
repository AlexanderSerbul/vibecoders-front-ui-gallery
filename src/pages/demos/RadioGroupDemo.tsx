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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

const plans = [
  { value: "free", label: "Free", desc: "Личные проекты, до 3 репозиториев." },
  { value: "pro", label: "Pro", desc: "Команды до 10 человек, без лимитов." },
  { value: "team", label: "Team", desc: "Расширенный доступ, SSO и аудит." },
]

export function RadioGroupDemo() {
  const [plan, setPlan] = useState("pro")
  const selected = plans.find((p) => p.value === plan)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Radio Group
        </h1>
        <p className="mt-2 text-muted-foreground">
          Выбор <strong>ровно одного</strong> варианта из нескольких
          взаимоисключающих. Противоположность Checkbox, где можно отметить
          несколько.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Radio Group против Checkbox</CardTitle>
          <CardDescription>
            «Одно из многих» против «нескольких независимых».
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Ровно один выбор:</strong> отметил вариант — предыдущий
              снялся сам. Checkbox так не делает (там каждый сам по себе).
            </li>
            <li>
              <strong>Контролируемый:</strong> <code>value</code> /{" "}
              <code>onValueChange</code> — строка (значение выбранного).
            </li>
            <li>
              <strong>Клавиатура:</strong> Tab заходит в группу один раз, дальше
              — стрелками между вариантами (как нативные radio).
            </li>
            <li>
              <strong>Доступность:</strong> роли <code>radiogroup</code> /{" "}
              <code>radio</code>, связь каждого пункта с <code>Label</code>.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">Выберите тариф:</p>

        <RadioGroup
          value={plan}
          onValueChange={setPlan}
          className="w-full max-w-sm gap-3"
        >
          {plans.map((p) => (
            <Label
              key={p.value}
              htmlFor={p.value}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-lg border p-4 font-normal transition-colors",
                plan === p.value
                  ? "border-primary bg-accent/40"
                  : "hover:bg-accent/40"
              )}
            >
              <RadioGroupItem value={p.value} id={p.value} className="mt-0.5" />
              <div className="space-y-0.5">
                <div className="font-medium">{p.label}</div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Label>
          ))}
        </RadioGroup>

        <p className="text-sm text-muted-foreground">
          Выбрано: <strong>{selected?.label}</strong>
        </p>
      </div>
    </div>
  )
}
