# Tawar PG & Boys Hostel — Premium Website

A premium, animated, fully responsive marketing site built with React, Vite,
Tailwind CSS, Framer Motion, GSAP, Lenis smooth scroll, and Swiper.

## ✨ Stack

- **React 18 + Vite** — fast dev server and build
- **Tailwind CSS** — utility-first styling with a custom design system (colors, type scale, radii, shadows) defined in `tailwind.config.js`
- **Framer Motion** — scroll reveals, stagger, page-level transitions
- **GSAP** — magnetic button hover effect
- **Lenis** — buttery smooth scrolling (`src/hooks/useLenis.js`)
- **Swiper.js** — the reviews carousel
- **React Router** — routing shell (single page today, ready to expand)
- **React Helmet Async** — SEO meta tags + JSON-LD structured data
- **Lucide Icons** — the icon set throughout

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

The production build is emitted to `dist/`.

## 📁 Project structure

```
src/
  components/
    ui/                 Reusable primitives (MagneticButton, SectionHeading, ScrollProgress)
    Navbar.jsx           Sticky glass navbar with active-link indicator
    Hero.jsx              Cinematic hero with floating stat card
    TrustedLocation.jsx   Horizontal scrolling nearby-places cards
    About.jsx              Split layout with image reveal
    WhyChooseUs.jsx        Amenities grid
    RoomTypes.jsx           Room type cards with pricing
    Gallery.jsx              Masonry gallery + lightbox
    NearbyColleges.jsx        Google Maps linked college cards
    Reviews.jsx                 Swiper testimonial slider
    VirtualTour.jsx              Video walkthrough modal
    FAQ.jsx                       Animated accordion
    Contact.jsx                    WhatsApp booking CTA + contact details + embedded map
    Footer.jsx                      Dark footer
  hooks/useLenis.js        Lenis smooth-scroll setup
  lib/motion.js             Shared Framer Motion variants
  App.jsx                     Page assembly + SEO
  main.jsx                      App entry
```

## 🎨 Design tokens

Colors, fonts, radii and shadows are centralized in `tailwind.config.js` and
mirror the brand brief exactly:

| Token          | Value      |
|----------------|-----------|
| Background     | `#F9F8F6` |
| Primary Text   | `#141414` |
| Secondary Text | `#5B5B5B` |
| Accent Gold    | `#C8A45C` |
| Hover Gold     | `#B38E42` |
| Borders        | `#EAEAEA` |
| Footer         | `#141414` |

## 🔤 Fonts

`index.html` loads **Clash Display**, **General Sans** and **Satoshi** from
Fontshare, and **Space Grotesk** from Google Fonts. For production, replace
the Fontshare `<link>` with your own licensed font kit or self-hosted files.

## 📸 Real property photography

Your named photos are wired in under `public/images/`:

- `hero/hero-1.jpg` … `hero-4.jpg` — auto-rotate on the homepage background every **10 seconds** (crossfade transition, with clickable dot indicators). Matches your "Hero Image 1–4" files. Update the `HERO_IMAGES` array in `src/components/Hero.jsx` to change what's shown.
- `about/about.jpg` — used in the About section (your "About Tawar PG & Boys Hostel Image").
- `rooms/double-sharing.jpg`, `rooms/triple-sharing.jpg` — the two Room Types cards, matching your "Double Sharing" / "Triple Sharing" files directly.
- `gallery/` — the Photo Gallery carousel. Includes your named `gallery-3.jpg` … `gallery-6.jpg` files plus every other photo from the Images folder (About, Hero 1–4, Double/Triple Sharing, and two extra corridor/stairwell shots), per your instruction that everything in the Images folder should also appear in the gallery.
- `360-room/frame-01.jpg` … `frame-10.jpg` — the 10-frame room walkthrough sequence, in original capture order.

One photo (a candid corridor shot with a visible finger over part of the lens and a person mid-frame) was left out of the gallery for quality reasons — everything else from the Images folder is included. Everything was auto-oriented and compressed for the web.

Reviewer avatars in the testimonials slider are still generic stock photos (not real residents) — replace with real headshots if you'd like.

## 🌀 360° Room Viewer

The old video-embed "Virtual Tour" section has been replaced with a custom interactive viewer (`src/components/Room360Viewer.jsx`) built from your real room photos:

- **Drag** (mouse or touch) left/right across the frame to spin through the 10 angles, simulating a 360° walkthrough.
- Auto-rotates on load; dragging pauses it. Play/pause and a manual "next angle" button are included.
- Progress dots let visitors jump straight to an angle.

