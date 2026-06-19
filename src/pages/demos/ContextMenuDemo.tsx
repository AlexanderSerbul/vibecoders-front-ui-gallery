import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuDemo() {
  const [favorite, setFavorite] = useState(false)
  const [label, setLabel] = useState("none")

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Context Menu
        </h1>
        <p className="mt-2 text-muted-foreground">
          Меню по правому клику — как в проводнике и десктоп-приложениях. Те же
          пункты, что у <code>DropdownMenu</code> и <code>Menubar</code>, но
          открывается не по клику на кнопку, а правым кликом по области.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Чем отличается</CardTitle>
          <CardDescription>
            Триггер — не клик, а правый клик по области.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Открывается по правому клику на любой области, которую ты обернёшь.
            </li>
            <li>
              Ведёт себя как обычное меню: работает мышью и с клавиатуры.
            </li>
            <li>
              Те же богатые пункты: подменю, разделители, горячие клавиши,
              чекбоксы, радио-группы, метки и «опасный» пункт удаления.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Кликни правой кнопкой по области ниже:
        </p>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground select-none">
            Правый клик здесь
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuItem>
              Открыть <ContextMenuShortcut>⌘O</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Дублировать <ContextMenuShortcut>⌘D</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>Переместить в…</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Релизы</ContextMenuItem>
                <ContextMenuItem>Кейсы</ContextMenuItem>
                <ContextMenuItem>Архив</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={favorite}
              onCheckedChange={setFavorite}
            >
              В избранном
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuLabel>Метка</ContextMenuLabel>
            <ContextMenuRadioGroup value={label} onValueChange={setLabel}>
              <ContextMenuRadioItem value="none">Без метки</ContextMenuRadioItem>
              <ContextMenuRadioItem value="important">
                Важно
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="later">Позже</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              Удалить <ContextMenuShortcut>⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <p className="text-sm text-muted-foreground">
          Состояние: избранное — {favorite ? "да" : "нет"}, метка — {label}.
        </p>
      </div>
    </div>
  )
}
