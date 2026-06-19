import {
  ArrowLeft,
  BarChart3,
  Blocks,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const nav = [
  { label: "Дашборд", icon: LayoutDashboard, active: true },
  { label: "Аналитика", icon: BarChart3, active: false },
  { label: "Проекты", icon: FolderKanban, active: false },
  { label: "Команда", icon: Users, active: false },
  { label: "Настройки", icon: Settings, active: false },
]

export function SidebarDemo() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-1 py-1">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Blocks className="size-4" />
            </div>
            <div className="grid flex-1 text-sm leading-tight group-data-[collapsible=icon]:hidden">
              <span className="font-semibold">Орбита</span>
              <span className="text-xs text-muted-foreground">Панель</span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Навигация</SidebarGroupLabel>
            <SidebarMenu>
              {nav.map(({ label, icon: Icon, active }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton tooltip={label} isActive={active}>
                    <Icon />
                    <span>{label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="В галерею">
                <Link to="/">
                  <ArrowLeft />
                  <span>В галерею</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mx-1 h-4" />
          <span className="text-sm font-medium">Панель · Sidebar</span>
        </header>

        <div className="mx-auto w-full max-w-3xl px-4 py-10">
          <Badge variant="secondary" className="mb-4">
            Компонент · shadcn/ui + Radix
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sidebar
          </h1>
          <p className="mt-2 text-muted-foreground">
            Это не виджет на странице, а <strong>каркас приложения</strong>:
            сворачиваемое боковое меню слева плюс область контента. Поэтому демо
            занимает всю страницу — без общего меню галереи.
          </p>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Что важно</CardTitle>
              <CardDescription>Сворачивается, помнит состояние, подстраивается.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>
                  <strong>Самый собранный компонент:</strong> около 25 частей,
                  которые вместе образуют целое боковое меню.
                </li>
                <li>
                  <strong>Сворачивается:</strong> кнопкой (или сочетанием
                  <kbd>⌘/Ctrl&nbsp;+&nbsp;B</kbd>) меню сжимается до одних иконок;
                  при наведении на иконку всплывает подсказка с названием.
                </li>
                <li>
                  <strong>Запоминает</strong>, свёрнуто меню или нет — после
                  перезагрузки страницы вид сохраняется.
                </li>
                <li>
                  <strong>Подстраивается:</strong> на телефоне меню превращается в
                  выезжающую сбоку панель (<code>Sheet</code>).
                </li>
              </ul>
            </CardContent>
          </Card>

          <p className="mt-6 text-sm text-muted-foreground">
            Нажми кнопку-«гамбургер» слева вверху (или <kbd>⌘/Ctrl + B</kbd>) —
            меню свернётся в иконки. Пункт «В галерею» внизу вернёт на главную.
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
