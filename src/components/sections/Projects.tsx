import { motion, useReducedMotion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  }

  return (
    <section id="projects" className="mx-auto max-w-5xl border-t border-border px-6 py-24">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-4 font-mono text-sm uppercase tracking-wide text-trace"
      >
        Projects
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-2xl font-display text-3xl font-semibold text-text-primary md:text-4xl"
      >
        Selected Projects.
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
