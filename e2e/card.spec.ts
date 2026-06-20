import { test, expect } from "@playwright/test"

// Card: a static bordered container composed of header/content/footer parts.
// Just assert the example cards render.
test.describe("Card", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/card")
  })

  test("renders example cards", async ({ page }) => {
    await expect(page.getByText("Тариф Pro")).toBeVisible()
    await expect(page.getByRole("button", { name: "Выбрать" })).toBeVisible()
  })
})
