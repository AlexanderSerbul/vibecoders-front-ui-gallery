import { test, expect } from "@playwright/test"

// Recharts renders an SVG; bars are .recharts-bar-rectangle nodes. Animation is
// disabled in the demo, so all 12 (6 months × 2 series) render immediately.
test.describe("Chart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/chart")
  })

  test("renders the bar chart and the pie chart", async ({ page }) => {
    const charts = page.locator('[data-slot="chart"]')
    await expect(charts).toHaveCount(2)

    // Bar chart: 12 bars (6 months × 2 series) + an axis label.
    await expect(
      charts.first().locator(".recharts-bar-rectangle")
    ).toHaveCount(12)
    await expect(charts.first().getByText("Июн")).toBeVisible()

    // Pie chart: 4 slices.
    await expect(charts.nth(1).locator(".recharts-sector")).toHaveCount(4)
  })
})
