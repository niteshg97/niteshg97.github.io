import { motion } from 'framer-motion'
import { useFadeUpVariants } from '../../hooks/useFadeUpVariants'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  const fadeUp = useFadeUpVariants()

  return (
    <section id="projects" className="mx-auto max-w-5xl border-t border-border px-6 py-24">
      <SectionHeading eyebrow="Projects" title="Engineering work, built end to end." />

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
