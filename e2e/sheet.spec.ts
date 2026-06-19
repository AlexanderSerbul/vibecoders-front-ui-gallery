import { test, expect } from "@playwright/test"

test.describe("Sheet", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/sheet")
  })

  test("opens a side sheet and closes it", async ({ page }) => {
    await page.getByRole("button", { name: "Справа" }).click()

    const sheet = page.getByRole("dialog")
    await expect(sheet).toBeVisible()
    await expect(sheet).toContainText("Панель · справа")

    await sheet.getByRole("button", { name: "Готово" }).click()
    await expect(sheet).not.toBeVisible()
  })
})
