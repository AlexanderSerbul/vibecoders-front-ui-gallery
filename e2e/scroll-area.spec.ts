import { test, expect } from "@playwright/test"

// Proving the viewport scrolls without a DOM-typed page.evaluate (the e2e
// tsconfig has no DOM lib): measure a top item's position before/after a wheel
// scroll — it moves up — via Playwright's own boundingBox().
test.describe("Scroll Area", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/scroll-area")
  })

  test("wheel scrolls the vertical viewport", async ({ page }) => {
    const viewport = page
      .locator('[data-slot="scroll-area-viewport"]')
      .first()
    const item = viewport.getByText("Dialog", { exact: true })

    const before = await item.boundingBox()
    await viewport.hover()
    await page.mouse.wheel(0, 300)
    const after = await item.boundingBox()

    if (!before || !after) throw new Error("item bounding box unavailable")
    expect(after.y).toBeLessThan(before.y)
  })
})
