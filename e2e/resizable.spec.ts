import { test, expect } from "@playwright/test"

// react-resizable-panels handles are role="separator" with aria-valuenow (the
// size % of the panel before them). Arrow keys resize by a step (~10).
test.describe("Resizable", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/resizable")
  })

  test("keyboard resizes a panel via the handle", async ({ page }) => {
    const handle = page.getByRole("separator").first()
    await expect(handle).toHaveAttribute("aria-valuenow", "25")

    await handle.focus()
    await page.keyboard.press("ArrowRight")

    await expect(handle).toHaveAttribute("aria-valuenow", "35")
  })
})
