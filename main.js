/* ============================================================
   FLUTTER DEVELOPER PORTFOLIO — main.js
   ============================================================ */

// ─── LANGUAGE SYSTEM ─────────────────────────────────────────
const TRANSLATIONS = {
    en: {
        // Nav
        'nav.about': 'About', 'nav.education': 'Education', 'nav.skills': 'Skills',
        'nav.experience': 'Experience', 'nav.services': 'Services', 'nav.projects': 'Projects',
        'nav.achievements': 'Achievements', 'nav.testimonials': 'Testimonials', 'nav.contact': 'Contact',
        // Hero
        'hero.badge': 'Available for Work',
        'hero.title': "Hi, I'm <span class=\"highlight\">Fadi Atef</span>",
        'hero.static': 'I build',
        'hero.desc': 'Flutter Developer & Mobile App Developer based in Egypt. Passionate about crafting beautiful, high-performance mobile experiences with Flutter & Dart.',
        'hero.btn.work': 'View My Work', 'hero.btn.contact': 'Get In Touch',
        // About
        'about.tag': '01 — About Me',
        'about.title': 'Driven by <span class="highlight">Passion</span> &amp; Performance',
        'about.p1': "I'm a passionate <strong>Flutter Developer</strong> based in Egypt, dedicated to building high-performance cross-platform mobile applications. I love turning complex problems into beautiful, intuitive user interfaces.",
        'about.p2': 'With a strong foundation in <strong>Clean Architecture</strong> and best practices, I build apps that are not just beautiful but scalable and maintainable. I thrive in collaborative environments and am always eager to tackle new challenges.',
        'about.loc.label': 'Location', 'about.loc.val': 'Egypt',
        'about.status.label': 'Status', 'about.status.val': 'Open to Opportunities',
        'about.btn.resume': 'Download Resume',
        // Education
        'edu.badge': 'ACADEMIC BACKGROUND', 'edu.title': '<span class="highlight">Education</span>',
        'edu.degree': 'Bachelor of Computer Science', 'edu.school': 'Shorouk Academy',
        'edu.gpa': 'GPA: Good', 'edu.year': '4th Year Student',
        'edu.desc': "Currently pursuing a Bachelor's degree in Computer Science with a focus on software engineering, mobile application development, and user experience design. Actively engaged in coursework and projects that bridge the gap between design and development.",
        // Skills
        'skills.tag': '03 — Skills', 'skills.title': 'My <span class="highlight">Tech Stack</span>',
        'skills.flutter.desc': 'Cross-platform mobile & web development',
        'skills.dart.desc': 'Object-oriented & asynchronous programming',
        'skills.firebase.desc': 'Auth, Firestore, Storage, Cloud Functions',
        'skills.api.desc': 'RESTful services, Dio, HTTP integration',
        'skills.arch.desc': 'MVVM, BLoC, GetX, Provider state management',
        'skills.git.desc': 'Version control, branching, collaboration',
        'skills.tools.title': 'Other Tools & Technologies',
        // Experience
        'exp.tag': '04 — Experience', 'exp.title': 'My <span class="highlight">Journey</span>',
        'exp.1.title': 'Flutter Mobile Development Training', 'exp.1.date': '2025 – Present',
        'exp.1.company': 'Digital Egypt Pioneers Initiative (DEPI) · Hyperd',
        'exp.1.challenge': 'Building scalable, high-performance cross-platform mobile applications using Flutter & Dart.',
        'exp.1.action': 'Developed production-grade Flutter apps applying Clean Architecture, BLoC/GetX state management, and RESTful API integration.',
        'exp.1.result': 'Delivered beautiful, maintainable mobile apps with smooth animations and optimized performance across Android & iOS.',
        'exp.2.title': 'Flutter Developer — Freelance', 'exp.2.date': '2023 – Present',
        'exp.2.company': 'Self-Employed · Remote',
        'exp.2.li1': 'Developed and deployed 10+ Flutter applications for clients across various domains',
        'exp.2.li2': 'Implemented Clean Architecture with BLoC/GetX for scalable state management',
        'exp.2.li3': 'Integrated Firebase services (Auth, Firestore, Cloud Functions, FCM)',
        'exp.2.li4': 'Built RESTful API integrations using Dio with proper error handling',
        'exp.3.title': 'Flutter Training — Mobile Development', 'exp.3.date': '2022 – 2023',
        'exp.3.company': 'Route Academy · Egypt',
        'exp.3.li1': 'Completed intensive Flutter & Dart development training',
        'exp.3.li2': 'Built multiple training projects covering UI development and state management',
        'exp.3.li3': 'Learned Clean Architecture principles and design patterns',
        // Services
        'svc.badge': 'WHAT I OFFER', 'svc.heading': 'Services',
        'svc.1.title': 'UI/UX Design', 'svc.1.desc': 'Creating intuitive and visually stunning user interfaces that prioritize user experience and drive engagement through thoughtful design decisions.',
        'svc.2.title': 'Mobile App<br>Development', 'svc.2.desc': 'Building high-performance cross-platform mobile applications using Flutter, delivering native-like experiences for both iOS and Android platforms.',
        'svc.3.title': 'Firebase Integration', 'svc.3.desc': 'Full back-end setup with Firebase — authentication, Firestore, cloud functions, push notifications, and real-time data sync.',
        'svc.4.title': 'Code Review &amp; Consulting', 'svc.4.desc': "In-depth review of your existing Flutter codebase — identifying bottlenecks, improving architecture, and optimizing performance.",
        'svc.btn.pricing': 'View Pricing Plan',
        // Projects
        'proj.tag': '06 — Projects', 'proj.title': 'Featured <span class="highlight">Flutter Projects</span>',
        'proj.islami.desc': 'A beautiful Islamic companion app featuring the full Holy Quran with Arabic text and translations, Hadith browser, prayer times, Qibla direction, and an elegant dark gold UI inspired by Islamic art.',
        'proj.leader.desc': 'A complete cross-platform business management system (mobile + desktop) for managing customers, products, and inventory. Features real-time data dashboards, Arabic RTL support, and seamless REST API integration.',
        'proj.egytravel.desc': 'A premium Egypt travel companion app to discover amazing destinations, historical landmarks, hotels, and restaurants. Features smart search, curated recommendations, trip planning, and an immersive dark-themed UI.',
        'proj.github': 'GitHub', 'proj.featured': 'Featured ★', 'proj.details': 'View Details',
        // Achievements
        'ach.badge': 'RECOGNITION', 'ach.title': 'Achievements &amp; <span class="highlight">Certifications</span>',
        'ach.1.title': 'DEPI Flutter Trainee', 'ach.1.org': 'Digital Egypt Pioneers Initiative', 'ach.1.date': 'Dec 2025 – Present',
        'ach.2.title': 'DSC Flutter Developer', 'ach.2.org': 'Google Developer Student Clubs', 'ach.2.date': '2024',
        'ach.3.title': '4th Year CS Student — GPA Good', 'ach.3.org': 'Shorouk Academy', 'ach.3.date': '2023 – Present',
        'ach.4.title': 'Flutter Training', 'ach.4.org': 'Route Academy', 'ach.4.date': '2022 – 2023',
        // Testimonials
        'testi.tag': '08 — Testimonials', 'testi.title': 'What <span class="highlight">Clients Say</span>',
        'testi.sub': "Real feedback from people I've worked with.",
        // Contact
        'contact.tag': '08 — Contact', 'contact.title': "Let's <span class=\"highlight\">Work Together</span>",
        'contact.sub': "Have a project in mind? I'd love to hear about it. Let's talk!",
        'contact.loc': 'Egypt (Open to Remote)', 'contact.send': 'Send Message',
        'contact.success': "Message sent! I'll get back to you soon.",
        'contact.name.label': 'Your Name', 'contact.name.ph': 'John Doe',
        'contact.email.label': 'Your Email', 'contact.email.ph': 'john@example.com',
        'contact.subject.label': 'Subject', 'contact.subject.ph': 'Project Collaboration',
        'contact.msg.label': 'Message', 'contact.msg.ph': 'Tell me about your project...',
        // Footer
        'footer.copy': '© 2026 Fadi Atef. Crafted with ♥ & Flutter passion.',
        // Modal
        'modal.problem': '🔭 Problem Solved', 'modal.tech': '🔧 Technologies Used', 'modal.github': 'View on GitHub',
        // CAR labels
        'car.challenge': '⚠ Challenge', 'car.action': '🔧 Action', 'car.result': '✓ Result',
    },
    ar: {
        'nav.about': 'من أنا', 'nav.education': 'التعليم', 'nav.skills': 'المهارات',
        'nav.experience': 'الخبرة', 'nav.services': 'الخدمات', 'nav.projects': 'المشاريع',
        'nav.achievements': 'الإنجازات', 'nav.testimonials': 'آراء العملاء', 'nav.contact': 'تواصل معي',
        'hero.badge': 'متاح للعمل',
        'hero.title': 'مرحباً، أنا <span class="highlight">فادي عاطف</span>',
        'hero.static': 'أبني',
        'hero.desc': 'مطور Flutter ومطور تطبيقات موبايل من مصر. شغوف ببناء تجارب موبايل جميلة وعالية الأداء باستخدام Flutter وDart.',
        'hero.btn.work': 'أعمالي', 'hero.btn.contact': 'تواصل معي',
        'about.tag': '01 — من أنا',
        'about.title': 'مدفوع بـ<span class="highlight">الشغف</span> والأداء',
        'about.p1': 'أنا مطور <strong>Flutter</strong> شغوف من مصر، متخصص في بناء تطبيقات موبايل عالية الأداء. أحب تحويل المشاكل المعقدة إلى واجهات مستخدم جميلة وبديهية.',
        'about.p2': 'بأساس قوي في <strong>Clean Architecture</strong> وأفضل الممارسات، أبني تطبيقات جميلة وقابلة للتوسع. أتميز في بيئات التعاون وأسعى دائمًا للتحديات الجديدة.',
        'about.loc.label': 'الموقع', 'about.loc.val': 'مصر',
        'about.status.label': 'الحالة', 'about.status.val': 'متاح للفرص',
        'about.btn.resume': 'تحميل السيرة الذاتية',
        'edu.badge': 'الخلفية الأكاديمية', 'edu.title': '<span class="highlight">التعليم</span>',
        'edu.degree': 'بكالوريوس علوم الحاسب', 'edu.school': 'أكاديمية الشروق',
        'edu.gpa': 'المعدل: جيد', 'edu.year': 'الفرقة الرابعة',
        'edu.desc': 'أدرس حاليًا بكالوريوس علوم الحاسب بتركيز على هندسة البرمجيات وتطوير تطبيقات الموبايل وتصميم تجربة المستخدم.',
        'skills.tag': '03 — المهارات', 'skills.title': 'مهاراتي <span class="highlight">التقنية</span>',
        'skills.flutter.desc': 'تطوير موبايل وويب متعدد المنصات',
        'skills.dart.desc': 'برمجة كائنية وغير متزامنة',
        'skills.firebase.desc': 'Auth، Firestore، Storage، Cloud Functions',
        'skills.api.desc': 'خدمات RESTful، Dio، تكامل HTTP',
        'skills.arch.desc': 'MVVM، BLoC، GetX، إدارة الحالة',
        'skills.git.desc': 'التحكم بالإصدارات والتعاون',
        'skills.tools.title': 'أدوات وتقنيات أخرى',
        'exp.tag': '04 — الخبرة', 'exp.title': 'مسيرتي <span class="highlight">المهنية</span>',
        'exp.1.title': 'تدريب تطوير تطبيقات Flutter', 'exp.1.date': '2025 – حتى الآن',
        'exp.1.company': 'مبادرة رواد مصر الرقمية (DEPI) · Hyperd',
        'exp.1.challenge': 'بناء تطبيقات موبايل عالية الأداء ومتعددة المنصات باستخدام Flutter وDart.',
        'exp.1.action': 'طوّرت تطبيقات Flutter احترافية بتطبيق Clean Architecture وإدارة الحالة بـ BLoC/GetX.',
        'exp.1.result': 'سلّمت تطبيقات موبايل جميلة وقابلة للصيانة بأداء محسّن عبر Android وiOS.',
        'exp.2.title': 'مطور Flutter — فريلانسر', 'exp.2.date': '2023 – حتى الآن',
        'exp.2.company': 'عمل حر · عن بُعد',
        'exp.2.li1': 'طوّرت ونشرت أكثر من 10 تطبيقات Flutter لعملاء في مجالات متنوعة',
        'exp.2.li2': 'طبّقت Clean Architecture مع BLoC/GetX لإدارة الحالة',
        'exp.2.li3': 'دمجت خدمات Firebase (Auth، Firestore، Cloud Functions، FCM)',
        'exp.2.li4': 'بنيت تكاملات RESTful API باستخدام Dio مع معالجة الأخطاء',
        'exp.3.title': 'تدريب Flutter — تطوير موبايل', 'exp.3.date': '2022 – 2023',
        'exp.3.company': 'Route Academy · مصر',
        'exp.3.li1': 'أكملت تدريبًا مكثفًا في تطوير Flutter وDart',
        'exp.3.li2': 'بنيت مشاريع تدريبية متعددة في تطوير الواجهات وإدارة الحالة',
        'exp.3.li3': 'تعلّمت مبادئ Clean Architecture وأنماط التصميم',
        'svc.badge': 'ما أقدمه', 'svc.heading': 'الخدمات',
        'svc.1.title': 'تصميم UI/UX', 'svc.1.desc': 'إنشاء واجهات مستخدم بديهية ومذهلة تُعطي الأولوية لتجربة المستخدم وتعزز التفاعل.',
        'svc.2.title': 'تطوير<br>تطبيقات موبايل', 'svc.2.desc': 'بناء تطبيقات موبايل متعددة المنصات بأداء عالٍ باستخدام Flutter لكلٍّ من iOS وAndroid.',
        'svc.3.title': 'تكامل Firebase', 'svc.3.desc': 'إعداد خلفية كاملة مع Firebase — المصادقة، Firestore، Cloud Functions، والإشعارات.',
        'svc.4.title': 'مراجعة الكود والاستشارات', 'svc.4.desc': 'مراجعة معمّقة لكود Flutter — تحديد الأداء الضعيف وتحسين البنية.',
        'svc.btn.pricing': 'عرض خطة الأسعار',
        'proj.tag': '06 — المشاريع', 'proj.title': 'أبرز <span class="highlight">مشاريع Flutter</span>',
        'proj.islami.desc': 'تطبيق إسلامي رفيق يضم القرآن الكريم كاملاً بالنص العربي والترجمات، متصفح حديث، أوقات الصلاة، اتجاه القبلة، وواجهة ذهبية داكنة مستوحاة من الفن الإسلامي.',
        'proj.leader.desc': 'نظام إدارة أعمال متكامل متعدد المنصات لإدارة العملاء والمنتجات والمخزون مع لوحات بيانات فورية ودعم RTL العربي.',
        'proj.egytravel.desc': 'تطبيق سفر مصري متميز لاكتشاف الوجهات المذهلة والمعالم التاريخية والفنادق. يتميز بالبحث الذكي وتخطيط الرحلات.',
        'proj.github': 'GitHub', 'proj.featured': 'مميز ★', 'proj.details': 'عرض التفاصيل',
        'ach.badge': 'الإنجازات', 'ach.title': 'الإنجازات و<span class="highlight">الشهادات</span>',
        'ach.1.title': 'متدرب Flutter في DEPI', 'ach.1.org': 'مبادرة رواد مصر الرقمية', 'ach.1.date': 'ديسمبر 2025 – حتى الآن',
        'ach.2.title': 'مطور Flutter في DSC', 'ach.2.org': 'نوادي مطوري جوجل الطلابية', 'ach.2.date': '2024',
        'ach.3.title': 'طالب علوم حاسب الفرقة الرابعة — معدل جيد', 'ach.3.org': 'أكاديمية الشروق', 'ach.3.date': '2023 – حتى الآن',
        'ach.4.title': 'تدريب Flutter', 'ach.4.org': 'Route Academy', 'ach.4.date': '2022 – 2023',
        'testi.tag': '08 — آراء العملاء', 'testi.title': 'ماذا يقول <span class="highlight">عملائي</span>',
        'testi.sub': 'آراء حقيقية من أشخاص عملت معهم.',
        'contact.tag': '08 — تواصل معي', 'contact.title': 'لنعمل <span class="highlight">معاً</span>',
        'contact.sub': 'لديك مشروع في ذهنك؟ يسعدني سماعه. لنتحدث!',
        'contact.loc': 'مصر (متاح عن بُعد)', 'contact.send': 'إرسال الرسالة',
        'contact.success': 'تم إرسال الرسالة! سأرد عليك قريباً.',
        'contact.name.label': 'اسمك', 'contact.name.ph': 'محمد علي',
        'contact.email.label': 'بريدك الإلكتروني', 'contact.email.ph': 'example@gmail.com',
        'contact.subject.label': 'الموضوع', 'contact.subject.ph': 'تعاون في مشروع',
        'contact.msg.label': 'الرسالة', 'contact.msg.ph': 'أخبرني عن مشروعك...',
        'footer.copy': '© 2026 فادي عاطف. صُنع بـ ♥ وشغف Flutter.',
        'modal.problem': '🔭 المشكلة المحلولة', 'modal.tech': '🔧 التقنيات المستخدمة', 'modal.github': 'عرض على GitHub',
        'car.challenge': '⚠ التحدي', 'car.action': '🔧 الإجراء', 'car.result': '✓ النتيجة',
    }
};

