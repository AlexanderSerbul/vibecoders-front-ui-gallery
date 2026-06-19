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
          Слайдер с прокруткой свайпом, стрелками и кнопками. Не Radix: под
          капотом — библиотека <code>embla-carousel-react</code>, обёрнутая под
          shadcn.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Из чего собран и чем управляется.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Embla под капотом:</strong> shadcn даёт{" "}
              <code>Carousel</code> / <code>CarouselContent</code> /{" "}
              <code>CarouselItem</code> и кнопки, а саму прокрутку (свайп,
              инерция, измерения) делает <code>embla-carousel-react</code>.
            </li>
            <li>
              <strong>Сколько слайдов в кадре</strong> — это класс{" "}
              <code>basis</code> у <code>CarouselItem</code>:{" "}
              <code>basis-full</code> (один) / <code>basis-1/3</code> (три) и т.п.
            </li>
            <li>
              <strong>Управление:</strong> свайп, стрелки клавиатуры,
              кнопки-стрелки; <code>orientation</code> —{" "}
              <code>horizontal</code> или <code>vertical</code>.
            </li>
            <li>
              <strong>Опции и плагины embla:</strong> проп <code>opts</code> (
              <code>loop</code>, <code>align</code>…) и <code>plugins</code>{" "}
              (например, автоплей).
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
