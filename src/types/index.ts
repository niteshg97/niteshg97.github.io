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

export type PublicationCategory = 'paper' | 'conference' | 'open-source'
export type PublicationStatus = 'Published' | 'Accepted' | 'Under Review' | 'Ongoing'

export interface Publication {
  id: string
  category: PublicationCategory
  title: string
  authors: string[]
  venue: string
  year: number
  status: PublicationStatus
  abstract: string
  paperUrl?: string
  arxivUrl?: string
  doi?: string
  githubUrl?: string
}
