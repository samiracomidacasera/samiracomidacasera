'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  Sparkles,
  Salad,
  Soup,
  Flame,
  Fish,
  UtensilsCrossed,
  GlassWater,
  ChefHat,
  Coffee,
  Heart,
  Beef,
  type LucideProps,
} from 'lucide-react'
import { menuData } from '@/lib/menu-data'
import { useLanguage } from '@/context/LanguageContext'
import { menuTranslations } from '@/lib/translations'

const categoryIconStyles: Record<
  string,
  { icon: React.ComponentType<LucideProps>; color: string }
> = {
  starters: { icon: UtensilsCrossed, color: 'bg-amber-600' },
  salads: { icon: Salad, color: 'bg-emerald-600' },
  soups: { icon: Soup, color: 'bg-blue-600' },
  tajines: { icon: Flame, color: 'bg-red-650' },
  couscous: { icon: Sparkles, color: 'bg-brand-gold' },
  pinchitos: { icon: Beef, color: 'bg-brand-terra' },
  pastelas: { icon: ChefHat, color: 'bg-purple-600' },
  r3ayef: { icon: Coffee, color: 'bg-amber-700' },
  legumbres: { icon: Soup, color: 'bg-amber-800' },
  fish: { icon: Fish, color: 'bg-cyan-600' },
  otros: { icon: UtensilsCrossed, color: 'bg-teal-600' },
  'special-orders': { icon: Heart, color: 'bg-rose-500' },
  drinks: { icon: GlassWater, color: 'bg-sky-500' },
}

const categoryTranslations: Record<string, Record<string, string>> = {
  es: {
    starters: 'Entrantes Marroquíes',
    salads: 'Ensaladas',
    tajines: 'Tajine',
    pinchitos: 'Pinchitos Morunos',
    couscous: 'Cuscús',
    pastelas: 'Salados (Pastelas)',
    r3ayef: 'R3Ayef & Harcha',
    soups: 'Sopas',
    legumbres: 'Legumbres (Por Encargo)',
    fish: 'Pescado (Por Encargo)',
    otros: 'Otros Platos',
    'special-orders': 'Platos Por Encargo',
    drinks: 'Bebidas',
  },
  en: {
    starters: 'Moroccan Starters',
    salads: 'Salads',
    tajines: 'Tajines',
    pinchitos: 'Moroccan Skewers',
    couscous: 'Couscous',
    pastelas: 'Pastilla Pies',
    r3ayef: 'Msemen & Harcha',
    soups: 'Soups',
    legumbres: 'Stews (On Order)',
    fish: 'Fish (On Order)',
    otros: 'Other Dishes',
    'special-orders': 'Special Orders',
    drinks: 'Drinks',
  },
  fr: {
    starters: 'Entrées Marocaines',
    salads: 'Salades',
    tajines: 'Tajines',
    pinchitos: 'Brochettes Marocaines',
    couscous: 'Couscous',
    pastelas: 'Pastillas',
    r3ayef: 'Msemen & Harcha',
    soups: 'Soupes',
    legumbres: 'Ragoûts (Sur Commande)',
    fish: 'Poissons (Sur Commande)',
    otros: 'Autres Plats',
    'special-orders': 'Plats sur Commande',
    drinks: 'Boissons',
  },
}

