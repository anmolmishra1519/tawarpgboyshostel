import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Users, BedDouble, GraduationCap, ShieldCheck, ArrowDown } from 'lucide-react'
import MagneticButton from './ui/MagneticButton'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const STATS = [
  { icon: Star, label: '4.9 Rating', sub: 'Google Reviews' },
  { icon: Users, label: '500+ Residents', sub: 'And counting' },
  { icon: BedDouble, label: 'Fully Furnished', sub: 'Every room' },
  { icon: GraduationCap, label: 'Near Top Colleges', sub: 'Walkable distance' },
  { icon: ShieldCheck, label: '24×7 Security', sub: 'CCTV monitored' }
]

// Real property photography. Rotates automatically — swap/add files in
// /public/images/hero to change what appears here.
const HERO_IMAGES = [
  { src: '/images/hero/boys-pg-greater-noida-corridor.jpg', alt: 'Clean, secure corridor at Tawar PG, a premium boys PG in Greater Noida' },
  { src: '/images/hero/boys-hostel-fitness-gym-greater-noida.jpg', alt: 'Fitness club access for residents of Tawar Boys Hostel, Greater Noida' },
  { src: '/images/hero/premium-gym-facility-near-niet-greater-noida.jpg', alt: 'Modern gym facility near NIET and GL Bajaj, Greater Noida' },
  { src: '/images/hero/boys-pg-dining-area-greater-noida.jpg', alt: 'Common dining area at Tawar PG & Boys Hostel, Greater Noida' }
]

const ROTATE_INTERVAL = 10000

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length)
    }, ROTATE_INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden"
    >
      {/* Rotating background images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={HERO_IMAGES[index].src}
            src={HERO_IMAGES[index].src}
            alt={HERO_IMAGES[index].alt}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.4, ease: 'easeInOut' }, scale: { duration: ROTATE_INTERVAL / 1000, ease: 'linear' } }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-ink/20" />

        {/* Rotation indicator dots */}
        <div className="absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 flex gap-2 z-10">
          {HERO_IMAGES.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setIndex(i)}
              aria-label={`Show background image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-8 bg-gold' : 'w-1.5 bg-bg/40 hover:bg-bg/70'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 section-container w-full pt-28 pb-16 md:py-32">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-end lg:items-center">
          {/* Left copy block */}
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.span variants={fadeUp} className="eyebrow text-gold">
              Welcome to Tawar PG &amp; Boys Hostel, Greater Noida
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-bg text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-3xl"
            >
              Premium Boys PG in
              <br />
              Greater Noida
            </motion.h1>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-4 gap-y-1 font-button text-lg md:text-xl text-bg/90">
              <span>Comfort.</span>
              <span>Security.</span>
              <span>Convenience.</span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-bg/75 text-base md:text-lg max-w-xl leading-relaxed"
            >
              A fully furnished boys PG in Greater Noida built for students and
              working professionals, just minutes from NIET, GL Bajaj and
              Galgotia College. Enjoy high-speed Wi-Fi, hygienic surroundings,
              24×7 security, daily housekeeping, and a peaceful student-friendly
              environment near Knowledge Park and Pari Chowk.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <MagneticButton as="a" href="#contact" className="btn-gold">
                Book a Visit
              </MagneticButton>
              <MagneticButton as="a" href="#rooms" className="btn-outline !text-bg !border-bg/30 hover:!text-gold hover:!border-gold">
                Explore Rooms
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right floating glass stat card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block"
          >
            <div className="glass rounded-card p-6 lg:p-8 animate-float shadow-lift">
              <ul className="flex flex-col gap-5">
                {STATS.map(({ icon: Icon, label, sub }, i) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gold/20 text-gold shrink-0">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-number text-bg font-semibold text-base leading-tight">
                        {label}
                      </span>
                      <span className="text-bg/60 text-xs">{sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#location"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-bg/70 hover:text-gold transition-colors"
        aria-label="Scroll to explore"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-button">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  )
}
