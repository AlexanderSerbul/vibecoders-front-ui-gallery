import { useState } from "react"
import { Trash2 } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AlertDialogDemo() {
  const [status, setStatus] = useState<"idle" | "deleted" | "cancelled">("idle")

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Alert Dialog
        </h1>
        <p className="mt-2 text-muted-foreground">
          Окно-подтверждение для важных и необратимых действий — то самое «Точно
          удалить?». В отличие от обычного <code>Dialog</code>, его не закрыть
          случайным кликом мимо: нужно осознанно нажать «Отмена» или подтвердить.
          На основе Radix.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Когда брать его вместо обычного окна.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Для необратимых решений: удалить, выйти без сохранения, отменить
              заказ — то, что жалко нажать случайно.
            </li>
            <li>
              Не закрывается кликом мимо — только кнопкой «Отмена» или
              подтверждением (Esc срабатывает как «Отмена»). Этим и отличается от
              обычного <code>Dialog</code>.
            </li>
            <li>
              Две понятные кнопки рядом: безопасная «Отмена» и само действие;
              опасное обычно красное.
            </li>
            <li>
              Удобно с клавиатуры и доступно для скринридеров — фокус сразу
              попадает в окно.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Нажми «Удалить» — выскочит окно с подтверждением. Кликни мимо — оно не
          закроется; реши кнопкой.
        </p>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 />
              Удалить проект
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Удалить проект «Орбита»?</AlertDialogTitle>
              <AlertDialogDescription>
                Проект и все его данные исчезнут без возможности восстановления.
                Это действие нельзя отменить.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setStatus("cancelled")}>
                Отмена
              </AlertDialogCancel>
              <AlertDialogAction
                className={buttonVariants({ variant: "destructive" })}
                onClick={() => setStatus("deleted")}
              >
                Да, удалить
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <p className="text-sm text-muted-foreground" data-testid="alert-status">
          Результат:{" "}
          <strong className="text-foreground">
            {status === "idle"
              ? "пока ничего"
              : status === "deleted"
                ? "проект удалён"
                : "отменено"}
          </strong>
        </p>
      </div>
    </div>
  )
}
