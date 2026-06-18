import { useState } from "react"
import { Check, Mail } from "lucide-react"

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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { PromptBlock } from "@/components/PromptBlock"
import { cn } from "@/lib/utils"

type Recipient = {
  name: string
  email: string
  photo: string
}

const recipients: Recipient[] = [
  {
    name: "Анна Кузнецова",
    email: "anna.k@orbita.example",
    photo: "https://i.pravatar.cc/200?img=5",
  },
  {
    name: "Дмитрий Соколов",
    email: "dmitry.s@orbita.example",
    photo: "https://i.pravatar.cc/200?img=12",
  },
  {
    name: "Елена Морозова",
    email: "elena.m@orbita.example",
    photo: "https://i.pravatar.cc/200?img=9",
  },
  {
    name: "Игорь Волков",
    email: "igor.v@orbita.example",
    photo: "https://i.pravatar.cc/200?img=33",
  },
  {
    name: "Мария Лебедева",
    email: "maria.l@orbita.example",
    photo: "https://i.pravatar.cc/200?img=16",
  },
]

export function MenubarDemo() {
  const [showSidebar, setShowSidebar] = useState(true)
  const [showStatusBar, setShowStatusBar] = useState(false)
  const [zoom, setZoom] = useState("100")

  const [mailOpen, setMailOpen] = useState(false)
  const [selected, setSelected] = useState<Recipient | null>(null)

  function handleShare() {
    if (!selected) return
    console.log(`📧 Почта отправлена: ${selected.name} <${selected.email}>`)
    setMailOpen(false)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Menubar</h1>
        <p className="mt-2 text-muted-foreground">
          Панель меню в стиле настольного приложения (Файл · Правка · Вид) —
          несколько согласованных меню с полной навигацией с клавиатуры.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Чем интересен</CardTitle>
          <CardDescription>
            Координация нескольких меню — сложнее обычного дропдауна.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Открыл одно меню — наведение на соседние сразу открывает их (как в
              десктоп-приложениях).
            </li>
            <li>
              Полная клавиатура: стрелки между меню и пунктами, Home/End,
              typeahead, Esc.
            </li>
            <li>
              Богатые пункты: подменю, разделители, горячие клавиши, чекбоксы и
              радио-группы.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="mb-8 flex items-start gap-3 rounded-lg border bg-muted/40 p-4">
        <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
        <div className="text-sm">
          <p className="font-medium">Внутри — живой пример</p>
          <p className="mt-1 text-muted-foreground">
            Открой{" "}
            <strong className="text-foreground">
              Файл → Поделиться → По почте
            </strong>{" "}
            — там красивый диалог с выбором получателя: фото сотрудников,
            выделение активного и отправка (пишет в консоль).
          </p>
        </div>
      </div>

      <div className="mb-8 max-w-2xl">
        <p className="text-sm text-muted-foreground">
          А получить его оказалось просто: хватило одной фразы на обычном языке.
          Вайбкодеру достаточно знать название компонента (
          <strong className="text-foreground">Dialog</strong>) и бизнес-задачу
          (выбрать сотрудника для отправки) — остальное ассистент сделает сам:
        </p>
        <div className="mt-3">
          <PromptBlock prompt="Добавь Dialog с выбором сотрудника (фото возьми где хочешь в сети) в пункт меню Файл - Поделиться - По почте" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Открой меню и походи стрелками — мышью и с клавиатуры:
        </p>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Файл</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Новый файл <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Открыть… <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Поделиться</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem
                    onSelect={() => setTimeout(() => setMailOpen(true), 0)}
                  >
                    По почте
                  </MenubarItem>
                  <MenubarItem>Скопировать ссылку</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Печать <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Правка</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Отменить <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Повторить <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Вырезать</MenubarItem>
              <MenubarItem>Копировать</MenubarItem>
              <MenubarItem>Вставить</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Вид</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem
                checked={showSidebar}
                onCheckedChange={setShowSidebar}
              >
                Боковая панель
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Строка состояния
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarRadioGroup value={zoom} onValueChange={setZoom}>
                <MenubarRadioItem value="100">Масштаб 100%</MenubarRadioItem>
                <MenubarRadioItem value="125">Масштаб 125%</MenubarRadioItem>
                <MenubarRadioItem value="150">Масштаб 150%</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <p className="text-sm text-muted-foreground">
          Состояние меню «Вид»: боковая панель {showSidebar ? "вкл" : "выкл"},
          строка состояния {showStatusBar ? "вкл" : "выкл"}, масштаб {zoom}%.
        </p>
      </div>

      <Dialog
        open={mailOpen}
        onOpenChange={(o) => {
          setMailOpen(o)
          if (!o) setSelected(null)
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Поделиться по почте</DialogTitle>
            <DialogDescription>
              Выберите получателя — покажем его фото.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center gap-4 rounded-lg border p-4">
            {selected ? (
              <>
                <img
                  src={selected.photo}
                  alt={selected.name}
                  className="size-16 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <div className="font-medium">{selected.name}</div>
                  <div className="truncate text-sm text-muted-foreground">
                    {selected.email}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="size-16 shrink-0 rounded-full bg-muted" />
                Выберите получателя из списка ниже.
              </div>
            )}
          </div>

          <div className="grid max-h-56 gap-1 overflow-y-auto">
            {recipients.map((r) => {
              const active = selected?.email === r.email
              return (
                <button
                  key={r.email}
                  type="button"
                  onClick={() => setSelected(r)}
                  aria-pressed={active}
                  className={cn(
                    "flex items-center gap-3 rounded-md p-2 text-left transition-colors hover:bg-accent",
                    active && "bg-accent"
                  )}
                >
                  <img
                    src={r.photo}
                    alt=""
                    className="size-9 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{r.name}</div>
                    <div className="truncate text-xs text-muted-foreground">
                      {r.email}
                    </div>
                  </div>
                  {active && (
                    <Check className="ml-auto size-4 shrink-0 text-primary" />
                  )}
                </button>
              )
            })}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Отмена</Button>
            </DialogClose>
            <Button disabled={!selected} onClick={handleShare}>
              Поделиться
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
