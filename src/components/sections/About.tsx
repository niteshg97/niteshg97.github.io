import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

import StatCard from '../ui/StatCard'
import TimelineItem from '../ui/TimelineItem'
import { summary, stats, timeline } from '../../data/about'

export default function About() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="about"
      className="mx-auto max-w-5xl border-t border-border px-6 py-24"
    >
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-4 font-mono text-sm uppercase tracking-wide text-trace"
      >
        About
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-3xl font-display text-3xl font-semibold text-text-primary md:text-4xl"
      >
        Engineering Efficient AI for Real-World Systems.
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mt-6 max-w-3xl text-base leading-relaxed text-text-muted"
      >
        {summary}
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </motion.div>

      <div className="mt-20">
        <h3 className="mb-8 font-display text-xl font-semibold text-text-primary">
          Education &amp; Experience
        </h3>

        <ol className="relative ml-[29px] border-l border-border">
          {timeline.map((entry) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
