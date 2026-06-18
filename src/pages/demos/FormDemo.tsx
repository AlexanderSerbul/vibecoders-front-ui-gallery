import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя — минимум 2 символа." }),
  email: z.string().email({ message: "Введите корректный email." }),
  username: z
    .string()
    .min(3, { message: "Никнейм — минимум 3 символа." })
    .regex(/^[a-z0-9_]+$/, {
      message: "Только латиница в нижнем регистре, цифры и _.",
    }),
})

type FormValues = z.infer<typeof formSchema>

export function FormDemo() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", username: "" },
  })

  function onSubmit(values: FormValues) {
    setSubmitted(values)
    console.log("Форма отправлена:", values)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · react-hook-form + Zod
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Form</h1>
        <p className="mt-2 text-muted-foreground">
          Тонкая обёртка над <strong>react-hook-form</strong> с валидацией через{" "}
          <strong>Zod</strong>. Связывает подпись, поле, описание и ошибку через{" "}
          <code>id</code> / <code>aria-*</code> — доступность из коробки.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Как устроено</CardTitle>
          <CardDescription>
            Не Radix: Form — про состояние формы и валидацию, а не про оверлеи.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Источник правды</strong> — react-hook-form: <code>Form</code>{" "}
              это его провайдер, <code>FormField</code> оборачивает{" "}
              <code>Controller</code>.
            </li>
            <li>
              <strong>Валидация — Zod-схема</strong> через <code>zodResolver</code>.
              Тексты ошибок берутся прямо из схемы (<code>FormMessage</code> их
              показывает).
            </li>
            <li>
              <strong>Доступность автоматом:</strong> <code>FormItem</code> раздаёт{" "}
              <code>id</code>, а <code>FormControl</code> вешает на поле{" "}
              <code>aria-describedby</code> и <code>aria-invalid</code> при
              ошибке.
            </li>
            <li>
              Поля — обычные <code>Input</code>/<code>Label</code>; Form лишь
              склеивает их с состоянием и валидацией.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-6">
        <Form {...form}>
          <form
            noValidate
            onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}
            className="w-full max-w-sm space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Анна" {...field} />
                  </FormControl>
                  <FormDescription>Как к вам обращаться.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="anna@orbita.dev"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Никнейм</FormLabel>
                  <FormControl>
                    <Input placeholder="anna" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Отправить</Button>
          </form>
        </Form>

        {submitted && (
          <div
            data-slot="submitted"
            className="w-full max-w-sm rounded-md border bg-muted/50 p-4 text-sm"
          >
            <p className="font-medium">Заявка отправлена ✓</p>
            <p className="mt-1 text-muted-foreground">
              {submitted.name} · {submitted.email} · @{submitted.username}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
