import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

import Button from '../ui/Button'
import SocialIcons from '../ui/SocialIcons'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  }

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0,260 L120,260 L150,120 L190,400 L230,260 L400,260 L430,180 L470,320 L510,260 L1000,260"
          fill="none"
          stroke="var(--color-signal)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.8,
            ease: [0.42, 0, 0.58, 1],
            delay: 0.2,
          }}
        />
      </svg>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-5xl px-6"
      >
        <motion.p
          variants={item}
          className="mb-4 font-mono text-sm uppercase tracking-wide text-trace"
        >
          Electrical Engineering · NIT Patna
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl font-display text-4xl font-semibold leading-tight text-text-primary sm:text-5xl md:text-6xl"
        >
         Building Efficient AI for Real-World Systems
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg"
        >
          Undergraduate researcher building efficient machine learning systems
          across hardware acceleration, computer vision, robotics, and
          scientific instrumentation—with a focus on deploying AI where
          performance and reliability matter.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/resume.pdf" variant="primary" external>
            Download Résumé
          </Button>

          <Button href="#contact" variant="secondary">
            Get in Touch
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-10">
          <SocialIcons />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 1.2,
          duration: 0.6,
        }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted [writing-mode:vertical-lr]">
          Scroll
        </span>

        <div className="relative h-8 w-px overflow-hidden bg-border">
          <motion.div
            className="absolute top-0 h-3 w-px bg-signal"
            animate={shouldReduceMotion ? {} : { y: [0, 20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: [0.42, 0, 0.58, 1],
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