For an even smoother result, a real 360° panorama (shot with a panorama camera/app) or a short video walkthrough would upgrade this further — this component was built to make the best of a sequential phone-photo rotation.

## 💬 WhatsApp & Instagram

Centralized in `src/lib/contact.js`:

```js
export const PHONE_DIGITS = '918743990706'
export const WHATSAPP_PREFILLED_MESSAGE = 'Hello, I want to book my room in your PG.'
export const INSTAGRAM_URL = 'https://www.instagram.com/tawarboyspg'
export const GATE_TIMINGS = '6:00 AM – 11:00 PM'
export const ADDRESS_LINE = 'Near Pari Chowk, Tugalpur, Greater Noida'
```

Every WhatsApp link across the site (floating button, Contact section, Footer) opens a chat pre-filled with that message. Update the number, message, address, or Instagram handle in this one file and it propagates everywhere — including both embedded Google Maps iframes and the SEO schema in `App.jsx`. **Two floating action buttons** (`src/components/FloatingActionButtons.jsx`) appear on every page, bottom-right — a gold Call button and a green WhatsApp button (with a gentle pulse animation), stacked vertically.

Gate timings (6:00 AM – 11:00 PM) appear in the Contact section, Footer, and as a new FAQ entry.

## 📞 Booking flow

There's no on-site form anymore — every "Book" action (room cards, Contact
section, floating button, Footer) opens WhatsApp directly with a pre-filled
message, so visitors go straight into a real conversation with your team
instead of submitting a form that needs manual follow-up. The Room Types
cards even personalize the message with the room type they clicked
(see `buildWhatsAppUrl` in `src/lib/contact.js`).

## 🗺️ Google Maps

Two embedded map iframes (Contact section + Footer) and the Nearby Colleges
card links use placeholder Google Maps query URLs — update them with your
exact address and college pins.

## ✅ Performance & accessibility notes

- All images use `loading="lazy"` (except the hero, which is eager for LCP).
- Focus states are visible (`:focus-visible` outline in `index.css`).
- `prefers-reduced-motion` disables Lenis smoothing and shortens all
  animations site-wide.
- Semantic sectioning (`<header>`, `<main>`, `<section>`, `<footer>`) and a
  JSON-LD `LodgingBusiness` schema are included for SEO.

## 🔍 SEO

The site is optimized for local search around Greater Noida without keyword
stuffing — every phrase below appears in real sentences a visitor would
actually read.

- **Titles & meta** — `index.html` and the React Helmet block in `App.jsx`
  both carry a keyword-led title/description ("Best Boys PG in Greater
  Noida... Near NIET, GL Bajaj"), Open Graph tags, Twitter Card tags, a
  canonical URL, and geo meta tags.
- **Structured data** (`src/App.jsx`) — three JSON-LD blocks: `LodgingBusiness`
  (address, phone, price range, area served, amenities, Instagram via
  `sameAs`), `FAQPage` (pulled live from `src/lib/faq.js` so it always
  matches the visible FAQ accordion), and `BreadcrumbList`.
- **Headings** — one keyword-rich `<h1>` on the hero ("Premium Boys PG in
  Greater Noida"), every section uses a single `<h2>` via `SectionHeading`,
  and cards (rooms, amenities, colleges) use `<h3>`.
- **Image SEO** — every photo was renamed to a descriptive, hyphenated
  filename (e.g. `double-sharing-room-boys-pg-greater-noida.jpg`) and given
  unique, descriptive `alt` text mentioning the location or nearby college
  where relevant — never the same alt text twice.
- **Nearby Colleges** (`#nearby`) — expanded to 10 colleges (NIET, GL Bajaj,
  Galgotias, IILM, ITS, KCC Institute, GNIOT, IMT, Amity, Knowledge Park
  Metro), each card titled as a natural "Boys PG Near &lt;College&gt;" phrase.
- **Trusted Location** (`#location`) — covers landmark searches (Pari Chowk,
  Tugalpur Market, Venice Mall, Ansal Plaza, India Expo Mart, Smart Bazaar &
  Zudio) and mentions nearby hostels (Palm Hostel, Nalanda Hostel, White
  House Hostel) once, as location context only — never compared against.
- **Internal linking** — Footer Quick Links use descriptive anchor text
  ("Room Types & Pricing", "Nearby Colleges") instead of single words.
- **Crawlability** — `public/robots.txt` and `public/sitemap.xml` are
  included; update the sitemap if you add real subpages later.

If you eventually split this into multiple pages (e.g. a dedicated `/rooms`
or `/near-niet` page), duplicate the `Helmet` pattern from `App.jsx` with a
page-specific title/description/H1, and add the new URL to `sitemap.xml`.
