import { test, expect } from "@playwright/test"

// Pagination: page-number links + Назад/Вперёд driving a paged list. The demo
// shows "Страница N из 10" and the current page's records.
test.describe("Pagination", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/pagination")
  })

  test("clicking a page number switches the page", async ({ page }) => {
    const status = page.getByTestId("page-status")
    await expect(status).toContainText("Страница 1 из 10")

    const three = page.getByRole("link", { name: "3", exact: true })
    await three.click()

    await expect(status).toContainText("Страница 3 из 10")
    await expect(three).toHaveAttribute("aria-current", "page")
  })

  test("Назад / Вперёд step through pages", async ({ page }) => {
    const status = page.getByTestId("page-status")

    await page.getByRole("link", { name: "Следующая страница" }).click()
    await expect(status).toContainText("Страница 2 из 10")

    await page.getByRole("link", { name: "Предыдущая страница" }).click()
    await expect(status).toContainText("Страница 1 из 10")
  })
})
