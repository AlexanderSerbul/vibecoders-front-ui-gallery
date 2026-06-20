import { test, expect } from "@playwright/test"

// Aspect Ratio: keeps a box's proportions at any width. The demo's buttons
// switch the ratio; assert the rendered box actually reshapes.
test.describe("Aspect Ratio", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/aspect-ratio")
  })

  test("switching the ratio reshapes the box", async ({ page }) => {
    const box = page.getByTestId("ratio-box")

    const wide = await box.boundingBox()
    expect(wide!.width / wide!.height).toBeCloseTo(16 / 9, 1)

    await page.getByRole("button", { name: "1 : 1" }).click()
    const square = await box.boundingBox()
    expect(square!.width / square!.height).toBeCloseTo(1, 1)
  })
})
