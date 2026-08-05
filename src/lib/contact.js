// Single source of truth for contact details used across the site
// (navbar CTA, floating call/WhatsApp buttons, contact section, footer).

export const PHONE_DISPLAY = '+91 87439 90706'
export const PHONE_DIGITS = '918743990706' // country code + number, no symbols
export const PHONE_HREF = `tel:+${PHONE_DIGITS}`

export const WHATSAPP_PREFILLED_MESSAGE = 'Hello, I want to book my room in your PG.'
export const WHATSAPP_URL = `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(
  WHATSAPP_PREFILLED_MESSAGE
)}`

// Builds a WhatsApp link pre-filled with a message naming a specific room type,
// e.g. buildWhatsAppUrl('Double Sharing') -> "...Hello, I want to book a Double Sharing room..."
export function buildWhatsAppUrl(roomType) {
  const message = roomType
    ? `Hello, I want to book a ${roomType} room in your PG.`
    : WHATSAPP_PREFILLED_MESSAGE
  return `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}`
}

export const INSTAGRAM_URL = 'https://www.instagram.com/tawarboyspg'

export const GATE_TIMINGS = '6:00 AM – 11:00 PM'

export const ADDRESS_LINE = 'Near Pari Chowk, Tugalpur, Greater Noida'
export const ADDRESS_FULL = 'Tawar PG & Boys Hostel, Near Pari Chowk, Tugalpur, Greater Noida'

// Exact property coordinates — used to pin the map precisely instead of
// relying on a text address search.
export const LATITUDE = 28.465003
export const LONGITUDE = 77.502637

// Clicking through opens Google Maps centered exactly on the property.
export const ADDRESS_MAPS_URL = `https://maps.google.com/?q=${LATITUDE},${LONGITUDE}`

// Embeddable iframe src pinned to the exact coordinates (used in Contact and Footer "Find Us").
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${LATITUDE},${LONGITUDE}&z=16&output=embed`
