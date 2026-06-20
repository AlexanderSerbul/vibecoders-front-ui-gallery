import { test, expect } from "@playwright/test"

// Separator: a thin divider line between blocks or inline items. The demo has a
// horizontal split and a row of vertical dividers; assert several render.
test.describe("Separator", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/separator")
  })

  test("renders separators", async ({ page }) => {
    const seps = page.locator('main [data-slot="separator"]')
    await expect(seps.first()).toBeVisible()
    expect(await seps.count()).toBeGreaterThan(1)
  })
})
