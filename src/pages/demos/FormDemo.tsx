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
          Удобная форма с проверкой полей (на основе{" "}
          <strong>react-hook-form + Zod</strong>). Проверяет введённое по
          заданным правилам и показывает понятную ошибку прямо под полем.
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Как устроено</CardTitle>
          <CardDescription>
            Form — это про поля формы и их проверку.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Проверка по правилам:</strong> ты задаёшь правила для
              каждого поля, а форма сама проверяет введённое.
            </li>
            <li>
              <strong>Понятные ошибки:</strong> если что-то не так, под полем
              появляется подсказка с описанием ошибки.
            </li>
            <li>
              <strong>Удобно с клавиатуры:</strong> подпись, поле и ошибка
              связаны между собой, поэтому форму корректно читают скринридеры.
            </li>
            <li>
              Поля — это обычные поля ввода; Form лишь связывает их с проверкой.
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
