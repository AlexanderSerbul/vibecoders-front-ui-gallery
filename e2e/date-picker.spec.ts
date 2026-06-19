import { test, expect } from "@playwright/test"

// Date Picker = Popover + Calendar. Open the popover, click a day; the popover
// closes and the trigger swaps the placeholder for the chosen date.
test.describe("Date Picker", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/date-picker")
  })

  test("opens the calendar and picks a date", async ({ page }) => {
    await page.getByRole("button", { name: "Выберите дату" }).click()
    await page.locator("button", { hasText: /^15$/ }).click()

    // Placeholder is gone (trigger now shows the date) and the readout updated.
    await expect(
      page.getByRole("button", { name: "Выберите дату" })
    ).toHaveCount(0)
    await expect(page.getByText(/Выбрано:/)).toContainText("15")
  })
})
