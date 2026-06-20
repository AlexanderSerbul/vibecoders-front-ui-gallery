import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [value, setValue] = useState(40)
  const set = (v: number) => setValue(Math.min(100, Math.max(0, v)))

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Progress
        </h1>
        <p className="mt-2 text-muted-foreground">
          Полоса прогресса: показывает, насколько выполнена задача — загрузка
          файла, заполнение профиля, шаг мастера. Значение от 0 до 100% задаёшь
          ты сам. На основе Radix.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Для задач с понятным «сколько осталось».
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Показывает прогресс операции с измеримым концом: загрузка, экспорт,
              заполнение анкеты.
            </li>
            <li>
              Значение (0–100%) — твоё: компонент только рисует полосу, а сам
              прогресс ты считаешь.
            </li>
            <li>
              Если непонятно, сколько ждать (нет процента), — это не сюда; для
              «просто крутится» берут спиннер.
            </li>
            <li>Доступно для скринридеров — сообщает текущий процент.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Жми кнопки — полоса заполняется и плавно анимируется:
        </p>

        <div className="w-full max-w-md space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {value < 100 ? "Загрузка файла…" : "Готово ✓"}
            </span>
            <span
              className="font-medium tabular-nums"
              data-testid="progress-label"
            >
              {value}%
            </span>
          </div>
          <Progress value={value} />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => set(value - 20)}>
            -20%
          </Button>
          <Button variant="outline" onClick={() => set(value + 20)}>
            +20%
          </Button>
          <Button variant="outline" onClick={() => set(0)}>
            Сбросить
          </Button>
        </div>
      </div>
    </div>
  )
}
