import { test, expect } from "@playwright/test"

// Alert: static in-flow callouts (role="alert"). No interaction — assert the
// three variants render with their content.
test.describe("Alert", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/alert")
  })

  test("renders the alert callouts", async ({ page }) => {
    const alerts = page.locator("main").getByRole("alert")
    await expect(alerts).toHaveCount(3)

    await expect(page.getByText("Не удалось сохранить")).toBeVisible()
  })
})
