export const languages = {
  es: 'Español',
  en: 'English',
  gl: 'Galego',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  it: 'Italiano',
} as const;

export const pages = {
  'que-es-esn': 'Qué es ESN',
  'erasmus-tips': 'Erasmus Tips',
  esncard: 'ESNcard',
  eventos: 'Eventos',
  blog: 'Blog',
  contacto: 'Contacto',
  'descuentos/locales': 'Descuentos locales',
  'descuentos/nacionales': 'Descuentos nacionales',
  'descuentos/internacionales': 'Descuentos internacionales',
} as const;

export type LanguageCode = keyof typeof languages;
export type PageSlug = keyof typeof pages;

const translations: Partial<Record<LanguageCode, Partial<Record<PageSlug, { title: string; text: string }>>>> = {
  es: {
    'que-es-esn': { title: 'Qué es ESN', text: 'ESN Santiago acompaña a estudiantes internacionales para que su experiencia en Santiago sea más cercana, divertida y conectada.' },
    eventos: { title: 'Eventos', text: 'Descubre las próximas actividades, viajes y encuentros de nuestra comunidad.' },
    contacto: { title: 'Contacto', text: 'Escríbenos para participar, colaborar o resolver cualquier duda.' },
  },
  gl: {
    'que-es-esn': { title: 'Que é ESN', text: 'ESN Santiago acompaña o estudantado internacional para crear comunidade en Santiago.' },
    eventos: { title: 'Eventos', text: 'Descubre as próximas actividades, viaxes e encontros da nosa comunidade.' },
  },
};

const english: Record<PageSlug, { title: string; text: string }> = {
  'que-es-esn': { title: 'What is ESN?', text: 'ESN Santiago supports international students and helps build a welcoming community in Santiago de Compostela.' },
  'erasmus-tips': { title: 'Erasmus Tips', text: 'Useful guidance to help you settle in, explore the city and make the most of your Erasmus experience.' },
  esncard: { title: 'ESNcard', text: 'Find out about the ESNcard and the benefits, activities and discounts available to you.' },
  eventos: { title: 'Events', text: 'Discover upcoming activities, trips and gatherings with our international community.' },
  blog: { title: 'Blog', text: 'Stories, practical information and inspiration from ESN Santiago.' },
  contacto: { title: 'Contact', text: 'Get in touch to join, collaborate or ask us anything.' },
  'descuentos/locales': { title: 'Local discounts', text: 'Explore offers from local businesses in Santiago de Compostela.' },
  'descuentos/nacionales': { title: 'National discounts', text: 'Discover ESNcard benefits available across Spain.' },
  'descuentos/internacionales': { title: 'International discounts', text: 'Explore benefits available to ESNcard holders around Europe.' },
};

export function pageContent(lang: LanguageCode, page: PageSlug) {
  return translations[lang]?.[page] ?? english[page];
}
