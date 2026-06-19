import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [
  "Свайпни мышью или пальцем",
  "Или листай стрелками ← →",
  "Или кнопками по краям",
  "Сколько слайдов видно — задаёт basis",
  "Зацикливание — опция loop у opts",
]

export function CarouselDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Embla
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Carousel
        </h1>
        <p className="mt-2 text-muted-foreground">
          Слайдер-карусель: листаешь свайпом, стрелками на клавиатуре или
          кнопками по краям. Под капотом — embla.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Как листать и что умеет.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Плавная прокрутка:</strong> свайп с инерцией, как на
              телефоне — этим занимается embla.
            </li>
            <li>
              <strong>Сколько слайдов видно сразу</strong> — настраивается: один
              на весь экран, три рядом и так далее.
            </li>
            <li>
              <strong>Листать можно по-разному:</strong> свайпом, стрелками на
              клавиатуре или кнопками по краям; карусель бывает горизонтальной и
              вертикальной.
            </li>
            <li>
              <strong>Есть допнастройки:</strong> зацикливание (после последнего
              слайда снова первый) и автопрокрутка.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-muted-foreground">
          Полистай — свайпом, стрелками или кнопками по краям:
        </p>

        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {slides.map((caption, index) => (
              <CarouselItem key={caption}>
                <Card>
                  <CardContent className="flex aspect-[3/2] flex-col items-center justify-center gap-3 p-6 text-center">
                    <span className="text-5xl font-bold tabular-nums text-primary">
                      {index + 1}
                    </span>
                    <p className="text-sm text-muted-foreground">{caption}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
