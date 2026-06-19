import { test, expect } from "@playwright/test"

test.describe("Hover Card", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/hover-card")
  })

  test("reveals the preview card on hover", async ({ page }) => {
    await page.getByRole("button", { name: "Анна Орлова" }).hover()
    await expect(
      page.getByText("Ведущий продакт-дизайнер · @anna")
    ).toBeVisible()
  })
})
