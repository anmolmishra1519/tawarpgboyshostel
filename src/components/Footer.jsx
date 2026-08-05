import { Instagram, MessageCircle, MapPin, Phone, Clock } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL, INSTAGRAM_URL, GATE_TIMINGS, ADDRESS_LINE, MAP_EMBED_URL } from '../lib/contact'

const QUICK_LINKS = [
  { label: 'About This Boys PG', href: '#about' },
  { label: 'PG Amenities', href: '#amenities' },
  { label: 'Room Types & Pricing', href: '#rooms' },
  { label: 'Photo Gallery', href: '#gallery' },
  { label: 'Nearby Colleges', href: '#nearby' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact & Booking', href: '#contact' }
]

const SOCIALS = [
  { icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' },
  { icon: MessageCircle, href: WHATSAPP_URL, label: 'WhatsApp' }
]

export default function Footer() {
  return (
    <footer className="bg-footer text-bg pt-14 md:pt-20 pb-8">
      <div className="section-container grid md:grid-cols-4 gap-12 pb-14 border-b border-white/10">
        <div className="flex flex-col gap-4 md:col-span-1">
          <span className="font-display text-2xl font-semibold">
            Tawar <span className="text-gold">PG</span>
          </span>
          <p className="text-bg/60 text-sm leading-relaxed">
            A premium, fully furnished boys PG in Greater Noida for students
            &amp; professionals. Comfort, security and convenience, all under
            one roof.
          </p>
          <p className="text-bg/40 text-xs leading-relaxed">
            Serving students near NIET, GL Bajaj, Galgotia College, GNIOT,
            ITS, KCC Institute, IMT and Amity University.
          </p>
          <div className="flex items-center gap-4 mt-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-bg/70 hover:text-gold hover:border-gold transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-button text-sm tracking-[0.2em] uppercase text-bg/50">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-bg/75 hover:text-gold transition-colors text-sm">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-button text-sm tracking-[0.2em] uppercase text-bg/50">Contact</h4>
          <ul className="flex flex-col gap-3 text-sm text-bg/75">
            <li>
              <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={15} className="text-gold" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2"><Clock size={15} className="text-gold" /> Gate: {GATE_TIMINGS}</li>
            <li className="flex items-start gap-2"><MapPin size={15} className="text-gold mt-0.5" /> {ADDRESS_LINE}</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-button text-sm tracking-[0.2em] uppercase text-bg/50">Find Us</h4>
          <div className="rounded-card overflow-hidden h-36 border border-white/10">
            <iframe
              title="Tawar PG & Boys Hostel map location"
              src={MAP_EMBED_URL}
              className="w-full h-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="section-container pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-bg/50 text-xs">
        <span>© {new Date().getFullYear()} Tawar PG &amp; Boys Hostel. All rights reserved.</span>
        <span>Crafted with care for a premium living experience.</span>
      </div>

      <div className="section-container pt-4 flex items-center justify-center">
        <span className="text-bg/40 text-xs tracking-wide">Designed by Web Nexa</span>
      </div>
    </footer>
  )
}
