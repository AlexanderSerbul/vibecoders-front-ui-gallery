import { test, expect } from "@playwright/test"

// Radix Slider thumbs are role="slider" with aria-valuenow and an aria-label
// from `thumbLabels`. Arrow keys nudge by `step`.
test.describe("Slider", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/slider")
  })

  test("arrow keys change a single-thumb slider (step 1)", async ({ page }) => {
    const thumb = page.getByRole("slider", { name: "Громкость" })
    await expect(thumb).toHaveAttribute("aria-valuenow", "40")
    await expect(page.getByText("40%")).toBeVisible()

    await thumb.focus()
    await page.keyboard.press("ArrowRight")

    await expect(thumb).toHaveAttribute("aria-valuenow", "41")
    await expect(page.getByText("41%")).toBeVisible()
  })

  test("range slider moves only the focused thumb by its step (50)", async ({
    page,
  }) => {
    const min = page.getByRole("slider", { name: "Минимальная цена" })
    const max = page.getByRole("slider", { name: "Максимальная цена" })
    await expect(min).toHaveAttribute("aria-valuenow", "200")
    await expect(max).toHaveAttribute("aria-valuenow", "800")

    await min.focus()
    await page.keyboard.press("ArrowRight")

    await expect(min).toHaveAttribute("aria-valuenow", "250")
    await expect(max).toHaveAttribute("aria-valuenow", "800")
  })
})
