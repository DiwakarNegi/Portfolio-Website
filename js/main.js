// Main Portfolio JavaScript
// Author: Diwakar Negi
// Description: Interactive functionality for portfolio website

class PortfolioApp {
    constructor() {
        this.isLoaded = false;
        this.currentTheme = 'dark';
        this.skillsAnimated = false;
        this.typingIndex = 0;
        this.typingTexts = [
            'Passionate BTech Student & Frontend Developer',
            'Building Modern Web Experiences',
            'Turning Ideas into Interactive Reality',
            'Creating Responsive & Beautiful Websites'
        ];
        
        this.init();
    }

    async init() {
        console.log('🚀 Initializing Portfolio App...');
        
        // Wait for DOM and content to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        console.log('⚡ Setting up portfolio features...');
        
        // Initialize all features
        this.initParticles();
        this.initNavigation();
        this.initThemeToggle();
        this.initSmoothScroll();
        this.initTypingAnimation();
        this.initScrollEffects();
        this.initContactForm();
        this.initProjectFilters();
        this.initPerformanceOptimizations();
        
        // Mark as loaded
        this.isLoaded = true;
        console.log('✅ Portfolio App initialized successfully!');
        
        // Trigger initial animations
        setTimeout(() => this.triggerInitialAnimations(), 500);
    }

