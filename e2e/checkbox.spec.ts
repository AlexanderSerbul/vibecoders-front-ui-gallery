import { test, expect } from "@playwright/test"

test.describe("Checkbox", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/checkbox")
  })

  test("terms checkbox gates the submit button", async ({ page }) => {
    const submit = page.getByRole("button", { name: "Продолжить" })
    const terms = page.getByRole("checkbox", {
      name: "Я принимаю условия использования",
    })

    await expect(submit).toBeDisabled()

    await terms.click()
    await expect(terms).toHaveAttribute("aria-checked", "true")
    await expect(submit).toBeEnabled()

    await submit.click()
    await expect(page.getByText(/согласие принято/)).toBeVisible()
  })

  test("parent checkbox is indeterminate, then selects all", async ({
    page,
  }) => {
    const parent = page.getByRole("checkbox", { name: "Все права" })

    // read=true only → parent is "mixed"
    await expect(parent).toHaveAttribute("aria-checked", "mixed")
    await expect(page.getByText(/Выбрано:/)).toContainText("1 из 3")

    await parent.click()
    await expect(parent).toHaveAttribute("aria-checked", "true")
    await expect(page.getByText(/Выбрано:/)).toContainText("3 из 3")
  })
})
