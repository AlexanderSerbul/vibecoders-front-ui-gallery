import { zodResolver } from "@hookform/resolvers/zod"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type PaymentStatus = "Оплачено" | "В обработке" | "Ожидает" | "Отклонено"

type Payment = {
  id: string
  email: string
  status: PaymentStatus
  amount: number
}

const statusVariant: Record<
  PaymentStatus,
  "default" | "secondary" | "outline" | "destructive"
> = {
  Оплачено: "default",
  "В обработке": "secondary",
  Ожидает: "outline",
  Отклонено: "destructive",
}

const data: Payment[] = [
  { id: "INV-1001", email: "anna@example.com", status: "Оплачено", amount: 12000 },
  { id: "INV-1002", email: "boris@example.com", status: "Ожидает", amount: 4500 },
  { id: "INV-1003", email: "vera@example.com", status: "В обработке", amount: 23800 },
  { id: "INV-1004", email: "gleb@example.com", status: "Отклонено", amount: 9900 },
  { id: "INV-1005", email: "dasha@example.com", status: "Оплачено", amount: 1500 },
  { id: "INV-1006", email: "egor@example.com", status: "Оплачено", amount: 67000 },
  { id: "INV-1007", email: "zhanna@example.com", status: "Ожидает", amount: 320 },
  { id: "INV-1008", email: "ivan@example.com", status: "В обработке", amount: 18250 },
  { id: "INV-1009", email: "kira@example.com", status: "Отклонено", amount: 5400 },
  { id: "INV-1010", email: "leon@example.com", status: "Оплачено", amount: 42000 },
  { id: "INV-1011", email: "maria@example.com", status: "Ожидает", amount: 7800 },
  { id: "INV-1012", email: "nina@example.com", status: "Оплачено", amount: 990 },
  { id: "INV-1013", email: "oleg@example.com", status: "В обработке", amount: 31100 },
  { id: "INV-1014", email: "pavel@example.com", status: "Оплачено", amount: 15600 },
  { id: "INV-1015", email: "rita@example.com", status: "Отклонено", amount: 2200 },
  { id: "INV-1016", email: "sveta@example.com", status: "Ожидает", amount: 54300 },
]

const currency = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
})

const STATUSES = [
  "Оплачено",
  "В обработке",
  "Ожидает",
  "Отклонено",
] as const satisfies readonly PaymentStatus[]

const editSchema = z.object({
  email: z.string().email({ message: "Введите корректный email" }),
  status: z.enum(STATUSES),
  amount: z.number().min(0, { message: "Сумма не может быть отрицательной" }),
})

type EditValues = z.infer<typeof editSchema>

// Edit form for one payment. Mounted with `key={row.id}` so its defaultValues
// re-seed per row. amount uses `z.number()` + `valueAsNumber` (honest number
// types) instead of `z.coerce.number()` (whose input type is `unknown`).
function EditPaymentForm({
  payment,
  onSave,
}: {
  payment: Payment
  onSave: (next: Payment) => void
}) {
  const form = useForm<EditValues>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      email: payment.email,
      status: payment.status,
      amount: payment.amount,
    },
  })

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={(event) =>
          void form.handleSubmit((values) =>
            onSave({ ...payment, ...values })
          )(event)
        }
        className="flex flex-1 flex-col gap-5 px-4 pb-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Почта</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Статус</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {STATUSES.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Сумма (₽)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(event) =>
                    field.onChange(event.target.valueAsNumber)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-auto flex gap-2 pt-2">
          <Button type="submit" className="flex-1">
            Сохранить
          </Button>
          <SheetClose asChild>
            <Button type="button" variant="outline" className="flex-1">
              Отмена
            </Button>
          </SheetClose>
        </div>
      </form>
    </Form>
  )
}

const baseColumns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected()
            ? true
            : table.getIsSomePageRowsSelected()
              ? "indeterminate"
              : false
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Выбрать все строки на странице"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Выбрать строку"
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: "Статус",
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3 h-8"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Почта
        <ArrowUpDown className="ml-2 size-3.5" />
      </Button>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <div className="text-right">
        <Button
          variant="ghost"
          className="-mr-3 h-8"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Сумма
          <ArrowUpDown className="ml-2 size-3.5" />
        </Button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium tabular-nums">
        {currency.format(row.original.amount)}
      </div>
    ),
  },
]

