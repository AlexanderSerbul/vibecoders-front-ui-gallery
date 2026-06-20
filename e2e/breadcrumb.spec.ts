import { test, expect } from "@playwright/test"

// Breadcrumb: the trail to the current page. The last crumb is a non-link
// BreadcrumbPage (aria-current); a long path collapses into «…» that opens a
// DropdownMenu of the hidden sections.
test.describe("Breadcrumb", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/breadcrumb")
  })

  test("marks the current page", async ({ page }) => {
    const current = page.locator('[data-slot="breadcrumb-page"]').first()
    await expect(current).toHaveAttribute("aria-current", "page")
  })

  test("the collapsed «…» expands hidden sections", async ({ page }) => {
    await page
      .getByRole("button", { name: "Показать скрытые разделы" })
      .click()

    await expect(page.getByRole("menuitem", { name: "Контент" })).toBeVisible()
  })
})
