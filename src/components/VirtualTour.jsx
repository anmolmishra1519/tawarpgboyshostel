import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'
import Room360Viewer from './Room360Viewer'

export default function VirtualTour() {
  return (
    <section className="relative py-16 md:py-24 bg-ink overflow-hidden">
      <div className="section-container relative z-10 text-center flex flex-col items-center gap-4">
        <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="eyebrow">
          Virtual Tour
        </motion.span>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-bg max-w-2xl"
        >
          Step Inside Before You Arrive
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-bg/60 max-w-md mb-6"
        >
          Drag across the frame to look around the room, or let it rotate on its own.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="w-full"
        >
          <Room360Viewer />
        </motion.div>
      </div>
    </section>
  )
}
