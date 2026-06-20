import { test, expect } from "@playwright/test"

// Skeleton: pulsing loading placeholders. The demo toggles a card between
// skeleton placeholders and the loaded profile.
test.describe("Skeleton", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/skeleton")
  })

  test("swaps skeletons for loaded content", async ({ page }) => {
    const main = page.locator("main")

    // loading by default: placeholders shown, no real name yet
    await expect(main.locator('[data-slot="skeleton"]').first()).toBeVisible()
    await expect(main.getByText("Анна Иванова")).toBeHidden()

    await page.getByRole("button", { name: "Загрузить" }).click()
    await expect(main.getByText("Анна Иванова")).toBeVisible()
  })
})
