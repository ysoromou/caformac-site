/* ========================================
   CAFORMAC — Main JavaScript
   Mobile nav, scroll, form, animations
   ======================================== */

(function () {
  'use strict';

  /* --- Mobile navigation --- */
  var hamburger = document.querySelector('.nav__hamburger');
  var navLinks = document.querySelector('.nav__links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Nav scroll shadow --- */
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }, { passive: true });
  }

  /* --- Scroll reveal (IntersectionObserver) --- */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show all
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Form validation (diagnostic page) --- */
  var form = document.getElementById('diagnostic-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      var fields = form.querySelectorAll('[required]');

      fields.forEach(function (field) {
        var error = field.parentNode.querySelector('.form-error');
        field.classList.remove('error');
        if (error) error.classList.remove('visible');

        if (!field.value.trim()) {
          valid = false;
          field.classList.add('error');
          if (error) error.classList.add('visible');
        }

        // Email validation
        if (field.type === 'email' && field.value.trim()) {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value.trim())) {
            valid = false;
            field.classList.add('error');
            if (error) {
              error.textContent = 'Veuillez saisir un email valide.';
              error.classList.add('visible');
            }
          }
        }

        // Phone validation
        if (field.type === 'tel' && field.value.trim()) {
          var phoneClean = field.value.replace(/[\s\-\+\(\)]/g, '');
          if (phoneClean.length < 8 || !/^\d+$/.test(phoneClean)) {
            valid = false;
            field.classList.add('error');
            if (error) {
              error.textContent = 'Veuillez saisir un numéro valide.';
              error.classList.add('visible');
            }
          }
        }
      });

      if (valid) {
        // Show success feedback
        var btn = form.querySelector('button[type="submit"]');
        var originalText = btn.textContent;
        btn.textContent = 'Demande envoyée \u2713';
        btn.disabled = true;
        btn.style.opacity = '.7';

        // In production, connect to form handler (Netlify Forms, Formspree, etc.)
        // For now, just show success state
        setTimeout(function () {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.opacity = '';
          form.reset();
        }, 3000);
      }
    });

    // Clear error on input
    form.querySelectorAll('[required]').forEach(function (field) {
      field.addEventListener('input', function () {
        field.classList.remove('error');
        var error = field.parentNode.querySelector('.form-error');
        if (error) error.classList.remove('visible');
      });
    });
  }

})();
