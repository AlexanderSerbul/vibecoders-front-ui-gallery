import { test, expect } from "@playwright/test"

// The Sidebar demo is a full-page layout. The desktop sidebar wrapper carries
// data-state, and SidebarTrigger toggles expanded ⇄ collapsed.
test.describe("Sidebar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/sidebar")
  })

  test("collapses and expands via the trigger", async ({ page }) => {
    const sidebar = page.locator('[data-slot="sidebar"]')
    const trigger = page.locator('[data-slot="sidebar-trigger"]')

    await expect(sidebar).toHaveAttribute("data-state", "expanded")

    await trigger.click()
    await expect(sidebar).toHaveAttribute("data-state", "collapsed")

    await trigger.click()
    await expect(sidebar).toHaveAttribute("data-state", "expanded")
  })
})
