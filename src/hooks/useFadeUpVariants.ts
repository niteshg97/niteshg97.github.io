import { useMemo } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const FADE_UP_DURATION = 0.5
const FADE_UP_EASE = 'easeOut' as const

export function useFadeUpVariants(distance: number = 16): Variants {
  const shouldReduceMotion = useReducedMotion()

  return useMemo(
    () => ({
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : distance },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: FADE_UP_DURATION, ease: FADE_UP_EASE },
      },
    }),
    [shouldReduceMotion, distance],
  )
}
