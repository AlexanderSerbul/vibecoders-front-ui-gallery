import { test, expect } from "@playwright/test"

test.describe("Dialog", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/dialog")
  })

  test("opens from the trigger and closes via a footer button", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Связаться с нами" }).click()

    const dialog = page.getByRole("dialog")
    await expect(dialog).toBeVisible()
    await expect(dialog).toContainText("Оставьте контакты")

    await dialog.getByRole("button", { name: "Отмена" }).click()
    await expect(dialog).not.toBeVisible()
  })
})
