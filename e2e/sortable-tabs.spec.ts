import { test, expect } from "@playwright/test"

// Sortable Tabs = Radix Tabs + dnd-kit. A click (no movement) selects a tab;
// a drag past the 8px threshold reorders. The "Порядок:" line shows both.
test.describe("Sortable Tabs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/sortable-tabs")
  })

  test("clicking a tab switches the active panel", async ({ page }) => {
    await expect(page.getByRole("tab", { name: "Файлы" })).toHaveAttribute(
      "aria-selected",
      "true"
    )
    await expect(
      page.getByText("Список изменённых файлов проекта.")
    ).toBeVisible()

    await page.getByRole("tab", { name: "История" }).click()

    await expect(page.getByRole("tab", { name: "История" })).toHaveAttribute(
      "aria-selected",
      "true"
    )
    await expect(page.getByText("Журнал коммитов и действий.")).toBeVisible()
  })

  test("dragging reorders the tabs", async ({ page }) => {
    const files = page.getByRole("tab", { name: "Файлы" })
    const history = page.getByRole("tab", { name: "История" })

    const fb = await files.boundingBox()
    const hb = await history.boundingBox()
    if (!fb || !hb) throw new Error("tab bounding boxes unavailable")

    // Drag "Файлы" past the 8px activation threshold, then over "История".
    await page.mouse.move(fb.x + fb.width / 2, fb.y + fb.height / 2)
    await page.mouse.down()
    await page.mouse.move(fb.x + fb.width / 2 + 20, fb.y + fb.height / 2, {
      steps: 5,
    })
    await page.mouse.move(hb.x + hb.width / 2, hb.y + hb.height / 2, {
      steps: 10,
    })
    await page.mouse.up()

    await expect(page.getByText(/Порядок:/)).toContainText("История · Файлы")
  })
})