    // 🎨 Initialize Particle System - UPDATED FOR ORANGE THEME
    initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: ['#ff6b35', '#f7931e', '#ff8c42'] // Updated to orange colors
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        }
                    },
                    opacity: {
                        value: 0.6, // Slightly increased for better visibility
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.2,
                            sync: false
                        }
                    },
                    size: {
                        value: 4, // Slightly larger particles
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ff6b35', // Orange connection lines
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 3, // Slower, more elegant movement
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 0.8
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
            console.log('✨ Orange-themed particles initialized');
        }
    }

    // 📱 Initialize Navigation
    initNavigation() {
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Mobile menu toggle
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger?.classList.remove('active');
                navMenu?.classList.remove('active');
            });
        });

        // Navbar scroll effect
        if (navbar) {
            let lastScrollY = window.scrollY;
            
            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }

                // Hide/show navbar on scroll
                if (currentScrollY > lastScrollY && currentScrollY > 500) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
                
                lastScrollY = currentScrollY;
            });
        }

        // Active link highlighting
        this.updateActiveNavLink();
        window.addEventListener('scroll', () => this.updateActiveNavLink());

        console.log('📱 Navigation initialized');
    }

    // Update active navigation link based on scroll position
    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // 🌙 Initialize Theme Toggle - UPDATED FOR ORANGE THEME
    initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        
        // Load saved theme
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.currentTheme = savedTheme;
        body.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon();

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
                body.setAttribute('data-theme', this.currentTheme);
                localStorage.setItem('portfolio-theme', this.currentTheme);
                this.updateThemeIcon();
                this.updateParticleColors(); // Update particles for theme change
                
                // Add transition effect
                body.style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    body.style.transition = '';
                }, 300);
            });
        }

        console.log(`🌙 Theme toggle initialized (${this.currentTheme} mode)`);
    }

    updateThemeIcon() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = this.currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }

    // NEW: Update particle colors based on theme
    updateParticleColors() {
        if (typeof pJSDom !== 'undefined' && pJSDom[0]) {
            const particles = pJSDom[0].pJS.particles.array;
            const newColors = this.currentTheme === 'dark' 
                ? ['#ff6b35', '#f7931e', '#ff8c42'] 
                : ['#ff8c42', '#ffab00', '#ffc107'];
            
            particles.forEach((particle, index) => {
                particle.color.value = newColors[index % newColors.length];
            });
        }
    }

    // ⚡ Initialize Smooth Scroll
    initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        console.log('⚡ Smooth scroll initialized');
    }

    // 🎭 Initialize Typing Animation
    initTypingAnimation() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (!subtitle) return;

        let currentTextIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;

        const typeText = () => {
            const currentText = this.typingTexts[currentTextIndex];
            
            if (isDeleting) {
                subtitle.textContent = currentText.substring(0, currentCharIndex - 1);
                currentCharIndex--;
            } else {
                subtitle.textContent = currentText.substring(0, currentCharIndex + 1);
                currentCharIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && currentCharIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % this.typingTexts.length;
                typeSpeed = 500; // Pause before next text
            }

            setTimeout(typeText, typeSpeed);
        };

        // Start typing animation after a delay
        setTimeout(typeText, 1000);
        
        console.log('🎭 Typing animation initialized');
    }

    // 📊 Initialize Skill Progress Bars (called from content-loader)
    initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        if (skillBars.length === 0) return;

        const animateBar = (bar) => {
            const width = bar.getAttribute('data-width');
            if (width) {
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.transition = 'width 2s ease-in-out';
                    bar.style.width = width + '%';
                }, 200);
            }
        };

        // Use Intersection Observer for scroll-triggered animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.skillsAnimated) {
                    skillBars.forEach((bar, index) => {
                        setTimeout(() => animateBar(bar), index * 200);
                    });
                    this.skillsAnimated = true;
                }
            });
        }, { threshold: 0.5 });

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }

        console.log('📊 Skill bars initialized');
    }

    // 🔍 Initialize Scroll Effects
    initScrollEffects() {
        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Scroll reveal animation
        const revealElements = document.querySelectorAll('[data-aos]');
        if (revealElements.length > 0 && typeof AOS !== 'undefined') {
            AOS.refresh();
        }

        console.log('🔍 Scroll effects initialized');
    }

    // 📧 Initialize Contact Form - ENHANCED WITH ORANGE THEME
    initContactForm() {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            
            // Show loading state with orange spinner
            button.innerHTML = '<i class="fas fa-spinner fa-spin" style="color: #ff6b35;"></i> Sending...';
            button.disabled = true;
            
            try {
                // Simulate form submission (replace with your actual endpoint)
                await this.simulateFormSubmission(formData);
                
                // Success state
                button.innerHTML = '<i class="fas fa-check" style="color: #4ade80;"></i> Message Sent!';
                button.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
                
                // Reset form
                form.reset();
                
                // Show success message
                this.showNotification('Message sent successfully! 🎉', 'success');
                
            } catch (error) {
                // Error state
                button.innerHTML = '<i class="fas fa-exclamation-triangle" style="color: #ef4444;"></i> Try Again';
                button.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
                
                this.showNotification('Failed to send message. Please try again. 😞', 'error');
            }
            
            // Reset button after 3 seconds
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
                button.className = 'btn btn-primary';
                button.disabled = false;
            }, 3000);
        });

        console.log('📧 Contact form initialized');
    }

    // Simulate form submission (replace with actual implementation)
    async simulateFormSubmission(formData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve('Success');
                } else {
                    reject('Simulated error');
                }
            }, 2000);
        });
    }

    // 🎪 Initialize Project Filters
    initProjectFilters() {
        // Add filter buttons if they exist
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                
                // Update active button with orange highlight
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.background = '';
                });
                button.classList.add('active');
                button.style.background = 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)';
                
                // Filter projects with orange animation
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });

        console.log('🎪 Project filters initialized');
    }

    // ⚡ Initialize Performance Optimizations
    initPerformanceOptimizations() {
        // Lazy load images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));

        // Preload critical resources
        this.preloadCriticalResources();

        console.log('⚡ Performance optimizations initialized');
    }

    // Preload critical resources
    preloadCriticalResources() {
        const criticalResources = [
            'assets/images/profile.jpg',
            'css/style.css',
            'css/animations.css'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.includes('.css') ? 'style' : 'image';
            document.head.appendChild(link);
        });
    }

    // 🎯 Trigger Initial Animations - ENHANCED
    triggerInitialAnimations() {
        // Add loaded class to body
        document.body.classList.add('loaded');
        
        // Trigger hero animations with orange glow effect
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.animation = `fadeInUp 0.8s ease forwards`;
                if (element.classList.contains('hero-title')) {
                    element.style.textShadow = '0 0 20px rgba(255, 107, 53, 0.3)';
                }
            }, index * 200);
        });
    }

    // 📢 Show Notifications - ENHANCED WITH ORANGE THEME
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const colors = {
            success: '#4ade80',
            error: '#ef4444',
            info: '#ff6b35'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(26, 26, 26, 0.95);
            border: 1px solid ${colors[type]};
            border-radius: 10px;
            padding: 15px 20px;
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10000;
            backdrop-filter: blur(10px);
            animation: slideInRight 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;
        
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}" style="color: ${colors[type]};"></i>
            <span>${message}</span>
            <button class="notification-close" style="background: none; border: none; color: ${colors[type]}; cursor: pointer; font-size: 18px; margin-left: 10px;">&times;</button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);

        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
    }

    // 🔧 Utility Methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize the app
window.addEventListener('load', () => {
    window.portfolioApp = new PortfolioApp();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);