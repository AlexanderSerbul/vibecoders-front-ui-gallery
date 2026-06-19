import type { ComponentProps } from "react"

// GitHub's mark isn't in lucide-react (its brand icons were removed in v1), so
// we inline the official octicon. `fill="currentColor"` makes it follow the
// surrounding text colour, so it themes light/dark like the lucide icons.
export function GithubIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.075-.55-.17-.55-.38 0-.19.01-.82.01-1.49 0-.51-.17-.84-.37-1.01 2.05-.23 4.2-1.01 4.2-4.54 0-1-.36-1.83-.94-2.47.09-.23.41-1.16-.09-2.42 0 0-.77-.25-2.51.94-.73-.2-1.51-.3-2.29-.3-.78 0-1.56.1-2.29.3-1.74-1.19-2.51-.94-2.51-.94-.5 1.26-.18 2.19-.09 2.42-.58.64-.94 1.47-.94 2.47 0 3.52 2.14 4.31 4.18 4.54-.26.23-.5.63-.58 1.23-.52.23-1.86.64-2.69-.77-.18-.31-.73-1.06-1.49-1.05-.81.01-.33.46.01.65.41.23.88 1.11.99 1.4.2.56.85 1.83 3.13 1.41 0 .47.01 1.21.01 1.42 0 .21-.15.46-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  )
}
