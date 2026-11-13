import Link from "next/link"
import type { ReactNode } from "react"

// Retain archival text/cards without advertising Addams as a current project.
export default function ContentLink({ href, children, className, block = false }: {
  href: string
  children: ReactNode
  className?: string
  block?: boolean
}) {
  if (/addams/i.test(href)) {
    const Element = block ? "div" : "span"
    return <Element className={className}>{children}</Element>
  }
  return <Link href={href} className={className}>{children}</Link>
}
