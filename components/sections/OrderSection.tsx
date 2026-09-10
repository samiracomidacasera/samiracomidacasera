'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import {
  WHATSAPP_URL,
  UBER_EATS_URL,
  PHONE_PRIMARY_RAW,
  PHONE_SECONDARY_RAW,
} from '@/lib/utils'

export default function OrderSection() {
  const { language, t } = useLanguage()

  const options = [
    {
      id: 'whatsapp',
      title: t('order_wsp_title'),
      subtitle: t('order_wsp_sub'),
      description: t('order_wsp_desc'),
      icon: (
        <svg viewBox='0 0 24 24' fill='white' className='w-7 h-7'>
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
        </svg>
      ),
      iconBg: 'bg-[#25D366]',
      btnBg: 'bg-[#25D366] hover:bg-[#1ebe58]',
      border: 'hover:border-[#25D366]/25',
      shadow: 'hover:shadow-[#25D366]/10',
      ctaText: t('menu_btn_whatsapp'),
      href: WHATSAPP_URL,
      target: '_blank',
      badge:
        language === 'es'
          ? 'Más Rápido'
          : language === 'en'
            ? 'Fastest'
            : 'Plus Rapide',
      badgeColor: 'bg-[#25D366]/10 text-[#1ebe58]',
    },
    {
      id: 'ubereats',
      title: t('order_uber_title'),
      subtitle: t('order_uber_sub'),
      description: t('order_uber_desc'),
      icon: (
        <svg viewBox='0 0 24 24' fill='white' className='w-7 h-7'>
          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z' />
        </svg>
      ),
      iconBg: 'bg-[#06C167]',
      btnBg: 'bg-[#06C167] hover:bg-[#04a355]',
      border: 'hover:border-[#06C167]/25',
      shadow: 'hover:shadow-[#06C167]/10',
      ctaText: t('menu_btn_uber'),
      href: UBER_EATS_URL,
      target: '_blank',
      badge:
        language === 'es'
          ? 'A Domicilio'
          : language === 'en'
            ? 'Home Delivery'
            : 'Livraison',
      badgeColor: 'bg-[#06C167]/10 text-[#04a355]',
    },
    {
      id: 'call',
      title: t('order_call_title'),
      subtitle: t('order_call_sub'),
      description: t('order_call_desc'),
      icon: <Phone size={24} color='white' />,
      iconBg: 'bg-brand-green',
      btnBg: 'bg-brand-green hover:bg-brand-green-dark',
      border: 'hover:border-brand-green/20',
      shadow: 'hover:shadow-brand-green/10',
      ctaText: '+34 631 615 120',
      href: `tel:${PHONE_PRIMARY_RAW}`,
      target: '_self',
      badge:
        language === 'es'
          ? 'Trato Directo'
          : language === 'en'
            ? 'Call Direct'
            : 'Ligne Directe',
      badgeColor: 'bg-brand-green/8 text-brand-green',
    },
  ]

  return (
    <section id='order' className='section-padding bg-white'>
      <div className='container-custom'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12.5'
        >
          <span className='section-label mb-3 block font-bold'>
            {t('order_badge')}
          </span>
          <h2 className='font-serif font-bold text-3xl md:text-4xl text-gray-900 mb-4'>
            {t('order_title')}{' '}
            <span className='text-brand-green'>{t('order_title_accent')}</span>
          </h2>
          <div className='gold-divider mx-auto mb-4' />
          <p className='text-gray-700 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium'>
            {t('order_desc')}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto'>
          {options.map((o, i) => (
            <motion.a
              key={o.id}
              href={o.href}
              target={o.target}
              rel={o.target === '_blank' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className='group flex flex-col p-6 rounded-2xl border border-brand-gold/10 bg-white shadow-sm hover:shadow-xl hover:border-brand-gold/25 transition-all duration-300 overflow-hidden cursor-pointer'
            >
              {/* Card Badge and Icon */}
              <div className='mb-5 flex items-start justify-between'>
                <div
                  className={`w-13 h-13 rounded-xl ${o.iconBg} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}
                >
                  {o.icon}
                </div>
                <span
                  className={`text-[9.5px] font-bold font-sans tracking-wide uppercase px-2.5 py-1 rounded-full ${o.badgeColor}`}
                >
                  {o.badge}
                </span>
              </div>

              {/* Text info */}
              <h3 className='font-serif font-bold text-xl text-gray-900 mb-0.5 group-hover:text-brand-green transition-colors'>
                {o.id === 'ubereats' ? 'Uber Eats' : o.title}
              </h3>
              <p className='text-brand-gold-dark font-sans text-[0.7rem] font-bold tracking-wider uppercase mb-3'>
                {o.subtitle}
              </p>
              <p className='text-gray-700 font-sans text-[0.8rem] leading-relaxed mb-6 flex-1 font-medium'>
                {o.description}
              </p>

              {/* Action Button layout */}
              <div
                className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl ${o.btnBg} text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm`}
              >
                {o.ctaText}
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2.5}
                  className='w-3.5 h-3.5 group-hover:translate-x-1 transition-transform'
                >
                  <path d='M5 12h14M12 5l7 7-7 7' />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Secondary Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mt-7.5 text-gray-700 font-sans text-xs md:text-sm font-semibold'
        >
          {t('order_phone_add')}:{' '}
          <a
            href={`tel:${PHONE_SECONDARY_RAW}`}
            className='text-brand-green font-bold hover:underline'
          >
            +34 722 237 487
          </a>
        </motion.p>
      </div>
    </section>
  )
}
