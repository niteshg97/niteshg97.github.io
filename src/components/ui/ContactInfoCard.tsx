import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { useCardHoverMotion } from '../../hooks/useCardHoverMotion'
import { focusRing } from '../../utils/styles'

interface ContactInfoCardProps {
  icon: IconType
  label: string
  value: string
  href?: string
}

export default function ContactInfoCard({ icon: Icon, label, value, href }: ContactInfoCardProps) {
  const cardHover = useCardHoverMotion()
  const baseClasses =
    'flex items-start gap-4 rounded-lg border border-border bg-bg-elevated p-5 transition-colors'

  const inner = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-signal/10 text-signal">
        <Icon size={18} aria-hidden="true" />
      </span>
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-text-muted">{label}</p>
        <p className="mt-1 text-sm text-text-primary">{value}</p>
      </div>
    </>
  )

  if (href) {
    return (
      <motion.a
        {...cardHover}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseClasses} hover:border-signal/50 ${focusRing}`}
      >
        {inner}
      </motion.a>
    )
  }

  return <div className={baseClasses}>{inner}</div>
}
