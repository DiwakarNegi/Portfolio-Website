// Mood Board Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Mood Board System Initializing...');
    
    // Initialize AOS Animation
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Initialize all features
    initNavigation();
    initColorInteraction();
    initTypographyInteraction();
    initScrollEffects();
    
    console.log('✅ Mood Board System Ready!');
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.mood-section');
    
    // Smooth scrolling
    navLinks.forEach(link => {
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
    
    // Active section highlighting
    const observerOptions = {
        root: null,
        rootMargin: '-50px 0px -50px 0px',
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${currentId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    console.log('📱 Navigation initialized');
}

// Color interaction functionality
function initColorInteraction() {
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const selectedColor = document.getElementById('selectedColor');
    const colorName = document.getElementById('colorName');
    const colorHex = document.getElementById('colorHex');
    const copyCssBtn = document.getElementById('copyCssBtn');
    const cssOutput = document.getElementById('cssOutput');
    const closeOutput = document.getElementById('closeOutput');
    
    let selectedColors = [];
    
    // Color swatch interaction
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            // Remove previous selection
            colorSwatches.forEach(s => s.classList.remove('selected'));
            
            // Add selection to current swatch
            this.classList.add('selected');
            
            // Update display
            const color = this.getAttribute('data-color');
            const name = this.getAttribute('data-name');
            
            if (selectedColor) {
                selectedColor.style.background = this.style.background;
            }
            
            if (colorName) {
                colorName.textContent = name;
            }
            
            if (colorHex) {
                colorHex.textContent = color;
            }
            
            // Add to selected colors array
            if (!selectedColors.find(c => c.color === color)) {
                selectedColors.push({
                    name: name,
                    color: color,
                    cssVar: `--id-${name.toLowerCase().replace(/\s+/g, '-')}`
                });
            }
            
            // Add selection effect
            this.style.transform = 'scale(1.15)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
        
        // Hover effects
        swatch.addEventListener('mouseenter', function() {
            const name = this.getAttribute('data-name');
            const color = this.getAttribute('data-color');
            
            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'color-tooltip';
            tooltip.innerHTML = `<strong>${name}</strong><br>${color}`;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 0.8rem;
                z-index: 1000;
                pointer-events: none;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            `;
            
            document.body.appendChild(tooltip);
            
            const updateTooltipPosition = (e) => {
                tooltip.style.left = (e.clientX + 10) + 'px';
                tooltip.style.top = (e.clientY - 10) + 'px';
            };
            
            this.addEventListener('mousemove', updateTooltipPosition);
            updateTooltipPosition({ clientX: event.clientX, clientY: event.clientY });
            
            this.addEventListener('mouseleave', () => {
                if (tooltip && tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, { once: true });
        });
    });
    
    // CSS generation and copy functionality
    if (copyCssBtn) {
        copyCssBtn.addEventListener('click', function() {
            generateCSSVariables();
        });
    }
    
    if (closeOutput) {
        closeOutput.addEventListener('click', function() {
            cssOutput.classList.remove('active');
        });
    }
    
    // Close modal on outside click
    if (cssOutput) {
        cssOutput.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    }
    
    function generateCSSVariables() {
        const allColors = [
            // Luxury Warm Neutrals
            { name: 'Warm White', color: '#F5F2ED', cssVar: '--id-warm-white' },
            { name: 'Cream', color: '#E8E2D5', cssVar: '--id-cream' },
            { name: 'Warm Beige', color: '#D4C4A8', cssVar: '--id-warm-beige' },
            { name: 'Taupe', color: '#B8A082', cssVar: '--id-taupe' },
            { name: 'Warm Brown', color: '#8B7355', cssVar: '--id-warm-brown' },
            
            // Cool Luxury Neutrals
            { name: 'Pure White', color: '#F8F9FA', cssVar: '--id-pure-white' },
            { name: 'Light Gray', color: '#E9ECEF', cssVar: '--id-light-gray' },
            { name: 'Silver', color: '#CED4DA', cssVar: '--id-silver' },
            { name: 'Gray', color: '#ADB5BD', cssVar: '--id-gray' },
            { name: 'Charcoal', color: '#495057', cssVar: '--id-charcoal' },
            
            // Metallic Accents
            { name: 'Gold', color: '#D4AF37', cssVar: '--id-gold' },
            { name: 'Silver Metallic', color: '#C0C0C0', cssVar: '--id-silver-metallic' },
            { name: 'Bronze', color: '#B87333', cssVar: '--id-bronze' },
            { name: 'Rose Gold', color: '#E5AA70', cssVar: '--id-rose-gold' },
            { name: 'Gunmetal', color: '#36454F', cssVar: '--id-gunmetal' },
            
            // Jewel Tones
            { name: 'Sapphire Blue', color: '#0F4C75', cssVar: '--id-sapphire' },
            { name: 'Emerald Green', color: '#2E8B57', cssVar: '--id-emerald' },
            { name: 'Amethyst Purple', color: '#800080', cssVar: '--id-amethyst' },
            { name: 'Ruby Red', color: '#B22222', cssVar: '--id-ruby' },
            { name: 'Amber Orange', color: '#FF8C00', cssVar: '--id-amber' }
        ];
        
        let cssCode = `:root {\n  /* Interior Design Color System */\n\n`;
        
        // Group colors by category
        const categories = {
            'Luxury Warm Neutrals': allColors.slice(0, 5),
            'Cool Luxury Neutrals': allColors.slice(5, 10),
            'Metallic Accents': allColors.slice(10, 15),
            'Jewel Tones': allColors.slice(15, 20)
        };
        
        Object.entries(categories).forEach(([categoryName, colors]) => {
            cssCode += `  /* ${categoryName} */\n`;
            colors.forEach(color => {
                cssCode += `  ${color.cssVar}: ${color.color};\n`;
            });
            cssCode += '\n';
        });
        
        // Add typography variables
        cssCode += `  /* Typography System */\n`;
        cssCode += `  --font-serif-elegant: 'Playfair Display', serif;\n`;
        cssCode += `  --font-serif-classic: 'Cormorant Garamond', serif;\n`;
        cssCode += `  --font-sans-modern: 'Poppins', sans-serif;\n\n`;
        
        // Add gradient combinations
        cssCode += `  /* Luxury Gradients */\n`;
        cssCode += `  --luxury-gradient: linear-gradient(135deg, var(--id-gold), var(--id-bronze));\n`;
        cssCode += `  --metallic-gold: linear-gradient(135deg, #FFD700, #FFA500);\n`;
        cssCode += `  --warm-neutral-gradient: linear-gradient(135deg, var(--id-warm-white), var(--id-taupe));\n`;
        cssCode += `  --cool-neutral-gradient: linear-gradient(135deg, var(--id-pure-white), var(--id-charcoal));\n`;
        
        cssCode += `}`;
        
        // Display the CSS code
        const cssCodeElement = document.getElementById('cssCode');
        if (cssCodeElement) {
            cssCodeElement.textContent = cssCode;
        }
        
        if (cssOutput) {
            cssOutput.classList.add('active');
        }
        
        // Copy to clipboard
        navigator.clipboard.writeText(cssCode).then(() => {
            // Show success feedback
            const originalText = copyCssBtn.textContent;
            copyCssBtn.textContent = 'Copied!';
            copyCssBtn.style.background = 'var(--id-emerald)';
            
            setTimeout(() => {
                copyCssBtn.textContent = originalText;
                copyCssBtn.style.background = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
    
    console.log('🎨 Color interaction initialized');
}

// Typography interaction functionality
function initTypographyInteraction() {
    const fontExamples = document.querySelectorAll('.font-examples h1, .font-examples h2, .font-examples h3, .font-examples p');
    
    fontExamples.forEach(element => {
        element.addEventListener('click', function() {
            // Create selection effect
            this.style.transform = 'scale(1.02)';
            this.style.background = 'rgba(212, 175, 55, 0.1)';
            this.style.borderRadius = '4px';
            this.style.padding = '4px 8px';
            this.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.background = '';
                this.style.padding = '';
            }, 1000);
            
            // Show font information
            const fontFamily = window.getComputedStyle(this).fontFamily;
            const fontSize = window.getComputedStyle(this).fontSize;
            const fontWeight = window.getComputedStyle(this).fontWeight;
            
            console.log(`Font: ${fontFamily}, Size: ${fontSize}, Weight: ${fontWeight}`);
        });
    });
    
    console.log('📝 Typography interaction initialized');
}

// Scroll effects and animations
function initScrollEffects() {
    // Parallax effect for sections
    const sections = document.querySelectorAll('.mood-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        sections.forEach((section, index) => {
            if (index % 2 === 0) {
                section.style.transform = `translateY(${rate * 0.3}px)`;
            }
        });
    });
    
    // Smooth reveal animations for cards
    const cards = document.querySelectorAll('.overview-card, .color-palette, .font-specimen, .pairing-example');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(card);
    });
    
    // Add hover sound effects (visual feedback)
    const interactiveElements = document.querySelectorAll('.card-btn, .copy-css-btn, .color-swatch');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.filter = '';
        });
    });
    
    console.log('🎭 Scroll effects initialized');
}

// Utility functions
function debounce(func, wait) {
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

// Color utility functions
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}

// Export for global access
window.MoodBoard = {
    initNavigation,
    initColorInteraction,
    initTypographyInteraction,
    initScrollEffects
};