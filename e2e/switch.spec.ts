import { test, expect } from "@playwright/test"

// Switch is a `role="switch"` button with boolean `aria-checked`. The demo's
// "Включено:" summary lists the on switches, so we assert the effect too.
test.describe("Switch", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/components/switch")
  })

  test("reflects the initial checked state", async ({ page }) => {
    await expect(
      page.getByRole("switch", { name: "Email-уведомления" })
    ).toHaveAttribute("aria-checked", "true")
    await expect(
      page.getByRole("switch", { name: "Маркетинговые рассылки" })
    ).toHaveAttribute("aria-checked", "false")
    await expect(
      page.getByRole("switch", { name: "Автосохранение" })
    ).toHaveAttribute("aria-checked", "true")
  })

  test("toggling updates the switch and the summary", async ({ page }) => {
    const marketing = page.getByRole("switch", {
      name: "Маркетинговые рассылки",
    })
    await marketing.click()
    await expect(marketing).toHaveAttribute("aria-checked", "true")
    await expect(page.getByText(/Включено:/)).toContainText(
      "Маркетинговые рассылки"
    )

    const email = page.getByRole("switch", { name: "Email-уведомления" })
    await email.click()
    await expect(email).toHaveAttribute("aria-checked", "false")
  })
})
