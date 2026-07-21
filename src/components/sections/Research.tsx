import { motion, useReducedMotion } from 'framer-motion'
import type { PublicationCategory } from '../../types'
import { publications } from '../../data/publications'
import PublicationCard from '../ui/PublicationCard'

const categoryOrder: PublicationCategory[] = [
  'journal',
  'conference',
  'preprint',
  'project',
  'oss-contribution',
]

const categoryLabels: Record<PublicationCategory, string> = {
  journal: 'Journal Publications',
  conference: 'Conference Publications',
  preprint: 'Preprints',
  project: 'Research Software & Technical Projects',
  'oss-contribution': 'Open Source Contributions',
}

export default function Research() {
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
        ease: 'easeOut' as const,
      },
    },
  }

  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: publications.filter((pub) => pub.category === category),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <section
      id="research"
      className="mx-auto max-w-5xl border-t border-border px-6 py-24"
    >
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-4 font-mono text-sm uppercase tracking-wide text-trace"
      >
        Research &amp; Open Source
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-3xl font-display text-3xl font-semibold text-text-primary md:text-4xl"
      >
      </motion.h2>

      <div className="mt-14">
        {grouped.map((group, index) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className={index > 0 ? 'mt-14' : ''}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted">
              {categoryLabels[group.category]}
            </h3>

            <div className="mt-4 divide-y divide-border">
              {group.items.map((publication) => (
                <PublicationCard
                  key={publication.id}
                  publication={publication}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
