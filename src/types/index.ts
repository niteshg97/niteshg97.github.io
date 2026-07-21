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
