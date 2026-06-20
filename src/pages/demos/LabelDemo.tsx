import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LabelDemo() {
  const [agree, setAgree] = useState(false)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Label</h1>
        <p className="mt-2 text-muted-foreground">
          Подпись к полю формы — например «Почта» над строкой ввода. Клик по
          подписи сразу ставит курсор в поле (или ставит галочку), так что
          попасть проще. Сам по себе почти не нужен — всегда в паре с полем.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Подпись к полю формы.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Подпись к полю формы — короткий текст рядом с ним.</li>
            <li>
              Клик по подписи активирует поле: ставит курсор или переключает
              галочку — попасть проще, ведь область клика больше.
            </li>
            <li>
              Сам по себе почти не используется — всегда в паре с полем
              (<code>Input</code>, <code>Checkbox</code>…).
            </li>
            <li>
              Связывает подпись с полем — это удобно тем, кто пользуется
              скринридером.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-6">
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="email">Почта</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="agree"
              checked={agree}
              onCheckedChange={(v) => setAgree(v === true)}
            />
            <Label htmlFor="agree">Согласен с условиями</Label>
          </div>
          <p data-testid="label-state" className="text-sm text-muted-foreground">
            Согласие: {agree ? "да" : "нет"}
          </p>
        </div>
      </div>
    </div>
  )
}
