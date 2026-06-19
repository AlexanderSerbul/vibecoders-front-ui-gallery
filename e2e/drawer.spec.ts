import { test, expect } from "@playwright/test"

// Vaul Drawer is built on Radix Dialog, so it carries role="dialog".
test.describe("Drawer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/drawer")
  })

  test("opens the bottom drawer and closes it", async ({ page }) => {
    await page.getByRole("button", { name: "Открыть снизу" }).click()

    const drawer = page.getByRole("dialog")
    await expect(drawer).toBeVisible()
    await expect(drawer).toContainText("Нижняя шторка")

    await drawer.getByRole("button", { name: "Готово" }).click()
    await expect(drawer).not.toBeVisible()
  })
})
