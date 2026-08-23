import type { Dictionary } from './types';

const fr: Dictionary = {
  nav: {
    about: "Qu'est-ce qu'ESN",
    tips: 'Conseils Erasmus',
    esncard: 'ESNcard',
    events: 'Événements',
    discounts: 'Réductions',
    local: 'Réductions locales',
    national: 'Réductions nationales',
    international: 'Réductions internationales',
    blog: 'Blog',
    contact: 'Contact',
    language: 'Langue',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    mainNav: 'Navigation principale',
    mobileNav: 'Navigation mobile',
    backHome: "Retour à l'accueil",
  },
  home: {
    heroTitle: ['Students', 'Helping', 'Students'],
    heroText:
      'ESN Santiago de Compostela relie les étudiants internationaux et locaux grâce à des expériences, du bénévolat, de la culture et une communauté.',
    heroCtaEvents: 'VOIR LES ÉVÉNEMENTS →',
    heroCtaAbout: 'Découvre ESN →',
    stats: ['International Community', 'Étudiants internationaux', 'Bénévolat et communauté', 'Santiago de Compostela'],
    about: {
      number: '01 / À PROPOS',
      heading: ['Une communauté', 'sans frontières.'],
      leadBefore: "ESN Santiago de Compostela fait partie de l'",
      leadStrong: 'Erasmus Student Network',
      leadAfter: ', un réseau international créé par et pour les étudiants.',
      paragraphs: [
        "Notre mission est d'aider les étudiants internationaux à s'intégrer, à découvrir Saint-Jacques-de-Compostelle et la Galice, et à créer des liens qui dépassent le cadre universitaire.",
        'Nous le faisons à travers des activités culturelles, des événements, du bénévolat, des voyages et des expériences partagées.',
      ],
    },
    activities: {
      number: '02 / CE QUE NOUS FAISONS',
      heading: ['Découvre', 'ESN.'],
      cards: [
        { icon: '🌍', title: 'International', text: 'Rencontre des étudiants du monde entier et intègre une communauté internationale à Saint-Jacques-de-Compostelle.', cta: 'Découvrir →', href: 'que-es-esn' },
        { icon: '🎉', title: 'Events', text: 'Fêtes, activités culturelles, sport, rencontres et expériences à partager.', cta: 'Voir les événements →', href: 'eventos' },
        { icon: '🤝', title: 'Volunteering', text: 'Deviens bénévole et aide à construire une meilleure expérience Erasmus pour tous.', cta: 'Participer →', href: 'contacto' },
      ],
    },
    events: {
      number: '03 / AGENDA',
      heading: ['Prochains', 'événements.'],
      viewAll: 'Voir tout →',
      items: [
        { month: 'SEP', day: '01', category: 'WELCOME', title: 'Welcome Event', text: 'Rencontre ESN Santiago et d\'autres étudiants internationaux.', location: 'Santiago' },
        { month: 'OCT', day: '10', category: 'CULTURE', title: 'Cultural Exchange', text: 'Une expérience pour partager cultures, langues et traditions.', location: 'Santiago' },
        { month: 'OCT', day: '24', category: 'TRAVEL', title: 'Discover Galicia', text: 'Découvre la Galice avec notre communauté internationale.', location: 'Galicia' },
      ],
    },
    join: {
      number: '04 / PARTICIPE',
      heading: 'Ne reste pas',
      emphasis: 'spectateur.',
      text: 'Rejoins ESN Santiago. Rencontre des gens, découvre la Galice, participe à des activités et aide d\'autres étudiants internationaux.',
      cta: 'JE VEUX PARTICIPER →',
    },
    languagesSection: {
      number: '05 / LANGUES',
      heading: ['Un espace', 'pour tous.'],
    },
    contact: {
      number: '06 / CONTACT',
      heading: 'On se parle ?',
      text: 'Tu es étudiant international ? Tu veux collaborer avec ESN ? Tu as une proposition ?',
      instagram: 'Instagram',
      email: 'Email',
      esncard: 'ESNcard',
    },
    footer: {
      tagline: 'Erasmus Student Network',
      address: 'Santiago de Compostela - Lugo',
      legal: ['MENTIONS LÉGALES', 'POLITIQUE DE CONFIDENTIALITÉ', 'CONDITIONS GÉNÉRALES', 'MODES DE PAIEMENT'],
      opensInNewTab: 'ouvre dans un nouvel onglet',
    },
  },
  pages: {
    'que-es-esn': { title: "Qu'est-ce qu'ESN ?", text: 'ESN Santiago accompagne les étudiants internationaux et aide à construire une communauté accueillante à Saint-Jacques-de-Compostelle.' },
    'erasmus-tips': { title: 'Conseils Erasmus', text: "Des conseils utiles pour t'installer, découvrir la ville et profiter pleinement de ton expérience Erasmus." },
    esncard: { title: 'ESNcard', text: "Découvre l'ESNcard et tous les avantages, activités et réductions disponibles pour toi." },
    eventos: { title: 'Événements', text: 'Découvre les prochaines activités, voyages et rencontres de notre communauté.' },
    blog: { title: 'Blog', text: "Histoires, informations pratiques et inspiration de la part d'ESN Santiago." },
    contacto: { title: 'Contact', text: 'Écris-nous pour participer, collaborer ou poser toutes tes questions.' },
    avisolegal: { title: 'Mentions légales', text: 'Informations légales concernant ESN Santiago de Compostela.' },
    politicaprivacidad: { title: 'Politique de confidentialité', text: 'Informations sur la manière dont ESN Santiago de Compostela traite les données personnelles.' },
    TyC: { title: 'Conditions générales', text: "Conditions générales des services d'ESN Santiago de Compostela." },
    'metodos-de-pago': { title: 'Modes de paiement', text: "Modes de paiement disponibles pour les services d'ESN Santiago de Compostela." },
    'descuentos/locales': { title: 'Réductions locales', text: 'Découvre les offres des commerces locaux à Saint-Jacques-de-Compostelle.' },
    'descuentos/nacionales': { title: 'Réductions nationales', text: "Découvre les avantages de l'ESNcard disponibles dans toute l'Espagne." },
    'descuentos/internacionales': { title: 'Réductions internationales', text: "Découvre les avantages disponibles pour les titulaires de l'ESNcard partout en Europe." },
  },
};

export default fr;
