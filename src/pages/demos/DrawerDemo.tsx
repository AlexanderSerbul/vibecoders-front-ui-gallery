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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Vaul
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Drawer</h1>
        <p className="mt-2 text-muted-foreground">
          Шторка, выезжающая с края, которую можно смахнуть пальцем или мышью,
          чтобы закрыть. Мобильно-нативное ощущение.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Здесь headless-слой — не Radix напрямую, а Vaul</CardTitle>
          <CardDescription>
            Наглядный пример принципа «лучшая библиотека под задачу».
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Vaul добавляет перетаскивание для закрытия (drag-to-dismiss) и
              «ручку»-полоску сверху у нижней шторки.
            </li>
            <li>
              Под капотом Vaul сам построен на Radix Dialog — поэтому доступность
              (фокус, Esc, ARIA, портал) на месте.
            </li>
            <li>Проп direction: bottom (по умолчанию) · top · left · right.</li>
            <li>
              Частые юзкейсы: нижние шторки на мобильном, action sheets,
              мобильное меню.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Открой шторку — у нижней попробуй потянуть её вниз, чтобы закрыть:
        </p>
        <div className="flex flex-wrap gap-3">
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Открыть снизу</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Нижняя шторка</DrawerTitle>
                  <DrawerDescription>
                    Потяни вниз, чтобы закрыть — или нажми «Готово». Сверху —
                    «ручка» для захвата.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 pb-2 text-sm text-muted-foreground">
                  <p>
                    Идеально для мобильных: фильтры, выбор варианта, подтверждение
                    действия.
                  </p>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button>Готово</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>

          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="outline">Справа</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Боковая шторка</DrawerTitle>
                <DrawerDescription>
                  Та же Vaul-шторка, но с направлением right.
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4 text-sm text-muted-foreground">
                <p>direction=&quot;right&quot; — выезжает справа.</p>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button>Готово</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  )
}
