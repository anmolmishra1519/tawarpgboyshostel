import { motion } from 'framer-motion'
import { Phone, MessageCircle, Instagram, MapPin, Clock } from 'lucide-react'
import MagneticButton from './ui/MagneticButton'
import { fadeUp, viewportOnce } from '../lib/motion'
import { WHATSAPP_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_HREF, GATE_TIMINGS, ADDRESS_LINE, ADDRESS_MAPS_URL, MAP_EMBED_URL } from '../lib/contact'

const CONTACT_INFO = [
  { icon: Phone, label: 'Phone / WhatsApp', value: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: Instagram, label: 'Instagram', value: '@tawarboyspg', href: INSTAGRAM_URL },
  { icon: MapPin, label: 'Address', value: ADDRESS_LINE, href: ADDRESS_MAPS_URL },
  { icon: Clock, label: 'Gate Timings', value: `${GATE_TIMINGS}, Daily`, href: null }
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="section-container grid lg:grid-cols-2 gap-14 lg:gap-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <span className="eyebrow">Contact &amp; Booking</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Let&apos;s Get You Settled In
            </h2>
            <p className="text-muted text-base md:text-lg max-w-md">
              Reach out directly or message us on WhatsApp — our team responds within a few hours.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold shrink-0">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-muted text-xs uppercase tracking-wide">{label}</span>
                    <span className="text-ink font-medium">{value}</span>
                  </div>
                </div>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              )
            })}
          </ul>

          <div className="rounded-card overflow-hidden border border-border h-64">
            <iframe
              title="Tawar PG & Boys Hostel location on Google Maps"
              src={MAP_EMBED_URL}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="card-luxury p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center gap-6"
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366]">
            <MessageCircle size={30} strokeWidth={1.75} />
          </span>
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-2xl font-semibold">Book Your Visit on WhatsApp</h3>
            <p className="text-muted max-w-sm">
              Tap below to start a chat — we&apos;ll help you pick a room, confirm
              availability, and schedule your visit in minutes.
            </p>
          </div>

          <MagneticButton
            as="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full max-w-xs"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </MagneticButton>

          <div className="flex items-center gap-2 text-sm text-muted pt-2 border-t border-border w-full justify-center">
            <Clock size={15} className="text-gold" /> Gate open {GATE_TIMINGS}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
