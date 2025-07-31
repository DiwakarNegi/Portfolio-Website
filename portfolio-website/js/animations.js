// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate
const animateElements = document.querySelectorAll(`
    .skill-card,
    .project-card,
    .stat-item,
    .contact-method,
    .about-text,
    .section-title
`);

animateElements.forEach(el => {
    observer.observe(el);
});

// Stagger animation for skill cards
const skillCards = document.querySelectorAll('.skill-card');
const skillCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, index * 150);
            });
            skillCardsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

if (skillCards.length > 0) {
    skillCardsObserver.observe(skillCards[0].parentElement);
}

// Stagger animation for project cards
const projectCards = document.querySelectorAll('.project-card');
const projectCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, index * 200);
            });
            projectCardsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

if (projectCards.length > 0) {
    projectCardsObserver.observe(projectCards[0].parentElement);
}

// Floating animation for hero elements
function createFloatingAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        
        .floating-delayed {
            animation: floating 3s ease-in-out infinite;
            animation-delay: -1.5s;
        }
        
        @keyframes reveal-char {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .reveal-char {
            display: inline-block;
            animation: reveal-char 0.6s ease-out forwards;
            opacity: 0;
        }
        
        @keyframes slideInFromBottom {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .slide-in-bottom {
            animation: slideInFromBottom 0.8s ease-out;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .pulse {
            animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .rotate {
            animation: rotate 20s linear infinite;
        }
    `;
    document.head.appendChild(style);
}

createFloatingAnimation();

// Apply floating animation to hero avatar
const heroAvatar = document.querySelector('.hero-avatar');
if (heroAvatar) {
    heroAvatar.classList.add('floating');
}

// Mouse parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Parallax for hero elements
    const heroElements = document.querySelectorAll('.hero-avatar, .hero-text');
    heroElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Particle system for hero background
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.init();
    }
    
    init() {
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system if hero section exists
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    heroSection.appendChild(canvas);
    new ParticleSystem(canvas);
}

// Text reveal animation
function revealText(element) {
    const text = element.textContent;
    element.innerHTML = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${index * 0.05}s`;
        span.classList.add('reveal-char');
        element.appendChild(span);
    });
}

// Apply text reveal to section titles
document.addEventListener('DOMContentLoaded', () => {
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealText(entry.target);
                titleObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.section-title').forEach(title => {
        titleObserver.observe(title);
    });
});

// Smooth scroll with easing
function smoothScrollTo(element, duration = 800) {
    const targetPosition = element.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Loading animation
function createLoader() {
    const loader = document.createElement('div');
    loader.className = 'preloader';
    loader.innerHTML = `
        <div class="loader">
            <div class="loader-circle"></div>
            <div class="loader-text">Loading...</div>
        </div>
    `;
    
    const loaderStyle = document.createElement('style');
    loaderStyle.textContent = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        }
        
        .loader {
            text-align: center;
            color: white;
        }
        
        .loader-circle {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        .loader-text {
            font-size: 1.2rem;
            font-weight: 600;
            animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    document.head.appendChild(loaderStyle);
    document.body.appendChild(loader);
    
    return loader;
}

// Initialize loader
document.addEventListener('DOMContentLoaded', () => {
    const loader = createLoader();
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
});

// Cursor effect
function createCustomCursor() {
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorDot.className = 'cursor-dot';
    
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid #667eea;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        }
        
        .cursor-dot {
            width: 4px;
            height: 4px;
            background: #667eea;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            transition: transform 0.05s ease;
        }
        
        .custom-cursor.hover {
            transform: scale(1.5);
            background: rgba(102, 126, 234, 0.1);
        }
        
        @media (max-width: 768px) {
            .custom-cursor,
            .cursor-dot {
                display: none;
            }
        }
    `;
    
    document.head.appendChild(cursorStyle);
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursorDot.style.left = e.clientX - 2 + 'px';
        cursorDot.style.top = e.clientY - 2 + 'px';
    });
    
    // Add hover effect
    const hoverElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-card');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}

// Initialize custom cursor
if (window.innerWidth > 768) {
    createCustomCursor();
}

// Progress bar for page scroll
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    
    const progressStyle = document.createElement('style');
    progressStyle.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            z-index: 10000;
            transition: width 0.1s ease;
        }
    `;
    
    document.head.appendChild(progressStyle);
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Back to top button
function createBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    
    const backToTopStyle = document.createElement('style');
    backToTopStyle.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }
    `;
    
    document.head.appendChild(backToTopStyle);
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
createBackToTop();