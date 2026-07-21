import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  external?: boolean
}

export default function Button({ children, href, variant = 'primary', external = false }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-mono text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-bg'
  const styles =
    variant === 'primary'
      ? 'bg-signal text-bg hover:bg-signal/90'
      : 'border border-border text-text-primary hover:border-signal hover:text-signal'

return (
  <a
    href={href}
    className={`${base} ${styles}`}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    {children}
  </a>
)
}
