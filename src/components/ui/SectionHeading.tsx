import { motion } from 'framer-motion'
import { useFadeUpVariants } from '../../hooks/useFadeUpVariants'

interface SectionHeadingProps {
  eyebrow: string
  title: string
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  const fadeUp = useFadeUpVariants()

  return (
    <>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-4 font-mono text-sm uppercase tracking-wide text-trace"
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-2xl font-display text-3xl font-semibold text-text-primary md:text-4xl"
      >
        {title}
      </motion.h2>
    </>
  )
}
