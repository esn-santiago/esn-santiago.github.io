import type { Dictionary } from './types';

const es: Dictionary = {
  nav: {
    about: 'Qué es ESN',
    tips: 'Erasmus Tips',
    esncard: 'ESNcard',
    events: 'Eventos',
    discounts: 'Descuentos',
    local: 'Descuentos locales',
    national: 'Descuentos nacionales',
    international: 'Descuentos internacionales',
    blog: 'Blog',
    contact: 'Contacto',
    language: 'Idioma',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    backHome: 'Volver al inicio',
  },
  home: {
    heroTitle: ['Students', 'Helping', 'Students'],
    heroText:
      'ESN Santiago de Compostela conecta estudiantes internacionales y locales a través de experiencias, voluntariado, cultura y comunidad.',
    heroCtaEvents: 'VER EVENTOS →',
    heroCtaAbout: 'Conoce ESN →',
    stats: ['International Community', 'Estudiantes internacionales', 'Voluntariado y comunidad', 'Santiago de Compostela'],
    about: {
      number: '01 / SOBRE ESN',
      heading: ['Una comunidad', 'sin fronteras.'],
      leadBefore: 'ESN Santiago de Compostela forma parte de ',
      leadStrong: 'Erasmus Student Network',
      leadAfter: ', una red internacional creada por y para estudiantes.',
      paragraphs: [
        'Nuestra misión es ayudar a estudiantes internacionales a integrarse, descubrir Santiago y Galicia y construir conexiones que vayan más allá de la universidad.',
        'Lo hacemos mediante actividades culturales, eventos, voluntariado, viajes y experiencias compartidas.',
      ],
    },
    activities: {
      number: '02 / QUÉ HACEMOS',
      heading: ['Descubre', 'ESN.'],
      cards: [
        { icon: '🌍', title: 'International', text: 'Conoce estudiantes de todo el mundo y forma parte de una comunidad internacional en Santiago.', cta: 'Descubrir →', href: 'que-es-esn' },
        { icon: '🎉', title: 'Events', text: 'Fiestas, actividades culturales, deporte, encuentros y experiencias para compartir.', cta: 'Ver eventos →', href: 'eventos' },
        { icon: '🤝', title: 'Volunteering', text: 'Participa como voluntario y ayuda a construir una experiencia Erasmus mejor para todos.', cta: 'Participar →', href: 'contacto' },
      ],
    },
    events: {
      number: '03 / AGENDA',
      heading: ['Próximos', 'eventos.'],
      viewAll: 'Ver todos →',
      items: [
        { month: 'SEP', day: '01', category: 'WELCOME', title: 'Welcome Event', text: 'Conoce ESN Santiago y a otros estudiantes internacionales.', location: 'Santiago' },
        { month: 'OCT', day: '10', category: 'CULTURE', title: 'Cultural Exchange', text: 'Una experiencia para compartir culturas, idiomas y tradiciones.', location: 'Santiago' },
        { month: 'OCT', day: '24', category: 'TRAVEL', title: 'Discover Galicia', text: 'Descubre Galicia junto a nuestra comunidad internacional.', location: 'Galicia' },
      ],
    },
    join: {
      number: '04 / PARTICIPA',
      heading: 'No seas',
      emphasis: 'un espectador.',
      text: 'Únete a ESN Santiago. Conoce gente, descubre Galicia, participa en actividades y ayuda a otros estudiantes internacionales.',
      cta: 'QUIERO PARTICIPAR →',
    },
    languagesSection: {
      number: '05 / IDIOMAS',
      heading: ['Un espacio', 'para todos.'],
    },
    contact: {
      number: '06 / CONTACTO',
      heading: '¿Hablamos?',
      text: '¿Eres estudiante internacional? ¿Quieres colaborar con ESN? ¿Tienes una propuesta?',
      instagram: 'Instagram',
      email: 'Email',
      esncard: 'ESNcard',
    },
    footer: {
      tagline: 'Erasmus Student Network',
      address: 'Santiago de Compostela - Lugo',
      legal: ['AVISO LEGAL', 'POLÍTICA DE PRIVACIDAD', 'TÉRMINOS Y CONDICIONES DE CONTRATACIÓN', 'MÉTODOS DE PAGO'],
      opensInNewTab: 'abre en una nueva pestaña',
    },
  },
  pages: {
    'que-es-esn': { title: 'Qué es ESN', text: 'ESN Santiago acompaña a estudiantes internacionales para que su experiencia en Santiago sea más cercana, divertida y conectada.' },
    'erasmus-tips': { title: 'Erasmus Tips', text: 'Consejos útiles para instalarte, descubrir la ciudad y aprovechar al máximo tu experiencia Erasmus.' },
    esncard: { title: 'ESNcard', text: 'Descubre la ESNcard y todos los beneficios, actividades y descuentos disponibles para ti.' },
    eventos: { title: 'Eventos', text: 'Descubre las próximas actividades, viajes y encuentros de nuestra comunidad.' },
    blog: { title: 'Blog', text: 'Historias, información práctica e inspiración de ESN Santiago.' },
    contacto: { title: 'Contacto', text: 'Escríbenos para participar, colaborar o resolver cualquier duda.' },
    avisolegal: { title: 'Aviso legal', text: 'Información legal de ESN Santiago de Compostela.' },
    politicaprivacidad: { title: 'Política de privacidad', text: 'Información sobre cómo ESN Santiago de Compostela trata los datos personales.' },
    TyC: { title: 'Términos y condiciones de contratación', text: 'Términos y condiciones de los servicios de ESN Santiago de Compostela.' },
    'metodos-de-pago': { title: 'Métodos de pago', text: 'Métodos de pago disponibles para los servicios de ESN Santiago de Compostela.' },
    'descuentos/locales': { title: 'Descuentos locales', text: 'Descubre las ofertas de comercios locales en Santiago de Compostela.' },
    'descuentos/nacionales': { title: 'Descuentos nacionales', text: 'Descubre los beneficios de la ESNcard disponibles en toda España.' },
    'descuentos/internacionales': { title: 'Descuentos internacionales', text: 'Descubre los beneficios disponibles para las ESNcard por toda Europa.' },
  },
};

export default es;
