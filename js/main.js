// Phase 1: translations scaffold. Phase 2 will activate the lang toggle button.

const translations = {
  es: {
    'nav.philosophy': 'Filosofía',
    'nav.about':      'Nosotros',
    'nav.services':   'Servicios',
    'nav.contact':    'Contacto',
    'hero.headline':  'Transformando corazones a través de los caballos',
    'hero.tagline':   'Escuela de Caballos · Conexión · Bienestar · Horsemanship',
    'hero.cta':       'Reserva tu Sesión',
    'hero.learnMore': 'Conoce Nuestra Filosofía',
  },
  en: {
    'nav.philosophy': 'Philosophy',
    'nav.about':      'About',
    'nav.services':   'Services',
    'nav.contact':    'Contact',
    'hero.headline':  'Transforming Hearts Through Horses',
    'hero.tagline':   'Equestrian School · Connection · Wellness · Horsemanship',
    'hero.cta':       'Book Your Session',
    'hero.learnMore': 'Discover Our Philosophy',
  },
};

function applyLanguage(lang) {
  const t = translations[lang] || translations['es'];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

// Mobile nav toggle
var menuToggle = document.getElementById('menu-toggle');
var mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });

  // Auto-close mobile menu when a nav link is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Init
applyLanguage(localStorage.getItem('lang') || 'es');
