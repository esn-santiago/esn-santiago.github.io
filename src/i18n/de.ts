import type { Dictionary } from './types';

const de: Dictionary = {
  nav: {
    about: 'Was ist ESN',
    tips: 'Erasmus-Tipps',
    esncard: 'ESNcard',
    events: 'Veranstaltungen',
    discounts: 'Rabatte',
    local: 'Lokale Rabatte',
    national: 'Nationale Rabatte',
    international: 'Internationale Rabatte',
    blog: 'Blog',
    contact: 'Kontakt',
    language: 'Sprache',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    mainNav: 'Hauptnavigation',
    mobileNav: 'Mobile Navigation',
  },
  home: {
    heroTitle: ['Students', 'Helping', 'Students'],
    heroText:
      'ESN Santiago de Compostela verbindet internationale und lokale Studierende durch Erlebnisse, Freiwilligenarbeit, Kultur und Gemeinschaft.',
    heroCtaEvents: 'VERANSTALTUNGEN ANSEHEN →',
    heroCtaAbout: 'ESN entdecken →',
    committees: ['Sport', 'Soziales', 'Kultur', 'Reisen'],
    about: {
      heading: ['Eine Gemeinschaft', 'ohne Grenzen.'],
      leadBefore: 'ESN Santiago de Compostela ist Teil des ',
      leadStrong: 'Erasmus Student Network',
      leadAfter: ', eines internationalen Netzwerks von und für Studierende.',
      paragraphs: [
        'Unsere Mission ist es, internationalen Studierenden zu helfen, sich einzuleben, Santiago und Galicien zu entdecken und Verbindungen aufzubauen, die über die Universität hinausgehen.',
        'Das tun wir durch kulturelle Aktivitäten, Veranstaltungen, Freiwilligenarbeit, Reisen und gemeinsame Erlebnisse.',
      ],
    },
    activities: {
      heading: ['Entdecke', 'ESN.'],
      cards: [
        { icon: '🌍', title: 'International', text: 'Lerne Studierende aus aller Welt kennen und werde Teil einer internationalen Gemeinschaft in Santiago.', cta: 'Entdecken →', href: 'que-es-esn' },
        { icon: '🎉', title: 'Events', text: 'Partys, kulturelle Aktivitäten, Sport, Treffen und Erlebnisse zum Teilen.', cta: 'Veranstaltungen ansehen →', href: 'eventos' },
        { icon: '🤝', title: 'Volunteering', text: 'Engagiere dich als Freiwillige:r und hilf, ein besseres Erasmus-Erlebnis für alle zu schaffen.', cta: 'Mitmachen →', href: 'contacto' },
      ],
    },
    events: {
      heading: ['Kommende', 'Veranstaltungen.'],
      viewAll: 'Alle ansehen →',
      items: [
        { month: 'SEP', day: '01', category: 'WELCOME', title: 'Welcome Event', text: 'Lerne ESN Santiago und andere internationale Studierende kennen.', location: 'Santiago' },
        { month: 'OCT', day: '10', category: 'CULTURE', title: 'Cultural Exchange', text: 'Ein Erlebnis, um Kulturen, Sprachen und Traditionen zu teilen.', location: 'Santiago' },
        { month: 'OCT', day: '24', category: 'TRAVEL', title: 'Discover Galicia', text: 'Entdecke Galicien mit unserer internationalen Gemeinschaft.', location: 'Galicia' },
      ],
    },
    join: {
      heading: 'Sei kein',
      emphasis: 'Zuschauer.',
      text: 'Werde Teil von ESN Santiago. Lerne Menschen kennen, entdecke Galicien, nimm an Aktivitäten teil und hilf anderen internationalen Studierenden.',
      cta: 'ICH WILL MITMACHEN →',
    },
    contact: {
      heading: 'Sprechen wir?',
      text: 'Bist du internationale:r Studierende:r? Möchtest du mit ESN zusammenarbeiten? Hast du einen Vorschlag?',
      instagram: 'Instagram',
      email: 'Email',
      esncard: 'ESNcard',
    },
    footer: {
      tagline: 'Erasmus Student Network',
      address: 'Santiago de Compostela - Lugo',
      legal: ['IMPRESSUM', 'DATENSCHUTZERKLÄRUNG', 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN', 'ZAHLUNGSMETHODEN'],
      opensInNewTab: 'öffnet in einem neuen Tab',
    },
  },
  pages: {
    'que-es-esn': { title: 'Was ist ESN?', text: 'ESN Santiago unterstützt internationale Studierende und hilft, eine offene Gemeinschaft in Santiago de Compostela aufzubauen.' },
    'erasmus-tips': { title: 'Erasmus-Tipps', text: 'Nützliche Tipps, um dich einzuleben, die Stadt zu entdecken und das Beste aus deinem Erasmus-Aufenthalt zu machen.' },
    esncard: { title: 'ESNcard', text: 'Erfahre mehr über die ESNcard und alle Vorteile, Aktivitäten und Rabatte, die dir zur Verfügung stehen.' },
    eventos: { title: 'Veranstaltungen', text: 'Entdecke kommende Aktivitäten, Reisen und Treffen unserer internationalen Gemeinschaft.' },
    blog: { title: 'Blog', text: 'Geschichten, praktische Informationen und Inspiration von ESN Santiago.' },
    contacto: { title: 'Kontakt', text: 'Schreib uns, um mitzumachen, zusammenzuarbeiten oder Fragen zu stellen.' },
    avisolegal: { title: 'Impressum', text: 'Rechtliche Informationen zu ESN Santiago de Compostela.' },
    politicaprivacidad: { title: 'Datenschutzerklärung', text: 'Informationen darüber, wie ESN Santiago de Compostela personenbezogene Daten verarbeitet.' },
    TyC: { title: 'Allgemeine Geschäftsbedingungen', text: 'Allgemeine Geschäftsbedingungen für die Leistungen von ESN Santiago de Compostela.' },
    'metodos-de-pago': { title: 'Zahlungsmethoden', text: 'Verfügbare Zahlungsmethoden für die Leistungen von ESN Santiago de Compostela.' },
    'descuentos/locales': { title: 'Lokale Rabatte', text: 'Entdecke Angebote lokaler Geschäfte in Santiago de Compostela.' },
    'descuentos/nacionales': { title: 'Nationale Rabatte', text: 'Entdecke die ESNcard-Vorteile in ganz Spanien.' },
    'descuentos/internacionales': { title: 'Internationale Rabatte', text: 'Entdecke die Vorteile für ESNcard-Inhaber in ganz Europa.' },
  },
};

export default de;
