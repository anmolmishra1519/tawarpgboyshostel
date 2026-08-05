import { useState, useRef, useCallback, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, viewportOnce } from '../lib/motion'
import 'swiper/css'

const IMAGES = [
  { src: '/images/about/about-tawar-pg-boys-hostel-greater-noida.jpg', alt: 'Well-lit corridor at Tawar PG, a boys PG in Greater Noida' },
  { src: '/images/rooms/triple-sharing-room-boys-pg-greater-noida.jpg', alt: 'Furnished triple sharing room in an affordable boys PG in Greater Noida' },
  { src: '/images/hero/boys-hostel-fitness-gym-greater-noida.jpg', alt: 'Fitness club access for residents of this boys hostel in Greater Noida' },
  { src: '/images/gallery/boys-pg-corridor-fire-safety-greater-noida.jpg', alt: 'Corridor with fire safety equipment at a safe boys hostel in Greater Noida' },
  { src: '/images/rooms/double-sharing-room-boys-pg-greater-noida.jpg', alt: 'Comfortable double sharing room with study space, Tawar PG Greater Noida' },
  { src: '/images/hero/premium-gym-facility-near-niet-greater-noida.jpg', alt: 'Gym floor with cardio and strength equipment near NIET, Greater Noida' },
  { src: '/images/gallery/furnished-room-boys-hostel-greater-noida.jpg', alt: 'Fully furnished shared bedroom at Tawar Boys Hostel, Greater Noida' },
  { src: '/images/gallery/attached-washroom-boys-pg-greater-noida.jpg', alt: 'Clean attached washroom in a premium boys PG in Greater Noida' },
  { src: '/images/hero/boys-pg-greater-noida-corridor.jpg', alt: 'Spotless residence corridor at a fully furnished boys PG in Greater Noida' },
  { src: '/images/hero/boys-pg-dining-area-greater-noida.jpg', alt: 'Common dining area at Tawar PG & Boys Hostel, Greater Noida' },
  { src: '/images/gallery/boys-pg-dining-hall-greater-noida.jpg', alt: 'Residents at the common dining hall, Tawar PG Greater Noida' },
  { src: '/images/gallery/boys-pg-staircase-greater-noida.jpg', alt: 'Staircase connecting residence floors at Tawar Boys Hostel, Greater Noida' },
  { src: '/images/gallery/boys-hostel-corridor-greater-noida.jpg', alt: 'Well-lit residence corridor with cooling units near Knowledge Park' }
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(() => setActiveIndex((i) => (i === null ? null : (i + 1) % IMAGES.length)), [])
  const prev = useCallback(() => setActiveIndex((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length)), [])

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, next, prev])

  return (
    <section id="gallery" className="py-16 md:py-24 bg-bg overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Inside Our Boys PG in Greater Noida"
            description="A closer look at the fully furnished rooms and shared spaces at Tawar PG & Boys Hostel."
          />
          <div className="flex gap-3 self-start md:self-auto">
            <button
              ref={prevRef}
              aria-label="Previous photo"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextRef}
              aria-label="Next photo"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="pl-6 md:pl-10 lg:pl-16">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          loop
          autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3.2, spaceBetween: 24 }
          }}
          className="!pr-6 md:!pr-10 lg:!pr-16"
        >
          {IMAGES.map((img, i) => (
            <SwiperSlide key={img.src}>
              <motion.button
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                onClick={() => setActiveIndex(i)}
                className="relative block w-full h-72 md:h-80 rounded-card overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500 flex items-center justify-center">
                  <Expand className="text-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={26} />
                </div>
              </motion.button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/95 flex items-center justify-center p-4 md:p-10"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-bg/80 hover:text-gold transition-colors"
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 md:left-10 text-bg/70 hover:text-gold transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.img
              key={IMAGES[activeIndex].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              src={IMAGES[activeIndex].src}
              alt={IMAGES[activeIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-lift"
            />

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 md:right-10 text-bg/70 hover:text-gold transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
