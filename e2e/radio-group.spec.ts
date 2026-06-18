import { test, expect } from "@playwright/test"

// Each radio's accessible name comes from its wrapping Label, so a substring
// name match ("Free"/"Pro"/"Team") targets it.
test.describe("Radio Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/radio-group")
  })

  test("reflects the initial selection", async ({ page }) => {
    await expect(page.getByRole("radio", { name: "Pro" })).toHaveAttribute(
      "aria-checked",
      "true"
    )
    await expect(page.getByRole("radio", { name: "Free" })).toHaveAttribute(
      "aria-checked",
      "false"
    )
    await expect(page.getByText(/Выбрано:/)).toContainText("Pro")
  })

  test("selecting one option deselects the previous", async ({ page }) => {
    const free = page.getByRole("radio", { name: "Free" })
    const pro = page.getByRole("radio", { name: "Pro" })

    await free.click()
    await expect(free).toHaveAttribute("aria-checked", "true")
    await expect(pro).toHaveAttribute("aria-checked", "false")
    await expect(page.getByText(/Выбрано:/)).toContainText("Free")
  })
})
