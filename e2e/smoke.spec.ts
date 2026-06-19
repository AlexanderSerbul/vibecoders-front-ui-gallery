import { test, expect } from "@playwright/test"

import { componentGroups } from "../src/data/components"

// Every route the app serves, derived from the single source of truth
// (`componentGroups`) plus the landing page — so new component demos are
// covered by this smoke test automatically, with no edits here.
const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  ...componentGroups.flatMap((group) =>
    group.items.map((item) => ({ path: item.to, label: item.label }))
  ),
]

for (const { path, label } of routes) {
  test(`${label} (${path}) renders without errors`, async ({ page }) => {
    const consoleErrors: string[] = []
    const pageErrors: string[] = []

    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text())
    })
    page.on("pageerror", (err) => {
      pageErrors.push(err.message)
    })

    await page.goto(path)

    // The route actually mounted its content (layout shell + a page heading).
    await expect(page.locator("main h1")).toBeVisible()

    expect(pageErrors, `Uncaught page errors on ${path}`).toEqual([])
    expect(consoleErrors, `Console errors on ${path}`).toEqual([])
  })
}
