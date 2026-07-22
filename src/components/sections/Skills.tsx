import { motion, useReducedMotion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FiCode, FiActivity, FiCpu, FiTool } from 'react-icons/fi'

import type { SkillCategory } from '../../types'
import { skills } from '../../data/skills'
import SkillCategoryCard from '../ui/SkillCategoryCard'

const categoryOrder: SkillCategory[] = [
  'languages',
  'ml-fpga',
  'embedded-instrumentation',
  'tools',
]

const categoryMeta: Record<
  SkillCategory,
  {
    label: string
    icon: IconType
  }
> = {
  languages: {
    label: 'Programming Languages',
    icon: FiCode,
  },
  'ml-fpga': {
    label: 'Machine Learning & AI',
    icon: FiActivity,
  },
  'embedded-instrumentation': {
    label: 'FPGA & Embedded Systems',
    icon: FiCpu,
  },
  tools: {
    label: 'Research & Development Tools',
    icon: FiTool,
  },
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: skills.filter((skill) => skill.category === category),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl border-t border-border px-6 py-24"
    >
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-4 font-mono text-sm uppercase tracking-wide text-trace"
      >
        Skills
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-2xl font-display text-3xl font-semibold text-text-primary md:text-4xl"
      >
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {grouped.map((group) => (
          <SkillCategoryCard
            key={group.category}
            label={categoryMeta[group.category].label}
            icon={categoryMeta[group.category].icon}
            skills={group.items}
          />
        ))}
      </motion.div>
    </section>
  )
}
