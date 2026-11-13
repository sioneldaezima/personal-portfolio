/* Personal Portfolio — interactions
   1. Mobile menu   2. Active nav link   3. Reveal on scroll
   4. Project filter   5. Contact form   6. Liquid-glass hover   7. Footer year */

(function () {
  'use strict';

  /* ---------- 1. Mobile menu ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]')) : [];

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.nav-toggle__label').textContent = open ? 'Close' : 'Menu';
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });

    // Close the mobile menu if the window grows back to desktop width
    window.addEventListener('resize', function () {
      if (window.innerWidth > 920) setMenu(false);
    });
  }

  /* ---------- 2. Active nav link (scroll spy) ---------- */
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (section) { spy.observe(section); });
  }

  /* ---------- 3. Reveal on scroll ---------- */
  var revealItems = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if ('IntersectionObserver' in window) {
    var revealer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

    revealItems.forEach(function (item) { revealer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  /* ---------- 4. Project filter ---------- */
  var filters = Array.prototype.slice.call(document.querySelectorAll('.filter'));
  var projects = Array.prototype.slice.call(document.querySelectorAll('.project'));
  var emptyNote = document.querySelector('.projects__empty');

  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      var category = button.dataset.filter;
      var shown = 0;

      filters.forEach(function (other) {
        var isActive = other === button;
        other.classList.toggle('is-active', isActive);
        other.setAttribute('aria-pressed', String(isActive));
      });

      projects.forEach(function (project) {
        var match = category === 'all' || project.dataset.category.split(' ').indexOf(category) !== -1;
        project.hidden = !match;
        if (match) {
          shown += 1;
          project.classList.add('is-visible');
        }
      });

      if (emptyNote) emptyNote.hidden = shown > 0;
    });
  });

  /* ---------- 5. Contact form ----------
     No server needed: the form opens the visitor's email app with the
     message filled in, addressed to the email shown in the Contact section. */
  var form = document.getElementById('contact-form');
  var emailLink = document.getElementById('email-link');

  if (form && emailLink) {
    var status = form.querySelector('.form-status');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var to = emailLink.textContent.trim();
      var name = form.elements.name.value.trim();
      var from = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();

      var subject = 'Portfolio message from ' + name;
      var body = message + '\n\n— ' + name + ' (' + from + ')';

      window.location.href = 'mailto:' + to +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      status.textContent = 'Opening your email app… If nothing happens, write to ' + to + ' directly.';
    });
  }

  /* ---------- 6. Liquid-glass hover ----------
     Marks the glass surfaces and feeds the pointer position to CSS,
     so the highlight in style.css follows the cursor. */
  var glassTargets = document.querySelectorAll(
    '.card, .project, .other li, .hello__card, .hello__link, .resume__box, .contact__form, .btn, .nav__list a, .socials a'
  );

  Array.prototype.forEach.call(glassTargets, function (el) {
    el.classList.add('glass-hover');
    el.addEventListener('pointermove', function (event) {
      var box = el.getBoundingClientRect();
      el.style.setProperty('--mx', (event.clientX - box.left) + 'px');
      el.style.setProperty('--my', (event.clientY - box.top) + 'px');
    });
  });

  /* ---------- 7. Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
