import { test, expect } from "@playwright/test"

// Label: a caption for a form control. Clicking it activates the associated
// field — here, clicking the label toggles the checkbox.
test.describe("Label", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/label")
  })

  test("clicking the label toggles the checkbox", async ({ page }) => {
    const state = page.getByTestId("label-state")
    await expect(state).toContainText("Согласие: нет")
    await page.getByText("Согласен с условиями").click() // click the LABEL
    await expect(state).toContainText("Согласие: да")
  })
})
