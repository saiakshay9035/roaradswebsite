gsap.registerPlugin(ScrollTrigger);

const SHEET_URL = 'https://script.google.com/macros/s/AKfycby068FvAJzubgFCD9Jlnezk8jcdd1SYwt-0PswABqr60T0nqZSCoAaVbfkIxiLy7LplXQ/exec';

document.addEventListener('DOMContentLoaded', () => {

    // --- HERO ENTRANCE ---
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from('#heroEyebrow',  { opacity:0, y:20, duration:.8, ease:'power3.out' })
      .from('.h-line',       { opacity:0, y:60, duration:1,  stagger:.15, ease:'power3.out' }, '-=.4')
      .from('#heroSub',      { opacity:0, y:30, duration:.8, ease:'power3.out' }, '-=.5')
      .from('#heroActions',  { opacity:0, y:20, duration:.7, ease:'power3.out' }, '-=.4')
      .from('#heroScroll',   { opacity:0, duration:.6 }, '-=.2');

    // --- SCROLL REVEALS ---
    document.querySelectorAll('.reveal-up, .reveal-line').forEach(el => {
        const delay = el.style.transitionDelay || '0s';
        ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            onEnter: () => {
                setTimeout(() => el.classList.add('visible'), parseFloat(delay) * 1000);
            }
        });
    });

    // --- MANIFESTO PARALLAX ---
    gsap.to('.manifesto-line', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
            trigger: '.manifesto',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
        }
    });

    // --- NAV SCROLL ---
    const nav = document.getElementById('nav');
    ScrollTrigger.create({
        start: 'top -80',
        onUpdate: self => {
            nav.style.background = self.progress > 0
                ? 'rgba(5,5,5,0.92)'
                : 'rgba(5,5,5,0.55)';
        }
    });

    // --- MOBILE NAV ---
    const burger = document.getElementById('navBurger');
    const mobileNav = document.getElementById('navMobile');
    burger?.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });
    mobileNav?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });

    // --- FAQ ---
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-q').addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isOpen) item.classList.add('active');
        });
    });

    // --- SMOOTH SCROLL ---
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- FORM SUBMIT ---
    function submitToSheet(payload, btn, successMsg) {
        const orig = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;
        const fd = new FormData();
        fd.append('payload', JSON.stringify(payload));
        fetch(SHEET_URL, { method:'POST', mode:'no-cors', body:fd })
            .finally(() => {
                showNotification(successMsg);
                btn.closest('form').reset();
                btn.textContent = orig;
                btn.disabled = false;
            });
    }

    const brandForm = document.getElementById('brandForm');
    if (brandForm) {
        brandForm.addEventListener('submit', e => {
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
            }, brandForm.querySelector('.btn-primary'), 'Campaign booked! Sai will reach out within 24 hours.');
        });
    }

    const riderForm = document.getElementById('riderForm');
    if (riderForm) {
        riderForm.addEventListener('submit', e => {
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
            }, riderForm.querySelector('.btn-primary'), 'Welcome to the network! We\'ll be in touch.');
        });
    }
});

function showNotification(msg) {
    const n = document.createElement('div');
    Object.assign(n.style, {
        position:'fixed', top:'100px', right:'24px',
        background:'#111', border:'1px solid rgba(255,107,0,.4)',
        color:'white', padding:'20px 28px', borderRadius:'14px',
        boxShadow:'0 20px 60px rgba(0,0,0,.5)',
        zIndex:'9999', fontSize:'15px', fontWeight:'500',
        transform:'translateX(120%)', transition:'transform .5s cubic-bezier(.16,1,.3,1)',
        maxWidth:'360px'
    });
    n.textContent = msg;
    document.body.appendChild(n);
    requestAnimationFrame(() => { n.style.transform = 'translateX(0)'; });
    setTimeout(() => {
        n.style.transform = 'translateX(120%)';
        setTimeout(() => n.remove(), 500);
    }, 5000);
}
