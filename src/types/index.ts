export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'scholar'
}

export interface StatItem {
  label: string
  value: string
}

export interface TimelineEntry {
  id: string
  type: 'education' | 'experience'
  title: string
  organization: string
  period: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  tech: string[]
  githubUrl: string
  demoUrl?: string
  featured: boolean
}

/* -------------------------------------------
   Research & Open Source
-------------------------------------------- */

export type PublicationCategory =
  | 'journal'
  | 'conference'
  | 'preprint'
  | 'project'
  | 'oss-contribution'

export type PublicationStatus =
  | 'Published'
  | 'Accepted'
  | 'Under Review'
  | 'Ongoing'

export interface Publication {
  id: string
  category: PublicationCategory
  title: string
  authors: string[]
  venue: string
  year: number
  status: PublicationStatus
  abstract: string

  // Optional links
  githubUrl?: string
  paperUrl?: string
  arxivUrl?: string
  doi?: string
}
export type SkillCategory =
  | 'languages'
  | 'ml-fpga'
  | 'embedded-instrumentation'
  | 'tools'

export interface Skill {
  id: string
  category: SkillCategory
  name: string
  proficiency: number
  context?: string
}