const typedPhrasesEN = ['Mobile Apps 📱', 'Flutter UI ✨', 'Clean Architecture 🏗️', 'Firebase Apps 🔥', 'Beautiful UX 🎨'];
const typedPhrasesAR = ['تطبيقات موبايل 📱', 'واجهات Flutter ✨', 'بنية نظيفة 🏗️', 'تطبيقات Firebase 🔥', 'تجارب UX مذهلة 🎨'];

let currentLang = localStorage.getItem('lang') || 'en';

function s(sel) { return document.querySelector(sel); }
function all(sel) { return document.querySelectorAll(sel); }

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const T = TRANSLATIONS[lang];
    const isAR = lang === 'ar';
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', isAR ? 'rtl' : 'ltr');
    document.getElementById('langLabel').textContent = isAR ? 'EN' : 'AR';

    function tx(sel, key, html = false) {
        all(sel).forEach(el => {
            if (!T[key]) return;
            if (html) el.innerHTML = T[key];
            else el.textContent = T[key];
        });
    }
    function txph(sel, key) { all(sel).forEach(el => { if (T[key]) el.placeholder = T[key]; }); }
    function txdata(key) { all(`[data-i18n="${key}"]`).forEach(el => { if (T[key]) el.textContent = T[key]; }); }

    // data-i18n spans
    ['hero.badge', 'about.btn.resume', 'svc.btn.pricing', 'proj.github', 'proj.featured', 'proj.details', 'contact.send', 'contact.success', 'modal.problem', 'modal.tech', 'modal.github'].forEach(k => txdata(k));

    // Navbar
    tx('a[href="#about"].nav-link', 'nav.about'); tx('a[href="#education"].nav-link', 'nav.education');
    tx('a[href="#skills"].nav-link', 'nav.skills'); tx('a[href="#experience"].nav-link', 'nav.experience');
    tx('a[href="#services"].nav-link', 'nav.services'); tx('a[href="#projects"].nav-link', 'nav.projects');
    tx('a[href="#achievements"].nav-link', 'nav.achievements'); tx('a[href="#testimonials"].nav-link', 'nav.testimonials');
    tx('a[href="#contact"].nav-link', 'nav.contact');

    // Hero
    const heroTitle = s('.hero-title'); if (heroTitle) heroTitle.innerHTML = T['hero.title'];
    tx('.hero-subtitle-static', 'hero.static');
    tx('.hero-description', 'hero.desc');
    const hrefs = s('a[href="#projects"].btn-primary'); if (hrefs) hrefs.querySelector('span') ? tx('a[href="#projects"].btn-primary', 'hero.btn.work') : (hrefs.childNodes[hrefs.childNodes.length - 1].textContent = T['hero.btn.work'] || '');
    all('.hero-cta .btn-primary').forEach(b => { if (b.textContent.includes('Work') || b.textContent.includes('أعمال')) b.textContent = T['hero.btn.work']; });
    all('.hero-cta .btn-outline').forEach(b => { b.textContent = T['hero.btn.contact']; });

    // About
    tx('#about .section-tag', 'about.tag');
    const aboutTitle = s('#about .section-title'); if (aboutTitle) aboutTitle.innerHTML = T['about.title'];
    const paras = s('#about').querySelectorAll('.about-text');
    if (paras[0]) paras[0].innerHTML = T['about.p1'];
    if (paras[1]) paras[1].innerHTML = T['about.p2'];
    all('#about .info-label').forEach((el, i) => { const k = ['about.loc.label', '', '', 'about.status.label'][i]; if (k && T[k]) el.textContent = T[k]; });
    all('#about .info-value').forEach((el, i) => {
        if (i === 0 && T['about.loc.val']) el.textContent = T['about.loc.val'];
        if (i === 3) { const av = el.querySelector('.available'); if (av && T['about.status.val']) av.textContent = T['about.status.val']; }
    });

    // Education
    tx('#education .achievements-badge', 'edu.badge');
    const eduTitle = s('#education .section-title'); if (eduTitle) eduTitle.innerHTML = T['edu.title'];
    tx('.edu-degree', 'edu.degree'); tx('.edu-school', 'edu.school'); tx('.edu-gpa', 'edu.gpa');
    tx('.edu-badge', 'edu.year'); tx('.edu-desc', 'edu.desc');

    // Skills
    tx('#skills .section-tag', 'skills.tag');
    const skillTitle = s('#skills .section-title'); if (skillTitle) skillTitle.innerHTML = T['skills.title'];
    const descs = all('.skill-desc');
    const dkeys = ['skills.flutter.desc', 'skills.dart.desc', 'skills.firebase.desc', 'skills.api.desc', 'skills.arch.desc', 'skills.git.desc'];
    descs.forEach((el, i) => { if (dkeys[i] && T[dkeys[i]]) el.textContent = T[dkeys[i]]; });
    tx('.tools-title', 'skills.tools.title');

    // Experience
    tx('#experience .section-tag', 'exp.tag');
    const expTitle = s('#experience .section-title'); if (expTitle) expTitle.innerHTML = T['exp.title'];
    const tls = all('.timeline-item');
    function setTL(tl, prefix) {
        const h = tl.querySelector('.tl-title'); if (h) h.textContent = T[prefix + '.title'] || h.textContent;
        const d = tl.querySelector('.tl-date'); if (d) d.textContent = T[prefix + '.date'] || d.textContent;
        const c = tl.querySelector('.tl-company'); if (c) c.textContent = T[prefix + '.company'] || c.textContent;
        const labels = tl.querySelectorAll('.tl-car-label');
        const texts = tl.querySelectorAll('.tl-car-text');
        if (labels[0]) labels[0].textContent = T['car.challenge'];
        if (labels[1]) labels[1].textContent = T['car.action'];
        if (labels[2]) labels[2].textContent = T['car.result'];
        if (texts[0]) texts[0].textContent = T[prefix + '.challenge'] || texts[0].textContent;
        if (texts[1]) texts[1].textContent = T[prefix + '.action'] || texts[1].textContent;
        if (texts[2]) texts[2].textContent = T[prefix + '.result'] || texts[2].textContent;
        const lis = tl.querySelectorAll('.tl-list li');
        ['li1', 'li2', 'li3', 'li4'].forEach((s, i) => { if (lis[i] && T[prefix + '.' + s]) lis[i].textContent = T[prefix + '.' + s]; });
    }
    if (tls[0]) setTL(tls[0], 'exp.1');
    if (tls[1]) setTL(tls[1], 'exp.2');
    if (tls[2]) setTL(tls[2], 'exp.3');

    // Services
    tx('.services-badge', 'svc.badge'); tx('.services-heading', 'svc.heading');
    const svcs = all('.svc-card');
    [['.svc-1', 'svc.1'], ['.svc-2', 'svc.2'], ['.svc-3', 'svc.3'], ['.svc-4', 'svc.4']];
    svcs.forEach((el, i) => {
        const tk = `svc.${i + 1}.title`, dk = `svc.${i + 1}.desc`;
        const h3 = el.querySelector('.svc-title'); if (h3 && T[tk]) h3.innerHTML = T[tk];
        const p = el.querySelector('.svc-desc'); if (p && T[dk]) p.textContent = T[dk];
    });

    // Projects
    tx('#projects .section-tag', 'proj.tag');
    const projTitle = s('#projects .section-title'); if (projTitle) projTitle.innerHTML = T['proj.title'];
    const projCards = all('.project-card');
    const projDescs = ['proj.islami.desc', 'proj.leader.desc', 'proj.egytravel.desc'];
    projCards.forEach((el, i) => { const p = el.querySelector('.project-desc'); if (p && projDescs[i]) p.textContent = T[projDescs[i]]; });

    // Achievements
    tx('#achievements .achievements-badge', 'ach.badge');
    const achTitle = s('#achievements .section-title'); if (achTitle) achTitle.innerHTML = T['ach.title'];
    const achCards = all('.ach-card');
    const achKeys = [['ach.1.title', 'ach.1.org', 'ach.1.date'], ['ach.2.title', 'ach.2.org', 'ach.2.date'], ['ach.3.title', 'ach.3.org', 'ach.3.date'], ['ach.4.title', 'ach.4.org', 'ach.4.date']];
    achCards.forEach((el, i) => {
        if (!achKeys[i]) return;
        const h = el.querySelector('.ach-title'); if (h && T[achKeys[i][0]]) h.textContent = T[achKeys[i][0]];
        const o = el.querySelector('.ach-org'); if (o && T[achKeys[i][1]]) o.textContent = T[achKeys[i][1]];
        const d = el.querySelector('.ach-date'); if (d && T[achKeys[i][2]]) d.textContent = T[achKeys[i][2]];
    });

    // Testimonials
    tx('#testimonials .section-tag', 'testi.tag');
    const testiTitle = s('#testimonials .section-title'); if (testiTitle) testiTitle.innerHTML = T['testi.title'];
    tx('#testimonials .section-sub', 'testi.sub');

    // Contact
    tx('#contact .section-tag', 'contact.tag');
    const contTitle = s('#contact .section-title'); if (contTitle) contTitle.innerHTML = T['contact.title'];
    tx('#contact .section-sub', 'contact.sub');
    const locVal = s('#contact .contact-value:last-of-type'); all('#contact .contact-value').forEach((el, i) => { if (i === 1 && T['contact.loc']) el.textContent = T['contact.loc']; });
    all('#contact .contact-label').forEach((el, i) => { if (i === 2 && T['contact.loc']) el.nextElementSibling && (el.nextElementSibling.textContent = T['contact.loc']); });
    all('#contact label').forEach(el => {
        const forAttr = el.getAttribute('for');
        if (forAttr === 'name') el.textContent = T['contact.name.label'];
        else if (forAttr === 'email') el.textContent = T['contact.email.label'];
        else if (forAttr === 'subject') el.textContent = T['contact.subject.label'];
        else if (forAttr === 'message') el.textContent = T['contact.msg.label'];
    });
    txph('#name', 'contact.name.ph'); txph('#email', 'contact.email.ph');
    txph('#subject', 'contact.subject.ph'); txph('#message', 'contact.msg.ph');

    // Footer
    const fc = s('.footer-copy'); if (fc) fc.innerHTML = T['footer.copy'];

    // Custom data-en / data-ar attributes
    document.querySelectorAll('[data-en], [data-ar]').forEach(el => {
        const text = isAR ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        if (text) el.textContent = text;
    });

    // Typed phrases
    phrases = isAR ? [...typedPhrasesAR] : [...typedPhrasesEN];
    phraseIdx = 0; charIdx = 0; deleting = false;
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            applyLang(currentLang === 'en' ? 'ar' : 'en');
        });
    }
    if (currentLang === 'ar') applyLang('ar');
    else document.getElementById('langLabel').textContent = 'AR';
});


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
let phrases = [
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
        '.service-card',
        '.timeline-item',
        '.contact-card',
        '.stat-card',
        '.section-header',
        '.about-content',
        '.about-image-wrap',
        '.contact-form',
        '.tools-section',
        '.ach-card',
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

// ─── TESTIMONIALS INFINITE SCROLL ───────────────────────────
(function initTestimonialsScroll() {
    function setupTrack(track, speed, direction) {
        if (!track) return;

        // Clone all children so we have 2x content for seamless loop
        const originals = Array.from(track.children);
        originals.forEach(card => {
            const clone = card.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });

        let pos = direction === 'ltr' ? -track.scrollWidth / 2 : 0;
        let rafId;

        function step() {
            if (direction === 'rtl') {
                pos -= speed;
                // Reset: when we've scrolled half the total width, jump back to 0
                if (pos <= -track.scrollWidth / 2) pos = 0;
            } else {
                pos += speed;
                if (pos >= 0) pos = -track.scrollWidth / 2;
            }
            track.style.transform = `translateX(${pos}px)`;
            rafId = requestAnimationFrame(step);
        }

        // Only animate when section is visible
        const section = document.getElementById('testimonials');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!rafId) rafId = requestAnimationFrame(step);
                } else {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
            });
        }, { threshold: 0.05 });

        if (section) observer.observe(section);
        else rafId = requestAnimationFrame(step);
    }

    // track1 scrolls left (RTL), track2 scrolls right (LTR)
    setupTrack(document.getElementById('track1'), 0.55, 'rtl');
    setupTrack(document.getElementById('track2'), 0.45, 'ltr');
})();

