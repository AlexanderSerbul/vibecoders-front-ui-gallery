import { test, expect } from "@playwright/test"

// Table: plain styled table markup (header / rows / cells), no logic.
// The demo is a static invoice table; assert it renders with its columns.
test.describe("Table", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/table")
  })

  test("renders the table", async ({ page }) => {
    await expect(page.getByRole("table")).toBeVisible()
    await expect(
      page.getByRole("columnheader", { name: "Клиент" })
    ).toBeVisible()
  })
})
