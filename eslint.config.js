import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist']),

  // TypeScript — type-aware linting (uses the tsconfig project).
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Transitional: plain JS/JSX still being migrated to TS.
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },

  // shadcn/ui components co-locate a variant helper (e.g. buttonVariants)
  // next to the component, which the react-refresh rule otherwise forbids.
  {
    files: ['src/components/ui/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },

  // The canonical shadcn Chart wraps Recharts, whose types are loose (lots of
  // `any` in tooltip/legend payloads), which trips the type-aware safety rules.
  // Relax them for this one upstream file rather than editing it.
  {
    files: ['src/components/ui/chart.tsx'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    },
  },

  // The canonical shadcn Carousel syncs Embla's initial can-scroll state by
  // calling setState in a mount effect — flagged by the React-Compiler rule,
  // but it's the intended external-system sync.
  {
    files: ['src/components/ui/carousel.tsx'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },

  // The canonical shadcn Sidebar's loading skeleton picks a random placeholder
  // width via Math.random() inside a useMemo — flagged by the React-Compiler
  // purity rule, but it's a one-off cosmetic value, not real render state.
  {
    files: ['src/components/ui/sidebar.tsx'],
    rules: {
      'react-hooks/purity': 'off',
    },
  },

  // The canonical useIsMobile hook seeds its viewport state with a setState in a
  // mount effect (matchMedia sync) — the same intended external-system sync.
  {
    files: ['src/hooks/use-mobile.ts'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
])
