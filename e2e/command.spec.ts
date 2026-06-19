import { test, expect } from "@playwright/test"

// The inline cmdk Command: typing filters the list; selecting runs onSelect.
test.describe("Command", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/command")
  })

  test("filters by typing and runs a command", async ({ page }) => {
    await page.getByPlaceholder("Введите команду или поиск…").fill("настр")
    await page.getByRole("option", { name: "Настройки" }).click()

    await expect(page.getByText(/Выполнено:/)).toContainText("Настройки")
  })
})
