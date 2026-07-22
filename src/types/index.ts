export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'scholar' | 'leetcode'
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

export type SkillCategory = 'languages' | 'ml-fpga' | 'embedded-instrumentation' | 'tools'

export interface Skill {
  id: string
  category: SkillCategory
  name: string
  proficiency: number
  context?: string
}

export type AchievementCategory = 'award' | 'competition' | 'leadership' | 'open-source' | 'recognition'

export interface Achievement {
  id: string
  title: string
  organization: string
  year: number
  category: AchievementCategory
  description: string
  highlight?: string
  link?: string
}

export interface NavLink {
  label: string
  href: string
}
