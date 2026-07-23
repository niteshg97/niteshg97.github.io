import { useMemo } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { TargetAndTransition, Transition } from 'framer-motion'

interface CardHoverMotion {
  whileHover?: TargetAndTransition
  transition?: Transition
}

export function useCardHoverMotion(): CardHoverMotion {
  const shouldReduceMotion = useReducedMotion()

  return useMemo(() => {
    if (shouldReduceMotion) return {}
    return {
      whileHover: { y: -4 },
      transition: { duration: 0.2, ease: 'easeOut' },
    }
  }, [shouldReduceMotion])
}
