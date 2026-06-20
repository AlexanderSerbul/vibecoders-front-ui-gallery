import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const overview = [
  {
    to: "/components/dialog",
    title: "Оверлеи",
    text: "Диалоги, панели и уведомления поверх страницы.",
  },
  {
    to: "/components/popover",
    title: "Плавающие",
    text: "Всплывают рядом с элементом — по наведению или клику.",
  },
  {
    to: "/components/tabs",
    title: "Контент",
    text: "Секции, вкладки и сворачиваемые блоки.",
  },
]

const components = [
  { to: "/components/dialog", label: "Dialog" },
  { to: "/components/dropdown-menu", label: "Dropdown Menu" },
  { to: "/components/select", label: "Select" },
  { to: "/components/data-table", label: "Data Table" },
  { to: "/components/chart", label: "Chart" },
  { to: "/components/carousel", label: "Carousel" },
]

export function NavigationMenuDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Navigation Menu
        </h1>
        <p className="mt-2 text-muted-foreground">
          Меню для шапки сайта: несколько разделов в ряд, и под каждым плавно
          выезжает широкая панель со ссылками — то, что видишь на лендингах в
          пунктах «Продукты» или «Решения». На основе Radix.
        </p>
      </header>

      {/* Live demo high on the page: the panel always opens downward, so it
          needs room below it to be visible (hence it sits above the card). */}
      <div className="mb-10 flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Наведи на «Обзор» или «Компоненты» — снизу плавно выедет панель.
          «О проекте» — обычная ссылка без панели.
        </p>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Обзор</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[320px] gap-1 p-2 sm:w-[400px]">
                  {overview.map((it) => (
                    <li key={it.to}>
                      <NavigationMenuLink asChild>
                        <Link to={it.to}>
                          <div className="font-medium">{it.title}</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            {it.text}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Компоненты</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[320px] grid-cols-2 gap-1 p-2 sm:w-[400px]">
                  {components.map((it) => (
                    <li key={it.to}>
                      <NavigationMenuLink asChild>
                        <Link to={it.to}>{it.label}</Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="/about">О проекте</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Навигация по разделам, а не меню действий.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Для главной навигации сайта: несколько разделов в ряд, под каждым —
              панель со ссылками и короткими подписями.
            </li>
            <li>
              Панель выезжает по наведению и плавно подстраивает размер под своё
              содержимое.
            </li>
            <li>
              Не путать с <code>Dropdown Menu</code>: тот запускает действия с
              одной кнопки; здесь — переходы по разделам сайта.
            </li>
            <li>Удобно с клавиатуры и доступно для скринридеров.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
