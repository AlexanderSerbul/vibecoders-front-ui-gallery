import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Blocks, ChevronDown, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { componentGroups } from "@/data/components"

function useDarkMode() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return [dark, setDark] as const
}

export function Navbar() {
  const [dark, setDark] = useDarkMode()
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center gap-x-2 gap-y-2 px-4 py-2">
        <Link to="/" className="mr-2 flex items-center gap-2 font-semibold">
          <Blocks className="size-6 text-primary" />
          <span>
            shadcn/ui{" "}
            <span className="text-muted-foreground">— вайбкодеру</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1">
          {componentGroups.map((group) => {
            const active = group.items.some((item) => item.to === pathname)
            return (
              <DropdownMenu key={group.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant={active ? "secondary" : "ghost"} size="sm">
                    {group.label}
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {group.items.map((item) => (
                    <DropdownMenuItem key={item.to} asChild>
                      <Link to={item.to}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          })}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          aria-label="Переключить тему"
          onClick={() => setDark((value) => !value)}
          className="ml-auto"
        >
          {dark ? <Sun /> : <Moon />}
        </Button>
      </div>
    </header>
  )
}
