import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import {
  BedDouble, Wifi, ShieldCheck, Camera, BatteryCharging,
  Sparkles, Shirt, Droplets, ParkingCircle, DoorClosed, Dumbbell,
  ChevronLeft, ChevronRight
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, viewportOnce } from '../lib/motion'
import 'swiper/css'

const AMENITIES = [
  { icon: BedDouble, title: 'Fully Furnished Rooms', desc: 'Every room in this boys PG comes thoughtfully furnished with a bed, wardrobe and study table.' },
  { icon: Wifi, title: 'PG with High-Speed Wi-Fi', desc: 'Reliable, high-speed internet across every floor — ideal for students and professionals.' },
  { icon: ShieldCheck, title: 'Safe Boys Hostel', desc: 'Round-the-clock trained security personnel for a genuinely safe boys hostel in Greater Noida.' },
  { icon: Camera, title: 'PG with CCTV', desc: 'CCTV surveillance covers common areas and entry points at all times.' },
  { icon: BatteryCharging, title: 'PG with Power Backup', desc: 'Uninterrupted power backup so your day never pauses, even during outages.' },
  { icon: Sparkles, title: 'PG with Housekeeping', desc: 'Hotel-standard housekeeping keeps rooms, corridors and washrooms fresh and hygienic.' },
  { icon: Shirt, title: 'PG with Laundry', desc: 'Scheduled laundry pickup and delivery, hassle-free for busy students.' },
  { icon: Droplets, title: 'PG with RO Water', desc: 'Purified RO drinking water available on every floor, always.' },
  { icon: ParkingCircle, title: 'PG with Parking', desc: 'Secure parking for two-wheelers and bicycles on the premises.' },
  { icon: DoorClosed, title: 'Attached Washroom', desc: 'Private, well-maintained attached washroom in every room.' },
  { icon: Dumbbell, title: 'Fitness Club Access', desc: 'A fully equipped gym just steps away — a rare perk among student PGs in Greater Noida.' }
]

export default function WhyChooseUs() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section id="amenities" className="py-16 md:py-24 bg-bg overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Fully Furnished, Student-Friendly PG"
            description="Every amenity at this AC boys PG in Greater Noida is chosen to make daily life simpler, safer and more comfortable."
          />
          <div className="flex gap-3 self-start md:self-auto">
            <button
              ref={prevRef}
              aria-label="Previous amenity"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextRef}
              aria-label="Next amenity"
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
          slidesPerView={1.15}
          loop
          autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3.3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 }
          }}
          className="!pr-6 md:!pr-10 lg:!pr-16"
        >
          {AMENITIES.map(({ icon: Icon, title, desc }) => (
            <SwiperSlide key={title}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="card-luxury p-6 sm:p-8 flex flex-col gap-4 sm:gap-5 group h-full min-h-[190px] sm:min-h-[220px]"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold/20">
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
