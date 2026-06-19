import { test, expect } from "@playwright/test"

test.describe("Menubar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/menubar")
  })

  test("opens a menu and toggles a checkbox item", async ({ page }) => {
    await page.getByRole("menuitem", { name: "Вид" }).click()
    await page
      .getByRole("menuitemcheckbox", { name: "Строка состояния" })
      .click()
    await expect(page.getByText(/Состояние меню/)).toContainText(
      "строка состояния вкл"
    )
  })

  test("File → Share → By email opens the recipient dialog", async ({
    page,
  }) => {
    await page.getByRole("menuitem", { name: "Файл" }).click()
    await page.getByRole("menuitem", { name: "Поделиться" }).hover()
    await page.getByRole("menuitem", { name: "По почте" }).click()

    await expect(page.getByRole("dialog")).toContainText("Поделиться по почте")
  })
})
