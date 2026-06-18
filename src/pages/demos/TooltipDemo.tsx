import { Bold, Italic, Underline } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const tools = [
  { icon: Bold, label: "Жирный", hint: "Жирный (Ctrl+B)" },
  { icon: Italic, label: "Курсив", hint: "Курсив (Ctrl+I)" },
  { icon: Underline, label: "Подчёркнутый", hint: "Подчёркнутый (Ctrl+U)" },
]

const sides = [
  { side: "top", label: "Сверху" },
  { side: "right", label: "Справа" },
  { side: "bottom", label: "Снизу" },
  { side: "left", label: "Слева" },
] as const

export function TooltipDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tooltip
        </h1>
        <p className="mt-2 text-muted-foreground">
          Короткая подсказка, всплывающая при наведении или фокусе. Её главная
          работа — подписывать иконочные кнопки. Прямая противоположность
          Popover: <strong>по наведению</strong> и{" "}
          <strong>без интерактивного содержимого</strong>.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tooltip против Popover</CardTitle>
          <CardDescription>
            Похожи внешне (плавающая панель у элемента), но роли разные.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Триггер — наведение и фокус, не клик.</strong> Появляется
              после небольшой задержки (<code>delayDuration</code>) и скрывается,
              как только курсор ушёл.
            </li>
            <li>
              <strong>Содержимое неинтерактивно:</strong> только текст. Кнопки и
              поля сюда класть нельзя — для этого Popover.
            </li>
            <li>
              <strong>Доступность:</strong> Radix связывает подсказку с триггером
              через <code>aria-describedby</code>. Но для скринридера это{" "}
              <em>дополнение</em>, а не замена <code>aria-label</code> —
              иконочной кнопке нужно и то, и другое.
            </li>
            <li>
              Позиционируется со стрелкой к триггеру; пропсы те же, что у Popover
              — <code>side</code>, <code>align</code>, <code>sideOffset</code>.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-10">
        <section className="space-y-3">
          <h2 className="text-sm font-medium">
            Панель инструментов из иконочных кнопок
          </h2>
          <p className="text-sm text-muted-foreground">
            Наведи (или перейди по Tab) на кнопку — подсказка раскроет, что она
            делает.
          </p>
          <div className="flex gap-1">
            {tools.map(({ icon: Icon, label, hint }) => (
              <Tooltip key={label} delayDuration={200}>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" aria-label={label}>
                    <Icon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{hint}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">Четыре стороны</h2>
          <p className="text-sm text-muted-foreground">
            Подсказку можно прижать к любой стороне триггера пропом{" "}
            <code>side</code>.
          </p>
          <div className="flex flex-wrap gap-2">
            {sides.map(({ side, label }) => (
              <Tooltip key={side} delayDuration={200}>
                <TooltipTrigger asChild>
                  <Button variant="outline">{label}</Button>
                </TooltipTrigger>
                <TooltipContent side={side}>Сторона: {side}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
