export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted font-mono">
        <span>© {new Date().getFullYear()} Nitesh Kumar</span>
        <span>React · TypeScript · Tailwind</span>
      </div>
    </footer>
  )
}
