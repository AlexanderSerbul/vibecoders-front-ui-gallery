import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const permissions = [
  { id: "read", label: "Чтение" },
  { id: "write", label: "Запись" },
  { id: "delete", label: "Удаление" },
]

export function CheckboxDemo() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    read: true,
    write: false,
    delete: false,
  })
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const checkedCount = permissions.filter((p) => checked[p.id]).length
  const allChecked = checkedCount === permissions.length
  const someChecked = checkedCount > 0 && !allChecked
  const parentState: boolean | "indeterminate" = allChecked
    ? true
    : someChecked
      ? "indeterminate"
      : false

  const toggleAll = (value: boolean) => {
    setChecked(Object.fromEntries(permissions.map((p) => [p.id, value])))
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">
          Компонент · shadcn/ui + Radix
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Checkbox
        </h1>
        <p className="mt-2 text-muted-foreground">
          Флажок для выбора в форме или списке. В отличие от Switch умеет{" "}
          <strong>три состояния</strong>, включая «частично» (indeterminate).
        </p>
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Checkbox против Switch</CardTitle>
          <CardDescription>
            Оба про «да/нет», но роли и возможности разные.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              <strong>Отложенный выбор:</strong> отмечаешь в форме/списке и
              подтверждаешь позже кнопкой. Switch же применяет настройку сразу.
            </li>
            <li>
              <strong>Три состояния:</strong> отмечен / снят /{" "}
              <strong>indeterminate</strong> («частично») — для «выбрать всё»,
              когда отмечена только часть. Switch так не умеет.
            </li>
            <li>
              <strong>Контролируемый:</strong> <code>checked</code> /{" "}
              <code>onCheckedChange</code>; значение —{" "}
              <code>boolean | "indeterminate"</code>.
            </li>
            <li>
              <strong>Доступность:</strong> роль <code>checkbox</code>,{" "}
              <code>aria-checked</code> (true / false / mixed), связь с{" "}
              <code>Label</code>.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-8">
        <div className="w-full max-w-sm space-y-3">
          <div className="flex items-center gap-3">
            <Checkbox
              id="all"
              checked={parentState}
              onCheckedChange={(value) => toggleAll(value === true)}
            />
            <Label htmlFor="all" className="font-medium">
              Все права
            </Label>
          </div>
          <div className="ml-7 space-y-3 border-l pl-4">
            {permissions.map((p) => (
              <div key={p.id} className="flex items-center gap-3">
                <Checkbox
                  id={p.id}
                  checked={checked[p.id]}
                  onCheckedChange={(value) =>
                    setChecked((prev) => ({ ...prev, [p.id]: value === true }))
                  }
                />
                <Label htmlFor={p.id}>{p.label}</Label>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Выбрано:{" "}
            <strong>
              {checkedCount} из {permissions.length}
            </strong>
            {someChecked && " — родитель в состоянии «indeterminate»"}
          </p>
        </div>

        <div className="w-full max-w-sm space-y-3">
          <p className="text-sm text-muted-foreground">
            Классика «согласия»: кнопка активна только при поставленной галочке —
            флажок проверяется в момент действия.
          </p>
          <div className="flex items-center gap-3">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(value) => {
                setAgreed(value === true)
                setSubmitted(false)
              }}
            />
            <Label htmlFor="terms">Я принимаю условия использования</Label>
          </div>
          <Button disabled={!agreed} onClick={() => setSubmitted(true)}>
            Продолжить
          </Button>
          {submitted && (
            <p className="text-sm font-medium text-primary">
              Готово — согласие принято ✓
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
