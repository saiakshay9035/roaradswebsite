// GSAP Animations and Interactions
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener('DOMContentLoaded', function() {

    // Hero entrance animations
    const heroTl = gsap.timeline({ delay: 0.5 });

    heroTl
        .from('.logo', {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power3.out"
        })
        .from('.nav-links a', {
            opacity: 0,
            y: -20,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.4")
        .from('.hero-text h1 .line', {
            opacity: 0,
            y: 60,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.2")
        .from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from('.hero-actions a', {
            opacity: 0,
            y: 30,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)"
        }, "-=0.4")
        .from('.hero-stats .stat', {
            opacity: 0,
            x: 50,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.2");

    // Scroll-triggered animations
    gsap.utils.toArray('.tier-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 80,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });
    });

    gsap.from('.pilot-text', {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: '.pilot', start: "top 70%" }
    });

    gsap.from('.pilot-visual', {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: '.pilot', start: "top 70%" }
    });

    gsap.utils.toArray('.why-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 80,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });
    });

    gsap.from('.statement-line', {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: '.bold-statement', start: "top 70%" }
    });

    gsap.from('.statement-accent', {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: { trigger: '.bold-statement', start: "top 70%" }
    });

    gsap.from('.data-eyebrow, .data-headline, .data-sub, .data-actions, .data-benefits', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: '.data-inner', start: "top 70%" }
    });

    gsap.utils.toArray('.faq-item').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            y: 40,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%" }
        });
    });

    gsap.utils.toArray('.package-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" }
        });
    });

    // Parallax
    gsap.to('.bike-silhouette', {
        y: -50,
        ease: "none",
        scrollTrigger: { trigger: '.hero', start: "top top", end: "bottom top", scrub: 1 }
    });

    gsap.to('.led-glow', {
        y: -30,
        ease: "none",
        scrollTrigger: { trigger: '.hero', start: "top top", end: "bottom top", scrub: 1 }
    });

    // Navbar scroll effect
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav');
        const currentScrollY = window.scrollY;
        nav.style.background = currentScrollY > 100 ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.8)';
        nav.style.transform = (currentScrollY > lastScrollY && currentScrollY > 200) ? 'translateY(-100%)' : 'translateY(0)';
        lastScrollY = currentScrollY;
    });

    // Smooth scroll for data-scroll links
    document.querySelectorAll('[data-scroll]').forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('data-scroll'));
            if (target) {
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: { y: target, offsetY: 80 },
                    ease: "power3.inOut"
                });
            }
        });
    });

    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        mobileNav.innerHTML = navLinks.innerHTML;
        document.body.appendChild(mobileNav);

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }

    // Nav smooth scroll
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 80 }, ease: "power3.inOut" });
            }
        });
    });

    // Form submission
    const SHEET_URL = 'https://script.google.com/macros/s/AKfycby068FvAJzubgFCD9Jlnezk8jcdd1SYwt-0PswABqr60T0nqZSCoAaVbfkIxiLy7LplXQ/exec';

    function submitToSheet(payload, btn, successMsg) {
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;
        const formData = new FormData();
        formData.append('payload', JSON.stringify(payload));
        fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body: formData })
            .then(() => { showNotification(successMsg, 'success'); btn.closest('form').reset(); })
            .catch(() => { showNotification(successMsg, 'success'); })
            .finally(() => { btn.textContent = originalText; btn.disabled = false; });
    }

    const campaignForm = document.querySelector('.campaign-form');
    if (campaignForm) {
        campaignForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitToSheet({
                formType: 'brand',
                row: [
                    new Date().toLocaleString('en-IN'),
                    document.getElementById('brand-name').value,
                    document.getElementById('brand-company').value,
                    document.getElementById('brand-email').value,
                    document.getElementById('brand-phone').value,
                    document.getElementById('brand-goal').value,
                    document.getElementById('brand-notes').value
                ]
            }, this.querySelector('.btn-primary'), "Campaign booked! We'll contact you within 24 hours.");
        });
    }

    const riderForm = document.querySelector('.rider-form form');
    if (riderForm) {
        riderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitToSheet({
                formType: 'rider',
                row: [
                    new Date().toLocaleString('en-IN'),
                    document.getElementById('rider-name').value,
                    document.getElementById('rider-phone').value,
                    document.getElementById('rider-email').value,
                    document.getElementById('rider-vehicle').value,
                    document.getElementById('rider-city').value
                ]
            }, this.querySelector('.btn-primary'), "Welcome to the rider network! We'll contact you for onboarding.");
        });
    }

    // Hover effects
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('mouseenter', function() { gsap.to(this, { scale: 1.05, duration: 0.3, ease: "power2.out" }); });
        btn.addEventListener('mouseleave', function() { gsap.to(this, { scale: 1, duration: 0.3, ease: "power2.out" }); });
    });

    document.querySelectorAll('.tier-card').forEach(card => {
        card.addEventListener('mouseenter', function() { gsap.to(this, { y: -12, duration: 0.4, ease: "power2.out" }); });
        card.addEventListener('mouseleave', function() { gsap.to(this, { y: 0, duration: 0.4, ease: "power2.out" }); });
    });

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('animate-in'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section-header, .advantage, .equipment-item').forEach(el => observer.observe(el));

});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `<div style="font-size:18px;font-weight:bold">${type === 'success' ? '✓' : 'ℹ'}</div><div>${message}</div>`;
    Object.assign(notification.style, {
        position: 'fixed', top: '100px', right: '24px',
        background: type === 'success' ? 'rgba(34, 197, 94, 0.9)' : 'rgba(59, 130, 246, 0.9)',
        color: 'white', padding: '16px 24px', borderRadius: '12px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)', zIndex: '10000',
        transform: 'translateX(400px)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        maxWidth: '400px', fontSize: '14px', fontWeight: '500',
        display: 'flex', alignItems: 'center', gap: '12px'
    });
    document.body.appendChild(notification);
    setTimeout(() => { notification.style.transform = 'translateX(0)'; }, 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => { if (document.body.contains(notification)) document.body.removeChild(notification); }, 400);
    }, 5000);
}
