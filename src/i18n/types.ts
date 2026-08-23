export type PageSlug =
  | 'que-es-esn'
  | 'erasmus-tips'
  | 'esncard'
  | 'eventos'
  | 'blog'
  | 'contacto'
  | 'avisolegal'
  | 'politicaprivacidad'
  | 'TyC'
  | 'metodos-de-pago'
  | 'descuentos/locales'
  | 'descuentos/nacionales'
  | 'descuentos/internacionales';

export interface NavDict {
  about: string;
  tips: string;
  esncard: string;
  events: string;
  discounts: string;
  local: string;
  national: string;
  international: string;
  blog: string;
  contact: string;
  language: string;
  openMenu: string;
  closeMenu: string;
  mainNav: string;
  mobileNav: string;
  backHome: string;
}

export interface HomeDict {
  heroTitle: [string, string, string];
  heroText: string;
  heroCtaEvents: string;
  heroCtaAbout: string;
  stats: [string, string, string, string];
  about: {
    number: string;
    heading: [string, string];
    leadBefore: string;
    leadStrong: string;
    leadAfter: string;
    paragraphs: [string, string];
  };
  activities: {
    number: string;
    heading: [string, string];
    cards: [Card, Card, Card];
  };
  events: {
    number: string;
    heading: [string, string];
    viewAll: string;
    items: [EventItem, EventItem, EventItem];
  };
  join: {
    number: string;
    heading: string;
    emphasis: string;
    text: string;
    cta: string;
  };
  languagesSection: {
    number: string;
    heading: [string, string];
  };
  contact: {
    number: string;
    heading: string;
    text: string;
    instagram: string;
    email: string;
    esncard: string;
  };
  footer: {
    tagline: string;
    address: string;
    legal: [string, string, string, string];
    opensInNewTab: string;
  };
}

interface Card {
  icon: string;
  title: string;
  text: string;
  cta: string;
  href: PageSlug;
}

interface EventItem {
  month: string;
  day: string;
  category: string;
  title: string;
  text: string;
  location: string;
}

export interface Dictionary {
  nav: NavDict;
  home: HomeDict;
  pages: Record<PageSlug, { title: string; text: string }>;
}
