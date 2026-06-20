import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Separator
        </h1>
        <p className="mt-2 text-muted-foreground">
          Тонкая линия-разделитель: отделяет блоки друг от друга или пункты в
          одной строке. Бывает горизонтальным (по умолчанию) и вертикальным.
          Штука чисто для красоты — помогает глазу, но смысла в текст не
          добавляет. На основе Radix.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Это просто тонкая линия между блоками или пунктами — чтобы
              разделить и навести порядок.
            </li>
            <li>
              Бывает горизонтальным (лежит поперёк, по умолчанию) и
              вертикальным (стоит между пунктами в строке).
            </li>
            <li>
              Линия чисто визуальная: для скринридеров она по умолчанию
              «невидимая» и ничего им не сообщает.
            </li>
            <li>
              Вертикальной линии нужна высота от родителя — иначе ей не от чего
              оттолкнуться и её не будет видно.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-6">
        <div className="w-full max-w-sm">
          <div>
            <h2 className="text-sm font-medium">Радиус галактики</h2>
            <p className="text-sm text-muted-foreground">
              Набор готовых блоков для интерфейса.
            </p>
          </div>
          <Separator className="my-3" />
          <p className="text-sm text-muted-foreground">
            Линия выше отделила заголовок от остального текста.
          </p>
        </div>

        <div className="flex h-5 items-center gap-3 text-sm">
          <span>Блог</span>
          <Separator orientation="vertical" />
          <span>Доки</span>
          <Separator orientation="vertical" />
          <span>GitHub</span>
        </div>
      </div>
    </div>
  )
}
