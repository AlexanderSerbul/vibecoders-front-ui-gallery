import { MatrixRain } from "@/components/MatrixRain"

export function AboutProject() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-black">
      <MatrixRain className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />

      <div className="relative mx-auto w-full max-w-3xl px-4 py-16">
        <div className="rounded-2xl border border-green-500/20 bg-black/50 p-6 shadow-2xl backdrop-blur-sm sm:p-10">
          <span className="mb-4 inline-block rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
            О проекте
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-balance text-zinc-50 sm:text-5xl">
            О проекте
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            «shadcn/ui — вайбкодеру» — учебный гид по компонентам shadcn/ui:
            живые примеры с разбором простым человеческим языком, без технических
            потрохов.
          </p>
          <p className="mt-6 leading-relaxed text-zinc-300">
            Этот проект я создал исключительно методом{" "}
            <strong className="font-semibold text-green-400">
              агентской разработки
            </strong>{" "}
            — с помощью{" "}
            <strong className="font-semibold text-green-400">
              Claude Code (Desktop)
            </strong>{" "}
            на модели{" "}
            <strong className="font-semibold text-green-400">
              Claude Opus 4.8
            </strong>{" "}
            с окном контекста в{" "}
            <strong className="font-semibold text-green-400">
              1 миллион токенов
            </strong>
            . Весь код — от вёрстки компонентов до тестов — написал исключительно
            агент. Я только общался с ним в чате (именно в чате, а не в текстовой
            консоли) — руками не написано ни строки.
          </p>
        </div>
      </div>
    </section>
  )
}
