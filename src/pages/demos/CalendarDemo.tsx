import { useState } from "react"
import { type DateRange } from "react-day-picker"

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

const modes = [
  { value: "single", label: "Одна дата" },
  { value: "multiple", label: "Несколько" },
  { value: "range", label: "Диапазон" },
] as const

type Mode = (typeof modes)[number]["value"]

const fmtLong = (date: Date) =>
  date.toLocaleDateString("ru-RU", { dateStyle: "long" })
const fmtShort = (date: Date) => date.toLocaleDateString("ru-RU")

export function CalendarDemo() {
  const [mode, setMode] = useState<Mode>("single")
  const [single, setSingle] = useState<Date | undefined>(new Date())
  const [multiple, setMultiple] = useState<Date[] | undefined>([])
  const [range, setRange] = useState<DateRange | undefined>(undefined)

  let readout = "—"
  if (mode === "single" && single) {
    readout = fmtLong(single)
  } else if (mode === "multiple" && multiple?.length) {
    readout = `${multiple.length} дат: ${multiple.map(fmtShort).join(", ")}`
  } else if (mode === "range" && range?.from) {
    readout = `${fmtShort(range.from)} — ${range.to ? fmtShort(range.to) : "…"}`
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + react-day-picker
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Calendar
        </h1>
        <p className="mt-2 text-muted-foreground">
          Календарь для выбора даты. Под капотом — react-day-picker,
          оформленный в стиле shadcn.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Выбор дат с клавиатурой и в трёх режимах.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Три режима:</strong> одна дата, несколько дат или диапазон
              «с — по». Переключатель ниже меняет режим.
            </li>
            <li>
              <strong>Выбранное запоминается:</strong> что выбрал — то и
              подсвечено на календаре.
            </li>
            <li>
              <strong>Удобно с клавиатуры:</strong> по дням ходишь стрелками, по
              месяцам — отдельными клавишами; читается скринридерами.
            </li>
            <li>
              Поле с выпадающим календарём (<strong>Date Picker</strong>)
              собирается из <strong>Popover + Calendar</strong>.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Переключай режим и выбирай на календаре:
        </p>

        <div className="flex flex-wrap gap-1">
          {modes.map((m) => (
            <Button
              key={m.value}
              size="sm"
              variant={mode === m.value ? "default" : "outline"}
              onClick={() => setMode(m.value)}
            >
              {m.label}
            </Button>
          ))}
        </div>

        {mode === "single" && (
          <Calendar
            mode="single"
            selected={single}
            onSelect={setSingle}
            className="rounded-md border shadow-sm"
          />
        )}
        {mode === "multiple" && (
          <Calendar
            mode="multiple"
            selected={multiple}
            onSelect={setMultiple}
            className="rounded-md border shadow-sm"
          />
        )}
        {mode === "range" && (
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            className="rounded-md border shadow-sm"
          />
        )}

        <p className="text-sm text-muted-foreground">
          Выбрано: <strong>{readout}</strong>
        </p>
      </div>
    </div>
  )
}
