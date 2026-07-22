export function getProficiencyLabel(proficiency: number): string {
  if (proficiency >= 90) return 'Advanced'
  if (proficiency >= 70) return 'Proficient'
  if (proficiency >= 50) return 'Working Knowledge'
  return 'Familiar'
}