// Helper function to map menu items to their corresponding high-quality public assets
function getDishImage(itemName: string, categoryId: string): string {
  const name = itemName.toLowerCase()

  if (
    name.includes('tajine') ||
    name.includes('pollo') ||
    name.includes('ternera') ||
    name.includes('cordero')
  ) {
    if (name.includes('pollo')) return '/dish-chicken-tajine.webp'
    return '/dish-lamb-tajine.webp'
  }
  if (
    name.includes('couscous') ||
    name.includes('cuscús') ||
    name.includes('cuscus')
  ) {
    return '/dish-couscous.webp'
  }
  if (name.includes('pastilla') || name.includes('pastela')) {
    return '/dish-pastilla.webp'
  }
  if (
    name.includes('harira') ||
    name.includes('sopa') ||
    name.includes('bisara') ||
    name.includes('crema') ||
    name.includes('lentejas') ||
    name.includes('alubias') ||
    name.includes('garbanzos') ||
    name.includes('callos')
  ) {
    return '/dish-harira.webp'
  }
  if (
    name.includes('pinchos') ||
    name.includes('pinchitos') ||
    name.includes('brochetas') ||
    name.includes('kefta') ||
    name.includes('skewers') ||
    name.includes('hígado') ||
    name.includes('higado')
  ) {
    return '/dish-skewers.webp'
  }
  if (
    name.includes('tea') ||
    name.includes('té') ||
    name.includes('bebidas') ||
    name.includes('juice') ||
    name.includes('zumo') ||
    name.includes('smoothie') ||
    name.includes('agua') ||
    name.includes('refresco') ||
    name.includes('lban')
  ) {
    return '/gallery-tea.webp'
  }
  if (
    name.includes('salad') ||
    name.includes('ensalada') ||
    name.includes('zaalouk') ||
    name.includes('taktouka') ||
    name.includes('berenjena') ||
    name.includes('pimiento')
  ) {
    return '/gallery-salad.webp'
  }
  if (
    name.includes('bread') ||
    name.includes('msemen') ||
    name.includes('pan') ||
    name.includes('batbout') ||
    name.includes('r3ayef') ||
    name.includes('harcha')
  ) {
    return '/gallery-bread.webp'
  }
  if (name.includes('briouats')) {
    return '/dish-pastilla.webp'
  }
  if (
    name.includes('rfissa') ||
    name.includes('rfisa') ||
    name.includes('sefa') ||
    name.includes('medfona')
  ) {
    return '/dish-rfissa.webp'
  }
  if (
    name.includes('dulces') ||
    name.includes('pastries') ||
    name.includes('sweets')
  ) {
    return '/gallery-spread.webp'
  }
  if (
    name.includes('fritura') ||
    name.includes('sardina') ||
    name.includes('paella') ||
    name.includes('pescado')
  ) {
    return '/about-restaurant.webp'
  }

  // Fallbacks by category
  if (categoryId === 'starters') return '/gallery-salad.webp'
  if (categoryId === 'salads') return '/gallery-salad.webp'
  if (categoryId === 'soups' || categoryId === 'legumbres')
    return '/dish-harira.webp'
  if (categoryId === 'tajines') return '/dish-chicken-tajine.webp'
  if (categoryId === 'couscous') return '/dish-couscous.webp'
  if (categoryId === 'pinchitos') return '/dish-skewers.webp'
  if (categoryId === 'pastelas') return '/dish-pastilla.webp'
  if (categoryId === 'r3ayef') return '/gallery-bread.webp'
  if (categoryId === 'pescado' || categoryId === 'otros')
    return '/about-restaurant.webp'
  if (categoryId === 'drinks') return '/gallery-tea.webp'

  return '/logo.png' // Final brand fallback
}

