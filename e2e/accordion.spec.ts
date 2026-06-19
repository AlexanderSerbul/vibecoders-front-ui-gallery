import { test, expect } from "@playwright/test"

// type="single": opening a section collapses the previously open one. Triggers
// are buttons carrying aria-expanded.
test.describe("Accordion", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/accordion")
  })

  test("opening one section collapses the previously open one", async ({
    page,
  }) => {
    const first = page.getByRole("button", { name: /библиотека компонентов/ })
    const second = page.getByRole("button", { name: /Где настройка Tailwind/ })

    // item-0 is open by default.
    await expect(first).toHaveAttribute("aria-expanded", "true")

    await second.click()

    await expect(second).toHaveAttribute("aria-expanded", "true")
    await expect(first).toHaveAttribute("aria-expanded", "false")
    await expect(page.getByText(/CSS-first/)).toBeVisible()
  })
})
