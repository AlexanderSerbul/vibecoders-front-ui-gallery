import { test, expect } from "@playwright/test"

// Button: the everyday click target. The demo's counter button bumps a number
// on each click; assert the on-screen count tracks the clicks.
test.describe("Button", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/button")
  })

  test("the counter button counts clicks", async ({ page }) => {
    const count = page.getByTestId("click-count")
    await expect(count).toContainText("Нажато: 0")
    await page.getByRole("button", { name: "Нажми меня" }).click()
    await expect(count).toContainText("Нажато: 1")
  })
})
