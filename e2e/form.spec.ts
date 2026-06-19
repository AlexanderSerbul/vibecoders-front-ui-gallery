import { test, expect } from "@playwright/test"

// react-hook-form + Zod. The <form> has noValidate, so Zod (not the browser)
// owns validation and the FormMessage errors render.
test.describe("Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/form")
  })

  test("shows Zod validation errors on an empty submit", async ({ page }) => {
    await page.getByRole("button", { name: "Отправить" }).click()
    await expect(page.getByText("Имя — минимум 2 символа.")).toBeVisible()
  })

  test("submits valid data", async ({ page }) => {
    await page.getByLabel("Имя").fill("Анна")
    await page.getByLabel("Email").fill("anna@orbita.dev")
    await page.getByLabel("Никнейм").fill("anna")
    await page.getByRole("button", { name: "Отправить" }).click()

    await expect(page.getByText(/Заявка отправлена/)).toBeVisible()
  })
})
