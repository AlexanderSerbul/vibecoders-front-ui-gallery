import { useState } from "react"
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"

export function ToggleGroupDemo() {
  const [formats, setFormats] = useState<string[]>(["bold"])
  const [align, setAlign] = useState("left")

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Toggle Group
        </h1>
        <p className="mt-2 text-muted-foreground">
          Группа кнопок-режимов в одном блоке — как панель форматирования: Ж / К
          / Ч или выравнивание текста. Бывает двух видов: можно включить
          несколько сразу или ровно один. На основе Radix.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Набор связанных кнопок, а не одна.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Несколько <code>Toggle</code> в одной связке — визуально это
              сегментированная панель, как в редакторах.
            </li>
            <li>
              Два режима: «несколько» (включай хоть все — жирный и курсив сразу)
              и «один из» (например, выравнивание — только одно).
            </li>
            <li>
              Один <code>Toggle</code> — для отдельной кнопки; Toggle Group —
              когда их набор, связанный по смыслу.
            </li>
            <li>
              Удобно с клавиатуры (стрелками между кнопками) и доступно для
              скринридеров.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Меняй кнопки — текст ниже сразу форматируется. Слева — формат (можно
          несколько), справа — выравнивание (только одно):
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <ToggleGroup
            type="multiple"
            variant="outline"
            value={formats}
            onValueChange={setFormats}
          >
            <ToggleGroupItem value="bold" aria-label="Жирный">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Курсив">
              <Italic />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Подчёркнутый">
              <Underline />
            </ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup
            type="single"
            variant="outline"
            value={align}
            onValueChange={(value) => {
              if (value) setAlign(value)
            }}
          >
            <ToggleGroupItem value="left" aria-label="По левому краю">
              <AlignLeft />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="По центру">
              <AlignCenter />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="По правому краю">
              <AlignRight />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <p
          data-testid="tg-preview"
          className={cn(
            "w-full rounded-lg border p-4 text-lg transition-all",
            formats.includes("bold") && "font-bold",
            formats.includes("italic") && "italic",
            formats.includes("underline") && "underline",
            align === "center" && "text-center",
            align === "right" && "text-right"
          )}
        >
          «shadcn/ui — вайбкодеру»: собирай интерфейсы из готовых кубиков.
        </p>
      </div>
    </div>
  )
}