// ─── INIT ─────────────────────────────────────────────────────
updateActiveNav();
console.log('🚀 Portfolio loaded — built with ❤️ for Flutter development');

// ─── PROJECT MODAL ───────────────────────────────────────────
const projectData = {
    islami: {
        title: 'Islami App 🕌',
        img: 'assets/project-islami.png',
        tags: ['Flutter', 'Dart', 'REST API', 'Provider'],
        idea: 'A comprehensive Islamic companion app designed to be the go-to spiritual guide for Muslims worldwide. It brings together core Islamic content in a single, beautifully crafted experience with a dark gold UI inspired by classic Islamic art.',
        problem: 'Muslims needed a single reliable app that combined Quran reading, Hadith browsing, prayer times, and Qibla direction — without switching between multiple apps. The app solves this by delivering all essential features in one unified, offline-capable solution.',
        tech: ['Flutter', 'Dart', 'REST API', 'Provider', 'Hive', 'Google Maps API', 'Adhan (Prayer Times)', 'Material 3'],
        github: 'https://github.com/FadiAtef/quran-app',
    },
    leader: {
        title: 'Leader System 📊',
        img: 'assets/project-leader.png',
        tags: ['Flutter', 'Dart', 'REST API', 'GetX'],
        idea: 'A full cross-platform business management system that works seamlessly on both mobile and desktop. Built for Egyptian businesses needing a modern ERP-style tool that supports Arabic RTL layouts and real-time data dashboards.',
        problem: 'Small and mid-sized Egyptian businesses lacked affordable, Arabic-first ERP tools. Leader System fills this gap by providing real-time customer and inventory management with full RTL support, accessible on any device.',
        tech: ['Flutter', 'Dart', 'GetX', 'REST API', 'Dio', 'Responsive UI', 'Arabic RTL', 'Charts & Dashboards'],
        github: 'https://github.com/YounanGamal/leader',
    },
    egytravel: {
        title: 'EgyTravel ✈️',
        img: 'assets/project-egytravel.png',
        tags: ['Flutter', 'Dart', 'REST API', 'Firebase'],
        idea: 'A premium Egypt travel companion app that helps users discover amazing destinations, historical landmarks, hotels, and restaurants across Egypt. Features smart search, curated recommendations, and an immersive dark-themed UI.',
        problem: 'Tourists and locals had no single, well-designed app to explore Egypt\'s destinations with personalized recommendations and trip planning. EgyTravel solves this by combining location services, curated content, and real-time Firebase data in one polished mobile experience.',
        tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'REST API', 'Dio', 'BLoC', 'Google Maps', 'FCM'],
        github: 'https://github.com/egytravel/egytravel_flutter',
    },
};

