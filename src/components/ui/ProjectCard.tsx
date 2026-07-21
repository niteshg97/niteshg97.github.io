import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import Badge from './Badge'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, githubUrl, demoUrl, featured } = project

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col rounded-lg border border-border bg-bg-elevated p-6 transition-colors hover:border-signal/50 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {featured && (
        <span className="mb-3 w-fit rounded-full bg-signal/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-signal">
          Featured Research
        </span>
      )}

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-text-primary">
          {title}
        </h3>

        <FiArrowUpRight
          className="mt-1 shrink-0 text-text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
          size={18}
          aria-hidden="true"
        />
      </div>

      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5 font-mono text-sm">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-muted transition-colors hover:text-signal"
          >
            <FiGithub size={16} aria-hidden="true" />
            Code
          </a>
        )}

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-muted transition-colors hover:text-signal"
          >
            <FiArrowUpRight size={16} aria-hidden="true" />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  )
} 
