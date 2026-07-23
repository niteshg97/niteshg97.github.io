import type { ReactNode } from 'react'
import { focusRing } from '../../utils/styles'

interface ButtonProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  external?: boolean
}

export default function Button({
  children,
  href,
  variant = 'primary',
  external = false,
}: ButtonProps) {
  const base = `inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${focusRing}`

  const styles =
    variant === 'primary'
      ? 'bg-signal text-bg hover:bg-signal/90'
      : 'border border-border text-text-primary hover:border-signal hover:text-signal'

  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : {})}
    >
      {children}
    </a>
  )
}
