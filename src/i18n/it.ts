import type { Dictionary } from './types';

const it: Dictionary = {
  nav: {
    about: "Cos'è ESN",
    tips: 'Consigli Erasmus',
    esncard: 'ESNcard',
    events: 'Eventi',
    discounts: 'Sconti',
    local: 'Sconti locali',
    national: 'Sconti nazionali',
    international: 'Sconti internazionali',
    blog: 'Blog',
    contact: 'Contatti',
    language: 'Lingua',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
    mainNav: 'Navigazione principale',
    mobileNav: 'Navigazione mobile',
  },
  home: {
    heroTitle: ['Students', 'Helping', 'Students'],
    heroText:
      'ESN Santiago de Compostela mette in contatto studenti internazionali e locali attraverso esperienze, volontariato, cultura e comunità.',
    heroCtaEvents: 'VEDI GLI EVENTI →',
    heroCtaAbout: 'Scopri ESN →',
    committees: ['Sport', 'Sociale', 'Culturale', 'Viaggi'],
    about: {
      heading: ['Una comunità', 'senza confini.'],
      leadBefore: "ESN Santiago de Compostela fa parte dell'",
      leadStrong: 'Erasmus Student Network',
      leadAfter: ', una rete internazionale creata da e per gli studenti.',
      paragraphs: [
        'La nostra missione è aiutare gli studenti internazionali a integrarsi, scoprire Santiago e la Galizia e costruire legami che vadano oltre l\'università.',
        'Lo facciamo attraverso attività culturali, eventi, volontariato, viaggi ed esperienze condivise.',
      ],
    },
    activities: {
      heading: ['Scopri', 'ESN.'],
      cards: [
        { icon: '🌍', title: 'International', text: 'Incontra studenti da tutto il mondo e diventa parte di una comunità internazionale a Santiago.', cta: 'Scopri →', href: 'que-es-esn' },
        { icon: '🎉', title: 'Events', text: 'Feste, attività culturali, sport, incontri ed esperienze da condividere.', cta: 'Vedi gli eventi →', href: 'eventos' },
        { icon: '🤝', title: 'Volunteering', text: 'Fai volontariato e aiuta a costruire un\'esperienza Erasmus migliore per tutti.', cta: 'Partecipa →', href: 'contacto' },
      ],
    },
    events: {
      heading: ['Prossimi', 'eventi.'],
      viewAll: 'Vedi tutti →',
      items: [
        { month: 'SEP', day: '01', category: 'WELCOME', title: 'Welcome Event', text: 'Conosci ESN Santiago e altri studenti internazionali.', location: 'Santiago' },
        { month: 'OCT', day: '10', category: 'CULTURE', title: 'Cultural Exchange', text: 'Un\'esperienza per condividere culture, lingue e tradizioni.', location: 'Santiago' },
        { month: 'OCT', day: '24', category: 'TRAVEL', title: 'Discover Galicia', text: 'Scopri la Galizia insieme alla nostra comunità internazionale.', location: 'Galicia' },
      ],
    },
    join: {
      heading: 'Non essere',
      emphasis: 'uno spettatore.',
      text: 'Unisciti a ESN Santiago. Conosci persone, scopri la Galizia, partecipa alle attività e aiuta altri studenti internazionali.',
      cta: 'VOGLIO PARTECIPARE →',
    },
    contact: {
      heading: 'Parliamo?',
      text: 'Sei uno studente internazionale? Vuoi collaborare con ESN? Hai una proposta?',
      instagram: 'Instagram',
      email: 'Email',
      esncard: 'ESNcard',
    },
    footer: {
      tagline: 'Erasmus Student Network',
      address: 'Santiago de Compostela - Lugo',
      legal: ['NOTE LEGALI', 'INFORMATIVA SULLA PRIVACY', 'TERMINI E CONDIZIONI', 'METODI DI PAGAMENTO'],
      opensInNewTab: 'apre in una nuova scheda',
    },
  },
  pages: {
    'que-es-esn': { title: "Cos'è ESN?", text: 'ESN Santiago sostiene gli studenti internazionali e aiuta a costruire una comunità accogliente a Santiago de Compostela.' },
    'erasmus-tips': { title: 'Consigli Erasmus', text: 'Consigli utili per ambientarti, scoprire la città e vivere al meglio la tua esperienza Erasmus.' },
    esncard: { title: 'ESNcard', text: 'Scopri la ESNcard e tutti i vantaggi, le attività e gli sconti a tua disposizione.' },
    eventos: { title: 'Eventi', text: 'Scopri le prossime attività, i viaggi e gli incontri della nostra comunità.' },
    blog: { title: 'Blog', text: 'Storie, informazioni pratiche e ispirazione da ESN Santiago.' },
    contacto: { title: 'Contatti', text: 'Scrivici per partecipare, collaborare o farci qualsiasi domanda.' },
    avisolegal: { title: 'Note legali', text: 'Informazioni legali su ESN Santiago de Compostela.' },
    politicaprivacidad: { title: 'Informativa sulla privacy', text: 'Informazioni su come ESN Santiago de Compostela tratta i dati personali.' },
    TyC: { title: 'Termini e condizioni', text: 'Termini e condizioni dei servizi di ESN Santiago de Compostela.' },
    'metodos-de-pago': { title: 'Metodi di pagamento', text: 'Metodi di pagamento disponibili per i servizi di ESN Santiago de Compostela.' },
    'descuentos/locales': { title: 'Sconti locali', text: 'Scopri le offerte degli esercizi locali a Santiago de Compostela.' },
    'descuentos/nacionales': { title: 'Sconti nazionali', text: 'Scopri i vantaggi della ESNcard disponibili in tutta la Spagna.' },
    'descuentos/internacionales': { title: 'Sconti internazionali', text: 'Scopri i vantaggi disponibili per i titolari della ESNcard in tutta Europa.' },
  },
};

export default it;