function openProjectModal(id) {
    const data = projectData[id];
    if (!data) return;

    document.getElementById('projModalImg').src = data.img;
    document.getElementById('projModalImg').alt = data.title;
    document.getElementById('projModalTitle').textContent = data.title;
    document.getElementById('projModalIdea').textContent = data.idea;
    document.getElementById('projModalProblem').textContent = data.problem;

    const tagsEl = document.getElementById('projModalTags');
    tagsEl.innerHTML = data.tags.map(t => `<span class="ptag">${t}</span>`).join('');

    const techEl = document.getElementById('projModalTech');
    techEl.innerHTML = data.tech.map(t => `<span>${t}</span>`).join('');

    const ghLink = document.getElementById('projModalGithub');
    ghLink.href = data.github;

    document.getElementById('projModalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProjectModal();
});

// ─── SERVICES CONSTELLATION CANVAS ────────────────────────────
(function initServicesCanvas() {
    const canvas = document.getElementById('servicesCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;
    const PARTICLE_COUNT = 55;
    const MAX_DIST = 140;
    let particles = [];

    function resize() {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }

    function randomParticle() {
        return {
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.6 + 0.6,
        };
    }

    function init() {
        resize();
        particles = Array.from({ length: PARTICLE_COUNT }, randomParticle);
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        // Update
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = W;
            if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H;
            if (p.y > H) p.y = 0;
        });
        // Draw lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    const alpha = (1 - dist / MAX_DIST) * 0.3;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100,130,255,${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        // Draw dots
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(140,160,255,0.8)';
            ctx.fill();
        });
        animId = requestAnimationFrame(draw);
    }

    // Only animate when section is visible
    const section = document.getElementById('services');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                if (!animId) { init(); draw(); }
            } else {
                cancelAnimationFrame(animId);
                animId = null;
            }
        });
    }, { threshold: 0.05 });
    if (section) obs.observe(section);

    window.addEventListener('resize', () => {
        resize();
        particles = Array.from({ length: PARTICLE_COUNT }, randomParticle);
    });
})();
// ─── ACHIEVEMENTS CONSTELLATION CANVAS ───────────────────────
(function initAchievementsCanvas() {
    const canvas = document.getElementById('achievementsCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;
    const PARTICLE_COUNT = 50;
    const MAX_DIST = 130;
    let particles = [];

    function resize() {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }

    function randomParticle() {
        return {
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.5 + 0.4,
        };
    }

    function init() {
        resize();
        particles = Array.from({ length: PARTICLE_COUNT }, randomParticle);
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = W;
            if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H;
            if (p.y > H) p.y = 0;
        });
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    const alpha = (1 - dist / MAX_DIST) * 0.28;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100,130,255,${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(140,160,255,0.75)';
            ctx.fill();
        });
        animId = requestAnimationFrame(draw);
    }

    const section = document.getElementById('achievements');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                if (!animId) { init(); draw(); }
            } else {
                cancelAnimationFrame(animId);
                animId = null;
            }
        });
    }, { threshold: 0.05 });
    if (section) obs.observe(section);

    window.addEventListener('resize', () => {
        resize();
        particles = Array.from({ length: PARTICLE_COUNT }, randomParticle);
    });
})();
