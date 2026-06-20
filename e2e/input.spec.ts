import { test, expect } from "@playwright/test"

// Input: a single-line text field. The controlled demo input echoes what you
// type into a line below it.
test.describe("Input", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/input")
  })

  test("typing is echoed", async ({ page }) => {
    const echo = page.getByTestId("input-echo")

    await expect(echo).toContainText("—")

    await page.getByLabel("Имя").fill("Привет")
    await expect(echo).toContainText("Привет")
  })
})
