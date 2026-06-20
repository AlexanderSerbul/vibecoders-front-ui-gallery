import { CircleCheck, Info, TriangleAlert } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AlertDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Alert</h1>
        <p className="mt-2 text-muted-foreground">
          Статичная плашка-уведомление прямо на странице: подсказка, успех или
          ошибка. В отличие от <code>Toast</code> — не всплывает и не исчезает
          сама, а остаётся в потоке (например, ошибка под формой).
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Сообщение, которое остаётся на месте.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Заметное сообщение в потоке страницы: подсказка, успех,
              предупреждение, ошибка.
            </li>
            <li>
              Не путать с <code>Toast</code>: тот всплывает в углу и исчезает;
              Alert остаётся на месте (например, ошибка прямо под полем).
            </li>
            <li>
              Из коробки два вида: обычный и «опасный» (красный). Другие цвета
              (зелёный успех) — своими классами.
            </li>
            <li>
              Можно с иконкой слева — заголовок и описание выстраиваются рядом.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">
          Три плашки — подсказка, успех (со своими цветами) и ошибка:
        </p>

        <Alert>
          <Info />
          <AlertTitle>Подсказка</AlertTitle>
          <AlertDescription>
            Любой компонент можно открыть и посмотреть, как он ведёт себя
            вживую.
          </AlertDescription>
        </Alert>

        <Alert className="border-green-600/40 text-green-700 dark:text-green-400">
          <CircleCheck />
          <AlertTitle>Сохранено</AlertTitle>
          <AlertDescription className="text-green-700/90 dark:text-green-400/90">
            Изменения применены — можно продолжать.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <TriangleAlert />
          <AlertTitle>Не удалось сохранить</AlertTitle>
          <AlertDescription>
            Проверь подключение к интернету и попробуй ещё раз.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
