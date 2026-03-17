// GSAP Animations and Interactions
gsap.registerPlugin(ScrollTrigger);

// Initialize when DOM is loaded
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
        .from('.hero-tagline', { 
            opacity: 0, 
            y: 30, 
            duration: 0.8, 
            ease: "power3.out" 
        }, "-=0.6")
        .from('.hero-subtitle', { 
            opacity: 0, 
            y: 30, 
            duration: 0.8, 
            ease: "power3.out" 
        }, "-=0.6")
        .from('.hero-actions button', { 
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

    // Pilot section animations
    gsap.from('.pilot-text', {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.pilot',
            start: "top 70%"
        }
    });

    gsap.from('.pilot-visual', {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.pilot',
            start: "top 70%"
        }
    });

    // Why Roar cards animation
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

    // Data cards animation
    gsap.utils.toArray('.data-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            }
        });
    });

    // Counter animations
    const animateCounter = (element, target, duration = 2) => {
        gsap.to(element, {
            innerText: target,
            duration: duration,
            snap: { innerText: 1 },
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                once: true
            }
        });
    };

    // Animate rider stats
    const riderStats = document.querySelectorAll('.rider-stat .stat-number[data-count]');
    riderStats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        animateCounter(stat, target);
    });

    // Animate data metrics
    const dataMetrics = document.querySelectorAll('.metric-value[data-count]');
    dataMetrics.forEach(metric => {
        const target = parseInt(metric.getAttribute('data-count'));
        if (target > 1000) {
            // Format large numbers
            gsap.to(metric, {
                duration: 2.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: metric,
                    start: "top 80%",
                    once: true
                },
                onUpdate: function() {
                    const current = Math.round(target * this.progress());
                    if (current >= 1000000) {
                        metric.textContent = (current / 1000000).toFixed(1) + 'M';
                    } else if (current >= 1000) {
                        metric.textContent = (current / 1000).toFixed(1) + 'K';
                    } else {
                        metric.textContent = current;
                    }
                }
            });
        } else {
            animateCounter(metric, target);
        }
    });

    // Bold statement animation
    gsap.from('.statement-line', {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.bold-statement',
            start: "top 70%"
        }
    });

    gsap.from('.statement-accent', {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.bold-statement',
            start: "top 70%"
        }
    });

    // CTA section animation
    gsap.from('.data-eyebrow, .data-headline, .data-sub, .data-actions, .data-benefits', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.data-inner',
            start: "top 70%"
        }
    });

    // FAQ animations
    gsap.utils.toArray('.faq-item').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            y: 40,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 85%"
            }
        });
    });

    // Package card animations
    gsap.utils.toArray('.package-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            }
        });
    });

    // Navbar scroll effect
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav');
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
            nav.style.backdropFilter = 'blur(20px)';
        }
        
        // Hide/show nav on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Smooth scrolling for buttons and links
    document.querySelectorAll('[data-scroll]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('data-scroll'));
            if (target) {
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        // Create mobile nav
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        mobileNav.innerHTML = navLinks.innerHTML;
        document.body.appendChild(mobileNav);
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
        
        // Close mobile menu when clicking links
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }

    // Navigation links smooth scroll
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Form submissions
    const campaignForm = document.querySelector('.campaign-form');
    const riderForm = document.querySelector('.rider-form form');

    if (campaignForm) {
        campaignForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;
            
            // Loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Campaign booked! We\'ll contact you within 24 hours to discuss your strategy.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    if (riderForm) {
        riderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;
            
            // Loading state
            submitBtn.textContent = 'Applying...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Welcome to the rider network! We\'ll contact you for onboarding.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Enhanced hover effects
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            gsap.to(this, { 
                scale: 1.05, 
                duration: 0.3, 
                ease: "power2.out" 
            });
        });
        
        btn.addEventListener('mouseleave', function() {
            gsap.to(this, { 
                scale: 1, 
                duration: 0.3, 
                ease: "power2.out" 
            });
        });
    });

    // Tier card hover effects
    document.querySelectorAll('.tier-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, { 
                y: -12, 
                duration: 0.4, 
                ease: "power2.out" 
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, { 
                y: 0, 
                duration: 0.4, 
                ease: "power2.out" 
            });
        });
    });

    // Parallax effect for hero background
    gsap.to('.bike-silhouette', {
        y: -50,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to('.led-glow', {
        y: -30,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">${type === 'success' ? '✓' : 'ℹ'}</div>
            <div class="notification-message">${message}</div>
        </div>
    `;
    
    // Styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '24px',
        background: type === 'success' ? 'rgba(34, 197, 94, 0.9)' : 'rgba(59, 130, 246, 0.9)',
        color: 'white',
        padding: '16px 24px',
        borderRadius: '12px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        maxWidth: '400px',
        fontSize: '14px',
        fontWeight: '500'
    });
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
    `;
    
    notification.querySelector('.notification-icon').style.cssText = `
        font-size: 18px;
        font-weight: bold;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 5000);
}

// Add loading states and micro-interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle loading animation to page
    gsap.from('body', {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.section-header, .advantage, .equipment-item').forEach(el => {
        observer.observe(el);
    });
});