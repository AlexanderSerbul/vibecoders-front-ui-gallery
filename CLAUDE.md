# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check (`tsc`) then production build to `dist/`
- `npm run typecheck` — type-check only (`tsc --noEmit`), no bundle
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the repo
- `npm run test:e2e` — Playwright smoke tests (visit every route, fail on any console/page error)

No unit-test runner is configured; a **Playwright suite** covers end-to-end page rendering + Data Table interactions (`npm run test:e2e`). To validate a change, run `npm run lint` and `npm run build` (the latter type-checks first), or check behavior in `npm run dev`.

## Stack

- **Vite 8 + React 19 + TypeScript** (strict, plus `noUncheckedIndexedAccess` — so `arr[i]`/`obj[key]` yield `T | undefined`), ES modules. Vite strips types when bundling — it does **not** type-check; that's a separate `tsc` step (wired into `npm run build`). TS config is split into `tsconfig.app.json` (the `src/` app — browser libs, `jsx: react-jsx`) and `tsconfig.node.json` (`vite.config.ts` — Node), both referenced from `tsconfig.json`.
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin. There is **no `tailwind.config.js`** — Tailwind v4 is configured CSS-first inside `src/index.css` (`@import "tailwindcss"`, `@theme inline`, `@custom-variant`).
- **shadcn/ui** (style `new-york`, base color `neutral`), TypeScript (`components.json` `"tsx": true`). Components are copied into the repo, not installed as a dependency — add more with `npx shadcn@latest add <name>` (heads-up: the CLI can misresolve the `@` alias and drop files into a literal `@/` folder at the repo root — if so, move them into `src/` and delete `@/`; it may also (re)write `button.tsx`).
- **react-router-dom** for client-side routing; **lucide-react** for icons; **react-hook-form** + **Zod** (via `@hookform/resolvers`) for forms and validation (used by the `Form` component); **react-day-picker** for the `Calendar`; **input-otp** for `Input OTP` (which also adds a `caret-blink` keyframe + `--animate-caret-blink` to `src/index.css`); **@dnd-kit** for the drag-to-reorder `Sortable Tabs`; **@tanstack/react-table** (headless table logic) for the `Data Table`; **react-resizable-panels** for `Resizable` — **pinned to `^2`** (currently 2.1.9). v3+ renamed the API (`PanelGroup`/`Panel`/`PanelResizeHandle` → `Group`/`Panel`/`Separator`, `direction` → `orientation`); the canonical shadcn `resizable.tsx` still uses the v2 names, so `npm install react-resizable-panels` (which pulls the latest) breaks the type-check — reinstall `@^2` if it ever jumps.

## Path alias

`@/` resolves to `src/`. It is declared in **two** places that must stay in sync: `vite.config.ts` (`resolve.alias`, used at build/runtime) and `tsconfig.app.json` (`paths`, used by `tsc`, the editor, and the shadcn CLI). Import app code as `@/components/...`, `@/lib/utils`, etc.

## Architecture

Single-page app; the header menu navigates between routes without a full reload.

