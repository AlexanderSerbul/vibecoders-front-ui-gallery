import { Fragment, useState } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const zones = [
  {
    region: "Европа",
    items: [
      { value: "msk", label: "Москва (UTC+3)" },
      { value: "lon", label: "Лондон (UTC+0)" },
      { value: "ber", label: "Берлин (UTC+1)" },
    ],
  },
  {
    region: "Азия",
    items: [
      { value: "dxb", label: "Дубай (UTC+4)" },
      { value: "tyo", label: "Токио (UTC+9)" },
    ],
  },
  {
    region: "Америка",
    items: [
      { value: "nyc", label: "Нью-Йорк (UTC−5)" },
      { value: "lax", label: "Лос-Анджелес (UTC−8)" },
    ],
  },
]

const allItems = zones.flatMap((zone) => zone.items)

export function SelectDemo() {
  const [zone, setZone] = useState("")

  const selected = allItems.find((item) => item.value === zone)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Select
        </h1>
        <p className="mt-2 text-muted-foreground">
          Выпадающий список для выбора <strong>одного</strong> значения —
          стилизуемая замена нативного <code>&lt;select&gt;</code>: с порталом,
          клавиатурой и группами.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Чем отличается</CardTitle>
          <CardDescription>
            Select хранит выбор, Dropdown запускает действия, Command — ищет.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Это форм-контрол:</strong> хранит выбранное значение (
              <code>value</code> / <code>onValueChange</code>), показывает его в
              триггере и ставит галочку у выбранного пункта.
            </li>
            <li>
              <strong>Не меню действий.</strong> DropdownMenu запускает команды и
              ничего не «помнит»; Select — про выбор значения, как радиокнопки.
            </li>
            <li>
              <strong>Без поиска.</strong> Для длинных списков с фильтром берут
              Combobox (Popover + Command); здесь — короткий список с группами.
            </li>
            <li>
              Доступность Radix: роли <code>combobox</code> / <code>listbox</code>,
              стрелки, выбор по Enter, ввод первых букв (type-ahead).
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Выбери часовой пояс — список сгруппирован по регионам:
        </p>

        <Select value={zone} onValueChange={setZone}>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Выберите часовой пояс" />
          </SelectTrigger>
          <SelectContent>
            {zones.map((group, index) => (
              <Fragment key={group.region}>
                {index > 0 && <SelectSeparator />}
                <SelectGroup>
                  <SelectLabel>{group.region}</SelectLabel>
                  {group.items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </Fragment>
            ))}
          </SelectContent>
        </Select>

        <p className="text-sm text-muted-foreground">
          Выбрано: <strong>{selected ? selected.label : "—"}</strong>
          {zone && (
            <span className="text-muted-foreground"> (value: {zone})</span>
          )}
        </p>
      </div>
    </div>
  )
}
