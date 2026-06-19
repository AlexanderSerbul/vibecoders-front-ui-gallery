import {
  FileCode2,
  FileJson,
  FileText,
  Folder,
  type LucideIcon,
} from "lucide-react"
import { type ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { cn } from "@/lib/utils"

// Каждая панель — это оболочка с заголовком и прокручиваемым телом.
// Контент намеренно крупный: при сужении панели он обрезается и
// прокручивается (overflow-auto) — это и показывает суть ресайза.
function Pane({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b px-3 py-1.5 text-xs font-medium text-muted-foreground">
        {title}
      </div>
      <div className="flex-1 overflow-auto p-3">{children}</div>
    </div>
  )
}

type FileNode = {
  icon: LucideIcon
  name: string
  depth: number
  active?: boolean
}

const fileTree: FileNode[] = [
  { icon: Folder, name: "src", depth: 0 },
  { icon: Folder, name: "components/ui", depth: 1 },
  { icon: FileCode2, name: "resizable.tsx", depth: 2, active: true },
  { icon: FileCode2, name: "navbar.tsx", depth: 2 },
  { icon: Folder, name: "pages/demos", depth: 1 },
  { icon: FileCode2, name: "ResizableDemo.tsx", depth: 2 },
  { icon: FileCode2, name: "App.tsx", depth: 1 },
  { icon: FileJson, name: "package.json", depth: 0 },
  { icon: FileJson, name: "tsconfig.json", depth: 0 },
  { icon: FileText, name: "CLAUDE.md", depth: 0 },
]

const editorCode = `export function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25} minSize={15}>
        <FileTree />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={65}>
            <Editor />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={35}>
            <Terminal />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`

const terminalLines = [
  "$ npm run dev",
  "",
  "  VITE v8.0.0  ready in 312 ms",
  "",
  "  ➜  Local:   http://localhost:5173/",
  "  ➜  Network: use --host to expose",
  "",
  "  ✓ HMR подключён — правки видны сразу",
  "  ✓ tsc --noEmit: ошибок нет",
  "$ _",
]

export function ResizableDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + react-resizable-panels
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Resizable
        </h1>
        <p className="mt-2 text-muted-foreground">
          Перетаскиваемые панели: тянешь границу между ними — они меняют размер.
          Панели вкладываются друг в друга, поэтому из них собираются раскладки
          как в редакторе кода: файлы слева, редактор и терминал справа. Под
          капотом — react-resizable-panels.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Как делить область на панели, вкладывать их и запоминать размеры.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Делишь область на панели по горизонтали или вертикали и задаёшь,
              какую часть занимает каждая.
            </li>
            <li>
              <strong>Вложенность:</strong> внутри панели можно сделать ещё одно
              деление — так и собираются раскладки как в редакторе кода (файлы |
              редактор / терминал).
            </li>
            <li>Границу двигаешь мышью или стрелками на клавиатуре.</li>
            <li>Размеры можно запоминать между перезагрузками страницы.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Потяни границы (за полоску или ⠿) — увидишь, как контент панелей
          обрезается и прокручивается:
        </p>

        {/* react-resizable-panels ставит на группу инлайн height:100% —
            он перебивает классы, поэтому высоту задаём обёрткой. */}
        <div className="h-96 w-full max-w-3xl">
          <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg border"
          >
            <ResizablePanel defaultSize={25} minSize={15}>
              <Pane title="Файлы">
                <ul className="space-y-1 text-xs">
                  {fileTree.map(({ icon: Icon, name, depth, active }) => (
                    <li
                      key={name}
                      style={{ paddingLeft: `${depth * 14}px` }}
                      className={cn(
                        "flex items-center gap-1.5",
                        active
                          ? "font-medium text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      <Icon className="size-3.5 shrink-0" />
                      <span className="truncate">{name}</span>
                    </li>
                  ))}
                </ul>
              </Pane>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={75}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={65}>
                  <Pane title="Редактор · ResizableDemo.tsx">
                    <pre className="text-xs leading-relaxed text-muted-foreground">
                      <code>{editorCode}</code>
                    </pre>
                  </Pane>
                </ResizablePanel>

                <ResizableHandle withHandle />

                <ResizablePanel defaultSize={35}>
                  <Pane title="Терминал">
                    <pre className="text-xs leading-relaxed text-muted-foreground">
                      <code>{terminalLines.join("\n")}</code>
                    </pre>
                  </Pane>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  )
}
