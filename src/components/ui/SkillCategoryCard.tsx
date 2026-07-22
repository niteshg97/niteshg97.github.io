import type { IconType } from 'react-icons'
import type { Skill } from '../../types'
import SkillBar from './SkillBar'

interface SkillCategoryCardProps {
  label: string
  icon: IconType
  skills: Skill[]
}

export default function SkillCategoryCard({ label, icon: Icon, skills }: SkillCategoryCardProps) {
  return (
    <div className="rounded-lg border border-border bg-bg-elevated p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-signal/10 text-signal">
          <Icon size={18} aria-hidden="true" />
        </span>
        <h3 className="font-display text-lg font-semibold text-text-primary">{label}</h3>
      </div>

      <div className="mt-6 space-y-5">
        {skills.map((skill) => (
          <SkillBar key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}
