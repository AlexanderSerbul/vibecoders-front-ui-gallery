import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  const [volume, setVolume] = useState([40])
  const [price, setPrice] = useState([200, 800])

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Slider
        </h1>
        <p className="mt-2 text-muted-foreground">
          Ползунок для выбора числа или диапазона перетаскиванием. На основе
          Radix, доступен с клавиатуры и для скринридеров.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Один бегунок или несколько — зависит от значения.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Одно значение или диапазон:</strong> один бегунок выбирает
              число, два бегунка — диапазон «от и до». Сколько значений нужно —
              столько бегунков.
            </li>
            <li>
              <strong>Своя шкала и шаг:</strong> задаёшь минимум, максимум и
              насколько прыгает значение за один шаг.
            </li>
            <li>
              <strong>Доступно всем:</strong> тянешь мышью или двигаешь бегунок
              стрелками с клавиатуры, понятно скринридерам.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-10">
        <section className="w-full max-w-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Громкость</span>
            <span className="text-sm tabular-nums text-muted-foreground">
              {volume[0]}%
            </span>
          </div>
          <Slider
            thumbLabels={["Громкость"]}
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
          />
        </section>

        <section className="w-full max-w-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Диапазон цены</span>
            <span className="text-sm tabular-nums text-muted-foreground">
              {price[0]} – {price[1]} ₽
            </span>
          </div>
          <Slider
            thumbLabels={["Минимальная цена", "Максимальная цена"]}
            value={price}
            onValueChange={setPrice}
            max={1000}
            step={50}
          />
        </section>
      </div>
    </div>
  )
}
