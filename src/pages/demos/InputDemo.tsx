import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputDemo() {
  const [value, setValue] = useState("")

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Input</h1>
        <p className="mt-2 text-muted-foreground">
          Обычное поле ввода — для короткой строки в одну линию: имя, почта,
          пароль, число. Самый базовый кирпичик любой формы: пользователь
          печатает, ты получаешь то, что он ввёл.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Короткая строка в одну линию.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Для короткой строки в одну линию: имя, почта, пароль, число.
            </li>
            <li>
              Если текста много и нужно несколько строк — бери{" "}
              <code>Textarea</code>, а не Input.
            </li>
            <li>
              Пароль, почта, число — это просто разные «типы» поля: точки вместо
              букв, проверка собачки, стрелочки для цифр.
            </li>
            <li>
              Работает в паре с <code>Label</code> (подпись над полем) и хранит
              введённое значение — основа любой формы.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-6">
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            placeholder="Алекс"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <p data-testid="input-echo" className="text-sm text-muted-foreground">
            Введено: {value || "—"}
          </p>
        </div>

        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="email">Почта</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>

        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="password">Пароль</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>

        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="age">Возраст</Label>
          <Input id="age" type="number" placeholder="18" />
        </div>

        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="locked">Поле недоступно</Label>
          <Input id="locked" placeholder="Сюда нельзя печатать" disabled />
        </div>
      </div>
    </div>
  )
}
