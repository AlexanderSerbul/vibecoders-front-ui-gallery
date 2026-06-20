import { useState } from "react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ratios = [
  { label: "16 : 9", value: 16 / 9 },
  { label: "4 : 3", value: 4 / 3 },
  { label: "1 : 1", value: 1 },
  { label: "3 : 4", value: 3 / 4 },
]

export function AspectRatioDemo() {
  const [active, setActive] = useState({ label: "16 : 9", value: 16 / 9 })

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Aspect Ratio
        </h1>
        <p className="mt-2 text-muted-foreground">
          Держит фиксированные пропорции блока (16:9, квадрат, 4:3) при любой
          ширине. Главное — для картинок и видео: место под них зарезервировано
          заранее, поэтому при загрузке ничего не «прыгает». На основе Radix.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Пропорции, которые не плывут.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Держит заданные пропорции независимо от ширины контейнера —
              блок тянется, но форма сохраняется.
            </li>
            <li>
              Главное применение — картинки и видео: место зарезервировано
              заранее, при загрузке ничего не «прыгает».
            </li>
            <li>
              Внутрь кладёшь что угодно (картинку, видео, цветной блок) — оно
              растягивается на всю область.
            </li>
            <li>Пропорцию задаёшь одним числом — например, 16 к 9.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Жми кнопки — блок меняет пропорции, оставаясь во всю ширину:
        </p>

        <div className="flex flex-wrap gap-2">
          {ratios.map((r) => (
            <Button
              key={r.label}
              variant={active.label === r.label ? "default" : "outline"}
              size="sm"
              onClick={() => setActive(r)}
            >
              {r.label}
            </Button>
          ))}
        </div>

        <div className="w-full max-w-sm">
          <AspectRatio ratio={active.value} data-testid="ratio-box">
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-primary/25 to-primary/5 text-sm font-medium text-muted-foreground">
              {active.label}
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  )
}
