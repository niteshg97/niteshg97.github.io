import type { StatItem } from '../../types'

export default function StatCard({ label, value }: StatItem) {
  return (
    <div className="rounded-lg border border-border bg-bg-elevated px-6 py-5 text-center">
      <p className="font-display text-3xl font-semibold text-signal">{value}</p>
      <p className="mt-1 font-mono text-xs text-text-muted uppercase tracking-wide">{label}</p>
    </div>
  )
}