- **Routing**: `src/main.tsx` wraps `<App/>` in `<BrowserRouter>`. `src/App.tsx` is the layout shell — a persistent `<Navbar/>` + `<Footer/>` around a `<Routes>` block. A landing page maps `/` to `Home` in `src/pages/`; component demos map `/components/<name>` to pages in `src/pages/demos/`.
- **Layout vs. pages**: shared chrome (`Navbar`, `Footer`) lives in `src/components/`; one component per route lives in `src/pages/` (currently just `Home`, the landing).
- **UI primitives**: shadcn components live in `src/components/ui/` and are owned source you can edit directly. `cn()` (clsx + tailwind-merge) in `src/lib/utils.ts` is the standard helper for composing class names.
- **Component demos** (the "showcase"): each shadcn component gets a demo page, reachable from **category dropdowns** in the navbar (Оверлеи / Плавающие / Меню / Контент / Таблицы / Выбор / Переключатели / Контролы / Дата), each itself a shadcn `DropdownMenu` (dogfooding); the category nav data lives in `src/data/components.ts` (`componentGroups`), shared by the `Navbar` and the `Home` landing. To add one: install/author the component in `src/components/ui/`, create `src/pages/demos/<Name>Demo.tsx`, add a `<Route path="/components/<name>" …>` in `src/App.tsx`, and append `{ to: "/components/<name>", label: "<Name>" }` to the right group's `items` in `src/data/components.ts` (it renders into the navbar dropdowns and the Home landing automatically; a group's trigger highlights when its route is active). Demos so far: `Dialog`, `Sheet`, `Drawer`, `Menubar`, `Context Menu`, `Popover`, `Tooltip`, `Hover Card`, `Command`, `Select`, `Combobox`, `Form`, `Calendar`, `Date Picker`, `Slider`, `Switch`, `Checkbox`, `Radio Group`, `Toggle`, `Input OTP`, `Accordion`, `Collapsible`, `Tabs`, `Sortable Tabs`, `Resizable`, `Scroll Area`, `Data Table` — mostly Radix-based, except `Drawer` (Vaul), `Command` (cmdk), `Form` (react-hook-form + Zod, with `Label` + `Input`), `Calendar` (react-day-picker), `Input OTP` (`input-otp`), and `Resizable` (react-resizable-panels); `Combobox` (`Popover` + `Command`) and `Date Picker` (`Popover` + `Calendar`) are compositions (no new dep); `Sortable Tabs` composes `Tabs` + **dnd-kit** for drag-to-reorder. `Resizable` is split-view panes (group → panels → drag-handles, nestable for IDE-style layouts). `Scroll Area` is a styled, cross-browser scrollbar container (`Root` → `Viewport` → `Scrollbar` → `Thumb`); demo shows a fixed-height vertical list + a horizontal card strip (`<ScrollBar orientation="horizontal" />`). `Data Table` composes the `Table` primitive + **@tanstack/react-table** (headless — sorting / filtering / pagination / row-selection live in `useState`, rendered via `flexRender`; demo has a status `Badge`, sortable money column, email filter, paged rows, select-all `Checkbox`es, and a **first-column row-actions `DropdownMenu`** (⋯ → copy id/email; **«Открыть детали»** opens a `Sheet` side-panel with the row's fields; **«Изменить»** opens an edit `Sheet` with a react-hook-form + Zod form (Почта/Статус/Сумма, pre-filled, `noValidate` so Zod—not the browser—validates); **«Удалить»** actually removes the row. Data is lifted to `useState` (`payments`, plus `detailsRow`/`detailsOpen` and `editRow`/`editOpen` — split data/open states so the sheets keep content through the close animation), and columns are built in-component with `useMemo` so cells close over the setters)).
- **Content/data**: component navigation is data-driven from `src/data/components.ts` (`componentGroups` — categories plus their demo links).

### Theming (light/dark)

- Design tokens are shadcn CSS variables in `src/index.css`: `:root` holds the light palette, `.dark` overrides it, and `@theme inline` exposes them as Tailwind color utilities (`bg-background`, `text-muted-foreground`, `border-border`, …). **Always style through these tokens, not raw colors**, so both themes and the shadcn components stay consistent.
- Dark mode is **class-based**: the `.dark` class on `<html>` is toggled by `useDarkMode` in `src/components/Navbar.tsx`, initialized from the OS `prefers-color-scheme`.

### ESLint / Fast Refresh

The flat config (`eslint.config.js`) lints `.ts`/`.tsx` with **`typescript-eslint` type-aware rules** (`recommendedTypeChecked`, via the tsconfig project service). It keeps `eslint-plugin-react-refresh` strict for app code but **disables `react-refresh/only-export-components` for `src/components/ui/**`** — shadcn components intentionally export a variant helper (e.g. `buttonVariants`) next to the component, which the rule otherwise flags as an error. In your own component files, keep non-component exports (helpers, constants) in separate files.

### Tests (Playwright)

`npm run test:e2e` runs the Playwright suite in `e2e/`:

- **`smoke.spec.ts`** — **data-driven from `componentGroups`** (the same source the nav uses) plus the landing `/`: visits every route, asserts `main h1` is visible, and fails on any `console.error` or uncaught `pageerror`. Add a demo to `componentGroups` and it's covered automatically — no test edits.
- **Per-component interaction specs** — one file per component (`toggle.spec.ts`, `switch.spec.ts`, `checkbox.spec.ts`, `radio-group.spec.ts`, `data-table.spec.ts`, …) exercising real behaviour (click / select / validate) and asserting state via ARIA (`aria-pressed` / `aria-checked` / `aria-checked="mixed"`) plus on-screen effects. Added incrementally, simplest-first; each couples to its demo's data.

`playwright.config.ts` targets the dev server via `webServer` (starts one on :5173, or **reuses** a running one). The Playwright files (`playwright.config.ts`, `e2e/`) are added to `tsconfig.node.json`'s `include`, so `tsc` and ESLint cover them too (otherwise the type-aware lint's project service errors on files outside every tsconfig). First run needs the browser once: `npx playwright install chromium`. Artifacts (`test-results/`, `playwright-report/`) are git-ignored.

### Static files

Files in `public/` are served verbatim at the site root (e.g. `public/favicon.svg` → `/favicon.svg`); assets imported from `src/` are bundled and content-hashed. (The original Vite template's `src/assets/*` and `public/icons.svg` were removed — icons come from `lucide-react`.)
