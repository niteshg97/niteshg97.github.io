interface BadgeProps {
  children: string
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-muted">
      {children}
    </span>
  )
}
