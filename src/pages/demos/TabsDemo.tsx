import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  const [notify, setNotify] = useState(true)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Tabs</h1>
        <p className="mt-2 text-muted-foreground">
          Вкладки — переключение между панелями контента в одном месте. Видна
          одна панель за раз; содержимое — любое, вплоть до других компонентов.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tabs против Accordion</CardTitle>
          <CardDescription>
            Оба прячут контент, но по-разному и для разных задач.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Tabs — переключение в одном месте,</strong> видна ровно
              одна панель: для разных <em>разделов</em> одного экрана (Обзор /
              Настройки). Accordion — секции одна под другой, и можно раскрыть
              сразу несколько (список вопросов и ответов).
            </li>
            <li>
              <strong>Удобно с клавиатуры:</strong> между вкладками можно
              переключаться стрелками.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <Tabs defaultValue="overview" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="activity">Активность</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent
            value="overview"
            className="rounded-lg border p-4 text-sm"
          >
            <h3 className="font-medium">Сводка</h3>
            <p className="mt-1 text-muted-foreground">
              В гайде 23 компонента в 8 группах меню. Всё на TypeScript,
              проверяется через typecheck и lint.
            </p>
          </TabsContent>

          <TabsContent
            value="activity"
            className="rounded-lg border p-4 text-sm"
          >
            <h3 className="font-medium">Недавнее</h3>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>· Добавлены Accordion, Collapsible, Tabs</li>
              <li>· Меню разбито на 8 групп</li>
              <li>· Создан git-репозиторий</li>
            </ul>
          </TabsContent>

          <TabsContent value="settings" className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notify">Уведомления о сборках</Label>
              <Switch
                id="notify"
                checked={notify}
                onCheckedChange={setNotify}
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Вкладка держит любой контент — даже другие компоненты (здесь это
              Switch).
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
