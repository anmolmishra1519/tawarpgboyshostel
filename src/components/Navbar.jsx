import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from './ui/MagneticButton'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Nearby', href: '#nearby' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-soft border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-20 md:h-24">
        <a href="#home" className="flex flex-col leading-none group">
          <span
            className={`font-display text-xl md:text-2xl font-semibold tracking-tight transition-colors ${
              scrolled ? 'text-ink' : 'text-bg'
            }`}
          >
            Tawar <span className="text-gold">PG</span>
          </span>
          <span
            className={`font-button text-[10px] md:text-xs tracking-[0.3em] uppercase transition-colors ${
              scrolled ? 'text-muted' : 'text-bg/70'
            }`}
          >
            & Boys Hostel
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`font-button text-sm tracking-wide transition-colors ${
                  scrolled ? 'text-ink/80 hover:text-ink' : 'text-bg/85 hover:text-bg'
                }`}
              >
                {link.label}
              </a>
              {activeSection === link.href && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <MagneticButton as="a" href="#contact" className="btn-gold !py-3 !px-6 text-sm">
            Book Visit
          </MagneticButton>
        </div>

        <button
          className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-ink' : 'text-bg'}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-button text-base text-ink/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold w-full text-center"
                >
                  Book Visit
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
