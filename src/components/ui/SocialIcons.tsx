import type { IconType } from 'react-icons'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { socials } from '../../data/socials'
import type { SocialLink } from '../../types'
import { focusRing } from '../../utils/styles'

const iconMap: Record<SocialLink['icon'], IconType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
  scholar: FaGraduationCap,
  leetcode: SiLeetcode,
}

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((s) => {
        const Icon = iconMap[s.icon]

        return (
          <a
            key={s.label}
            href={s.href}
            target={s.icon === 'mail' ? undefined : '_blank'}
            rel={s.icon === 'mail' ? undefined : 'noopener noreferrer'}
            aria-label={s.label}
            className={`rounded-sm text-text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-signal ${focusRing}`}
          >
            <Icon size={20} aria-hidden="true" />
          </a>
        )
      })}
    </div>
  )
}
