import { motion, useReducedMotion } from 'framer-motion'
import type { Skill } from '../../types'
import { getProficiencyLabel } from '../../utils/skillLevel'

interface SkillBarProps {
  skill: Skill
}

export default function SkillBar({ skill }: SkillBarProps) {
  const shouldReduceMotion = useReducedMotion()
  const { id, name, proficiency, context } = skill
  const contextId = `${id}-context`

  return (
    <div
      tabIndex={0}
      aria-describedby={context ? contextId : undefined}
      className="group w-full rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-sm text-text-primary">{name}</span>
        <span className="font-mono text-xs text-text-muted">{getProficiencyLabel(proficiency)}</span>
      </div>

      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border">
        <motion.div
          className="h-full rounded-full bg-signal"
          initial={{ width: '0%' }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {context && (
        <p
          id={contextId}
          className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-text-muted opacity-0 transition-all duration-200 group-hover:max-h-20 group-hover:opacity-100 group-focus-visible:max-h-20 group-focus-visible:opacity-100"
        >
          {context}
        </p>
      )}
    </div>
  )
}
