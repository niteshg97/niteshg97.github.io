import type { PublicationStatus } from '../../types'

interface StatusBadgeProps {
  status: PublicationStatus
}

const isLive = (status: PublicationStatus): boolean =>
  status === 'Ongoing' || status === 'Under Review'

const styles: Record<PublicationStatus, string> = {
  Published: 'border-signal/30 bg-signal/10 text-signal',
  Accepted: 'border-signal/30 bg-signal/10 text-signal',
  'Under Review': 'border-trace/30 bg-trace/10 text-trace',
  Ongoing: 'border-trace/30 bg-trace/10 text-trace',
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wide ${styles[status]}`}
    >
      {isLive(status) && (
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {status}
    </span>
  )
}
