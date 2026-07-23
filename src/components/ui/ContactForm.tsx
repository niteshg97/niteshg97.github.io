import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { FiSend } from 'react-icons/fi'
import { contactEmail } from '../../data/contact'
import { focusRing } from '../../utils/styles'

interface FormState {
  name: string
  email: string
  message: string
}

const initialState: FormState = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)

  const handleChange =
    (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target
      setForm((prev) => ({ ...prev, [field]: value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <label htmlFor="contact-name" className="font-mono text-xs uppercase tracking-wide text-text-muted">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange('name')}
          placeholder="Your name"
          className={`mt-2 w-full rounded-md border border-border bg-bg px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-signal ${focusRing}`}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="font-mono text-xs uppercase tracking-wide text-text-muted">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange('email')}
          placeholder="you@example.com"
          className={`mt-2 w-full rounded-md border border-border bg-bg px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-signal ${focusRing}`}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="font-mono text-xs uppercase tracking-wide text-text-muted">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange('message')}
          placeholder="What would you like to discuss?"
          className={`mt-2 w-full resize-none rounded-md border border-border bg-bg px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-signal ${focusRing}`}
        />
      </div>

      <button
        type="submit"
        className={`mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-signal px-5 py-2.5 font-mono text-sm text-bg transition-all duration-200 hover:-translate-y-0.5 hover:bg-signal/90 active:translate-y-0 ${focusRing}`}
      >
        <FiSend size={16} aria-hidden="true" />
        Send Message
      </button>

      <p className="font-mono text-xs text-text-muted">
        Opens your email client with this message pre-filled.
      </p>
    </form>
  )
}
