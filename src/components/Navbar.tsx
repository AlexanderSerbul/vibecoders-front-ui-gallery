import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Blocks, ChevronDown, Moon, Sun } from "lucide-react"

import { GithubIcon } from "@/components/GithubIcon"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { componentGroups } from "@/data/components"
import { cn } from "@/lib/utils"

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
    <header
      className={cn(
        "sticky top-0 z-50 border-b",
        // On the Matrix About page the navbar drops its solid fill AND the
        // backdrop-blur — backdrop-filter doesn't reliably composite the fixed
        // -z-10 canvas behind it (e.g. in Opera it renders opaque), so instead
        // we go plainly translucent and let the rain show through by z-order.
        pathname === "/about"
          ? "bg-background/20"
          : "bg-background/80 backdrop-blur"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-2">
        {/* Top row: brand on the left, utility cluster pinned top-right. */}
        <div className="flex items-center justify-between gap-2">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Blocks className="size-6 text-primary" />
            <span>
              shadcn/ui{" "}
              <span className="text-muted-foreground">— вайбкодеру</span>
            </span>
          </Link>

          <div className="flex items-center gap-1">
            <Button
              asChild
              variant={pathname === "/about" ? "secondary" : "ghost"}
              size="sm"
            >
              <Link to="/about">О проекте</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label="Репозиторий на GitHub"
            >
              <a
                href="https://github.com/AlexanderSerbul/vibecoders-front-ui-gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Переключить тему"
              onClick={() => setDark((value) => !value)}
            >
              {dark ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>

        {/* Category dropdowns wrap onto their own row(s) below the brand. */}
        <nav className="mt-2 flex flex-wrap items-center gap-1">
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
      </div>
    </header>
  )
}
