import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL, PHONE_HREF } from '../lib/contact'

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-center gap-3">
      <motion.a
        href={PHONE_HREF}
        aria-label="Call Tawar PG & Boys Hostel"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold shadow-lift"
      >
        <Phone className="text-ink" size={22} strokeWidth={2} fill="currentColor" />
      </motion.a>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp to book your room"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-lift"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="relative text-white" size={26} strokeWidth={2} fill="white" />
      </motion.a>
    </div>
  )
}
