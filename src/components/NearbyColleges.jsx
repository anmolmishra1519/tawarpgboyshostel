import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Clock, ExternalLink } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const COLLEGES = [
  { name: 'NIET', distance: '1.2 km', time: '5 min walk', maps: 'https://maps.google.com/?q=NIET+Greater+Noida' },
  { name: 'GL Bajaj', distance: '2 km', time: '8 min drive', maps: 'https://maps.google.com/?q=GL+Bajaj+Greater+Noida' },
  { name: 'Galgotia College', distance: '2.5 km', time: '9 min drive', maps: 'https://maps.google.com/?q=Galgotia+College+Greater+Noida' },
  { name: 'IILM Greater Noida', distance: '1.5 km', time: '6 min drive', maps: 'https://maps.google.com/?q=IILM+Greater+Noida' },
  { name: 'ITS Engineering College', distance: '3 km', time: '11 min drive', maps: 'https://maps.google.com/?q=ITS+Engineering+College+Greater+Noida' },
  { name: 'KCC Institute', distance: '2.5 km', time: '9 min drive', maps: 'https://maps.google.com/?q=KCC+Institute+Greater+Noida' },
  { name: 'GNIOT', distance: '2.2 km', time: '8 min drive', maps: 'https://maps.google.com/?q=GNIOT+Greater+Noida' },
  { name: 'IMT Greater Noida', distance: '3 km', time: '10 min drive', maps: 'https://maps.google.com/?q=IMT+Greater+Noida' },
  { name: 'Amity University', distance: '4.5 km', time: '15 min drive', maps: 'https://maps.google.com/?q=Amity+University+Greater+Noida' },
  { name: 'Knowledge Park Metro', distance: '700 m', time: '3 min walk', maps: 'https://maps.google.com/?q=Knowledge+Park+Metro+Station' }
]

export default function NearbyColleges() {
  return (
    <section id="nearby" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Nearby Colleges"
          title="Boys PG Near Top Colleges in Greater Noida"
          description="Tawar PG & Boys Hostel sits within easy reach of NIET, GL Bajaj, Galgotia College, GNIOT, Amity and more — walk, cycle or drive to class."
          align="center"
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10"
        >
          {COLLEGES.map((c) => (
            <motion.a
              key={c.name}
              variants={fadeUp}
              href={c.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="card-luxury p-6 flex flex-col gap-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gold/10 text-gold">
                  <GraduationCap size={20} strokeWidth={1.75} />
                </span>
                <ExternalLink size={16} className="text-muted group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug">{c.name}</h3>
              <div className="flex flex-col gap-1.5 text-sm text-muted border-t border-border pt-3">
                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gold" /> {c.distance}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-gold" /> {c.time}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
