import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = '34631615120'
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola, me gustaría pedir comida marroquí.',
)
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export const PHONE_PRIMARY = '+34 631 615 120'
export const PHONE_SECONDARY = '+34 722 237 487'
export const PHONE_PRIMARY_RAW = '+34631615120'
export const PHONE_SECONDARY_RAW = '+34722237487'

export const UBER_EATS_URL =
  'https://www.ubereats.com/es/store/samira-comida-casera-marroqui/DO4fAewQUH-pb_L20dvrZw'

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=C.+Rio+Aranda+11+Local+2+Torremolinos+Malaga'

export const GOOGLE_MAPS_EMBED =
  'https://maps.google.com/maps?q=C.+R%C3%ADo+Aranda%2C+11%2C+Local+2%2C+29620+Torremolinos%2C+M%C3%A1laga&t=m&z=16&ie=UTF8&iwloc=&output=embed'

export const RESTAURANT_ADDRESS =
  'C. Río Aranda, 11, Local 2, 29620 Torremolinos, Málaga'

export const OPENING_HOURS = 'Every day · 10:00 AM – 11:30 PM'
