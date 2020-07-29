const site = require('./site');

module.exports = {
  'ro-ro': {
    path: 'ro',
    locale: 'ro-ro',
    htmllang: 'ro-ro',
    ogLang: 'ro_RO',
    dateFormat: 'dd.MM.yyyy',
    title: 'LekoArts - Graphic Designer & Front-End Developer',
    description: `Hi! I'm Lennart and I'm a self-taught and passionate graphic designer & front-end developer. I design, create and develop cross-platform design concepts to get the most out of your brand.`,
    headline: 'Graphic Designer & Front-End Developer',
    about: 'despre',
    contact: 'contact',
    tags: 'taguri',
  },
  'en-gb': {
    default: true,
    path: 'en',
    locale: 'en-gb',
    htmllang: 'en-gb',
    ogLang: 'en_US',
    dateFormat: 'dd/MM/yyyy',
    title: site.title,
    description: site.description,
    headline: site.headline,
    about: 'about',
    contact: 'Kontakt',
  },
};
