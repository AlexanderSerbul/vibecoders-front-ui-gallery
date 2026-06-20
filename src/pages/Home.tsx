import { Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GithubIcon } from "@/components/GithubIcon"
import { PromptBlock } from "@/components/PromptBlock"
import { componentGroups } from "@/data/components"

const STARTER_PROMPT =
  "Сделай сайт на React/Vite/Tailwind/TypeScript с компонентами shadcn/ui"

const NEXT_PROMPT =
  "Добавь Menubar с разделами «Главная», «О компании» и «Заявка». На " +
  "странице «Заявка» свёрстай Form для заявки, а после отправки показывай " +
  "Dialog с подтверждением."

const stack = [
  {
    name: "React",
    href: "https://github.com/facebook/react",
    tagline: "интерфейс из кусочков",
    text: "Собирает страницу из готовых блоков-компонентов и сам перерисовывает их, когда данные меняются. Самая популярная библиотека для интерфейсов — огромное сообщество и масса готовых решений.",
  },
  {
    name: "Vite",
    href: "https://github.com/vitejs/vite",
    tagline: "движок стройки",
    text: "Мгновенно запускает сайт у тебя на компьютере и сразу показывает правки в браузере. А для публикации собирает всё в компактные быстрые файлы. Свежий и шустрый инструмент.",
  },
  {
    name: "TypeScript",
    href: "https://github.com/microsoft/TypeScript",
    tagline: "JavaScript с проверкой",
    text: "Тот же JavaScript, но с подсказками и проверкой на лету: ловит опечатки и несостыковки, пока ты пишешь, — меньше глупых ошибок. Почти стандарт для серьёзных проектов.",
  },
  {
    name: "Tailwind CSS",
    href: "https://github.com/tailwindlabs/tailwindcss",
    tagline: "оформление кирпичиками",
    text: "Стили задаёшь прямо в разметке готовыми классами (отступ, цвет, скругление) — не надо прыгать в отдельные файлы со стилями. Быстро и единообразно.",
  },
  {
    name: "shadcn/ui",
    href: "https://github.com/shadcn-ui/ui",
    tagline: "готовые компоненты",
    text: "Те самые компоненты из этой галереи. Не библиотека-зависимость, а код, который копируется прямо к тебе в проект, — правишь под себя. Доступность из коробки (на основе Radix).",
  },
]

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

      <section className="mb-12 max-w-3xl">
        <h2 className="text-xl font-semibold tracking-tight">Что за стек</h2>
        <p className="mt-2 text-muted-foreground">
          Те самые слова из промпта выше — это набор инструментов, на котором
          собран сайт. Один из самых популярных и современных. Вот что каждый
          делает, простыми словами:
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {stack.map((tool) => (
            <div key={tool.name} className="rounded-lg border p-4">
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold hover:underline"
              >
                {tool.name}
                <GithubIcon className="size-3.5 shrink-0 text-muted-foreground" />
              </a>
              <div className="text-xs text-muted-foreground">{tool.tagline}</div>
              <p className="mt-2 text-sm text-muted-foreground">{tool.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Вместе это один из самых ходовых современных наборов для веб-интерфейсов:
          всё бесплатное и открытое, с большими сообществами — легко находить
          ответы и готовые решения. Не «модная игрушка на месяц», а проверенный
          стек, на котором работают тысячи команд.
        </p>
      </section>

      <Alert className="mb-12 border-primary/30 bg-primary/5">
        <Sparkles />
        <AlertTitle>Программировать самому не придётся</AlertTitle>
        <AlertDescription>
          Ничего из этого стека тебе не нужно писать руками. Код целиком пишет
          ИИ-агент прямо в чате — ты словами объясняешь, что хочешь, а он
          собирает и правит. Этот сайт, кстати, так и сделан — от начала и до
          конца.
        </AlertDescription>
      </Alert>

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
