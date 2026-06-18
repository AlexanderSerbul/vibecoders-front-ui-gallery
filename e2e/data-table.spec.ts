import { test, expect } from "@playwright/test"

// Detailed interaction tests for the Data Table demo — pagination, sorting,
// filtering and row selection pinned as regression tests. Couples to the demo's
// hardcoded data (16 rows, page size 5); update both together if it changes.
const BODY_ROWS = '[data-slot="table-body"] [data-slot="table-row"]'

test.describe("Data Table", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/data-table")
    await expect(page.locator('[data-slot="table"]')).toBeVisible()
  })

  test("initial state: 5 rows, page 1 of 4, nothing selected", async ({
    page,
  }) => {
    await expect(page.locator(BODY_ROWS)).toHaveCount(5)
    await expect(page.getByText("Стр. 1 из 4")).toBeVisible()
    await expect(page.getByText("Выбрано 0 из 16")).toBeVisible()
    await expect(page.getByRole("button", { name: "Назад" })).toBeDisabled()
    await expect(page.getByRole("button", { name: "Вперёд" })).toBeEnabled()
  })

  test("pagination steps forward and back", async ({ page }) => {
    await page.getByRole("button", { name: "Вперёд" }).click()
    await expect(page.getByText("Стр. 2 из 4")).toBeVisible()
    await expect(page.getByRole("button", { name: "Назад" })).toBeEnabled()

    await page.getByRole("button", { name: "Назад" }).click()
    await expect(page.getByText("Стр. 1 из 4")).toBeVisible()
  })

  test("sorting by amount toggles ascending then descending", async ({
    page,
  }) => {
    const firstEmail = page
      .locator(BODY_ROWS)
      .first()
      .locator('[data-slot="table-cell"]')
      .nth(3) // 0=actions, 1=checkbox, 2=status, 3=email
    const sortByAmount = page.getByRole("button", { name: "Сумма" })

    await sortByAmount.click() // ascending → smallest amount first (320 ₽)
    await expect(firstEmail).toHaveText("zhanna@example.com")

    await sortByAmount.click() // descending → largest amount first (67 000 ₽)
    await expect(firstEmail).toHaveText("egor@example.com")
  })

  test("filtering by email matches substrings", async ({ page }) => {
    const filter = page.getByPlaceholder("Фильтр по почте…")

    // "anna" is a substring of both anna@… and zhANNA@…
    await filter.fill("anna")
    await expect(page.locator(BODY_ROWS)).toHaveCount(2)

    await filter.fill("zzz-no-match")
    await expect(page.getByText("Ничего не найдено.")).toBeVisible()

    await filter.clear()
    await expect(page.locator(BODY_ROWS)).toHaveCount(5)
  })

  test("select-all checks every row on the page", async ({ page }) => {
    await page
      .getByRole("checkbox", { name: "Выбрать все строки на странице" })
      .click()
    await expect(page.getByText("Выбрано 5 из 16")).toBeVisible()
  })

  test("row actions menu deletes a row", async ({ page }) => {
    await expect(page.getByText("Выбрано 0 из 16")).toBeVisible()

    await page
      .getByRole("button", { name: "Открыть меню строки" })
      .first()
      .click()
    await expect(page.getByRole("menuitem", { name: "Удалить" })).toBeVisible()
    await page.getByRole("menuitem", { name: "Удалить" }).click()

    await expect(page.getByText("Выбрано 0 из 15")).toBeVisible()
  })

  test("row actions menu opens the details sheet", async ({ page }) => {
    await page
      .getByRole("button", { name: "Открыть меню строки" })
      .first()
      .click()
    await page.getByRole("menuitem", { name: "Открыть детали" }).click()

    const sheet = page.getByRole("dialog")
    await expect(sheet).toBeVisible()
    await expect(sheet).toContainText("INV-1001")
    await expect(sheet).toContainText("anna@example.com")
  })

  test("row actions menu edits a row", async ({ page }) => {
    await page
      .getByRole("button", { name: "Открыть меню строки" })
      .first()
      .click()
    await page.getByRole("menuitem", { name: "Изменить" }).click()

    const sheet = page.getByRole("dialog")
    await expect(sheet.getByLabel("Почта")).toHaveValue("anna@example.com")

    await sheet.getByLabel("Почта").fill("edited@example.com")
    await sheet.getByRole("button", { name: "Сохранить" }).click()

    await expect(sheet).not.toBeVisible()
    await expect(
      page.getByRole("cell", { name: "edited@example.com" })
    ).toBeVisible()
  })

  test("edit form rejects an invalid email", async ({ page }) => {
    await page
      .getByRole("button", { name: "Открыть меню строки" })
      .first()
      .click()
    await page.getByRole("menuitem", { name: "Изменить" }).click()

    const sheet = page.getByRole("dialog")
    await sheet.getByLabel("Почта").fill("notanemail")
    await sheet.getByRole("button", { name: "Сохранить" }).click()

    await expect(sheet.getByText("Введите корректный email")).toBeVisible()
    await expect(sheet).toBeVisible() // save blocked, sheet stays open
  })
})
