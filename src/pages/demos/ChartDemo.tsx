import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { month: "Янв", desktop: 186, mobile: 80 },
  { month: "Фев", desktop: 305, mobile: 200 },
  { month: "Мар", desktop: 237, mobile: 120 },
  { month: "Апр", desktop: 173, mobile: 190 },
  { month: "Май", desktop: 209, mobile: 130 },
  { month: "Июн", desktop: 264, mobile: 140 },
]

const chartConfig = {
  desktop: { label: "Десктоп", color: "var(--chart-1)" },
  mobile: { label: "Мобильные", color: "var(--chart-2)" },
} satisfies ChartConfig

// Pie slices colour themselves from each row's `fill`; the config keys (search,
// direct…) map those to theme colours and give the tooltip/legend their labels.
const trafficData = [
  { source: "search", visitors: 1200, fill: "var(--color-search)" },
  { source: "direct", visitors: 800, fill: "var(--color-direct)" },
  { source: "social", visitors: 600, fill: "var(--color-social)" },
  { source: "ads", visitors: 400, fill: "var(--color-ads)" },
]

const trafficConfig = {
  visitors: { label: "Визиты" },
  search: { label: "Поиск", color: "var(--chart-1)" },
  direct: { label: "Прямые", color: "var(--chart-2)" },
  social: { label: "Соцсети", color: "var(--chart-3)" },
  ads: { label: "Реклама", color: "var(--chart-4)" },
} satisfies ChartConfig

export function ChartDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Recharts
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Chart</h1>
        <p className="mt-2 text-muted-foreground">
          Графики поверх <code>recharts</code>. shadcn не рисует свой график — он
          даёт тонкую обёртку <code>ChartContainer</code> с темизацией через
          CSS-переменные, плюс аккуратные тултип и легенду.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Recharts рисует, shadcn темизует.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Композиция recharts:</strong> сам график (
              <code>BarChart</code>, <code>Bar</code>, <code>XAxis</code>…) — из
              recharts; shadcn лишь оборачивает его в <code>ChartContainer</code>.
            </li>
            <li>
              <strong>Цвета — через токены:</strong> в <code>ChartConfig</code>{" "}
              пишешь <code>color: "var(--chart-1)"</code>, обёртка превращает это
              в <code>--color-desktop</code>, и бар красится{" "}
              <code>fill="var(--color-desktop)"</code> — темы light/dark
              автоматом.
            </li>
            <li>
              <strong>Тултип и легенда</strong> — <code>ChartTooltipContent</code>{" "}
              и <code>ChartLegendContent</code>: берут подписи из{" "}
              <code>ChartConfig</code>, оформлены под shadcn.
            </li>
            <li>
              Внутри — <code>ResponsiveContainer</code>: график сам тянется по
              ширине родителя.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Визиты по месяцам</CardTitle>
          <CardDescription>Десктоп и мобильные · янв–июн 2026</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="max-h-[320px] w-full">
            <BarChart accessibilityLayer data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              {/* isAnimationActive=false: render bars immediately — the
                  grow-in animation relies on rAF, which the throttled preview
                  tab starves (and it makes e2e deterministic). */}
              <Bar
                dataKey="desktop"
                fill="var(--color-desktop)"
                radius={4}
                isAnimationActive={false}
              />
              <Bar
                dataKey="mobile"
                fill="var(--color-mobile)"
                radius={4}
                isAnimationActive={false}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Источники трафика</CardTitle>
          <CardDescription>Доля визитов по каналам</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={trafficConfig}
            className="mx-auto aspect-square max-h-[300px]"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="source" hideLabel />}
              />
              <Pie
                data={trafficData}
                dataKey="visitors"
                nameKey="source"
                isAnimationActive={false}
              />
              <ChartLegend content={<ChartLegendContent nameKey="source" />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
