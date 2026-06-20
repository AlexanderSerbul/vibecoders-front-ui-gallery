import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"

// A prompt shown in a code block with a one-click copy button.
// Reused on the Home landing and inside component demos.
export function PromptBlock({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    void navigator.clipboard
      .writeText(prompt)
      .then(() => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }

  return (
    <div className="flex items-start justify-between gap-3 rounded-lg border bg-muted/40 p-4">
      <code className="text-sm leading-relaxed whitespace-pre-line">{prompt}</code>
      <Button size="sm" variant="outline" onClick={copy} className="shrink-0">
        {copied ? <Check /> : <Copy />}
        {copied ? "Скопировано" : "Копировать"}
      </Button>
    </div>
  )
}
