import { useState } from "react"
import { CalendarIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
import { cn } from "@/lib/utils"

export function DatePickerDemo() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Паттерн · Popover + Calendar
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Date Picker
        </h1>
        <p className="mt-2 text-muted-foreground">
          Поле с датой: по клику открывается календарь. Как и Combobox, это{" "}
          <strong>не отдельный компонент shadcn</strong>, а{" "}
          <strong>композиция</strong> — <code>Popover</code> +{" "}
          <code>Calendar</code>.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Как собран — и про выбор года</CardTitle>
          <CardDescription>
            Два готовых кирпичика плюс ответ на «как прыгнуть на нужный год».
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Кнопка-триггер</strong> в <code>Popover</code> показывает
              выбранную дату (или плейсхолдер), внутри — <code>Calendar</code>.
              Выбрал день — Popover закрывается.
            </li>
            <li>
              <strong>Год не нужно «листать»:</strong> проп{" "}
              <code>captionLayout="dropdown"</code> превращает подпись «Июнь
              2026» в <strong>выпадающие списки месяца и года</strong> — прыжок
              на любой год в один клик.
            </li>
            <li>
              Диапазон годов задаётся пропами <code>startMonth</code> /{" "}
              <code>endMonth</code> (здесь — 1950–2035).
            </li>
            <li>
              Никакой новой зависимости: <code>Popover</code> и{" "}
              <code>Calendar</code> у нас уже есть.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Нажми на поле, выбери месяц/год в списках и кликни день:
        </p>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-60 justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date
                ? date.toLocaleDateString("ru-RU", { dateStyle: "long" })
                : "Выберите дату"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(value) => {
                setDate(value)
                setOpen(false)
              }}
              captionLayout="dropdown"
              startMonth={new Date(1950, 0)}
              endMonth={new Date(2035, 11)}
            />
          </PopoverContent>
        </Popover>

        <p className="text-sm text-muted-foreground">
          Выбрано:{" "}
          <strong>
            {date
              ? date.toLocaleDateString("ru-RU", { dateStyle: "long" })
              : "—"}
          </strong>
        </p>
      </div>
    </div>
  )
}
