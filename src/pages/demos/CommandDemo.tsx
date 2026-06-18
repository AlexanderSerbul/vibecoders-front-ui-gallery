import { useEffect, useState } from "react"
import { Building2, Home, Newspaper } from "lucide-react"

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
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const navItems = [
  { label: "Главная", icon: Home },
  { label: "Новости", icon: Newspaper },
  { label: "О компании", icon: Building2 },
]

const demoItems = ["Popover", "Tooltip", "Hover Card", "Context Menu"]

export function CommandDemo() {
  const [lastRun, setLastRun] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  const renderItems = (closeOnSelect: boolean) => {
    const run = (label: string) => {
      setLastRun(label)
      if (closeOnSelect) setOpen(false)
    }
    return (
      <>
        <CommandEmpty>Ничего не найдено.</CommandEmpty>
        <CommandGroup heading="Навигация">
          {navItems.map(({ label, icon: Icon }) => (
            <CommandItem key={label} onSelect={() => run(label)}>
              <Icon />
              <span>{label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Демо-компоненты">
          {demoItems.map((label) => (
            <CommandItem key={label} onSelect={() => run(label)}>
              {label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Действия">
          <CommandItem onSelect={() => run("Новая заметка")}>
            Новая заметка
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => run("Настройки")}>
            Настройки
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + cmdk
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Command
        </h1>
        <p className="mt-2 text-muted-foreground">
          Командное меню с поиском и навигацией по клавиатуре — то самое «⌘K»,
          как в VS Code, Linear или GitHub. Построено не на Radix, а на
          библиотеке <code>cmdk</code>.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Поиск-фильтр + клавиатура — вот вся суть Command.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Живой фильтр:</strong> cmdk сам прячет пункты, не
              подходящие под ввод, и скрывает пустые группы.
            </li>
            <li>
              <strong>Клавиатура:</strong> ↑/↓ — перемещение, Enter — выбрать (
              <code>onSelect</code>). Подсветка активного пункта — это{" "}
              <code>data-[selected=true]</code>, а не <code>:hover</code>.
            </li>
            <li>
              <strong>Два режима:</strong> встроенный{" "}
              <code>&lt;Command&gt;</code> (ниже) и{" "}
              <code>&lt;CommandDialog&gt;</code> — тот же список в модальном
              диалоге, по <kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd>.
            </li>
            <li>
              Группы, разделители и горячие клавиши (<code>CommandShortcut</code>)
              — как в настоящих палитрах команд.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" onClick={() => setOpen(true)}>
            Открыть палитру
            <kbd className="bg-muted text-muted-foreground ml-1 rounded border px-1.5 text-xs">
              ⌘K
            </kbd>
          </Button>
          <p className="text-sm text-muted-foreground">
            Выполнено: <strong>{lastRun ?? "—"}</strong>
          </p>
        </div>

        <Command className="rounded-lg border shadow-sm">
          <CommandInput placeholder="Введите команду или поиск…" />
          <CommandList>{renderItems(false)}</CommandList>
        </Command>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Введите команду…" />
        <CommandList>{renderItems(true)}</CommandList>
      </CommandDialog>
    </div>
  )
}
