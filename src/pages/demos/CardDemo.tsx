import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Card</h1>
        <p className="mt-2 text-muted-foreground">
          Карточка — контейнер для связанного контента: заголовок, описание,
          тело и футер в одной аккуратной рамке. Та самая, в которой ты читаешь
          «Что важно» на каждой странице гида. Сама по себе — просто рамка,
          наполняешь её чем угодно.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Рамка, в которую складываешь всё по теме.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Собирает в один блок всё, что относится к одной теме: заголовок,
              описание, тело и низ.
            </li>
            <li>
              Собирается из частей — CardHeader, CardTitle, CardDescription,
              CardContent, CardFooter; берёшь только нужные.
            </li>
            <li>
              В шапке справа можно поставить действие (CardAction) — например,
              маленькую кнопку или метку.
            </li>
            <li>
              Сама по себе просто рамка — внутрь кладёшь что угодно: текст,
              кнопки, картинки.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Тариф Pro</CardTitle>
            <CardDescription>Для команд</CardDescription>
            <CardAction>
              <Badge>Хит</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              <span className="text-2xl font-bold text-foreground">990 ₽</span> в
              месяц — без ограничений на проекты и приоритетная поддержка.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Выбрать</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Анна Петрова</CardTitle>
            <CardDescription>Дизайнер интерфейсов</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Рисует экраны и собирает прототипы. Любит понятные интерфейсы и
              аккуратные отступы.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
