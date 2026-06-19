import { test, expect } from "@playwright/test"

// react-day-picker days are <button>s whose accessible name is an English
// aria-label, so target by the visible day number text. Default mode is single.
test.describe("Calendar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/calendar")
  })

  test("clicking a day updates the readout", async ({ page }) => {
    await page.locator("button", { hasText: /^15$/ }).click()
    await expect(page.getByText(/Выбрано:/)).toContainText("15")
  })
})
