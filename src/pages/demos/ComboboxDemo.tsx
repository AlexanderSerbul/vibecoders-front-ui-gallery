import { useState } from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
  { value: "solidjs", label: "SolidJS" },
  { value: "qwik", label: "Qwik" },
  { value: "preact", label: "Preact" },
  { value: "astro", label: "Astro" },
  { value: "next.js", label: "Next.js" },
  { value: "remix", label: "Remix" },
]

export function ComboboxDemo() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const selected = frameworks.find((framework) => framework.value === value)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Паттерн · Popover + Command
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Combobox
        </h1>
        <p className="mt-2 text-muted-foreground">
          Поле выбора с поиском: как Select, но список фильтруется по мере ввода.
          Важная деталь — <strong>отдельного компонента Combobox нет</strong>. Он
          собран из двух уже знакомых: <code>Popover</code> (всплывающая панель) и
          внутри — <code>Command</code> (список с поиском).
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Из чего собран</CardTitle>
          <CardDescription>
            Два уже знакомых компонента в связке — никакой новой зависимости.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong><code>Popover</code></strong> даёт всплывающую панель у
              кнопки, которая открывается и закрывается.
            </li>
            <li>
              <strong><code>Command</code></strong> внутри даёт строку поиска,
              фильтрацию и навигацию с клавиатуры.
            </li>
            <li>
              Выбрал пункт — панель сама закрывается, а выбранное значение
              остаётся на кнопке.
            </li>
            <li>
              Когда брать Combobox вместо Select: длинный список, где нужен поиск.
              Короткий фиксированный список — проще оставить на Select.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Нажми и начни печатать — список фильтруется:
        </p>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-64 justify-between"
            >
              {selected ? selected.label : "Выберите фреймворк…"}
              <ChevronsUpDownIcon className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0">
            <Command>
              <CommandInput placeholder="Поиск фреймворка…" className="h-9" />
              <CommandList>
                <CommandEmpty>Ничего не найдено.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      {framework.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <p className="text-sm text-muted-foreground">
          Выбрано: <strong>{selected ? selected.label : "—"}</strong>
          {value && (
            <span className="text-muted-foreground"> (value: {value})</span>
          )}
        </p>
      </div>
    </div>
  )
}
