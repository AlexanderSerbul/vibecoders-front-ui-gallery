import { test, expect } from "@playwright/test"

test.describe("Context Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/context-menu")
  })

  test("right-click opens the menu and a checkbox item updates state", async ({
    page,
  }) => {
    await page.getByText("Правый клик здесь").click({ button: "right" })
    await expect(page.getByRole("menuitem", { name: "Открыть" })).toBeVisible()

    await page
      .getByRole("menuitemcheckbox", { name: "В избранном" })
      .click()
    await expect(page.getByText(/Состояние:/)).toContainText("да, метка")
  })
})
