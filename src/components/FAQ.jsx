import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, viewportOnce } from '../lib/motion'
import { FAQS } from '../lib/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-bg">
      <div className="section-container max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="Boys PG in Greater Noida — Common Questions" align="center" />

        <div className="mt-12 flex flex-col divide-y divide-border border-t border-b border-border">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                custom={i * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl font-medium">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-gold/10 text-gold"
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted pb-6 leading-relaxed max-w-2xl">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
