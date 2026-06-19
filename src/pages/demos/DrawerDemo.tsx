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
          чтобы закрыть. Ощущается как родная мобильная панель; под капотом — Vaul.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Когда нужна именно мобильная шторка, которую тянут пальцем.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Шторку можно потянуть и смахнуть, чтобы закрыть; у нижней сверху —
              «ручка»-полоска для захвата.
            </li>
            <li>
              Закрывается по Esc и работает с клавиатуры — как обычное окно.
            </li>
            <li>Выезжает с любого края: снизу (по умолчанию), сверху, слева или справа.</li>
            <li>
              Чаще всего нужна на мобильном: фильтры, выбор варианта, меню.
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
                  Та же шторка, но выезжает справа.
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4 text-sm text-muted-foreground">
                <p>Эта шторка появляется у правого края экрана.</p>
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
