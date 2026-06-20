import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const money = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
})

const statusVariant = {
  Оплачен: "default",
  "В ожидании": "secondary",
  Отменён: "destructive",
} as const

type Status = keyof typeof statusVariant

const rows: { id: string; customer: string; status: Status; amount: number }[] =
  [
    { id: "INV-001", customer: "Анна Кузнецова", status: "Оплачен", amount: 12000 },
    { id: "INV-002", customer: "Борис Петров", status: "В ожидании", amount: 8500 },
    { id: "INV-003", customer: "Вера Сидорова", status: "Оплачен", amount: 32000 },
    { id: "INV-004", customer: "Глеб Орлов", status: "Отменён", amount: 5400 },
  ]

const total = rows.reduce((sum, row) => sum + row.amount, 0)

export function TableDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Table</h1>
        <p className="mt-2 text-muted-foreground">
          Аккуратная разметка для табличных данных: шапка, строки, ячейки. Это
          голая таблица без логики — она просто красиво показывает то, что ты в
          неё положишь. Нужны сортировка, фильтр и страницы? Бери Data Table — он
          построен как раз на этой таблице.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Таблица как набор кубиков.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Размечает табличные данные: шапка сверху, строки с ячейками ниже —
              всё ровно и читаемо.
            </li>
            <li>
              Это просто разметка, без всякой логики внутри: ничего не
              сортирует, не фильтрует и не листает само.
            </li>
            <li>
              Нужны сортировка, фильтр или страницы — бери Data Table, он
              собран на этой же таблице.
            </li>
            <li>
              Собирается из частей: TableHeader, TableBody, TableRow, TableCell
              и подпись TableCaption — складываешь как кубики.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="rounded-md border">
        <Table>
          <TableCaption>Список последних счетов</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Счёт</TableHead>
              <TableHead>Клиент</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Сумма</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.id}</TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[row.status]}>{row.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  {money.format(row.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Итого</TableCell>
              <TableCell className="text-right">{money.format(total)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}
