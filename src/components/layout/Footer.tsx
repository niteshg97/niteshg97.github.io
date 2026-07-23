import { FiArrowUp } from 'react-icons/fi'
import { navLinks } from '../../data/navigation'
import { focusRing } from '../../utils/styles'
import SocialIcons from '../ui/SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <a
              href="#home"
              className={`rounded-sm font-display font-semibold tracking-tight text-text-primary ${focusRing}`}
            >
              nitesh<span className="text-trace">.</span>
            </a>

            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              AI/ML Engineer passionate about open-source, edge AI, FPGA-accelerated
              machine learning, and building intelligent systems.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-sm text-text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`rounded-sm transition-colors duration-200 hover:text-signal ${focusRing}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-text-muted">
              Elsewhere
            </p>

            <div className="mt-3">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-border pt-6 md:flex-row md:justify-between">
          <span className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} Nitesh Kumar. All rights reserved.
          </span>

          <a
            href="#home"
            className={`flex items-center gap-1.5 rounded-sm font-mono text-xs text-text-muted transition-colors duration-200 hover:text-signal ${focusRing}`}
          >
            Back to top
            <FiArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
