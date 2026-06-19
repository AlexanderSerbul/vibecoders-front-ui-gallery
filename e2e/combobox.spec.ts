import { test, expect } from "@playwright/test"

// Combobox = Popover + Command (cmdk). Open the popover, type to filter the
// list, pick an item — the trigger button then shows the chosen label.
test.describe("Combobox", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/combobox")
  })

  test("opens, filters by typing, and selects", async ({ page }) => {
    // The cmdk CommandInput is also role="combobox", so target the button.
    const trigger = page.locator('button[role="combobox"]')
    await expect(trigger).toContainText("Выберите фреймворк")

    await trigger.click()
    await page.getByPlaceholder("Поиск фреймворка…").fill("sve")
    await page.getByRole("option", { name: "Svelte" }).click()

    await expect(trigger).toContainText("Svelte")
    await expect(page.getByText(/Выбрано:/)).toContainText("Svelte")
  })
})
