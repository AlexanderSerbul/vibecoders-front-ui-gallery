import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ButtonDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Button</h1>
        <p className="mt-2 text-muted-foreground">
          Обычная кнопка — то, на что нажимают. Берёшь её для любого действия:
          отправить форму, открыть окно, переключить что-нибудь. У неё есть
          несколько готовых видов и размеров, так что под каждую ситуацию найдётся
          подходящий вариант.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Кнопка на все случаи жизни.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Шесть видов: обычная, опасная (красная), контурная, приглушённая,
              призрачная и кнопка-ссылка.
            </li>
            <li>
              Три размера плюс компактная квадратная кнопка под одну иконку — для
              панелей с инструментами.
            </li>
            <li>
              Можно положить внутрь иконку, выключить кнопку (станет блёклой и
              перестанет нажиматься) или заставить её притвориться ссылкой.
            </li>
            <li>Работает с клавиатуры и реагирует на наведение мышкой.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-2">
          <p className="text-sm text-muted-foreground">
            Шесть видов — выбираешь под смысл действия:
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="default">default</Button>
            <Button variant="destructive">destructive</Button>
            <Button variant="outline">outline</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="ghost">ghost</Button>
            <Button variant="link">link</Button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <p className="text-sm text-muted-foreground">
            Размеры — от маленькой до большой, плюс квадратная под иконку:
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm">sm</Button>
            <Button size="default">default</Button>
            <Button size="lg">lg</Button>
            <Button size="icon" aria-label="Дальше">
              <ArrowRight />
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <p className="text-sm text-muted-foreground">
            С иконкой, выключенная и притворяющаяся ссылкой:
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button>
              <ArrowRight /> Дальше
            </Button>
            <Button disabled>Выключена</Button>
            <Button asChild>
              <Link to="/">На главную</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <p className="text-sm text-muted-foreground">
            А тут кнопка просто считает нажатия:
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button onClick={() => setCount((c) => c + 1)}>Нажми меня</Button>
            <span data-testid="click-count" className="text-sm text-muted-foreground">
              Нажато: {count}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
