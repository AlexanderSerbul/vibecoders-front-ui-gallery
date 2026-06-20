import { useState } from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Skeleton
        </h1>
        <p className="mt-2 text-muted-foreground">
          Серая пульсирующая «заглушка» на месте контента, пока он грузится.
          Вместо пустоты или спиннера показывает контур будущего блока — и
          появление реальных данных выглядит плавно. Форму и размер задаёшь
          классами.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Заглушка на время загрузки.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Серый пульсирующий блок в форме будущего контента — пока данные
              грузятся.
            </li>
            <li>
              Лучше пустого экрана или крутящегося спиннера: сразу видно
              структуру, переход к данным плавнее.
            </li>
            <li>
              Размер и форму задаёшь классами — кружок-аватар, строки текста,
              блок-кнопка.
            </li>
            <li>
              Мы используем его в <code>Sidebar</code> — там он рисует
              «загружающиеся» пункты меню.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-8">
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Загрузка ⇄ контент — нажми кнопку и увидишь, как заглушка сменяется
            данными:
          </p>
          <div className="rounded-lg border p-4">
            {loading ? (
              <div className="flex items-center gap-4">
                <Skeleton className="size-12 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-3.5 w-56" />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Avatar className="size-12">
                  <AvatarFallback>АИ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Анна Иванова</div>
                  <div className="text-sm text-muted-foreground">
                    Дизайнер интерфейсов · Москва
                  </div>
                </div>
              </div>
            )}
          </div>
          <Button variant="outline" onClick={() => setLoading((v) => !v)}>
            {loading ? "Загрузить" : "Сбросить"}
          </Button>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Форму задаёшь классами — кружок, строки текста, блок-кнопка:
          </p>
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-9 w-24 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
