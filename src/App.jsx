import { Helmet } from 'react-helmet-async'
import useLenis from './hooks/useLenis'
import { PHONE_DIGITS, INSTAGRAM_URL, ADDRESS_MAPS_URL, LATITUDE, LONGITUDE } from './lib/contact'
import { FAQS } from './lib/faq'

import Navbar from './components/Navbar'
import ScrollProgress from './components/ui/ScrollProgress'
import FloatingActionButtons from './components/FloatingActionButtons'
import Hero from './components/Hero'
import TrustedLocation from './components/TrustedLocation'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import RoomTypes from './components/RoomTypes'
import Gallery from './components/Gallery'
import NearbyColleges from './components/NearbyColleges'
import Reviews from './components/Reviews'
import VirtualTour from './components/VirtualTour'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SITE_URL = 'https://www.tawarpg.com/'

// LocalBusiness / LodgingBusiness — powers Google's local pack & knowledge panel
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': `${SITE_URL}#business`,
  name: 'Tawar PG & Boys Hostel',
  alternateName: 'Tawar Boys PG Greater Noida',
  description:
    'Premium, fully furnished boys PG and hostel in Greater Noida offering 24x7 security, housekeeping, high-speed Wi-Fi and attached washrooms — near NIET, GL Bajaj and Galgotia College.',
  url: SITE_URL,
  telephone: `+${PHONE_DIGITS}`,
  priceRange: '₹7,500 - ₹9,000',
  image: `${SITE_URL}images/hero/boys-pg-greater-noida-corridor.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Pari Chowk, Tugalpur',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201310',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: LATITUDE,
    longitude: LONGITUDE
  },
  areaServed: [
    { '@type': 'Place', name: 'Greater Noida' },
    { '@type': 'Place', name: 'Knowledge Park' },
    { '@type': 'Place', name: 'Pari Chowk' },
    { '@type': 'Place', name: 'Tugalpur' }
  ],
  sameAs: [INSTAGRAM_URL],
  hasMap: ADDRESS_MAPS_URL,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'High-Speed Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: '24x7 Security & CCTV', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Daily Housekeeping', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Attached Washroom', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Power Backup', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true }
  ]
}

// FAQPage — reuses the exact same content shown in the on-page FAQ accordion
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a }
  }))
}

// BreadcrumbList — single-page site, but still tells Google the page's place in the site
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Rooms', item: `${SITE_URL}#rooms` },
    { '@type': 'ListItem', position: 3, name: 'Amenities', item: `${SITE_URL}#amenities` },
    { '@type': 'ListItem', position: 4, name: 'Gallery', item: `${SITE_URL}#gallery` },
    { '@type': 'ListItem', position: 5, name: 'Contact', item: `${SITE_URL}#contact` }
  ]
}

export default function App() {
  useLenis()

  return (
    <>
      <Helmet>
        <title>Best Boys PG in Greater Noida | Tawar PG & Boys Hostel Near NIET, GL Bajaj</title>
        <meta
          name="description"
          content="Premium, fully furnished boys PG in Greater Noida near NIET, GL Bajaj & Galgotia College. 24x7 security, high-speed Wi-Fi, housekeeping. Rooms from ₹7,500/month — book a visit today."
        />
        <link rel="canonical" href={SITE_URL} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <TrustedLocation />
        <About />
        <WhyChooseUs />
        <RoomTypes />
        <Gallery />
        <NearbyColleges />
        <Reviews />
        <VirtualTour />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingActionButtons />
    </>
  )
}
