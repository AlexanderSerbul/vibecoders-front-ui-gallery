import { test, expect } from "@playwright/test"

// Textarea: a multi-line text field. The demo mirrors the typed length into a
// character counter.
test.describe("Textarea", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/textarea")
  })

  test("typing updates the character counter", async ({ page }) => {
    const field = page.getByLabel("Сообщение")
    const count = page.getByTestId("char-count")

    await expect(count).toContainText("0 / 200")

    await field.fill("Привет, мир")
    await expect(count).toContainText("11 / 200")
  })
})
