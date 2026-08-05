import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import 'swiper/css'
import 'swiper/css/pagination'

const REVIEWS = [
  {
    name: 'Rohit Sharma',
    initials: 'RS',
    role: 'NIET Student',
    text: 'The rooms feel like a hotel, not a hostel. Housekeeping is spotless every single day and the staff genuinely cares.'
  },
  {
    name: 'Aman Verma',
    initials: 'AV',
    role: 'Working Professional',
    text: 'Security and Wi-Fi were my top priorities and Tawar PG delivers on both without compromise. Highly recommended.'
  },
  {
    name: 'Karan Mehta',
    initials: 'KM',
    role: 'GL Bajaj Student',
    text: 'Walking distance from college, peaceful environment, and the food nearby is great too. Couldn\u2019t ask for more.'
  },
  {
    name: 'Devansh Rao',
    initials: 'DR',
    role: 'Galgotias Student',
    text: 'Booking a visit was smooth and the team was transparent about pricing from day one. Zero surprises.'
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-ink overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="Reviews"
          title="Loved by Our Residents"
          light
          align="center"
        />

        <div className="flex items-center justify-center gap-2 mt-8 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} className="fill-gold text-gold" />
          ))}
          <span className="font-number text-bg text-lg ml-2">4.9 / 5</span>
        </div>
      </div>

      <div className="mt-8 px-6 md:px-10 lg:px-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          centeredSlides={false}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3.2 }
          }}
          className="!pb-14"
        >
          {REVIEWS.map((r) => (
            <SwiperSlide key={r.name}>
              <div className="glass rounded-card p-8 h-full flex flex-col gap-6">
                <Quote className="text-gold" size={28} />
                <p className="text-bg/85 text-base leading-relaxed">{r.text}</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gold/20 text-gold font-number font-semibold text-sm shrink-0">
                    {r.initials}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-bg font-medium text-sm">{r.name}</span>
                    <span className="text-bg/50 text-xs">{r.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
