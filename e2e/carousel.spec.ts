import { test, expect } from "@playwright/test"

// Embla carousel: Previous is disabled at the first slide; advancing enables it.
// Button state (canScrollPrev/Next) is the deterministic signal.
test.describe("Carousel", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/carousel")
  })

  test("navigates slides with the prev/next buttons", async ({ page }) => {
    const prev = page.getByRole("button", { name: "Previous slide" })
    const next = page.getByRole("button", { name: "Next slide" })

    // First slide: can't go back, can go forward.
    await expect(prev).toBeDisabled()
    await expect(next).toBeEnabled()

    await next.click()

    // Advanced one slide: now both directions are available.
    await expect(prev).toBeEnabled()
    await expect(next).toBeEnabled()
  })
})
