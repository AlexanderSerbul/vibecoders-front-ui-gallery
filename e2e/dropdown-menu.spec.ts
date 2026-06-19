import { test, expect } from "@playwright/test"

// Dropdown Menu: one menu hanging off one button, with rich items
// (checkbox/radio items, a submenu). The demo mirrors menu state into a
// summary line so changes are observable.
test.describe("Dropdown Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/dropdown-menu")
  })

  test("a checkbox item toggles a setting", async ({ page }) => {
    const summary = page.getByTestId("settings-summary")
    await expect(summary).toContainText("Строка состояния: выкл")

    await page.getByRole("button", { name: "Опции" }).click()
    await page
      .getByRole("menuitemcheckbox", { name: "Строка состояния" })
      .click()

    // Selecting the item closes the menu and flips the setting.
    await expect(summary).toContainText("Строка состояния: вкл")
  })

  test("a submenu reveals nested actions", async ({ page }) => {
    await page.getByRole("button", { name: "Опции" }).click()
    await page.getByRole("menuitem", { name: "Поделиться" }).hover()

    await expect(
      page.getByRole("menuitem", { name: "Скопировать ссылку" })
    ).toBeVisible()
  })
})
