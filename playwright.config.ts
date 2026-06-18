import { defineConfig, devices } from "@playwright/test"

const PORT = 5173
const baseURL = `http://localhost:${PORT}`

// Smoke tests run against the Vite dev server. If one is already up on the
// port (e.g. you're running `npm run dev`), Playwright reuses it instead of
// spawning another.
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run dev",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
})
