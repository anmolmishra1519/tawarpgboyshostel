import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../lib/motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] ${
          light ? 'text-bg' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`font-body text-base md:text-lg ${light ? 'text-bg/70' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
