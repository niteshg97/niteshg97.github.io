import type { TimelineEntry } from '../../types'

interface TimelineItemProps {
  entry: TimelineEntry
}

export default function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <li className="relative mb-10 ml-6 last:mb-0">
      <span className="absolute -left-[29px] mt-1.5 h-2.5 w-2.5 rounded-full bg-signal ring-4 ring-bg" />
      <p className="font-mono text-xs text-trace uppercase tracking-wide">{entry.period}</p>
      <h3 className="mt-1 font-display text-lg font-semibold text-text-primary">{entry.title}</h3>
      <p className="font-mono text-sm text-text-muted">{entry.organization}</p>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-muted">{entry.description}</p>
    </li>
  )
}
