import { test, expect } from "@playwright/test"

// Toggle is the simplest interactive pattern: a button with a boolean
// `aria-pressed`. The demo's preview paragraph also restyles from the state,
// so we assert both the control and its effect.
test.describe("Toggle", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/toggle")
  })

  test("reflects the initial pressed state", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: "Жирный" })
    ).toHaveAttribute("aria-pressed", "false")
    await expect(
      page.getByRole("button", { name: "Курсив" })
    ).toHaveAttribute("aria-pressed", "true")
    await expect(
      page.getByRole("button", { name: "Подчёркнутый" })
    ).toHaveAttribute("aria-pressed", "false")
  })

  test("toggling flips the state and restyles the preview", async ({ page }) => {
    const preview = page.getByText(
      "Пример текста: его вид меняют кнопки форматирования."
    )
    const bold = page.getByRole("button", { name: "Жирный" })
    const italic = page.getByRole("button", { name: "Курсив" })

    // Initial: italic on, bold off.
    await expect(preview).toHaveClass(/italic/)
    await expect(preview).not.toHaveClass(/font-bold/)

    await bold.click()
    await expect(bold).toHaveAttribute("aria-pressed", "true")
    await expect(preview).toHaveClass(/font-bold/)

    await italic.click()
    await expect(italic).toHaveAttribute("aria-pressed", "false")
    await expect(preview).not.toHaveClass(/italic/)
  })
})
