import { test, expect } from "@playwright/test"

test.describe("Tooltip", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/tooltip")
  })

  test("shows the hint on hover", async ({ page }) => {
    await page.getByRole("button", { name: "Жирный" }).hover()
    await expect(page.getByRole("tooltip")).toContainText("Жирный (Ctrl+B)")
  })
})
