import type { Dictionary } from './types';

const gl: Dictionary = {
  nav: {
    about: 'Que é ESN',
    tips: 'Consellos Erasmus',
    esncard: 'ESNcard',
    events: 'Eventos',
    discounts: 'Descontos',
    local: 'Descontos locais',
    national: 'Descontos nacionais',
    international: 'Descontos internacionais',
    blog: 'Blog',
    contact: 'Contacto',
    language: 'Idioma',
    openMenu: 'Abrir menú',
    closeMenu: 'Pechar menú',
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móbil',
    backHome: 'Volver ao inicio',
  },
  home: {
    heroTitle: ['Students', 'Helping', 'Students'],
    heroText:
      'ESN Santiago de Compostela conecta estudantes internacionais e locais a través de experiencias, voluntariado, cultura e comunidade.',
    heroCtaEvents: 'VER EVENTOS →',
    heroCtaAbout: 'Coñece ESN →',
    stats: ['International Community', 'Estudantes internacionais', 'Voluntariado e comunidade', 'Santiago de Compostela'],
    about: {
      number: '01 / SOBRE ESN',
      heading: ['Unha comunidade', 'sen fronteiras.'],
      leadBefore: 'ESN Santiago de Compostela forma parte de ',
      leadStrong: 'Erasmus Student Network',
      leadAfter: ', unha rede internacional creada por e para estudantes.',
      paragraphs: [
        'A nosa misión é axudar ao estudantado internacional a integrarse, descubrir Santiago e Galicia e construír conexións que vaian máis alá da universidade.',
        'Facémolo mediante actividades culturais, eventos, voluntariado, viaxes e experiencias compartidas.',
      ],
    },
    activities: {
      number: '02 / QUE FACEMOS',
      heading: ['Descubre', 'ESN.'],
      cards: [
        { icon: '🌍', title: 'International', text: 'Coñece estudantes de todo o mundo e forma parte dunha comunidade internacional en Santiago.', cta: 'Descubrir →', href: 'que-es-esn' },
        { icon: '🎉', title: 'Events', text: 'Festas, actividades culturais, deporte, encontros e experiencias para compartir.', cta: 'Ver eventos →', href: 'eventos' },
        { icon: '🤝', title: 'Volunteering', text: 'Participa como voluntario e axuda a construír unha mellor experiencia Erasmus para todos.', cta: 'Participar →', href: 'contacto' },
      ],
    },
    events: {
      number: '03 / AXENDA',
      heading: ['Próximos', 'eventos.'],
      viewAll: 'Ver todos →',
      items: [
        { month: 'SEP', day: '01', category: 'WELCOME', title: 'Welcome Event', text: 'Coñece ESN Santiago e a outros estudantes internacionais.', location: 'Santiago' },
        { month: 'OCT', day: '10', category: 'CULTURE', title: 'Cultural Exchange', text: 'Unha experiencia para compartir culturas, linguas e tradicións.', location: 'Santiago' },
        { month: 'OCT', day: '24', category: 'TRAVEL', title: 'Discover Galicia', text: 'Descubre Galicia xunto á nosa comunidade internacional.', location: 'Galicia' },
      ],
    },
    join: {
      number: '04 / PARTICIPA',
      heading: 'Non sexas',
      emphasis: 'un espectador.',
      text: 'Únete a ESN Santiago. Coñece xente, descubre Galicia, participa en actividades e axuda a outros estudantes internacionais.',
      cta: 'QUERO PARTICIPAR →',
    },
    languagesSection: {
      number: '05 / IDIOMAS',
      heading: ['Un espazo', 'para todos.'],
    },
    contact: {
      number: '06 / CONTACTO',
      heading: 'Falamos?',
      text: 'Es estudante internacional? Queres colaborar con ESN? Tes unha proposta?',
      instagram: 'Instagram',
      email: 'Email',
      esncard: 'ESNcard',
    },
    footer: {
      tagline: 'Erasmus Student Network',
      address: 'Santiago de Compostela - Lugo',
      legal: ['AVISO LEGAL', 'POLÍTICA DE PRIVACIDADE', 'TERMOS E CONDICIÓNS DE CONTRATACIÓN', 'MÉTODOS DE PAGO'],
      opensInNewTab: 'abre nunha nova lapela',
    },
  },
  pages: {
    'que-es-esn': { title: 'Que é ESN', text: 'ESN Santiago acompaña o estudantado internacional para crear comunidade en Santiago.' },
    'erasmus-tips': { title: 'Consellos Erasmus', text: 'Consellos útiles para instalarte, descubrir a cidade e aproveitar ao máximo a túa experiencia Erasmus.' },
    esncard: { title: 'ESNcard', text: 'Descobre a ESNcard e todos os beneficios, actividades e descontos dispoñibles para ti.' },
    eventos: { title: 'Eventos', text: 'Descubre as próximas actividades, viaxes e encontros da nosa comunidade.' },
    blog: { title: 'Blog', text: 'Historias, información práctica e inspiración de ESN Santiago.' },
    contacto: { title: 'Contacto', text: 'Escríbenos para participar, colaborar ou resolver calquera dúbida.' },
    avisolegal: { title: 'Aviso legal', text: 'Información legal de ESN Santiago de Compostela.' },
    politicaprivacidad: { title: 'Política de privacidade', text: 'Información sobre como ESN Santiago de Compostela trata os datos persoais.' },
    TyC: { title: 'Termos e condicións de contratación', text: 'Termos e condicións dos servizos de ESN Santiago de Compostela.' },
    'metodos-de-pago': { title: 'Métodos de pago', text: 'Métodos de pago dispoñibles para os servizos de ESN Santiago de Compostela.' },
    'descuentos/locales': { title: 'Descontos locais', text: 'Descobre as ofertas de comercios locais en Santiago de Compostela.' },
    'descuentos/nacionales': { title: 'Descontos nacionais', text: 'Descobre os beneficios da ESNcard dispoñibles en toda España.' },
    'descuentos/internacionales': { title: 'Descontos internacionais', text: 'Descobre os beneficios dispoñibles para as ESNcard por toda Europa.' },
  },
};

export default gl;
