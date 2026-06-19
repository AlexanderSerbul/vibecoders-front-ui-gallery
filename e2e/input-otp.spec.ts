import { test, expect } from "@playwright/test"

// input-otp renders one real <input> (maxLength 6) behind the slots; filling it
// (like a paste) distributes digits and fires onComplete at 6 chars.
test.describe("Input OTP", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/input-otp")
  })

  test("entering a 6-digit code fills it and confirms", async ({ page }) => {
    await page.getByRole("textbox").fill("123456")

    await expect(page.getByText(/Введено:/)).toContainText("123456")
    await expect(page.getByText(/код принят/)).toBeVisible()
  })
})
