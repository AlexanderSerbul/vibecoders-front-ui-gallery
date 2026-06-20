import { useState, type MouseEvent } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const PAGE_SIZE = 5

const descriptions = [
  "Подписка Pro, год",
  "Набор UI-иконок",
  "Шаблон лендинга",
  "Консультация по интерфейсу",
  "Доступ к API, месяц",
  "Тёмная тема оформления",
  "Аудит юзабилити",
  "Пакет компонентов",
]

const orders = Array.from({ length: 50 }, (_, i) => ({
  id: 1001 + i,
  desc: descriptions[i % descriptions.length] ?? "Заказ",
  amount: 900 + ((i * 173) % 95) * 100,
}))
const pageCount = Math.ceil(orders.length / PAGE_SIZE)

const currency = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
})

// Which page buttons to show: first, last, current ± 2, with «…» over the gaps.
function pageList(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages: (number | "ellipsis")[] = [1]
  const left = Math.max(2, current - 2)
  const right = Math.min(total - 1, current + 2)
  if (left > 2) pages.push("ellipsis")
  for (let p = left; p <= right; p++) pages.push(p)
  if (right < total - 1) pages.push("ellipsis")
  pages.push(total)
  return pages
}

export function PaginationDemo() {
  const [page, setPage] = useState(1)
  const start = (page - 1) * PAGE_SIZE
  const pageOrders = orders.slice(start, start + PAGE_SIZE)

  const goTo = (p: number) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setPage(Math.min(pageCount, Math.max(1, p)))
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Pagination
        </h1>
        <p className="mt-2 text-muted-foreground">
          Постраничная навигация для длинных списков: «Назад / 1 2 … 10 /
          Вперёд», с многоточием, когда страниц много. Это просто набор
          кнопок-ссылок — а что показать на каждой странице, ты считаешь сам.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Полоска-навигация, логика — твоя.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Для длинных списков: показываешь по сколько-то штук на странице и
              листаешь между ними.
            </li>
            <li>
              Многоточие (…) сворачивает середину, когда страниц много — видно
              начало, конец и соседей текущей.
            </li>
            <li>
              Это просто кнопки и ссылки: что показать на каждой странице —
              твоя логика. Готовая таблица с пагинацией — это{" "}
              <code>Data Table</code>.
            </li>
            <li>
              Текущая страница подсвечена; «Назад/Вперёд» гаснут на краях.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">
          Листай страницы — список ниже меняется:
        </p>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="border-b px-4 py-2 text-sm text-muted-foreground"
            data-testid="page-status"
          >
            Страница {page} из {pageCount}
          </div>
          <ul className="divide-y">
            {pageOrders.map((o) => (
              <li
                key={o.id}
                className="flex items-center justify-between gap-4 px-4 py-3 text-sm"
              >
                <div className="min-w-0">
                  <div className="font-medium">Заказ №{o.id}</div>
                  <div className="truncate text-muted-foreground">{o.desc}</div>
                </div>
                <div className="shrink-0 font-medium tabular-nums">
                  {currency.format(o.amount)}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                aria-disabled={page === 1}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
                onClick={goTo(page - 1)}
              />
            </PaginationItem>

            {pageList(page, pageCount).map((p, i) =>
              p === "ellipsis" ? (
                <PaginationItem key={`ellipsis-${i}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={p}>
                  <PaginationLink
                    href="#"
                    isActive={p === page}
                    onClick={goTo(p)}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                aria-disabled={page === pageCount}
                className={
                  page === pageCount ? "pointer-events-none opacity-50" : ""
                }
                onClick={goTo(page + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
