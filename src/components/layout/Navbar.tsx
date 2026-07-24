import { useCallback, useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../../data/navigation'
import { focusRing } from '../../utils/styles'
import MobileMenu from '../ui/MobileMenu'

export default function Navbar() {
  const [activeHref, setActiveHref] = useState<string>('#home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sectionIds = ['home', ...navLinks.map((link) => link.href.replace('#', ''))]

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <a
          href="#home"
          className={`rounded-sm font-display font-semibold tracking-tight text-text-primary ${focusRing}`}
        >
          nitesh<span className="text-trace">.</span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-sm md:flex">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`rounded-sm py-1 transition-colors duration-200 ${focusRing} ${
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

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className={`flex h-9 w-9 items-center justify-center rounded-md text-text-primary md:hidden ${focusRing}`}
        >
          {isMenuOpen ? (
            <FiX size={22} aria-hidden="true" />
          ) : (
            <FiMenu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      <MobileMenu
        id="mobile-nav-menu"
        isOpen={isMenuOpen}
        activeHref={activeHref}
        onNavigate={closeMenu}
      />
    </header>
  )
}
