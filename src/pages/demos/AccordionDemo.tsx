import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const faq = [
  {
    q: "shadcn/ui — это библиотека компонентов?",
    a: "Нет. Это набор готовых компонентов, которые копируются в проект как исходный код. Зависимости-библиотеки нет — компонентами владеешь и правишь ты сам.",
  },
  {
    q: "Где настройка Tailwind, почему нет tailwind.config.js?",
    a: "Tailwind v4 настраивается CSS-first — прямо в src/index.css (@theme, @custom-variant, @import tailwindcss). Файла-конфига нет намеренно.",
  },
  {
    q: "Можно ли менять сами компоненты?",
    a: "Да, это твой код в src/components/ui/. По ходу гайда мы уже допиливали Slider (подписи) и Checkbox (indeterminate) и добавляли анимации в index.css.",
  },
  {
    q: "На чём всё построено?",
    a: "В основном Radix UI (поведение и доступность) плюс Tailwind для стилей. Где Radix не подходит — другие либы: Vaul (Drawer), cmdk (Command), react-day-picker (Calendar), react-hook-form + Zod (Form), input-otp.",
  },
]

export function AccordionDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Accordion
        </h1>
        <p className="mt-2 text-muted-foreground">
          Раскрывающиеся секции — как FAQ. Клик по заголовку разворачивает и
          сворачивает содержимое. Контентный компонент: в потоке страницы, без
          оверлеев и порталов.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Поведение раскрытия и плавная анимация высоты.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Режимы:</strong> <code>type="single"</code> (открыта одна
              секция) или <code>type="multiple"</code> (несколько).{" "}
              <code>collapsible</code> позволяет закрыть открытую.
            </li>
            <li>
              <strong>Анимация высоты:</strong> Radix замеряет контент и кладёт
              высоту в переменную{" "}
              <code>--radix-accordion-content-height</code>, а мы анимируем{" "}
              <code>height</code> от 0 до неё (keyframes в{" "}
              <code>index.css</code>).
            </li>
            <li>
              <strong>Доступность:</strong> заголовок — это <code>button</code>{" "}
              внутри <code>h3</code>, с <code>aria-expanded</code>; работает
              клавиатура.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Частые вопросы (открыта одна секция, можно закрыть):
        </p>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full max-w-xl"
        >
          {faq.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
