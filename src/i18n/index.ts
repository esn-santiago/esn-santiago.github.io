import es from './es';
import en from './en';
import gl from './gl';
import fr from './fr';
import de from './de';
import pt from './pt';
import it from './it';
import type { Dictionary, PageSlug } from './types';

export type { Dictionary, NavDict, HomeDict, PageSlug, BlogPost } from './types';

export const languages = {
  es: 'Español',
  en: 'English',
  gl: 'Galego',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  it: 'Italiano',
} as const;

export type LanguageCode = keyof typeof languages;

export const defaultLang: LanguageCode = 'es';

export const languageCodes = Object.keys(languages) as LanguageCode[];

export const pageSlugs: PageSlug[] = [
  'about',
  'erasmus-tips',
  'esncard',
  'eventos',
  'blog',
  'contacto',
  'avisolegal',
  'politicaprivacidad',
  'TyC',
  'metodos-de-pago',
  'actividades-deportivas',
  'actividades-sociales',
  'actividades-culturales',
  'fiestas',
  'viajes',
];

export const activityPageColors: Record<string, string> = {
  'actividades-deportivas': 'var(--esn-orange)',
  'actividades-sociales': 'var(--esn-green)',
  'actividades-culturales': 'var(--esn-pink)',
  fiestas: 'var(--esn-dark-blue)',
  viajes: 'var(--esn-blue)',
};

const dictionaries: Record<LanguageCode, Dictionary> = { es, en, gl, fr, de, pt, it };

export function getDictionary(lang: LanguageCode): Dictionary {
  return dictionaries[lang];
}

export function langPrefix(lang: LanguageCode): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

export function localizedPath(lang: LanguageCode, path = ''): string {
  const prefix = langPrefix(lang);
  if (!path) return `${prefix}/`;
  return `${prefix}/${path}`;
}
