import { test, expect } from "@playwright/test"

// Radix Tabs: role="tab" with aria-selected; only the active tabpanel is
// mounted, so switching swaps the visible content.
test.describe("Tabs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/tabs")
  })

  test("switches the visible panel on tab click", async ({ page }) => {
    await expect(page.getByRole("tab", { name: "Обзор" })).toHaveAttribute(
      "aria-selected",
      "true"
    )
    await expect(page.getByText("Сводка")).toBeVisible()

    await page.getByRole("tab", { name: "Активность" }).click()

    await expect(
      page.getByRole("tab", { name: "Активность" })
    ).toHaveAttribute("aria-selected", "true")
    await expect(page.getByRole("tab", { name: "Обзор" })).toHaveAttribute(
      "aria-selected",
      "false"
    )
    await expect(page.getByText("Недавнее")).toBeVisible()
  })
})
