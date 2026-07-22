const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display font-semibold text-text-primary tracking-tight">
          nitesh<span className="text-trace">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-signal transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
} 
