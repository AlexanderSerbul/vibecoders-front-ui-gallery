import { test, expect } from "@playwright/test"

// Sonner: one <Toaster /> at the app root; toast() renders into its portal.
test.describe("Toast", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/toast")
  })

  test("clicking a button fires a toast", async ({ page }) => {
    await page.getByRole("button", { name: "Простой" }).click()
    await expect(page.getByText("Событие сохранено")).toBeVisible()
  })
})
