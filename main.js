/* ============================================================
   FLUTTER DEVELOPER PORTFOLIO — main.js
   ============================================================ */

// ─── THEME TOGGLE ────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('theme', theme);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ─── HAMBURGER MENU ──────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// ─── NAVBAR SCROLL EFFECT ────────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    updateActiveNav();
});

// ─── ACTIVE NAV LINK ON SCROLL ───────────────────────────────
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
            links.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}

// ─── TYPING ANIMATION ────────────────────────────────────────
const phrases = [
    'Mobile Apps 📱',
    'Flutter UI ✨',
    'Clean Architecture 🏗️',
    'Firebase Apps 🔥',
    'Beautiful UX 🎨',
];

let phraseIdx = 0;
let charIdx = 0;
let deleting = false;
const typedEl = document.getElementById('typedText');

function typeLoop() {
    const current = phrases[phraseIdx];

    if (!deleting) {
        typedEl.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
            deleting = true;
            setTimeout(typeLoop, 1800);
            return;
        }
    } else {
        typedEl.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
            deleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
        }
    }
    setTimeout(typeLoop, deleting ? 50 : 80);
}
typeLoop();

// ─── SCROLL REVEAL ───────────────────────────────────────────
function addRevealClasses() {
    const targets = [
        '.skill-card',
        '.project-card',
        '.timeline-item',
        '.contact-card',
        '.stat-card',
        '.section-header',
        '.about-content',
        '.about-image-wrap',
        '.contact-form',
        '.tools-section',
    ];
    targets.forEach(sel => {
        document.querySelectorAll(sel).forEach((el, i) => {
            el.classList.add('reveal');
            el.style.transitionDelay = `${i * 0.08}s`;
        });
    });
}

addRevealClasses();

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── SKILL BAR ANIMATION ─────────────────────────────────────
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.skill-fill');
            fills.forEach(fill => {
                const width = fill.getAttribute('data-width');
                fill.style.width = width + '%';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) skillObserver.observe(skillsSection);

// ─── CONTACT FORM ────────────────────────────────────────────
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const success = document.getElementById('formSuccess');

    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate async submit (replace with real EmailJS / FormSubmit / etc.)
    setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.disabled = false;
        success.classList.add('show');
        e.target.reset();
        setTimeout(() => success.classList.remove('show'), 5000);
    }, 1500);
}

// ─── SMOOTH SCROLL ───────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ─── CURSOR TRAIL (subtle glow) ──────────────────────────────
let mouseX = 0, mouseY = 0;
const glow = document.querySelector('.hero-glow');

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ─── PROJECT CARD TILT ───────────────────────────────────────
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ─── INIT ─────────────────────────────────────────────────────
updateActiveNav();
console.log('🚀 Portfolio loaded — built with ❤️ for Flutter development');
