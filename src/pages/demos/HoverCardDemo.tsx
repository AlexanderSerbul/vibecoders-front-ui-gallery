import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Hover Card
        </h1>
        <p className="mt-2 text-muted-foreground">
          Карточка-предпросмотр, всплывающая при наведении на ссылку или имя.
          Золотая середина между Tooltip и Popover: появляется по наведению, как
          Tooltip, но содержимое — <strong>богатое</strong> (фото, текст,
          ссылки), как у Popover.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Где между Tooltip и Popover</CardTitle>
          <CardDescription>
            Тот же «навёл — всплыло», но для предпросмотра, а не подсказки.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Срабатывает на наведение мышью</strong> (как <code>Tooltip</code>),
              но не с клавиатуры. Поэтому это всегда необязательный предпросмотр —
              что-то важное дублируй в доступном месте.
            </li>
            <li>
              <strong>Содержимое богатое:</strong> фото, заголовки, ссылки — а
              не одна строка, как в <code>Tooltip</code>.
            </li>
            <li>
              <strong>Заметная задержка</strong> перед появлением и исчезновением,
              чтобы карточка не мигала и курсор успевал доехать до неё.
            </li>
            <li>
              Появляется рядом с именем и сам выбирает удобную сторону.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Наведи на имя в предложении ниже:
        </p>
        <p className="text-base">
          Проект «Орбита» ведёт{" "}
          <HoverCard openDelay={300} closeDelay={150}>
            <HoverCardTrigger asChild>
              <button
                type="button"
                className="font-medium text-primary underline underline-offset-4"
              >
                Анна Орлова
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=5"
                  alt="Анна Орлова"
                  className="size-12 shrink-0 rounded-full"
                />
                <div className="space-y-1">
                  <p className="text-sm font-semibold">Анна Орлова</p>
                  <p className="text-muted-foreground text-xs">
                    Ведущий продакт-дизайнер · @anna
                  </p>
                  <p className="text-sm">
                    Отвечает за дизайн-систему и UI-кит «Орбиты». Любит
                    доступность и аккуратные отступы.
                  </p>
                  <p className="text-muted-foreground text-xs">
                    В команде с 2021 · 12 проектов
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>{" "}
          вместе с командой дизайна.
        </p>
      </div>
    </div>
  )
}
