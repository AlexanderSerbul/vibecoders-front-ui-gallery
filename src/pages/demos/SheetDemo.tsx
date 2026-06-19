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
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const sides = [
  { side: "right", label: "Справа" },
  { side: "left", label: "Слева" },
  { side: "top", label: "Сверху" },
  { side: "bottom", label: "Снизу" },
] as const

export function SheetDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Sheet</h1>
        <p className="mt-2 text-muted-foreground">
          Панель, выезжающая с края экрана. По сути это Dialog «сбоку» — частый
          паттерн для мобильного меню, фильтров, корзины или настроек.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            По сути это <code>Dialog</code>, только выезжает сбоку.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Ведёт себя как <code>Dialog</code>: затемняет страницу, закрывается по Esc и
              клику по фону, работает с клавиатуры.
            </li>
            <li>Отличие — выезжает от края экрана с анимацией.</li>
            <li>Можно открыть с любого края: справа, слева, сверху или снизу.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Открой панель с любого края:
        </p>
        <div className="flex flex-wrap gap-3">
          {sides.map(({ side, label }) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline">{label}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Панель · {label.toLowerCase()}</SheetTitle>
                  <SheetDescription>
                    Выезжает с края «{label.toLowerCase()}». Esc, клик по фону или
                    крестик — закрыть.
                  </SheetDescription>
                </SheetHeader>
                <div className="px-4 text-sm text-muted-foreground">
                  <p>
                    Здесь может быть навигация, фильтры, корзина или настройки —
                    любой контент.
                  </p>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button>Готово</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </div>
    </div>
  )
}
