import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function BreadcrumbDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Breadcrumb
        </h1>
        <p className="mt-2 text-muted-foreground">
          «Хлебные крошки» — путь до текущей страницы: «Главная / Раздел / Где ты
          сейчас». Показывают, где ты в структуре сайта, и дают быстро вернуться
          на уровень выше. Длинный путь сворачивается в «…».
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Путь до страницы, а не меню.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Показывает путь до текущей страницы — где ты в структуре сайта.
            </li>
            <li>
              Последний пункт — текущая страница (не ссылка), остальные
              кликабельны и ведут на уровни выше.
            </li>
            <li>
              Длинный путь сворачивается в «…» — по клику раскрывает спрятанные
              разделы (тут — через <code>Dropdown Menu</code>).
            </li>
            <li>
              Это просто ссылки со стрелками-разделителями; доступно для
              скринридеров — помечает текущую страницу.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-8">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Полный путь — последний пункт активная страница, остальные
            кликабельны:
          </p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/components/dropdown-menu">Меню</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Navigation Menu</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Длинный путь сворачивается в «…» — кликни, чтобы раскрыть спрятанные
            разделы:
          </p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="flex items-center"
                    aria-label="Показать скрытые разделы"
                  >
                    <BreadcrumbEllipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem asChild>
                      <Link to="/components/dialog">Оверлеи</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/components/tabs">Контент</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/components/data-table">Таблицы</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/components/avatar">Элементы</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  )
}
