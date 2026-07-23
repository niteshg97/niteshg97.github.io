import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FiFileText, FiExternalLink, FiGithub, FiHash } from 'react-icons/fi'
import type { Publication } from '../../types'
import StatusBadge from './StatusBadge'
import { useCardHoverMotion } from '../../hooks/useCardHoverMotion'
import { cardBase, focusRing } from '../../utils/styles'

interface PublicationCardProps {
  publication: Publication
}

interface PublicationLink {
  label: string
  href: string
  icon: IconType
}

const PRIMARY_AUTHOR = 'Nitesh Kumar'

export default function PublicationCard({
  publication,
}: PublicationCardProps) {
  const {
    title,
    authors,
    venue,
    year,
    status,
    abstract,
    paperUrl,
    arxivUrl,
    doi,
    githubUrl,
  } = publication

  const cardHover = useCardHoverMotion()

  const links: PublicationLink[] = [
    paperUrl ? { label: 'Paper', href: paperUrl, icon: FiFileText } : null,
    arxivUrl
      ? { label: 'arXiv', href: arxivUrl, icon: FiExternalLink }
      : null,
    doi
      ? { label: 'DOI', href: `https://doi.org/${doi}`, icon: FiHash }
      : null,
    githubUrl
      ? { label: 'Code', href: githubUrl, icon: FiGithub }
      : null,
  ].filter((link): link is PublicationLink => link !== null)

  return (
    <motion.article {...cardHover} className={`p-6 ${cardBase}`}>
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status={status} />
        <span className="font-mono text-xs text-text-muted">
          {venue} · {year}
        </span>
      </div>

      <h3 className="mt-3 font-display text-xl font-semibold text-text-primary md:text-2xl">
        {title}
      </h3>

      <p className="mt-1.5 font-mono text-sm text-text-muted">
        {authors.map((author, index) => (
          <span
            key={author}
            className={author === PRIMARY_AUTHOR ? 'text-text-primary' : ''}
          >
            {author}
            {index < authors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted">
        {abstract}
      </p>

      {links.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-5 font-mono text-sm">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 rounded-sm text-text-muted transition-colors duration-200 hover:text-signal ${focusRing}`}
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      )}
    </motion.article>
  )
}
