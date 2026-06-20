import { Link } from "react-router-dom"
import { ArrowRight, CircleCheck, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function BadgeDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Badge</h1>
        <p className="mt-2 text-muted-foreground">
          Маленькая плашка-метка: статус, счётчик, ярлык «Новое» или «Beta». Та
          самая, что подписывает каждый компонент в этом гиде. Четыре вида плюс
          свои цвета; может быть и ссылкой.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Маленькая метка рядом с текстом.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Статус («Оплачено»), счётчик («12 новых») или ярлык («Новое»,
              «Beta») рядом с текстом.
            </li>
            <li>
              Четыре вида: обычный, приглушённый, «опасный» (красный) и
              контурный. Другие цвета — своими классами.
            </li>
            <li>Можно с иконкой слева и даже сделать ссылкой (кликается).</li>
            <li>
              Мы используем его повсюду: чип «Компонент · …» вверху каждой
              страницы — это Badge.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-8">
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Четыре варианта:</p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>default</Badge>
            <Badge variant="secondary">secondary</Badge>
            <Badge variant="destructive">destructive</Badge>
            <Badge variant="outline">outline</Badge>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            С иконкой, счётчиком и своими цветами:
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>
              <CircleCheck /> Проверено
            </Badge>
            <Badge variant="secondary">
              <Star /> Избранное
            </Badge>
            <Badge variant="outline">12 новых</Badge>
            <Badge className="border-transparent bg-green-600 text-white">
              Активен
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Как ссылка (<code>asChild</code>) — кликабельный бейдж:
          </p>
          <Badge asChild>
            <Link to="/components/data-table">
              Статусы в Data Table <ArrowRight />
            </Link>
          </Badge>
        </div>
      </div>
    </div>
  )
}
