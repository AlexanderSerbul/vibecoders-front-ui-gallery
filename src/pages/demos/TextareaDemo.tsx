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
import { Textarea } from "@/components/ui/textarea"

const MAX = 200

export function TextareaDemo() {
  const [value, setValue] = useState("")

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Textarea
        </h1>
        <p className="mt-2 text-muted-foreground">
          Многострочное поле ввода — для длинного текста: комментарий, отзыв,
          описание. То же, что обычное поле, только в несколько строк и
          тянется.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Текст в несколько строк.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Для длинного текста в несколько строк: комментарии, отзывы,
              описания.
            </li>
            <li>
              Обычное поле (<code>Input</code>) — для короткой строки; Textarea —
              когда строк много.
            </li>
            <li>
              Перенос по Enter, можно растянуть за уголок; подрастает под
              содержимое.
            </li>
            <li>
              Как любое поле формы: хранит значение, есть подсказка-плейсхолдер и
              ограничение длины.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Печатай — счётчик внизу считает символы:
        </p>

        <div className="w-full max-w-md space-y-2">
          <Label htmlFor="message">Сообщение</Label>
          <Textarea
            id="message"
            placeholder="Расскажи, что хочешь собрать…"
            className="min-h-28"
            value={value}
            maxLength={MAX}
            onChange={(event) => setValue(event.target.value)}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Перенос строк работает по Enter.</span>
            <span data-testid="char-count" className="tabular-nums">
              {value.length} / {MAX}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
