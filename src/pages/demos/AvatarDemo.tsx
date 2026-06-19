import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const team = [
  { name: "Анна Орлова", initials: "АО", img: "https://i.pravatar.cc/120?img=5" },
  { name: "Дмитрий Соколов", initials: "ДС", img: "https://i.pravatar.cc/120?img=12" },
  { name: "Елена Морозова", initials: "ЕМ", img: "https://i.pravatar.cc/120?img=9" },
  { name: "Игорь Волков", initials: "ИВ", img: "https://i.pravatar.cc/120?img=33" },
]

export function AvatarDemo() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Avatar</h1>
        <p className="mt-2 text-muted-foreground">
          Аватар пользователя: фото с запасным вариантом. Если картинка не
          загрузилась (или её нет) — показываются инициалы.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>Фото + надёжный фолбэк.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Фото плюс запасной вариант:</strong> если картинки нет —
              показываются инициалы или иконка.
            </li>
            <li>
              <strong>Переключение незаметное:</strong> запасной вариант держится,
              пока грузится фото, и сменяется на картинку без мигания.
            </li>
            <li>
              <strong>Размер любой:</strong> от маленькой иконки до крупного
              аватара.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-8">
        <section className="space-y-3">
          <h2 className="text-sm font-medium">С фото</h2>
          <div className="flex items-center gap-4">
            {team.map((p) => (
              <Avatar key={p.name} className="size-12">
                <AvatarImage src={p.img} alt={p.name} />
                <AvatarFallback>{p.initials}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">Без фото — фолбэк</h2>
          <p className="text-sm text-muted-foreground">
            Фото не задано — сразу видны инициалы:
          </p>
          <Avatar className="size-12">
            <AvatarFallback>БФ</AvatarFallback>
          </Avatar>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium">Стопка (overlap)</h2>
          <div className="flex -space-x-3">
            {team.map((p) => (
              <Avatar key={p.name} className="size-10 ring-2 ring-background">
                <AvatarImage src={p.img} alt={p.name} />
                <AvatarFallback>{p.initials}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
