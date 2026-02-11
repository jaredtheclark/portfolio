"use client"

import * as React from "react"
import { Moon, Sun, Monitor, Check } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50 h-9 w-9 rounded-full bg-background border border-border shadow-sm opacity-0" />
    )
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Toggle theme"
          className="fixed bottom-6 right-6 z-50 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background/90 border border-border shadow-sm backdrop-blur-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {theme === "dark" ? (
            <Moon className="h-[18px] w-[18px] text-foreground" />
          ) : theme === "light" ? (
            <Sun className="h-[18px] w-[18px] text-foreground" />
          ) : (
            <Monitor className="h-[18px] w-[18px] text-foreground" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="top"
        sideOffset={8}
        className="w-[180px]"
      >
        <DropdownMenuLabel className="text-xs text-muted-foreground font-normal px-2 py-1.5 tracking-wide">
          Theme
        </DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            Light
          </span>
          {theme === "light" && <Check className="h-4 w-4 text-foreground" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            Dark
          </span>
          {theme === "dark" && <Check className="h-4 w-4 text-foreground" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            Align to system
          </span>
          {theme === "system" && <Check className="h-4 w-4 text-foreground" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
