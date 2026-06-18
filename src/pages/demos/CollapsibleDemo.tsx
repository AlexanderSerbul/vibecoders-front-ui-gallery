import { useState } from "react"
import { ChevronsUpDown } from "lucide-react"

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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const files = [
  "src/App.tsx",
  "src/index.css",
  "src/components/ui/collapsible.tsx",
]

export function CollapsibleDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Collapsible
        </h1>
        <p className="mt-2 text-muted-foreground">
          Одна сворачиваемая секция «показать / скрыть». Самый простой
          disclosure-примитив — по сути одна секция Accordion.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Collapsible против Accordion</CardTitle>
          <CardDescription>
            Один блок против группы скоординированных.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Одна секция:</strong> просто открыть/закрыть один блок.
              Accordion — это несколько таких с логикой «открыта одна».
            </li>
            <li>
              <strong>Голый примитив:</strong> shadcn-компонент без стилей —
              оформление полностью на тебе (Accordion идёт уже оформленным).
            </li>
            <li>
              <strong>Контролируемый:</strong> <code>open</code> /{" "}
              <code>onOpenChange</code> — булево.
            </li>
            <li>
              Раскрытие мгновенное (как у голого shadcn-компонента). Плавную
              анимацию высоты можно добавить тем же приёмом, что у Accordion (
              <code>--radix-collapsible-content-height</code> + keyframes), но
              тогда закрытие зависит от <code>animationend</code>.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <Collapsible
          open={open}
          onOpenChange={setOpen}
          className="w-full max-w-sm space-y-2"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">
              Изменено файлов: {files.length}
            </span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {open ? "Свернуть" : "Показать все"}
                <ChevronsUpDown />
              </Button>
            </CollapsibleTrigger>
          </div>

          <div className="rounded-md border px-4 py-2 font-mono text-sm">
            {files[0]}
          </div>

          <CollapsibleContent className="space-y-2">
            {files.slice(1).map((f) => (
              <div
                key={f}
                className="rounded-md border px-4 py-2 font-mono text-sm"
              >
                {f}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <p className="text-sm text-muted-foreground">
          Состояние: <strong>{open ? "развёрнуто" : "свёрнуто"}</strong>
        </p>
      </div>
    </div>
  )
}
