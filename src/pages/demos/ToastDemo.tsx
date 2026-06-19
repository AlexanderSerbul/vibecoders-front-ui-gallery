import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ToastDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Sonner
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Toast</h1>
        <p className="mt-2 text-muted-foreground">
          Всплывающие уведомления в углу экрана. Важно:{" "}
          <strong>старый Toast в shadcn устарел</strong> — официальная замена
          это <strong>Sonner</strong>.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Вызываешь одной строкой из любого места.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Подключается один раз:</strong> дальше уведомление можно
              вызвать из любого места — верстать его каждый раз не нужно.
            </li>
            <li>
              <strong>Разные виды:</strong> обычное, «успех», «ошибка» или
              ожидание загрузки; можно добавить пояснение и кнопку (например,
              «Отменить»).
            </li>
            <li>
              <strong>Всё из коробки:</strong> несколько уведомлений встают
              стопкой, сами исчезают и закрываются свайпом.
            </li>
            <li>
              <strong>Темы:</strong> светлая и тёмная подхватываются автоматически.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">Нажми — появится тост:</p>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast("Событие сохранено", {
                description: "Понедельник, 19 июня, 14:30",
              })
            }
          >
            Простой
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success("Готово — изменения сохранены")}
          >
            Успех
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("Не удалось сохранить")}
          >
            Ошибка
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("Файл перемещён в архив", {
                action: {
                  label: "Отменить",
                  onClick: () => toast("Действие отменено"),
                },
              })
            }
          >
            С действием
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              void toast.promise(
                new Promise<void>((resolve) => setTimeout(resolve, 1500)),
                {
                  loading: "Загрузка…",
                  success: "Загружено",
                  error: "Ошибка загрузки",
                }
              )
            }}
          >
            Промис
          </Button>
        </div>
      </div>
    </div>
  )
}
