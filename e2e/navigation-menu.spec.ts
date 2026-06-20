import { test, expect } from "@playwright/test"

// Navigation Menu: a site-header mega-menu — hovering a trigger slides a panel
// of links out beneath it. Scope queries to <main> so the gallery navbar
// (its own <nav> + links) doesn't collide.
test.describe("Navigation Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/navigation-menu")
  })

  test("hovering a trigger reveals its panel links", async ({ page }) => {
    const main = page.locator("main")

    // The "Dialog" link lives only inside the "Компоненты" panel.
    await expect(main.getByRole("link", { name: "Dialog" })).toBeHidden()

    await main.getByRole("button", { name: "Компоненты" }).hover()
    await expect(main.getByRole("link", { name: "Dialog" })).toBeVisible()
  })
})
