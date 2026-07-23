import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  FiAward,
  FiTarget,
  FiUsers,
  FiGithub,
  FiStar,
  FiExternalLink,
} from 'react-icons/fi'
import type { Achievement, AchievementCategory } from '../../types'
import { useCardHoverMotion } from '../../hooks/useCardHoverMotion'
import { cardBase, focusRing } from '../../utils/styles'

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
    badgeClass: 'border-signal/30 bg-signal/10 text-signal',
    iconWrapClass: 'bg-signal/10 text-signal',
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

export default function AchievementCard({
  achievement,
}: AchievementCardProps) {
  const {
    title,
    organization,
    year,
    category,
    description,
    highlight,
    link,
  } = achievement

  const meta = categoryMeta[category]
  const Icon = meta.icon
  const cardHover = useCardHoverMotion()

  return (
    <motion.article
      {...cardHover}
      className={`flex flex-col p-6 ${cardBase}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${meta.iconWrapClass}`}
        >
          <Icon size={18} aria-hidden="true" />
        </span>

        <span
          className={`rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wide ${meta.badgeClass}`}
        >
          {meta.label}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
        {title}
      </h3>

      <p className="mt-1 font-mono text-sm text-text-muted">
        {organization} · {year}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {description}
      </p>

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
          className={`mt-5 flex w-fit items-center gap-1.5 rounded-sm font-mono text-sm text-text-muted transition-colors duration-200 hover:text-signal ${focusRing}`}
        >
          <FiExternalLink size={16} aria-hidden="true" />
          View
        </a>
      )}
    </motion.article>
  )
}
