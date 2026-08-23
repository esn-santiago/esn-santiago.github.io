import type { Dictionary } from './types';

const en: Dictionary = {
  nav: {
    about: 'What is ESN',
    tips: 'Erasmus tips',
    esncard: 'ESNcard',
    events: 'Events',
    discounts: 'Discounts',
    local: 'Local discounts',
    national: 'National discounts',
    international: 'International discounts',
    blog: 'Blog',
    contact: 'Contact',
    language: 'Language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    backHome: 'Back to home',
  },
  home: {
    heroTitle: ['Students', 'Helping', 'Students'],
    heroText:
      'ESN Santiago de Compostela connects international and local students through experiences, volunteering, culture and community.',
    heroCtaEvents: 'VIEW EVENTS →',
    heroCtaAbout: 'Discover ESN →',
    stats: ['International Community', 'International students', 'Volunteering and community', 'Santiago de Compostela'],
    about: {
      number: '01 / ABOUT ESN',
      heading: ['A community', 'without borders.'],
      leadBefore: 'ESN Santiago de Compostela is part of the ',
      leadStrong: 'Erasmus Student Network',
      leadAfter: ', an international network created by and for students.',
      paragraphs: [
        'Our mission is to help international students settle in, discover Santiago and Galicia, and build connections that go beyond university.',
        'We do this through cultural activities, events, volunteering, trips and shared experiences.',
      ],
    },
    activities: {
      number: '02 / WHAT WE DO',
      heading: ['Discover', 'ESN.'],
      cards: [
        { icon: '🌍', title: 'International', text: 'Meet students from all over the world and become part of an international community in Santiago.', cta: 'Discover →', href: 'que-es-esn' },
        { icon: '🎉', title: 'Events', text: 'Parties, cultural activities, sports, gatherings and experiences to share.', cta: 'View events →', href: 'eventos' },
        { icon: '🤝', title: 'Volunteering', text: 'Volunteer and help build a better Erasmus experience for everyone.', cta: 'Get involved →', href: 'contacto' },
      ],
    },
    events: {
      number: '03 / AGENDA',
      heading: ['Upcoming', 'events.'],
      viewAll: 'View all →',
      items: [
        { month: 'SEP', day: '01', category: 'WELCOME', title: 'Welcome Event', text: 'Meet ESN Santiago and other international students.', location: 'Santiago' },
        { month: 'OCT', day: '10', category: 'CULTURE', title: 'Cultural Exchange', text: 'An experience to share cultures, languages and traditions.', location: 'Santiago' },
        { month: 'OCT', day: '24', category: 'TRAVEL', title: 'Discover Galicia', text: 'Discover Galicia with our international community.', location: 'Galicia' },
      ],
    },
    join: {
      number: '04 / JOIN',
      heading: 'Do not be',
      emphasis: 'a spectator.',
      text: 'Join ESN Santiago. Meet people, discover Galicia, take part in activities and help other international students.',
      cta: 'I WANT TO JOIN →',
    },
    languagesSection: {
      number: '05 / LANGUAGES',
      heading: ['A space', 'for everyone.'],
    },
    contact: {
      number: '06 / CONTACT',
      heading: 'Shall we talk?',
      text: 'Are you an international student? Want to collaborate with ESN? Have a proposal?',
      instagram: 'Instagram',
      email: 'Email',
      esncard: 'ESNcard',
    },
    footer: {
      tagline: 'Erasmus Student Network',
      address: 'Santiago de Compostela - Lugo',
      legal: ['LEGAL NOTICE', 'PRIVACY POLICY', 'TERMS AND CONDITIONS', 'PAYMENT METHODS'],
      opensInNewTab: 'opens in a new tab',
    },
  },
  pages: {
    'que-es-esn': { title: 'What is ESN?', text: 'ESN Santiago supports international students and helps build a welcoming community in Santiago de Compostela.' },
    'erasmus-tips': { title: 'Erasmus Tips', text: 'Useful guidance to help you settle in, explore the city and make the most of your Erasmus experience.' },
    esncard: { title: 'ESNcard', text: 'Find out about the ESNcard and the benefits, activities and discounts available to you.' },
    eventos: { title: 'Events', text: 'Discover upcoming activities, trips and gatherings with our international community.' },
    blog: { title: 'Blog', text: 'Stories, practical information and inspiration from ESN Santiago.' },
    contacto: { title: 'Contact', text: 'Get in touch to join, collaborate or ask us anything.' },
    avisolegal: { title: 'Legal notice', text: 'Legal information for ESN Santiago de Compostela.' },
    politicaprivacidad: { title: 'Privacy policy', text: 'Information about how ESN Santiago de Compostela handles personal data.' },
    TyC: { title: 'Terms and conditions', text: 'Terms and conditions for ESN Santiago de Compostela services.' },
    'metodos-de-pago': { title: 'Payment methods', text: 'Available payment methods for ESN Santiago de Compostela services.' },
    'descuentos/locales': { title: 'Local discounts', text: 'Explore offers from local businesses in Santiago de Compostela.' },
    'descuentos/nacionales': { title: 'National discounts', text: 'Discover ESNcard benefits available across Spain.' },
    'descuentos/internacionales': { title: 'International discounts', text: 'Explore benefits available to ESNcard holders around Europe.' },
  },
};

export default en;
