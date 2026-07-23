import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import Badge from './Badge'
import { useCardHoverMotion } from '../../hooks/useCardHoverMotion'
import { cardBase, focusRing } from '../../utils/styles'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, githubUrl, demoUrl, featured } = project
  const cardHover = useCardHoverMotion()

  return (
    <motion.article
      {...cardHover}
      className={`group relative flex flex-col p-6 ${cardBase} ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {featured && (
        <span className="mb-3 w-fit rounded-full bg-signal/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-signal">
          Featured
        </span>
      )}

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-text-primary">
          {title}
        </h3>

        <FiArrowUpRight
          size={18}
          aria-hidden="true"
          className="mt-1 shrink-0 text-text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
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
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 rounded-sm text-text-muted transition-colors duration-200 hover:text-signal ${focusRing}`}
        >
          <FiGithub size={16} aria-hidden="true" />
          Code
        </a>

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 rounded-sm text-text-muted transition-colors duration-200 hover:text-signal ${focusRing}`}
          >
            <FiArrowUpRight size={16} aria-hidden="true" />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  )
}
