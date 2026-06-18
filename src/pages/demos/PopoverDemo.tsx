import { useState } from "react"
import { Settings } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const densities = [
  { value: "compact", label: "Компактно" },
  { value: "comfortable", label: "Обычно" },
  { value: "spacious", label: "Просторно" },
] as const

type Density = (typeof densities)[number]["value"]

export function PopoverDemo() {
  const [density, setDensity] = useState<Density>("comfortable")

  const densityLabel = densities.find((d) => d.value === density)?.label

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Popover
        </h1>
        <p className="mt-2 text-muted-foreground">
          Небольшая плавающая панель, привязанная к кнопке-триггеру. В отличие
          от диалога — <strong>немодальная</strong>: не затемняет страницу и не
          блокирует её, но содержимое полностью интерактивно.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Чем отличается</CardTitle>
          <CardDescription>
            Popover ≠ Dialog ≠ Tooltip — у каждого своя роль.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Немодальный:</strong> нет затемняющего оверлея, фокус не
              запирается, страница под ним остаётся доступной. Диалог —
              наоборот, модальный.
            </li>
            <li>
              <strong>Интерактивное содержимое:</strong> внутри живут кнопки,
              поля, переключатели — в отличие от Tooltip, где только подсказка
              по наведению.
            </li>
            <li>
              <strong>Позиционируется автоматически:</strong> Radix привязывает
              панель к триггеру и сам выбирает сторону, если у края не хватает
              места. Управляется пропсами <code>side</code>, <code>align</code>,{" "}
              <code>sideOffset</code>.
            </li>
            <li>
              Закрывается по клику вне панели и по <kbd>Esc</kbd>; рендерится в
              портал, поэтому не обрезается родительским <code>overflow</code>.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Нажми кнопку — панель откроется рядом. Меняй настройку внутри: панель
          не закрывается, а страница остаётся доступной (ссылки в шапке
          по-прежнему кликабельны).
        </p>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Settings />
              Параметры
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-64">
            <div className="space-y-3">
              <div className="space-y-1">
                <h4 className="text-sm leading-none font-medium">
                  Плотность интерфейса
                </h4>
                <p className="text-muted-foreground text-xs">
                  Как близко друг к другу располагаются элементы.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {densities.map((d) => (
                  <Button
                    key={d.value}
                    size="sm"
                    variant={density === d.value ? "default" : "ghost"}
                    className="justify-start"
                    onClick={() => setDensity(d.value)}
                  >
                    {d.label}
                  </Button>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <p className="text-sm text-muted-foreground">
          Выбранная плотность: <strong>{densityLabel}</strong>.
        </p>
      </div>
    </div>
  )
}
