import { motion } from 'framer-motion'
import { MapPin, Clock, Store } from 'lucide-react'
import { fadeUp, viewportOnce } from '../lib/motion'

const PLACES = [
  { name: 'Pari Chowk', type: 'Central Landmark', distance: '300 m', time: '2 min' },
  { name: 'Tugalpur Market', type: 'Local Market', distance: '600 m', time: '2 min' },
  { name: 'Venice Mall', type: 'Shopping Mall', distance: '3 km', time: '10 min' },
  { name: 'Ansal Plaza', type: 'Shopping Complex', distance: '200 m', time: '1 min' },
  { name: 'India Expo Mart', type: 'Exhibition Centre', distance: '500 m', time: '2 min' },
  { name: 'Smart Bazaar & Zudio', type: 'Retail Stores', distance: '1 km', time: '4 min' }
]

export default function TrustedLocation() {
  return (
    <section id="location" className="py-16 md:py-24 bg-bg">
      <div className="section-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="eyebrow">Trusted Location</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Minutes from Everything That Matters
            </h2>
          </div>
          <p className="text-muted max-w-sm">
            Tawar PG &amp; Boys Hostel is located near Pari Chowk and Tugalpur,
            close to Venice Mall, Ansal Plaza and India Expo Mart, in a
            well-known student housing area also home to hostels like Palm
            Hostel, Nalanda Hostel and White House Hostel.
          </p>
        </motion.div>
      </div>

      <div className="pl-6 md:pl-10 lg:pl-16">
        <div className="flex gap-5 overflow-x-auto pb-6 pr-6 snap-x snap-mandatory scrollbar-none">
          {PLACES.map((place, i) => (
            <motion.div
              key={place.name}
              variants={fadeUp}
              custom={i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="snap-start shrink-0 w-[280px] card-luxury p-6 flex flex-col gap-5"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold">
                <Store size={22} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">{place.name}</h3>
                <p className="text-muted text-sm mt-1">{place.type}</p>
              </div>
              <div className="flex items-center gap-4 text-sm font-number text-ink/80 border-t border-border pt-4">
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-gold" /> {place.distance}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={15} className="text-gold" /> {place.time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
