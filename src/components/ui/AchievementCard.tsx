import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FiAward, FiTarget, FiUsers, FiGithub, FiStar, FiExternalLink } from 'react-icons/fi'
import type { Achievement, AchievementCategory } from '../../types'

interface AchievementCardProps {
  achievement: Achievement
}

interface CategoryMeta {
  label: string
  icon: IconType
  badgeClass: string
  iconWrapClass: string
}

const categoryMeta: Record<AchievementCategory, CategoryMeta> = {
  award: {
    label: 'Award',
    icon: FiAward,
    badgeClass: 'border-signal/30 bg-signal/10 text-signal',
    iconWrapClass: 'bg-signal/10 text-signal',
  },
  competition: {
    label: 'Competition',
    icon: FiTarget,
    badgeClass: 'border-trace/30 bg-trace/10 text-trace',
    iconWrapClass: 'bg-trace/10 text-trace',
  },
leadership: {
  label: 'Leadership',
  icon: FiUsers,
  badgeClass: 'border-blue-400/30 bg-blue-400/10 text-blue-400',
  iconWrapClass: 'bg-blue-400/10 text-blue-400',
},
  'open-source': {
    label: 'Open Source',
    icon: FiGithub,
    badgeClass: 'border-trace/30 bg-trace/10 text-trace',
    iconWrapClass: 'bg-trace/10 text-trace',
  },
  recognition: {
    label: 'Recognition',
    icon: FiStar,
    badgeClass: 'border-border bg-bg text-text-muted',
    iconWrapClass: 'bg-bg text-text-muted',
  },
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const { title, organization, year, category, description, highlight, link } = achievement
  const meta = categoryMeta[category]
  const Icon = meta.icon

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease:[0.22,1,0.36,1] }}
      className="flex flex-col rounded-lg border border-border bg-bg-elevated p-6 transition-colors hover:border-signal/50"
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${meta.iconWrapClass}`}>
          <Icon size={18} aria-hidden="true" />
        </span>
        <span
          className={`rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wide ${meta.badgeClass}`}
        >
          {meta.label}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-1 font-mono text-sm text-text-muted">
        {organization} · {year}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-text-muted">{description}</p>

      {highlight && (
        <p className="mt-3 border-l-2 border-signal/40 pl-3 text-sm italic leading-relaxed text-text-muted">
          {highlight}
        </p>
      )}

      {link && (
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-5 flex items-center gap-1.5 font-mono text-sm text-text-muted transition-colors hover:text-signal"
    >
    <FiExternalLink size={16} />
      View
     </a>
    )}
    </motion.article>
  )
}
