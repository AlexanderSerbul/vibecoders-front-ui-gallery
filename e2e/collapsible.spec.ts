import { test, expect } from "@playwright/test"

// Bare Radix Collapsible: closed content is unmounted; the trigger label and
// the "Состояние:" line both reflect open/closed.
test.describe("Collapsible", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/collapsible")
  })

  test("toggles the hidden content", async ({ page }) => {
    await expect(page.getByText("src/index.css")).not.toBeVisible()
    await expect(page.getByText(/Состояние:/)).toContainText("свёрнуто")

    await page.getByRole("button", { name: "Показать все" }).click()

    await expect(page.getByText("src/index.css")).toBeVisible()
    await expect(page.getByText(/Состояние:/)).toContainText("развёрнуто")
  })
})
