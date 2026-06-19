import { Outlet } from "react-router-dom"

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

// Shared chrome (navbar + footer) for the component-gallery routes. The Sidebar
// demo renders outside this layout, as its own full-page app shell.
export function MainLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
