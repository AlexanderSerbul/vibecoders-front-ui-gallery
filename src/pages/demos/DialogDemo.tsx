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
          Окно, которое появляется поверх страницы, затемняет её и блокирует —
          пока не закроешь, со страницей не повзаимодействуешь.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Самое сложное в таком окне — не вид, а правильное поведение.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Полностью работает с клавиатуры: Tab не уходит за пределы окна.</li>
            <li>Когда закрываешь, фокус возвращается на кнопку, которая его открыла.</li>
            <li>Закрывается по Esc и по клику на затемнённый фон.</li>
            <li>Страница под окном не прокручивается.</li>
            <li>Корректно читается скринридерами.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Нажми кнопку — откроется окно. Попробуй Tab, Esc и клик по фону.
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
