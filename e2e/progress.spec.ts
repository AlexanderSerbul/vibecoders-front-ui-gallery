import { test, expect } from "@playwright/test"

// Progress: a determinate bar driven by a `value` prop. The demo's buttons
// move the value; the Radix Root exposes role="progressbar" + aria-valuenow.
test.describe("Progress", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/progress")
  })

  test("buttons move the bar's value", async ({ page }) => {
    const bar = page.getByRole("progressbar")
    const label = page.getByTestId("progress-label")

    await expect(label).toContainText("40%")
    await expect(bar).toHaveAttribute("aria-valuenow", "40")

    await page.getByRole("button", { name: "+20%" }).click()
    await expect(label).toContainText("60%")
    await expect(bar).toHaveAttribute("aria-valuenow", "60")

    await page.getByRole("button", { name: "Сбросить" }).click()
    await expect(label).toContainText("0%")
    await expect(bar).toHaveAttribute("aria-valuenow", "0")
  })
})
