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
  DialogTrigger,
} from "@/components/ui/dialog"

const inputClass =
  "h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"

export function DialogDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Dialog</h1>
        <p className="mt-2 text-muted-foreground">
          Модальное окно поверх страницы. Поведение и доступность берёт на себя
          Radix, а внешний вид — Tailwind через токены.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что Radix делает под капотом</CardTitle>
          <CardDescription>
            Самое сложное в модалке — не вид, а корректное поведение.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Ловушка фокуса: Tab не выходит за пределы окна.</li>
            <li>Возврат фокуса на кнопку-триггер при закрытии.</li>
            <li>Закрытие по Esc и по клику на затемнение.</li>
            <li>Блокировка прокрутки страницы под окном.</li>
            <li>ARIA-роли и связка заголовка/описания для скринридеров.</li>
            <li>Рендер через портал — поверх всего, вне дерева страницы.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Нажми кнопку — откроется диалог. Попробуй Tab, Esc и клик по фону.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Связаться с нами</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Связаться с «Орбитой»</DialogTitle>
              <DialogDescription>
                Оставьте контакты — ответим в течение рабочего дня.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Имя
                </label>
                <input id="name" className={inputClass} placeholder="Алекс" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Отмена</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button>Отправить</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
