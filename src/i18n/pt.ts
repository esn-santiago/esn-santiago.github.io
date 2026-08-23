import type { Dictionary } from './types';

const pt: Dictionary = {
  nav: {
    about: 'O que é a ESN',
    tips: 'Dicas Erasmus',
    esncard: 'ESNcard',
    events: 'Eventos',
    discounts: 'Descontos',
    local: 'Descontos locais',
    national: 'Descontos nacionais',
    international: 'Descontos internacionais',
    blog: 'Blog',
    contact: 'Contacto',
    language: 'Idioma',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    mainNav: 'Navegação principal',
    mobileNav: 'Navegação móvel',
    backHome: 'Voltar ao início',
  },
  home: {
    heroTitle: ['Students', 'Helping', 'Students'],
    heroText:
      'A ESN Santiago de Compostela liga estudantes internacionais e locais através de experiências, voluntariado, cultura e comunidade.',
    heroCtaEvents: 'VER EVENTOS →',
    heroCtaAbout: 'Descobre a ESN →',
    stats: ['International Community', 'Estudantes internacionais', 'Voluntariado e comunidade', 'Santiago de Compostela'],
    about: {
      number: '01 / SOBRE A ESN',
      heading: ['Uma comunidade', 'sem fronteiras.'],
      leadBefore: 'A ESN Santiago de Compostela faz parte da ',
      leadStrong: 'Erasmus Student Network',
      leadAfter: ', uma rede internacional criada por e para estudantes.',
      paragraphs: [
        'A nossa missão é ajudar estudantes internacionais a integrarem-se, descobrir Santiago e a Galiza e construir ligações que vão além da universidade.',
        'Fazemo-lo através de atividades culturais, eventos, voluntariado, viagens e experiências partilhadas.',
      ],
    },
    activities: {
      number: '02 / O QUE FAZEMOS',
      heading: ['Descobre', 'a ESN.'],
      cards: [
        { icon: '🌍', title: 'International', text: 'Conhece estudantes de todo o mundo e faz parte de uma comunidade internacional em Santiago.', cta: 'Descobrir →', href: 'que-es-esn' },
        { icon: '🎉', title: 'Events', text: 'Festas, atividades culturais, desporto, encontros e experiências para partilhar.', cta: 'Ver eventos →', href: 'eventos' },
        { icon: '🤝', title: 'Volunteering', text: 'Participa como voluntário e ajuda a construir uma melhor experiência Erasmus para todos.', cta: 'Participar →', href: 'contacto' },
      ],
    },
    events: {
      number: '03 / AGENDA',
      heading: ['Próximos', 'eventos.'],
      viewAll: 'Ver todos →',
      items: [
        { month: 'SEP', day: '01', category: 'WELCOME', title: 'Welcome Event', text: 'Conhece a ESN Santiago e outros estudantes internacionais.', location: 'Santiago' },
        { month: 'OCT', day: '10', category: 'CULTURE', title: 'Cultural Exchange', text: 'Uma experiência para partilhar culturas, línguas e tradições.', location: 'Santiago' },
        { month: 'OCT', day: '24', category: 'TRAVEL', title: 'Discover Galicia', text: 'Descobre a Galiza junto com a nossa comunidade internacional.', location: 'Galicia' },
      ],
    },
    join: {
      number: '04 / PARTICIPA',
      heading: 'Não sejas',
      emphasis: 'um espectador.',
      text: 'Junta-te à ESN Santiago. Conhece pessoas, descobre a Galiza, participa em atividades e ajuda outros estudantes internacionais.',
      cta: 'QUERO PARTICIPAR →',
    },
    languagesSection: {
      number: '05 / IDIOMAS',
      heading: ['Um espaço', 'para todos.'],
    },
    contact: {
      number: '06 / CONTACTO',
      heading: 'Falamos?',
      text: 'És estudante internacional? Queres colaborar com a ESN? Tens uma proposta?',
      instagram: 'Instagram',
      email: 'Email',
      esncard: 'ESNcard',
    },
    footer: {
      tagline: 'Erasmus Student Network',
      address: 'Santiago de Compostela - Lugo',
      legal: ['AVISO LEGAL', 'POLÍTICA DE PRIVACIDADE', 'TERMOS E CONDIÇÕES DE CONTRATAÇÃO', 'MÉTODOS DE PAGAMENTO'],
      opensInNewTab: 'abre numa nova aba',
    },
  },
  pages: {
    'que-es-esn': { title: 'O que é a ESN?', text: 'A ESN Santiago apoia estudantes internacionais e ajuda a construir uma comunidade acolhedora em Santiago de Compostela.' },
    'erasmus-tips': { title: 'Dicas Erasmus', text: 'Dicas úteis para te instalares, descobrires a cidade e aproveitares ao máximo a tua experiência Erasmus.' },
    esncard: { title: 'ESNcard', text: 'Descobre a ESNcard e todos os benefícios, atividades e descontos disponíveis para ti.' },
    eventos: { title: 'Eventos', text: 'Descobre as próximas atividades, viagens e encontros da nossa comunidade.' },
    blog: { title: 'Blog', text: 'Histórias, informação prática e inspiração da ESN Santiago.' },
    contacto: { title: 'Contacto', text: 'Escreve-nos para participar, colaborar ou esclarecer qualquer dúvida.' },
    avisolegal: { title: 'Aviso legal', text: 'Informação legal sobre a ESN Santiago de Compostela.' },
    politicaprivacidad: { title: 'Política de privacidade', text: 'Informação sobre como a ESN Santiago de Compostela trata os dados pessoais.' },
    TyC: { title: 'Termos e condições de contratação', text: 'Termos e condições dos serviços da ESN Santiago de Compostela.' },
    'metodos-de-pago': { title: 'Métodos de pagamento', text: 'Métodos de pagamento disponíveis para os serviços da ESN Santiago de Compostela.' },
    'descuentos/locales': { title: 'Descontos locais', text: 'Descobre as ofertas de comércios locais em Santiago de Compostela.' },
    'descuentos/nacionales': { title: 'Descontos nacionais', text: 'Descobre os benefícios da ESNcard disponíveis em toda a Espanha.' },
    'descuentos/internacionales': { title: 'Descontos internacionais', text: 'Descobre os benefícios disponíveis para os titulares da ESNcard por toda a Europa.' },
  },
};

export default pt;
