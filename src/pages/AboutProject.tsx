import { Badge } from "@/components/ui/badge"

export function AboutProject() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <Badge variant="secondary" className="mb-4">
        О проекте
      </Badge>
      <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        О проекте
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        «shadcn/ui — вайбкодеру» — учебный гид по компонентам shadcn/ui: живые
        примеры с разбором простым человеческим языком, без технических
        потрохов.
      </p>

      <p className="mt-6 leading-relaxed text-muted-foreground">
        Этот проект я создал исключительно методом{" "}
        <strong className="text-foreground">агентской разработки</strong> — с
        помощью <strong className="text-foreground">Claude Code (Desktop)</strong>{" "}
        на модели <strong className="text-foreground">Claude Opus 4.8</strong> с
        окном контекста в{" "}
        <strong className="text-foreground">1 миллион токенов</strong>. Весь код
        — от вёрстки компонентов до тестов — написал исключительно агент. Я
        только общался с ним в чате (именно в чате, а не в текстовой консоли) —
        руками не написано ни строки.
      </p>
    </div>
  )
}
