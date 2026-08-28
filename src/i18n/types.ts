export type PageSlug =
  | 'about'
  | 'erasmus-tips'
  | 'esncard'
  | 'eventos'
  | 'blog'
  | 'contacto'
  | 'avisolegal'
  | 'politicaprivacidad'
  | 'TyC'
  | 'metodos-de-pago'
  | 'actividades-deportivas'
  | 'actividades-sociales'
  | 'actividades-culturales'
  | 'fiestas'
  | 'viajes'
  | 'eventos-mes-santiago'
  | 'eventos-mes-lugo';

export interface NavDict {
  about: string;
  tips: string;
  esncard: string;
  esncardAllDiscounts: string;
  esncardLocalDiscounts: string;
  esncardInternationalDiscounts: string;
  esncardTravelDiscounts: string;
  events: string;
  blog: string;
  contact: string;
  language: string;
  openMenu: string;
  closeMenu: string;
  mainNav: string;
  mobileNav: string;
}

export interface HomeDict {
  heroTitle: [string, string, string];
  heroText: string;
  heroCtaEvents: string;
  heroCtaAbout: string;
  committees: [string, string, string, string, string];
  about: {
    heading: [string, string];
    leadBefore: string;
    leadStrong: string;
    leadAfter: string;
    paragraphs: [string, string];
  };
  activities: {
    heading: [string, string];
    cards: [Card, Card, Card];
  };
  events: {
    heading: [string, string];
    items: EventItem[];
  };
  join: {
    heading: string;
    emphasis: string;
    text: string;
    cta: string;
  };
  contact: {
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
  category: string | string[];
  title: string;
  text?: string;
  location: string;
}

export type ContentBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

export interface BlogPost {
  slug?: string;
  date?: string;
  title?: string;
  text: string;
  link?: string;
  linkText?: string;
  accent?: 'blue' | 'pink';
}

export interface EventsMonthNote {
  before: string;
  whatsappLabel: string;
  middle: string;
  instagramLabel: string;
  after: string;
}

export interface Dictionary {
  nav: NavDict;
  home: HomeDict;
  pages: Record<PageSlug, { title: string; text: string; body?: ContentBlock[]; posts?: BlogPost[]; cta?: string }>;
  eventsMonthNote: EventsMonthNote;
}
