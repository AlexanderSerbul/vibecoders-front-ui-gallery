import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPDemo() {
  const [value, setValue] = useState("")
  const [confirmed, setConfirmed] = useState<string | null>(null)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + input-otp
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Input OTP
        </h1>
        <p className="mt-2 text-muted-foreground">
          Поле для одноразовых кодов (SMS, 2FA) — те самые отдельные ячейки. На
          основе библиотеки input-otp.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Что важно</CardTitle>
          <CardDescription>
            Удобный ввод кода — и для пользователя, и для доступности.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Можно вставить код целиком:</strong> он сам разложится по
              клеткам. Стрелки и Backspace работают как ожидаешь.
            </li>
            <li>
              <strong>Сообщает о заполнении:</strong> как только все клетки
              заполнены, код считается введённым — можно сразу его проверить.
            </li>
            <li>
              <strong>Удобство ввода:</strong> на телефоне открывается числовая
              клавиатура, а код из SMS подставляется автоматически.
            </li>
            <li>
              Деление на группы и разделитель — чисто для вида (123-456).
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Введите 6-значный код (можно вставить целиком):
        </p>

        <InputOTP
          maxLength={6}
          value={value}
          onChange={setValue}
          onComplete={(code: string) => {
            setConfirmed(code)
            console.log("Код введён:", code)
          }}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <p className="text-sm text-muted-foreground">
          Введено: <strong className="tabular-nums">{value || "—"}</strong>
          {confirmed && value === confirmed && (
            <span className="text-primary"> · код принят ✓</span>
          )}
        </p>
      </div>
    </div>
  )
}
