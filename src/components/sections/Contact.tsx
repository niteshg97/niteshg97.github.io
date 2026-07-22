import { motion, useReducedMotion } from 'framer-motion'
import { FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { contactIntro, contactEmail, contactLocation, contactAvailability } from '../../data/contact'
import ContactInfoCard from '../ui/ContactInfoCard'
import ContactForm from '../ui/ContactForm'
import SocialIcons from '../ui/SocialIcons'

export default function Contact() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl border-t border-border px-6 py-24">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-4 font-mono text-sm uppercase tracking-wide text-trace"
      >
        Contact
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-2xl font-display text-3xl font-semibold text-text-primary md:text-4xl"
      >
        Let's connect over AI, open source, and innovative ideas.
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted"
      >
        {contactIntro}
      </motion.p>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col gap-4"
        >
          <ContactInfoCard icon={FiMail} label="Email" value={contactEmail} href={`mailto:${contactEmail}`} />
          <ContactInfoCard icon={FiMapPin} label="Location" value={contactLocation} />
          <ContactInfoCard icon={FiClock} label="Availability" value={contactAvailability} />

          <div className="mt-2 rounded-lg border border-border bg-bg-elevated p-5">
            <p className="font-mono text-xs uppercase tracking-wide text-text-muted">Elsewhere</p>
            <div className="mt-3">
              <SocialIcons />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="rounded-lg border border-border bg-bg-elevated p-6"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
