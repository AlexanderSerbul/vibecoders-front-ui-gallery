import { test, expect } from "@playwright/test"

// Badge: a small label chip (the component is already used across the app).
// Static, so just assert the variants render and the asChild badge is a link.
test.describe("Badge", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/badge")
  })

  test("shows variants and an asChild link badge", async ({ page }) => {
    await expect(page.getByText("destructive", { exact: true })).toBeVisible()

    // asChild merges the badge onto the <a>, so it's a link carrying data-slot.
    const linkBadge = page.locator('main a[data-slot="badge"]')
    await expect(linkBadge).toBeVisible()
    await expect(linkBadge).toHaveAttribute("href", "/components/data-table")
  })
})
