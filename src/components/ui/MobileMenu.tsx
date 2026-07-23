import type { NavLink } from '../../types'
import { navLinks } from '../../data/navigation'
import { focusRing } from '../../utils/styles'

interface MobileMenuProps {
  id: string
  isOpen: boolean
  activeHref: string
  onNavigate: () => void
}

export default function MobileMenu({
  id,
  isOpen,
  activeHref,
  onNavigate,
}: MobileMenuProps) {
  return (
    <div
      id={id}
      className={`overflow-hidden bg-bg transition-all duration-300 ease-out md:hidden ${
        isOpen
          ? 'max-h-96 border-t border-border opacity-100'
          : 'max-h-0 border-t-0 opacity-0'
      }`}
    >
      <ul className="flex flex-col gap-1 px-6 py-4 font-mono text-sm">
        {navLinks.map((link: NavLink) => {
          const isActive = activeHref === link.href

          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onNavigate}
                aria-current={isActive ? 'location' : undefined}
                className={`block rounded-md px-3 py-2.5 transition-colors duration-200 ${focusRing} ${
                  isActive
                    ? 'text-signal'
                    : 'text-text-muted hover:text-signal'
                }`}
              >
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
