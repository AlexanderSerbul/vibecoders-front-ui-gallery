import { test, expect } from "@playwright/test"

// Radix Select: trigger has role="combobox"; the portaled list has role="option"
// items. Selecting updates the trigger's displayed value.
test.describe("Select", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/select")
  })

  test("opens and selects a grouped option", async ({ page }) => {
    const trigger = page.getByRole("combobox")
    await expect(trigger).toContainText("Выберите часовой пояс")

    await trigger.click()
    await page.getByRole("option", { name: "Токио" }).click()

    await expect(trigger).toContainText("Токио")
    await expect(page.getByText(/Выбрано:/)).toContainText("Токио")
  })
})
