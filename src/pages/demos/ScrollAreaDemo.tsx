import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { componentGroups } from "@/data/components"

const cards = Array.from({ length: 14 }, (_, i) => i + 1)

export function ScrollAreaDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Scroll Area
        </h1>
        <p className="mt-2 text-muted-foreground">
          Контейнер с единым, аккуратным скроллбаром вместо нативного (который в
          каждой ОС и браузере выглядит по-своему). Кладёшь контент внутрь,
          задаёшь контейнеру размер — переполнение начинает прокручиваться.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Зачем он нужен и из чего собран.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Из чего состоит:</strong> <code>Root</code> →{" "}
              <code>Viewport</code> (сюда едет контент) → <code>Scrollbar</code> →{" "}
              <code>Thumb</code>. Размер задаём на <code>Root</code> (
              <code>h-*</code> / <code>w-*</code>) — иначе скроллиться нечему.
            </li>
            <li>
              <strong>Скроллбар сам появляется</strong> при наведении/прокрутке
              (проп <code>type</code>, по умолчанию <code>hover</code>) и не
              мешает тачу — жест скролла уходит самому вьюпорту.
            </li>
            <li>
              <strong>Горизонталь:</strong> добавляешь{" "}
              <code>{"<ScrollBar orientation=\"horizontal\" />"}</code>, а контент
              делаешь шире контейнера (<code>w-max</code> /{" "}
              <code>whitespace-nowrap</code>).
            </li>
            <li>
              <strong>Это визуальная обёртка:</strong> под капотом обычный
              нативный скролл — вьюпорт фокусируется и листается с клавиатуры,
              доступность сохраняется.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Вертикальный скролл: длинный список не влезает в фиксированную высоту */}
        <div className="flex flex-col items-start gap-3">
          <p className="text-sm font-medium">Вертикальный список</p>
          <ScrollArea className="h-72 w-full max-w-xs rounded-md border">
            <div className="p-4">
              <h4 className="mb-2 text-sm leading-none font-medium">
                Компоненты в гайде
              </h4>
              {componentGroups.map((group) => (
                <div key={group.label}>
                  <div className="mt-3 mb-1 text-xs font-medium text-muted-foreground">
                    {group.label}
                  </div>
                  {group.items.map((item) => (
                    <div
                      key={item.to}
                      className="border-b py-1.5 text-sm last:border-b-0"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Горизонтальный скролл: лента карточек шире контейнера */}
        <div className="flex flex-col items-start gap-3">
          <p className="text-sm font-medium">Горизонтальная лента</p>
          <ScrollArea className="w-full rounded-md border whitespace-nowrap">
            <div className="flex w-max gap-3 p-4">
              {cards.map((n) => (
                <figure key={n} className="shrink-0">
                  <div className="flex size-28 items-center justify-center rounded-md bg-muted text-2xl font-semibold text-muted-foreground">
                    {n}
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    Карточка {n}
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
