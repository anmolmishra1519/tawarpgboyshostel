import { motion } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'
import { fadeUp, imageReveal, viewportOnce } from '../lib/motion'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-bg overflow-hidden">
      <div className="section-container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative rounded-card overflow-hidden shadow-lift"
        >
          <img
            src="/images/about/about-tawar-pg-boys-hostel-greater-noida.jpg"
            alt="Corridor inside Tawar PG, a fully furnished boys PG in Greater Noida"
            className="w-full h-[420px] md:h-[560px] object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-card p-5 flex items-center gap-4">
            <span className="font-number text-3xl font-semibold text-bg">5.0</span>
            <div className="flex flex-col">
              <span className="text-bg text-sm font-medium">Hospitality Rating</span>
              <span className="text-bg/60 text-xs">by resident surveys</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-6"
        >
          <span className="eyebrow">About Tawar PG &amp; Boys Hostel</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            A Trusted Boys Hostel in Greater Noida
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Tawar PG &amp; Boys Hostel is a fully furnished, student-friendly PG
            in Greater Noida, offering a clean, secure and comfortable living
            experience for students and professionals near NIET, GL Bajaj,
            Galgotia College and Knowledge Park.
          </p>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            We focus on hotel-like cleanliness, premium amenities and a
            welcoming atmosphere, so every resident of this boys hostel in
            Greater Noida feels genuinely at home.
          </p>
          <div className="pt-2">
            <MagneticButton as="a" href="#amenities" className="btn-outline">
              Know More
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
