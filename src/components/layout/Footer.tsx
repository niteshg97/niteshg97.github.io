import { FiArrowUp } from 'react-icons/fi'
import { navLinks } from '../../data/navigation'
import SocialIcons from '../ui/SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <a href="#home" className="font-display font-semibold text-text-primary tracking-tight">
              nitesh<span className="text-trace">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Building intelligent systems with AI/ML, edge computing, and modern software engineering practices.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-sm text-text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-signal">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-text-muted">Elsewhere</p>
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
          className="flex items-center gap-1.5 font-mono text-xs text-text-muted transition-colors hover:text-signal"
          >
          Back to top
          <FiArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
