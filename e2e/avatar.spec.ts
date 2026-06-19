import { test, expect } from "@playwright/test"

test.describe("Avatar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/avatar")
  })

  test("renders avatars and shows initials when there is no image", async ({
    page,
  }) => {
    await expect(page.locator('[data-slot="avatar"]').first()).toBeVisible()
    // The no-image avatar shows its initials fallback immediately.
    await expect(page.getByText("БФ")).toBeVisible()
  })
})
