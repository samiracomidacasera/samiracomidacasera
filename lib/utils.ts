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
  'https://maps.app.goo.gl/J8AKxMpjs8dfLKPu5'

export const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.803339572495!2d-4.501104899999995!3d36.6277619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fb80641f8155%3A0xbb451066758bcd8e!2sSamira%2C%20Restaurante%20y%20Comida%20para%20llevar!5e0!3m2!1sen!2sma!4v1789422439024!5m2!1sen!2sma'

export const RESTAURANT_ADDRESS =
  'C. Río Aranda, 11, Loc 2, 29620 Torremolinos, Málaga, Spain'

export const OPENING_HOURS = 'Every day · 10:00 AM – 9:00 PM'

export function isRestaurantOpenNow(): boolean {
  try {
    const now = new Date()
    const spainTimeStr = now.toLocaleTimeString('en-US', {
      timeZone: 'Europe/Madrid',
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    })
    const [hour, minute] = spainTimeStr.split(':').map(Number)
    const decimalTime = hour + minute / 60
    // Open from 10:00 to 21:00 (10:00 AM to 9:00 PM)
    return decimalTime >= 10 && decimalTime < 21
  } catch {
    return false
  }
}
