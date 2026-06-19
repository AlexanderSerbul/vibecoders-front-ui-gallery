import { type CSSProperties } from "react"
import { Toaster as Sonner, type ToasterProps } from "sonner"

// Adapted from the canonical shadcn Sonner: dropped the `next-themes` theme
// sync (this app's dark mode is the class-based `.dark` toggle). The toast
// colours come from our CSS tokens, which already switch on `.dark`, so the
// toaster follows the theme reactively without next-themes.
function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
