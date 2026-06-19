import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PromptBlock } from "@/components/PromptBlock"
import { componentGroups } from "@/data/components"

const STARTER_PROMPT =
  "Сделай сайт на React/Vite/Tailwind/TypeScript с компонентами shadcn/ui"

const NEXT_PROMPT =
  "Добавь Menubar с разделами «Главная», «О компании» и «Заявка». На " +
  "странице «Заявка» свёрстай Form для заявки, а после отправки показывай " +
  "Dialog с подтверждением."

export function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <section className="mb-12 max-w-2xl">
        <Badge variant="secondary" className="mb-4">
          Гайд по shadcn/ui
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          shadcn/ui — вайбкодеру
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Живые примеры компонентов shadcn/ui с разбором простым человеческим
          языком, без технических потрохов: что это, чем отличается от соседних
          и как ведёт себя на практике. Выбирай компонент в меню сверху или из
          карточек ниже.
        </p>
      </section>

      <section className="mb-12 max-w-2xl">
        <h2 className="text-xl font-semibold tracking-tight">С чего начать</h2>
        <p className="mt-2 text-muted-foreground">
          Вайбкодинг начинается с промпта. Дай его ИИ-ассистенту (Claude Code,
          Cursor и т.п.), чтобы развернуть такой же стек:
        </p>
        <div className="mt-4">
          <PromptBlock prompt={STARTER_PROMPT} />
        </div>

        <p className="mt-6 text-muted-foreground">
          Дальше добавляй компоненты по одному — называй их именами прямо из
          этого справочника, чтобы ИИ-ассистент взял именно нужный. Например,
          следующим шагом:
        </p>
        <div className="mt-4">
          <PromptBlock prompt={NEXT_PROMPT} />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Здесь{" "}
          <Link
            to="/components/menubar"
            className="font-medium underline underline-offset-4 hover:text-foreground"
          >
            Menubar
          </Link>
          ,{" "}
          <Link
            to="/components/form"
            className="font-medium underline underline-offset-4 hover:text-foreground"
          >
            Form
          </Link>{" "}
          и{" "}
          <Link
            to="/components/dialog"
            className="font-medium underline underline-offset-4 hover:text-foreground"
          >
            Dialog
          </Link>{" "}
          — это компоненты из справочника ниже: кликни по имени, чтобы
          посмотреть, как каждый выглядит и ведёт себя.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2">
        {componentGroups.map((group) => (
          <Card key={group.label}>
            <CardHeader>
              <CardTitle>{group.label}</CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="inline-flex rounded-md border px-3 py-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
