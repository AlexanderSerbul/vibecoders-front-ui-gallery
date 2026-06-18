import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import process from 'node:process'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Honour a port assigned via the PORT env var (e.g. Claude Code preview's
    // autoPort); fall back to Vite's default for a plain `npm run dev`.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
  preview: {
    // `vite preview` (production build) uses `preview.port`, not `server.port`.
    port: process.env.PORT ? Number(process.env.PORT) : 4173,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
