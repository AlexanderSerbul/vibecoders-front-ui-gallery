import { test, expect } from "@playwright/test"

// Alert Dialog: a confirmation modal for destructive actions. It can't be
// dismissed by clicking outside — only an explicit Cancel/Action. The demo
// mirrors the outcome into a status line.
test.describe("Alert Dialog", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/alert-dialog")
  })

  test("confirming runs the action", async ({ page }) => {
    const status = page.getByTestId("alert-status")
    await expect(status).toContainText("пока ничего")

    await page.getByRole("button", { name: "Удалить проект" }).click()
    await expect(page.getByRole("alertdialog")).toBeVisible()

    await page.getByRole("button", { name: "Да, удалить" }).click()
    await expect(status).toContainText("проект удалён")
  })

  test("cancelling dismisses without acting", async ({ page }) => {
    await page.getByRole("button", { name: "Удалить проект" }).click()
    await page.getByRole("button", { name: "Отмена" }).click()

    await expect(page.getByTestId("alert-status")).toContainText("отменено")
  })
})