const tagStyles: Record<string, string> = {
  Popular: 'bg-blue-50 text-blue-700 border-blue-100',
  'Best Seller': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  "Chef's Favourite": 'bg-amber-50 text-amber-700 border-amber-100',
  'Must Try': 'bg-red-50 text-red-700 border-red-100',
  Vegetarian: 'bg-green-50 text-green-750 border-green-100',
  Traditional: 'bg-orange-50 text-orange-700 border-orange-100',
  Special: 'bg-purple-50 text-purple-700 border-purple-100',
  Celebration: 'bg-pink-50 text-pink-700 border-pink-100',
  Groups: 'bg-cyan-50 text-cyan-700 border-cyan-100',
  Events: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  Family: 'bg-rose-50 text-rose-700 border-rose-100',
  Signature: 'bg-yellow-50 text-yellow-750 border-yellow-100',
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(menuData[0].id)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftFade, setShowLeftFade] = useState(false)
  const [showRightFade, setShowRightFade] = useState(false)

  const { language, t } = useLanguage()

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setShowLeftFade(scrollLeft > 10)
      setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Monitor scroll movements and window resizing to update indicators dynamically
  useEffect(() => {
    const el = scrollContainerRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true })
      checkScroll()

      // Check after a brief moment to let fonts / layout fully render
      const timer = setTimeout(checkScroll, 150)

      window.addEventListener('resize', checkScroll, { passive: true })
      return () => {
        el.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
        clearTimeout(timer)
      }
    }
  }, [language]) // Re-run when language changes as text width recalculates

  // Auto-scroll active tab into view horizontally on mobile
  useEffect(() => {
    const activeEl = document.getElementById(`tab-btn-${activeTab}`)
    if (activeEl && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollLeft =
        activeEl.offsetLeft -
        container.offsetWidth / 2 +
        activeEl.offsetWidth / 2
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })

      // Update check scroll after smooth scroll completes
      const timer = setTimeout(checkScroll, 300)
      return () => clearTimeout(timer)
    }
  }, [activeTab])

  const activeCategory =
    menuData.find((cat) => cat.id === activeTab) || menuData[0]
  const catLabel =
    categoryTranslations[language]?.[activeCategory.id] || activeCategory.nameEs

  return (
    <section
      id='menu'
      className='section-padding bg-brand-cream moroccan-pattern relative overflow-hidden'
    >
      <div className='absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent' />
      <div className='absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent' />

      <div className='container-custom relative z-10'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-10'
        >
          <span className='section-label mb-3 block font-bold'>
            {t('menu_badge')}
          </span>
          <h2 className='font-serif font-bold text-3xl md:text-4xl text-brand-green mb-4'>
            {t('menu_title')}{' '}
            <span className='text-gradient-gold italic'>
              {t('menu_title_accent')}
            </span>
          </h2>
          <div className='gold-divider mx-auto mb-4' />
          <p className='text-gray-755 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium'>
            {t('menu_desc')}
          </p>
        </motion.div>

        {/* Tab Switcher with elegant fade masks for horizontal scroll indication */}
        <div className='relative max-w-4xl mx-auto mb-11'>
          {/* Left mask overlay - only visible when scrolled to the right */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
              showLeftFade ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Right mask overlay - only visible when overflow scroll exists on the right */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-cream via-brand-cream/80 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
              showRightFade ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Horizontal scroll tabs box */}
          <div
            ref={scrollContainerRef}
            className='flex gap-2.5 overflow-x-auto pb-3 pt-1 px-10 scrollbar-none justify-start md:justify-start items-center w-full'
            style={{ scrollbarWidth: 'none' }}
          >
            {menuData.map((cat) => {
              const isActive = cat.id === activeTab
              const translatedCatName =
                categoryTranslations[language]?.[cat.id] || cat.nameEs
              const style = categoryIconStyles[cat.id] || {
                icon: Sparkles,
                color: 'bg-brand-green',
              }
              const Icon = style.icon

              return (
                <button
                  key={cat.id}
                  id={`tab-btn-${cat.id}`}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4.5 py-2.5 rounded-full font-sans text-[0.82rem] md:text-[0.88rem] font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap border cursor-pointer shrink-0 flex items-center gap-2 ${
                    isActive
                      ? 'bg-brand-green border-brand-green text-white shadow-md shadow-brand-green/20'
                      : 'bg-white border-brand-gold/15 text-gray-700 hover:border-brand-green/30 hover:text-brand-green'
                  }`}
                >
                  <div
                    className={`w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                      isActive ? 'bg-white/20' : style.color
                    }`}
                  >
                    <Icon size={10} color='white' />
                  </div>
                  {translatedCatName}
                </button>
              )
            })}
          </div>
        </div>

        {/* Category Description */}
        <div className='text-center max-w-md mx-auto mb-9'>
          <p className='font-serif italic text-brand-gold text-lg md:text-xl leading-none'>
            {catLabel}
          </p>
          <div className='w-10 h-[1px] bg-brand-gold/45 mx-auto mt-2.5' />
        </div>

        {/* Menu Items Grid: Traditional 2-Column Bistro Layout inspired by Foores */}
        <div className='max-w-5xl mx-auto min-h-[400px]'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7 px-2 sm:px-4'
            >
              {activeCategory.items.map((item) => {
                const dishImg = item.image || getDishImage(item.name, activeCategory.id)
                // Safe translation lookup
                const key = item.name.toLowerCase()
                const trans = menuTranslations[language]?.[key] || {
                  name: item.name,
                  desc: item.description,
                }

                return (
                  <div
                    key={item.name}
                    className='flex gap-4 items-start pb-6 border-b border-brand-gold/8 group hover:border-brand-gold/25 transition-colors duration-300'
                  >
                    {/* Thumbnail Image on the Left */}
                    <div className='relative w-18 h-18 sm:w-21 sm:h-21 rounded-xl shrink-0 overflow-hidden border border-brand-gold/10 shadow-sm'>
                      <Image
                        src={dishImg}
                        alt={trans.name}
                        width={84}
                        height={84}
                        quality={75}
                        loading="lazy"
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>

                    {/* Content on the Right */}
                    <div className='flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5'>
                      {/* Name & Price with dotted connection line */}
                      <div>
                        <div className='flex items-baseline justify-between gap-1.5'>
                          <h3 className='font-serif font-bold text-gray-900 text-[1.2rem] md:text-[1.28rem] leading-snug group-hover:text-brand-green transition-colors'>
                            {trans.name}
                          </h3>
                          {item.price && (
                            <>
                              <div className='flex-1 border-b border-dotted border-gray-300 mx-2 self-center mt-1' />
                              <span className='font-serif font-bold text-brand-gold text-[1.22rem] md:text-[1.32rem] shrink-0'>
                                {item.price}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Sub description info */}
                        <p className='text-gray-700 font-sans text-[0.92rem] md:text-[0.98rem] leading-relaxed mt-1.5 font-medium line-clamp-2'>
                          {trans.desc}
                        </p>
                      </div>

                      {/* Tag styling */}
                      {item.tag && (
                        <div className='mt-1.5'>
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-wider border ${
                              tagStyles[item.tag] ??
                              'bg-gray-100 text-gray-655 border-gray-200'
                            }`}
                          >
                            {item.tag}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Button Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-center mt-14'
        >
          <p className='text-gray-600 font-sans text-xs md:text-sm mb-5 leading-relaxed font-semibold'>
            {t('menu_disclaimer')}
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-sm sm:max-w-none mx-auto px-4 sm:px-0'>
            <a
              href='https://wa.me/34631615120?text=Hola%2C%20quisiera%20hacer%20un%20pedido%20de%20comida%20marroqui.'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#007a55] text-white text-sm font-semibold font-sans hover:bg-[#009966] transition-all duration-300 shadow-md shadow-[#009966]/10'
            >
              <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
                <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
              </svg>
              {t('menu_btn_whatsapp')}
            </a>
            <a
              href='https://www.ubereats.com/es/store/samira-comida-casera-marroqui/DO4fAewQUH-pb_L20dvrZw'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#06C167] text-white text-sm font-semibold font-sans hover:bg-[#04a355] transition-all duration-300 shadow-md shadow-[#06C167]/10'
            >
              {t('menu_btn_uber')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
