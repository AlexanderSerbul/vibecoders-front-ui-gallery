import { useState } from "react"
import {
  ChevronDown,
  Link2,
  Mail,
  MessageSquare,
  RotateCcw,
  Share2,
  SlidersHorizontal,
} from "lucide-react"

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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDemo() {
  const [sidebar, setSidebar] = useState(true)
  const [statusBar, setStatusBar] = useState(false)
  const [panelSide, setPanelSide] = useState("left")

  const reset = () => {
    setSidebar(true)
    setStatusBar(false)
    setPanelSide("left")
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Dropdown Menu
        </h1>
        <p className="mt-2 text-muted-foreground">
          Меню, которое выпадает по клику на кнопку — то самое «⋯» или «Ещё».
          Внутри умещаются обычные пункты, галочки-переключатели, выбор одного
          варианта и вложенные подменю. На основе Radix.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Одно меню на одной кнопке — но «начинка» богатая.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Одно меню на одной кнопке: клик — и оно выпало. Этим отличается от{" "}
              <code>Menubar</code> — целого ряда меню, как в настольной
              программе.
            </li>
            <li>
              Богатая начинка: обычные действия, галочки-переключатели и выбор
              одного из вариантов — прямо в меню.
            </li>
            <li>Вложенные подменю: пункт может раскрывать ещё один список.</li>
            <li>Опасные действия (удалить, сбросить) подсвечиваются красным.</li>
            <li>
              Полностью с клавиатуры: стрелки, Enter, Esc и переход к пункту по
              первым буквам.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Нажми «Опции» и поменяй настройки — выбранное отражается ниже:
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <SlidersHorizontal />
              Опции
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>Вид</DropdownMenuLabel>
            <DropdownMenuItem>
              Во весь экран
              <DropdownMenuShortcut>F11</DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuCheckboxItem
              checked={sidebar}
              onCheckedChange={setSidebar}
            >
              Боковая панель
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={statusBar}
              onCheckedChange={setStatusBar}
            >
              Строка состояния
            </DropdownMenuCheckboxItem>

            <DropdownMenuSeparator />

            <DropdownMenuLabel>Расположение панели</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={panelSide}
              onValueChange={setPanelSide}
            >
              <DropdownMenuRadioItem value="left">Слева</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">
                Справа
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

            <DropdownMenuSeparator />

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Share2 />
                Поделиться
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail />
                  По почте
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare />
                  Сообщением
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link2 />
                  Скопировать ссылку
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSeparator />

            <DropdownMenuItem variant="destructive" onClick={reset}>
              <RotateCcw />
              Сбросить настройки
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <p
          className="text-sm text-muted-foreground"
          data-testid="settings-summary"
        >
          Боковая панель:{" "}
          <strong className="text-foreground">
            {sidebar ? "вкл" : "выкл"}
          </strong>
          {" · "}
          Строка состояния:{" "}
          <strong className="text-foreground">
            {statusBar ? "вкл" : "выкл"}
          </strong>
          {" · "}
          Панель:{" "}
          <strong className="text-foreground">
            {panelSide === "left" ? "слева" : "справа"}
          </strong>
        </p>

        <p className="text-xs text-muted-foreground">
          Кстати, этот же компонент уже работает на сайте — это категории в шапке
          и кнопка «⋯» в строках таблицы (раздел «Таблицы»).
        </p>
      </div>
    </div>
  )
}
