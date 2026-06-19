import { useState } from "react"
import { Bold, Italic, Underline } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"

export function ToggleDemo() {
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(true)
  const [underline, setUnderline] = useState(false)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Toggle
        </h1>
        <p className="mt-2 text-muted-foreground">
          Двухпозиционная <strong>кнопка</strong> «нажата / не нажата» — как
          кнопки форматирования (Ж / К / Ч) в панели редактора.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Чем отличается от Switch и Checkbox</CardTitle>
          <CardDescription>
            Все про «вкл/выкл», но Toggle — это кнопка.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Это кнопка с состоянием:</strong> остаётся «вдавленной»,
              пока режим включён, и отжимается при повторном нажатии.
            </li>
            <li>
              <strong>Где применять:</strong> тулбары и режимы (жирный,
              сетка/список, без звука). Switch — для настроек, Checkbox — для
              выбора в форме.
            </li>
            <li>
              <strong>Доступно всем:</strong> работает мышью и с клавиатуры,
              понятно скринридерам.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Понажимай кнопки — пример текста ниже меняется:
        </p>

        <div className="flex items-center gap-1 rounded-md border p-1">
          <Toggle pressed={bold} onPressedChange={setBold} aria-label="Жирный">
            <Bold />
          </Toggle>
          <Toggle
            pressed={italic}
            onPressedChange={setItalic}
            aria-label="Курсив"
          >
            <Italic />
          </Toggle>
          <Toggle
            pressed={underline}
            onPressedChange={setUnderline}
            aria-label="Подчёркнутый"
          >
            <Underline />
          </Toggle>
        </div>

        <p
          className={cn(
            "text-lg",
            bold && "font-bold",
            italic && "italic",
            underline && "underline"
          )}
        >
          Пример текста: его вид меняют кнопки форматирования.
        </p>
      </div>
    </div>
  )
}
