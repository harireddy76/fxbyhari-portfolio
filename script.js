
// =====================================
// FXBYHARI — NAVIGATION
// =====================================

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav nav');

toggle?.addEventListener('click', () => {
  if (!nav) return;

  const open = nav.classList.toggle('open');

  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute(
    'aria-label',
    open ? 'Close navigation' : 'Open navigation'
  );
  toggle.textContent = open ? '×' : '☰';
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');

    toggle?.setAttribute('aria-expanded', 'false');

    if (toggle) {
      toggle.textContent = '☰';
      toggle.setAttribute('aria-label', 'Open navigation');
    }
  });
});

// =====================================
// AUTOMATIC COPYRIGHT YEAR
// =====================================

const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

// =====================================
// CINEMATIC SCROLL REVEALS
// =====================================

const revealElements = document.querySelectorAll(
  '.section-head, .project-image, .project-info, .about-copy, .contact'
);

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => {
    element.classList.add('reveal');
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add('is-visible');
  });
}

// =====================================
// HERO HEADING ANIMATION
// =====================================

const heroTitle = document.querySelector('.hero h1');

if (heroTitle) {
  heroTitle.classList.add('hero-title-animate');
}

// =====================================
// DESKTOP CUSTOM CURSOR
// =====================================

const desktopPointer = window.matchMedia(
  '(hover: hover) and (pointer: fine)'
);

const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);

if (desktopPointer.matches && !reducedMotion.matches) {
  const cursor = document.createElement('div');

  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', event => {
    cursor.style.transform =
      `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  });

  document.querySelectorAll('a, button, .project-image').forEach(item => {
    item.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });

    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });
}
