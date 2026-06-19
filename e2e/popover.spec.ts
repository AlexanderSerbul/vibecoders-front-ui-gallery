import { test, expect } from "@playwright/test"

test.describe("Popover", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/popover")
  })

  test("opens and a setting inside updates the page (non-modal)", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Параметры" }).click()
    await expect(page.getByText("Плотность интерфейса")).toBeVisible()

    await page.getByRole("button", { name: "Компактно" }).click()
    await expect(page.getByText(/Выбранная плотность:/)).toContainText(
      "Компактно"
    )
  })
})