export function DataTableDemo() {
  const [payments, setPayments] = useState(data)
  const [detailsRow, setDetailsRow] = useState<Payment | null>(null)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [editRow, setEditRow] = useState<Payment | null>(null)
  const [editOpen, setEditOpen] = useState(false)
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({})

  // Row-actions menu is the first column. Built here (not at module scope) so
  // "Удалить" can reach setPayments via closure. setPayments is a stable setter,
  // so the empty dependency list is correct.
  const columns = useMemo<ColumnDef<Payment>[]>(
    () => [
      {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <span className="sr-only">Открыть меню строки</span>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Действия</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() =>
                    void navigator.clipboard
                      .writeText(payment.id)
                      .catch(() => {})
                  }
                >
                  Скопировать ID
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    void navigator.clipboard
                      .writeText(payment.email)
                      .catch(() => {})
                  }
                >
                  Скопировать почту
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    setDetailsRow(payment)
                    setDetailsOpen(true)
                  }}
                >
                  Открыть детали
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setEditRow(payment)
                    setEditOpen(true)
                  }}
                >
                  Изменить
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() =>
                    setPayments((prev) =>
                      prev.filter((p) => p.id !== payment.id)
                    )
                  }
                >
                  Удалить
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
      ...baseColumns,
    ],
    []
  )

  // TanStack Table returns a method-bearing object that React Compiler can't
  // memoize; harmless here — the compiler transform isn't enabled in this project.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: payments,
    columns,
    state: { sorting, columnFilters, rowSelection },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  })

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Композиция · shadcn/ui Table + TanStack Table
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Data Table
        </h1>
        <p className="mt-2 text-muted-foreground">
          Таблица данных: сортировка, фильтр, постранично и выбор строк. Внешний
          вид — это <code>Table</code> от shadcn, а всю логику даёт TanStack
          Table.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Внешний вид отдельно, логика отдельно.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Готовое поведение:</strong> сортировка по столбцу, фильтр,
              разбивка на страницы и выбор строк — всё работает из коробки.
            </li>
            <li>
              Библиотека берёт на себя логику, а как выглядят ячейки — решаешь ты.
            </li>
            <li>
              <strong>Каждый столбец настраиваешь сам:</strong> здесь это галочка
              выбора, цветной значок статуса, столбец с сортировкой и сумма в
              рублях.
            </li>
            <li>
              <strong>Живая таблица:</strong> данные можно открыть в боковой
              панели, изменить через форму или удалить строку — таблица сразу
              обновляется.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex items-center py-4">
        <Input
          placeholder="Фильтр по почте…"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Ничего не найдено.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        <div className="text-sm text-muted-foreground">
          Выбрано {table.getFilteredSelectedRowModel().rows.length} из{" "}
          {table.getFilteredRowModel().rows.length}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Стр. {table.getState().pagination.pageIndex + 1} из{" "}
            {table.getPageCount()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Назад
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Вперёд
          </Button>
        </div>
      </div>

      <Sheet open={detailsOpen} onOpenChange={setDetailsOpen}>
        <SheetContent>
          {detailsRow && (
            <>
              <SheetHeader>
                <SheetTitle>Платёж {detailsRow.id}</SheetTitle>
                <SheetDescription>
                  Полная информация по выбранной строке.
                </SheetDescription>
              </SheetHeader>
              <dl className="grid gap-3 px-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Статус</dt>
                  <dd>
                    <Badge variant={statusVariant[detailsRow.status]}>
                      {detailsRow.status}
                    </Badge>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Почта</dt>
                  <dd className="font-medium">{detailsRow.email}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Сумма</dt>
                  <dd className="font-medium tabular-nums">
                    {currency.format(detailsRow.amount)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">ID</dt>
                  <dd className="font-mono text-xs">{detailsRow.id}</dd>
                </div>
              </dl>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Закрыть</Button>
                </SheetClose>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>

      <Sheet open={editOpen} onOpenChange={setEditOpen}>
        <SheetContent>
          {editRow && (
            <>
              <SheetHeader>
                <SheetTitle>Изменить платёж {editRow.id}</SheetTitle>
                <SheetDescription>
                  Поменяй поля и сохрани — таблица обновится.
                </SheetDescription>
              </SheetHeader>
              <EditPaymentForm
                key={editRow.id}
                payment={editRow}
                onSave={(next) => {
                  setPayments((prev) =>
                    prev.map((item) => (item.id === next.id ? next : item))
                  )
                  setEditOpen(false)
                }}
              />
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
