import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import MagneticButton from './ui/MagneticButton'
import { fadeUp, viewportOnce } from '../lib/motion'
import { buildWhatsAppUrl } from '../lib/contact'

const ROOMS = [
  {
    name: 'Double Sharing',
    price: '₹9,000',
    image: '/images/rooms/double-sharing-room-boys-pg-greater-noida.jpg',
    alt: 'Double sharing room in a fully furnished boys PG in Greater Noida',
    features: ['2 Beds', 'Shared Wardrobe', 'Study Area']
  },
  {
    name: 'Triple Sharing',
    price: '₹7,500',
    image: '/images/rooms/triple-sharing-room-boys-pg-greater-noida.jpg',
    alt: 'Triple sharing room with attached washroom in an affordable boys PG in Greater Noida',
    features: ['3 Beds', 'Individual Storage', 'Study Corner', 'Attached Washroom']
  }
]

export default function RoomTypes() {
  return (
    <section id="rooms" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Room Types"
          title="Affordable Boys PG Rooms in Greater Noida"
          description="Two fully furnished room formats near NIET, GL Bajaj and Galgotia College — pick the one that fits how you live."
        />

        <div className="grid sm:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.name}
              variants={fadeUp}
              custom={i * 0.12}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="card-luxury overflow-hidden flex flex-col group"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 glass rounded-pill px-4 py-1.5 text-bg text-xs font-button tracking-wide">
                  {room.name}
                </span>
              </div>

              <div className="p-5 sm:p-7 flex flex-col gap-4 sm:gap-5 flex-1">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {room.name} Room in Greater Noida
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-number text-3xl font-semibold text-ink">{room.price}</span>
                  <span className="text-muted text-sm">/ month</span>
                </div>

                <ul className="grid grid-cols-2 gap-y-2 gap-x-3">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted">
                      <Check size={15} className="text-gold shrink-0" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <MagneticButton
                    as="a"
                    href={buildWhatsAppUrl(room.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold !py-3.5 text-sm w-full"
                  >
                    Book {room.name}
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
