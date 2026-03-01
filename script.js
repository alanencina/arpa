/* =====================================================
   APRENDECONMONI - JavaScript
   Animations, Interactions & Effects
   ===================================================== */

'use strict';

// ===== PARTICLE SYSTEM =====
(function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    const count = window.innerWidth > 768 ? 50 : 20;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left   = Math.random() * 100 + '%';
        p.style.top    = Math.random() * 100 + '%';
        p.style.animationDelay    = (Math.random() * 20) + 's';
        p.style.animationDuration = (15 + Math.random() * 12) + 's';
        const size = 1 + Math.random() * 2.5;
        p.style.width  = size + 'px';
        p.style.height = size + 'px';
        p.style.opacity = (0.2 + Math.random() * 0.5).toString();
        container.appendChild(p);
    }
})();

// ===== NAVBAR SCROLL BEHAVIOR =====
(function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const onScroll = debounce(() => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 10);

    window.addEventListener('scroll', onScroll, { passive: true });
})();

// ===== MOBILE MENU =====
(function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu   = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Close on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });
})();

// ===== SMOOTH SCROLL =====
(function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
})();

// ===== FLIP CARDS - TOUCH/CLICK FOR MOBILE =====
(function initFlipCards() {
    const cards = document.querySelectorAll('.service-card-flip');
    cards.forEach(card => {
        // On mobile, toggle flip on click
        card.addEventListener('click', () => {
            if (window.innerWidth <= 1023) {
                card.classList.toggle('flipped');
            }
        });
    });
})();

// ===== INTERSECTION OBSERVER - SCROLL REVEALS =====
(function initScrollReveal() {
    const items = document.querySelectorAll('.reveal-item');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px'
    });

    items.forEach(item => observer.observe(item));
})();

// ===== ANIMATED COUNTERS =====
(function initCounters() {
    const counterEls = document.querySelectorAll('.stat-number');
    if (!counterEls.length) return;

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target);
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterEls.forEach(el => observer.observe(el));
})();

// ===== HARP STRINGS INTERACTIVE ANIMATION =====
(function initHarpStrings() {
    const strings = document.querySelectorAll('.harp-strings-anim span');
    const heights = ['60%','70%','80%','90%','100%','95%','85%','75%','65%','55%','50%','60%'];
    let idx = 0;

    function randomizeStrings() {
        strings.forEach((span, i) => {
            const newHeight = (40 + Math.random() * 60) + '%';
            span.style.height = newHeight;
        });
    }

    setInterval(randomizeStrings, 800);
})();

// ===== PARALLAX SUBTLE ON HERO =====
(function initParallax() {
    const heroBg = document.querySelector('.hero-bg-gradient');
    if (!heroBg) return;

    const onScroll = debounce(() => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }, 5);

    window.addEventListener('scroll', onScroll, { passive: true });
})();

// ===== CONTACT FORM =====
(function initContactForm() {
    const form    = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    const btn     = document.getElementById('form-submit-btn');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simulate submission
        btn.textContent = '⏳ Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = '✅ ¡Enviado!';
            success.classList.add('show');
            form.reset();

            setTimeout(() => {
                btn.textContent = 'Enviar Mensaje 🎵';
                btn.disabled = false;
                success.classList.remove('show');
            }, 5000);
        }, 1500);
    });

    // Input focus effects
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.setProperty('--focus', '1');
        });
        input.addEventListener('blur', () => {
            input.parentElement.style.setProperty('--focus', '0');
        });
    });
})();

// ===== LOGO IMAGE FALLBACK =====
(function initLogoFallbacks() {
    const logoImgs = document.querySelectorAll('.logo-img');
    logoImgs.forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
            const fallback = img.nextElementSibling;
            if (fallback && fallback.classList.contains('logo-fallback')) {
                fallback.style.display = 'flex';
            }
        });
    });
})();

// ===== TESTIMONIAL CARDS - HOVER TILT =====
(function initCardTilt() {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect  = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width  / 2;
            const y = e.clientY - rect.top  - rect.height / 2;
            const rotX = -(y / rect.height) * 6;
            const rotY =  (x / rect.width)  * 6;
            card.style.transform = `translateY(-4px) perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
})();

// ===== FOOTER YEAR =====
(function setFooterYear() {
    const yearEls = document.querySelectorAll('[data-year]');
    yearEls.forEach(el => el.textContent = new Date().getFullYear());
})();

// ===== ACTIVE NAV LINK ON SCROLL =====
(function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.4, rootMargin: '-80px 0px 0px 0px' });

    sections.forEach(section => observer.observe(section));
})();

// ===== HELPER: DEBOUNCE =====
function debounce(fn, wait) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), wait);
    };
}

// ===== CONSOLE EASTER EGG =====
console.log('%c🎵 aprendeconmoni', 'color: #A855F7; font-size: 20px; font-weight: bold;');
console.log('%cWeb creada con amor y música 💜', 'color: #c084fc; font-size: 13px;');
