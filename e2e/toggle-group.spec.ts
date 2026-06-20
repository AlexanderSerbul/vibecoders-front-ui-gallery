import { test, expect } from "@playwright/test"

// Toggle Group: a row of linked toggle buttons. The demo wires a "multiple"
// group (text format) and a "single" group (alignment) to a live preview
// paragraph. Items carry data-state on/off; target them by aria-label.
test.describe("Toggle Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/toggle-group")
  })

  test("a format toggle styles the sample text (multiple)", async ({ page }) => {
    const preview = page.getByTestId("tg-preview")
    const italic = page.locator('[aria-label="Курсив"]')

    await expect(italic).toHaveAttribute("data-state", "off")
    await expect(preview).not.toHaveClass(/italic/)

    await italic.click()
    await expect(italic).toHaveAttribute("data-state", "on")
    await expect(preview).toHaveClass(/italic/)
  })

  test("alignment keeps exactly one selected (single)", async ({ page }) => {
    const preview = page.getByTestId("tg-preview")
    const center = page.locator('[aria-label="По центру"]')
    const right = page.locator('[aria-label="По правому краю"]')

    await center.click()
    await expect(center).toHaveAttribute("data-state", "on")
    await expect(preview).toHaveClass(/text-center/)

    await right.click()
    await expect(right).toHaveAttribute("data-state", "on")
    await expect(center).toHaveAttribute("data-state", "off")
    await expect(preview).toHaveClass(/text-right/)
  })
})
