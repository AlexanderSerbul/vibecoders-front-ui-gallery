import { useState } from "react"
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers"
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type TabItem = { id: string; label: string; body: string }

const initialTabs: TabItem[] = [
  { id: "files", label: "Файлы", body: "Список изменённых файлов проекта." },
  { id: "history", label: "История", body: "Журнал коммитов и действий." },
  { id: "preview", label: "Превью", body: "Предпросмотр собранной страницы." },
]

function SortableTab({ tab }: { tab: TabItem }) {
  const { setNodeRef, listeners, transform, transition, isDragging } =
    useSortable({ id: tab.id })

  return (
    <TabsTrigger
      ref={setNodeRef}
      value={tab.id}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={cn(
        "cursor-grab active:cursor-grabbing",
        isDragging && "z-10 opacity-80"
      )}
      {...listeners}
    >
      <GripVertical className="opacity-50" />
      {tab.label}
    </TabsTrigger>
  )
}

export function SortableTabsDemo() {
  const [tabs, setTabs] = useState(initialTabs)
  const [active, setActive] = useState(initialTabs[0]!.id)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active: dragged, over } = event
    if (over && dragged.id !== over.id) {
      setTabs((items) => {
        const from = items.findIndex((t) => t.id === dragged.id)
        const to = items.findIndex((t) => t.id === over.id)
        return arrayMove(items, from, to)
      })
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Паттерн · Tabs + dnd-kit
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Sortable Tabs
        </h1>
        <p className="mt-2 text-muted-foreground">
          Вкладки, которые можно <strong>перетаскивать местами</strong>.
          Композиция: Radix <code>Tabs</code> (поведение и доступность) +{" "}
          <code>dnd-kit</code> (перетаскивание).
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Как это склеено</CardTitle>
          <CardDescription>
            Порядок — массив в state; Tabs рисует из него, dnd-kit его
            переставляет.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Источник порядка — массив</strong> вкладок в{" "}
              <code>useState</code>; <code>Tabs</code> рендерит триггеры из него.
            </li>
            <li>
              <strong>dnd-kit</strong> на <code>onDragEnd</code> переставляет
              массив (<code>arrayMove</code>) — Tabs перерисовывается в новом
              порядке.
            </li>
            <li>
              <strong>Активная вкладка — по value</strong> (строке, не индексу),
              поэтому при перестановке выбор не сбивается.
            </li>
            <li>
              <strong>Клик против драга:</strong> порог{" "}
              <code>activationConstraint: 8px</code> — клик без сдвига выбирает
              вкладку, сдвиг начинает перетаскивание.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Перетащи вкладку, чтобы поменять порядок:
        </p>

        <Tabs
          value={active}
          onValueChange={setActive}
          className="w-full max-w-md"
        >
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            modifiers={[restrictToHorizontalAxis]}
            onDragEnd={handleDragEnd}
          >
            <TabsList>
              <SortableContext
                items={tabs.map((t) => t.id)}
                strategy={horizontalListSortingStrategy}
              >
                {tabs.map((tab) => (
                  <SortableTab key={tab.id} tab={tab} />
                ))}
              </SortableContext>
            </TabsList>
          </DndContext>

          {tabs.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="rounded-lg border p-4 text-sm text-muted-foreground"
            >
              {tab.body}
            </TabsContent>
          ))}
        </Tabs>

        <p className="text-sm text-muted-foreground">
          Порядок: <strong>{tabs.map((t) => t.label).join(" · ")}</strong> ·
          активна: <strong>{tabs.find((t) => t.id === active)?.label}</strong>
        </p>
      </div>
    </div>
  )
}
