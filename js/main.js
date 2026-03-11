// Phase 1: translations scaffold. Phase 2 will activate the lang toggle button.

const translations = {
  es: {
    // Navigation
    'nav.philosophy': 'Filosofía',
    'nav.about':      'Nosotros',
    'nav.services':   'Servicios',
    'nav.contact':    'Contacto',

    // Hero
    'hero.headline':  'Transformando corazones a través de los caballos',
    'hero.tagline':   'Escuela de Caballos · Conexión · Bienestar · Horsemanship',
    'hero.cta':       'Reserva tu Sesión',
    'hero.learnMore': 'Conoce Nuestra Filosofía',

    // Philosophy
    'philosophy.label':        'Nuestra Filosofía',
    'philosophy.heading':      'Doma Racional · Conexión Emocional',
    'philosophy.body1':        'El caballo es el maestro más honesto que existe. No juzga, no miente, no impone — simplemente responde a lo que siente en quien se acerca. En AC.aballo creemos que la relación entre el ser humano y el caballo es un espejo: lo que el caballo refleja, la persona aprende. Esa es la base de la Doma Racional.',
    'philosophy.body2':        'Nuestro enfoque parte de la conexión antes que de la corrección. Trabajamos el binomio caballo–jinete desde la consciencia emocional, el liderazgo sereno y el respeto mutuo. Cada sesión es una oportunidad de crecer — no solo como jinete, sino como persona.',
    'philosophy.lema':         '"El caballo es nuestro maestro. La persona, el proceso. El vínculo, el camino."',
    'philosophy.alvaro.name':  'Álvaro Rodríguez Colmenares',
    'philosophy.alvaro.role':  'Horseman · Doma Racional · Coaching con Caballos',
    'philosophy.alvaro.quote': '"Un caballo no se domina: se escucha, se entiende y se acompaña."',
    'philosophy.luisana.name':  'Luisana Gallardo Flores',
    'philosophy.luisana.role':  'Cofundadora · Guía Emocional · Educación y Conexión',
    'philosophy.luisana.quote': '"El caballo saca la mejor versión de quien está dispuesto a escucharse."',
    'philosophy.phrase':       '"Aquí no solo se aprende a montar. Aquí se aprende a sentir, regular, confiar y avanzar."',

    // About
    'about.label':          'Quiénes Somos',
    'about.heading':        'Quiénes Somos',
    'about.body1':          'AC.aballo nació en noviembre de 2020 en Florida como un proyecto familiar impulsado por el amor a los caballos y la convicción de que el vínculo entre el ser humano y el caballo tiene el poder de transformar vidas. Lo que comenzó como un sueño compartido entre Álvaro y Luisana se convirtió en una escuela con identidad propia: cálida, profunda y comprometida con el bienestar integral.',
    'about.body2':          'Abrimos nuestras puertas a todos: bebés desde los 11 meses, niños, adolescentes, adultos y familias completas. También acompañamos a personas con condiciones especiales — autismo, déficit de atención, condiciones sensoriales y emocionales — con sesiones personalizadas y un enfoque de respeto y consciencia.',
    'about.body3':          '"Somos familia. Somos manada. Somos escuela. Somos emoción."',
    'about.values.respeto':  'Respeto',
    'about.values.empatia':  'Empatía',
    'about.values.conexion': 'Conexión',
    'about.values.confianza':'Confianza',
    'about.values.familia':  'Familia',
    'about.values.bienestar':'Bienestar emocional',
    'about.values.amor':     'Amor por los caballos',

    // Services
    'services.label':    'Nuestros Servicios',
    'services.heading':  'Nuestros Servicios',
    'services.subtitle': 'Ac.aballo no forma jinetes solamente. Forma seres humanos conectados consigo mismos.',

    'services.equitacion.name':   'Clases Regulares de Equitación',
    'services.equitacion.desc':   'Monta Western y English para principiantes a avanzados. Técnica, seguridad, confianza, equilibrio y control emocional.',

    'services.horsemanship.name': 'Horsemanship & Doma Racional',
    'services.horsemanship.desc': 'Trabajo desde el suelo, comunicación consciente, lectura del lenguaje corporal del caballo y formación del binomio caballo–jinete.',

    'services.interacciones.name': 'Interacciones con Caballos',
    'services.interacciones.desc': 'Experiencias guiadas para niños pequeños, personas que no montan, o quienes buscan vínculo y calma. El caballo como regulador emocional.',

    'services.programas.name': 'Programas para Niños y Personas con Condición',
    'services.programas.desc': 'Sesiones personalizadas para autismo, déficit de atención y condiciones sensoriales/emocionales. Procesos de regulación y confianza.',

    'services.cabalgatas.name': 'Cabalgatas',
    'services.cabalgatas.desc': 'Dentro y fuera del rancho — senderos y parques. Por cita previa. Disponible para niños, adultos y familias.',

    'services.eventos.name': 'Eventos y Experiencias Especiales',
    'services.eventos.desc': 'Cumpleaños, actividades familiares, programas de bienestar y eventos privados.',

    // Contact
    'contact.label':      'Contacto',
    'contact.heading':    'Contáctanos',
    'contact.subtitle':   'Estamos aquí para acompañarte.',
    'contact.phone':      '689-339-6132',
    'contact.bookingCta': 'Reserva tu Sesión',
    'contact.note':       'Sesiones por cita previa · Florida',

    // Footer
    'footer.tagline': 'Escuela de Caballos · Conexión · Bienestar · Horsemanship',
    'footer.rights':  'Todos los derechos reservados',
  },

  en: {
    // Navigation
    'nav.philosophy': 'Philosophy',
    'nav.about':      'About',
    'nav.services':   'Services',
    'nav.contact':    'Contact',

    // Hero
    'hero.headline':  'Transforming Hearts Through Horses',
    'hero.tagline':   'Equestrian School · Connection · Wellness · Horsemanship',
    'hero.cta':       'Book Your Session',
    'hero.learnMore': 'Discover Our Philosophy',

    // Philosophy
    'philosophy.label':        'Our Philosophy',
    'philosophy.heading':      'Rational Horsemanship · Emotional Connection',
    'philosophy.body1':        'The horse is the most honest teacher there is. It does not judge, does not lie, does not impose — it simply responds to what it senses in those who approach. At AC.aballo we believe the relationship between human and horse is a mirror: what the horse reflects, the person learns. That is the foundation of Doma Racional.',
    'philosophy.body2':        'Our approach starts with connection rather than correction. We develop the horse–rider partnership through emotional awareness, calm leadership, and mutual respect. Every session is an opportunity to grow — not just as a rider, but as a person.',
    'philosophy.lema':         '"The horse is our teacher. The person, the process. The bond, the path."',
    'philosophy.alvaro.name':  'Álvaro Rodríguez Colmenares',
    'philosophy.alvaro.role':  'Horseman · Rational Horsemanship · Coaching with Horses',
    'philosophy.alvaro.quote': '"A horse is not dominated: it is listened to, understood, and accompanied."',
    'philosophy.luisana.name':  'Luisana Gallardo Flores',
    'philosophy.luisana.role':  'Co-founder · Emotional Guide · Education and Connection',
    'philosophy.luisana.quote': '"The horse brings out the best version of those willing to listen to themselves."',
    'philosophy.phrase':       '"Here you don\'t just learn to ride. Here you learn to feel, regulate, trust, and move forward."',

    // About
    'about.label':          'Who We Are',
    'about.heading':        'Who We Are',
    'about.body1':          'AC.aballo was born in November 2020 in Florida as a family project driven by love for horses and the conviction that the bond between human and horse has the power to transform lives. What began as a shared dream between Álvaro and Luisana became a school with its own identity: warm, deep, and committed to holistic wellbeing.',
    'about.body2':          'We open our doors to everyone: babies from 11 months, children, teenagers, adults, and entire families. We also work with individuals with special conditions — autism, attention deficit, sensory and emotional conditions — with personalized sessions and a respectful, conscious approach.',
    'about.body3':          '"We are family. We are herd. We are school. We are emotion."',
    'about.values.respeto':  'Respect',
    'about.values.empatia':  'Empathy',
    'about.values.conexion': 'Connection',
    'about.values.confianza':'Trust',
    'about.values.familia':  'Family',
    'about.values.bienestar':'Emotional Wellbeing',
    'about.values.amor':     'Love for Horses',

    // Services
    'services.label':    'Our Services',
    'services.heading':  'Our Services',
    'services.subtitle': 'AC.aballo doesn\'t just train riders. It forms human beings connected to themselves.',

    'services.equitacion.name':   'Regular Riding Classes',
    'services.equitacion.desc':   'Western and English riding for beginners to advanced. Technique, safety, confidence, balance, and emotional control.',

    'services.horsemanship.name': 'Horsemanship & Doma Racional',
    'services.horsemanship.desc': 'Ground work, conscious communication, reading horse body language, and building the horse–rider partnership.',

    'services.interacciones.name': 'Horse Interactions',
    'services.interacciones.desc': 'Guided experiences for young children, non-riders, or those seeking connection and calm. The horse as emotional regulator.',

    'services.programas.name': 'Programs for Children and People with Conditions',
    'services.programas.desc': 'Personalized sessions for autism, attention deficit, and sensory/emotional conditions. Regulation and confidence processes.',

    'services.cabalgatas.name': 'Trail Rides',
    'services.cabalgatas.desc': 'On and off the ranch — trails and parks. By appointment. Available for children, adults, and families.',

    'services.eventos.name': 'Events and Special Experiences',
    'services.eventos.desc': 'Birthdays, family activities, wellness programs, and private events.',

    // Contact
    'contact.label':      'Contact',
    'contact.heading':    'Contact Us',
    'contact.subtitle':   'We are here to accompany you.',
    'contact.phone':      '689-339-6132',
    'contact.bookingCta': 'Book Your Session',
    'contact.note':       'Sessions by appointment · Florida',

    // Footer
    'footer.tagline': 'Equestrian School · Connection · Wellness · Horsemanship',
    'footer.rights':  'All rights reserved',
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

// Web3Forms contact form
var contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = document.getElementById('submit-btn');
    var successMsg = document.getElementById('form-success');
    var errorMsg = document.getElementById('form-error');
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(contactForm)
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success) {
          successMsg.classList.remove('hidden');
          errorMsg.classList.add('hidden');
          contactForm.reset();
        } else {
          errorMsg.classList.remove('hidden');
          successMsg.classList.add('hidden');
        }
      })
      .catch(function () {
        errorMsg.classList.remove('hidden');
        successMsg.classList.add('hidden');
      })
      .finally(function () {
        btn.disabled = false;
        btn.innerHTML = 'Enviar Mensaje <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';
      });
  });
}

// Init
applyLanguage(localStorage.getItem('lang') || 'es');
