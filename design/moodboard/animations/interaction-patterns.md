# Animation & Interaction Patterns for Luxury Interior Design

## Overview
Sophisticated animation and interaction patterns that enhance the luxury interior design portfolio experience. These patterns emphasize subtle elegance, smooth performance, and purposeful motion that guides user attention without overwhelming the content.

## Animation Philosophy

### Design Principles
- **Subtle Sophistication**: Refined animations that suggest luxury without ostentation
- **Purpose-Driven Motion**: Every animation serves a functional or emotional purpose
- **Performance First**: 60fps animations using transform and opacity
- **Accessibility Aware**: Respects prefers-reduced-motion preferences

### Motion Language
- **Ease Curves**: Custom cubic-bezier curves that feel organic and premium
- **Timing Harmony**: Consistent timing scales that create rhythmic experiences
- **Spatial Relationships**: Animations that respect 3D space and depth
- **Content Respect**: Motion that enhances, never competes with portfolio work

## Animation Timing System

### Timing Variables
```css
:root {
  /* Base Timing Scale */
  --timing-instant: 0.1s;
  --timing-fast: 0.3s;
  --timing-medium: 0.6s;
  --timing-slow: 1s;
  --timing-very-slow: 1.5s;
  
  /* Luxury Easing Functions */
  --ease-luxury: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-elegant: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-sophisticated: cubic-bezier(0.165, 0.84, 0.44, 1);
  --ease-premium: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Interactive Timing */
  --hover-timing: var(--timing-fast);
  --focus-timing: var(--timing-instant);
  --active-timing: var(--timing-instant);
  
  /* Complex Animation Durations */
  --page-transition: var(--timing-medium);
  --modal-animation: var(--timing-medium);
  --scroll-animation: var(--timing-slow);
}
```

### Reduced Motion Support
```css
/* Respect user preferences for reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Hover Interactions

### Luxury Card Hover
```css
.luxury-card {
  transition: 
    transform var(--timing-medium) var(--ease-elegant),
    box-shadow var(--timing-medium) var(--ease-elegant),
    background var(--timing-fast) var(--ease-smooth);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.luxury-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 175, 55, 0.1),
    transparent
  );
  transition: left var(--timing-slow) var(--ease-sophisticated);
  z-index: 1;
}

.luxury-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(212, 175, 55, 0.2);
}

.luxury-card:hover::before {
  left: 100%;
}

.luxury-card:hover .card-image {
  transform: scale(1.05);
}

.card-image {
  transition: transform var(--timing-slow) var(--ease-elegant);
}
```

### Premium Button Interactions
```css
.btn-premium {
  position: relative;
  overflow: hidden;
  transition: all var(--timing-fast) var(--ease-smooth);
  transform-style: preserve-3d;
}

.btn-premium::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left var(--timing-medium) var(--ease-sophisticated);
  z-index: 1;
}

.btn-premium:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.btn-premium:hover::before {
  left: 100%;
}

.btn-premium:active {
  transform: translateY(0);
  transition-duration: var(--timing-instant);
}
```

### Navigation Hover Effects
```css
.nav-link {
  position: relative;
  overflow: hidden;
  transition: color var(--timing-fast) var(--ease-smooth);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-champagne);
  transition: width var(--timing-medium) var(--ease-elegant);
}

.nav-link:hover::after {
  width: 100%;
}

/* 3D Underline Effect */
.nav-link-3d {
  transform-style: preserve-3d;
  transition: transform var(--timing-fast) var(--ease-smooth);
}

.nav-link-3d::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  transform: translateZ(-10px) translateY(100%);
  color: var(--color-gold);
  opacity: 0;
  transition: 
    transform var(--timing-medium) var(--ease-sophisticated),
    opacity var(--timing-medium) var(--ease-sophisticated);
}

.nav-link-3d:hover {
  transform: translateZ(0) translateY(-100%);
}

.nav-link-3d:hover::before {
  transform: translateZ(0) translateY(0);
  opacity: 1;
}
```

## Scroll-Triggered Animations

### Fade In Animations
```css
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: 
    opacity var(--timing-slow) var(--ease-elegant),
    transform var(--timing-slow) var(--ease-elegant);
}

.fade-in.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered Fade In */
.fade-in-stagger {
  opacity: 0;
  transform: translateY(30px);
  transition: 
    opacity var(--timing-slow) var(--ease-elegant),
    transform var(--timing-slow) var(--ease-elegant);
}

.fade-in-stagger:nth-child(1) { transition-delay: 0s; }
.fade-in-stagger:nth-child(2) { transition-delay: 0.1s; }
.fade-in-stagger:nth-child(3) { transition-delay: 0.2s; }
.fade-in-stagger:nth-child(4) { transition-delay: 0.3s; }

.fade-in-stagger.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

### Parallax Scroll Effects
```css
.parallax-container {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.parallax-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-size: cover;
  background-position: center;
  will-change: transform;
}

/* JavaScript implementation */
.parallax-slow { transform: translateY(calc(var(--scroll-percent) * -20px)); }
.parallax-medium { transform: translateY(calc(var(--scroll-percent) * -50px)); }
.parallax-fast { transform: translateY(calc(var(--scroll-percent) * -100px)); }
```

### Image Reveal Animations
```css
.image-reveal {
  position: relative;
  overflow: hidden;
}

.image-reveal img {
  transform: scale(1.2);
  transition: transform var(--timing-very-slow) var(--ease-elegant);
}

.image-reveal::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-charcoal);
  transform: translateX(-100%);
  transition: transform var(--timing-slow) var(--ease-sophisticated);
  z-index: 2;
}

.image-reveal.in-view::before {
  transform: translateX(100%);
}

.image-reveal.in-view img {
  transform: scale(1);
}
```

## Loading Animations

### Luxury Loading Spinner
```css
.luxury-spinner {
  width: 60px;
  height: 60px;
  border: 3px solid rgba(212, 175, 55, 0.2);
  border-top: 3px solid var(--color-gold);
  border-radius: 50%;
  animation: luxury-spin var(--timing-slow) linear infinite;
  position: relative;
}

.luxury-spinner::before {
  content: '';
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 50%;
  animation: luxury-spin calc(var(--timing-slow) * 2) linear infinite reverse;
}

@keyframes luxury-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### Skeleton Loading Animation
```css
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading var(--timing-slow) ease-in-out infinite;
  border-radius: 0.5rem;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-text {
  height: 1rem;
  margin-bottom: 0.5rem;
}

.skeleton-text:last-child {
  width: 60%;
}

.skeleton-image {
  height: 200px;
  margin-bottom: 1rem;
}
```

### Progressive Content Loading
```css
.content-loader {
  opacity: 0;
  transform: translateY(20px);
  animation: content-fade-in var(--timing-medium) var(--ease-elegant) forwards;
}

.content-loader:nth-child(1) { animation-delay: 0.1s; }
.content-loader:nth-child(2) { animation-delay: 0.2s; }
.content-loader:nth-child(3) { animation-delay: 0.3s; }

@keyframes content-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Modal & Overlay Animations

### Elegant Modal Entrance
```css
.modal-overlay {
  opacity: 0;
  visibility: hidden;
  transition: 
    opacity var(--timing-medium) var(--ease-smooth),
    visibility var(--timing-medium) var(--ease-smooth);
  backdrop-filter: blur(0px);
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
  backdrop-filter: blur(20px);
}

.modal {
  transform: scale(0.8) translateY(50px);
  opacity: 0;
  transition: 
    transform var(--timing-medium) var(--ease-sophisticated),
    opacity var(--timing-medium) var(--ease-sophisticated);
}

.modal-overlay.active .modal {
  transform: scale(1) translateY(0);
  opacity: 1;
}
```

### Slide-in Panels
```css
.slide-panel {
  transform: translateX(100%);
  transition: transform var(--timing-medium) var(--ease-sophisticated);
}

.slide-panel.active {
  transform: translateX(0);
}

/* From bottom variant */
.slide-up {
  transform: translateY(100%);
  transition: transform var(--timing-medium) var(--ease-sophisticated);
}

.slide-up.active {
  transform: translateY(0);
}
```

## Form Interactions

### Focus Animations
```css
.form-input {
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: 
    border-color var(--timing-fast) var(--ease-smooth),
    box-shadow var(--timing-fast) var(--ease-smooth),
    background var(--timing-fast) var(--ease-smooth);
}

.form-input:focus {
  border-color: var(--color-gold);
  box-shadow: 
    0 0 0 3px rgba(212, 175, 55, 0.2),
    0 4px 20px rgba(212, 175, 55, 0.1);
  background: rgba(255, 255, 255, 0.08);
}

/* Floating label animation */
.floating-label .form-label {
  transform: translateY(0);
  transition: 
    transform var(--timing-fast) var(--ease-smooth),
    font-size var(--timing-fast) var(--ease-smooth),
    color var(--timing-fast) var(--ease-smooth);
}

.floating-label .form-input:focus + .form-label,
.floating-label .form-input:not(:placeholder-shown) + .form-label {
  transform: translateY(-1.5rem);
  font-size: var(--font-size-xs);
  color: var(--color-gold);
}
```

### Button Press Animations
```css
.btn-press {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: 
    transform var(--timing-fast) var(--ease-smooth),
    box-shadow var(--timing-fast) var(--ease-smooth);
}

.btn-press:active {
  transform: translateY(2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
```

## JavaScript Animation Controllers

### Intersection Observer for Scroll Animations
```javascript
class ScrollAnimations {
  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );
    
    this.init();
  }
  
  init() {
    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-in, .image-reveal, .counter-animate'
    );
    
    animatedElements.forEach(element => {
      this.observer.observe(element);
    });
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        // Unobserve after animation to improve performance
        this.observer.unobserve(entry.target);
      }
    });
  }
}

// Initialize scroll animations
const scrollAnimations = new ScrollAnimations();
```

### Smooth Scroll Implementation
```javascript
class SmoothScroll {
  constructor() {
    this.bindEvents();
  }
  
  bindEvents() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

const smoothScroll = new SmoothScroll();
```

### Parallax Controller
```javascript
class ParallaxController {
  constructor() {
    this.parallaxElements = document.querySelectorAll('[data-parallax]');
    this.init();
  }
  
  init() {
    if (this.parallaxElements.length > 0) {
      window.addEventListener('scroll', 
        this.throttle(this.updateParallax.bind(this), 16)
      );
    }
  }
  
  updateParallax() {
    const scrollTop = window.pageYOffset;
    
    this.parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(scrollTop * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
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
    }
  }
}

const parallaxController = new ParallaxController();
```

## Performance Optimization

### GPU Acceleration
```css
/* Force GPU acceleration for smooth animations */
.animate-gpu {
  transform: translateZ(0);
  will-change: transform, opacity;
}

/* Remove will-change after animation completes */
.animate-complete {
  will-change: auto;
}
```

### Animation Best Practices
```css
/* Use transform and opacity for 60fps animations */
.performant-animation {
  /* Good - runs on compositor */
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Avoid animating these properties */
.avoid-animation {
  /* Bad - causes layout recalculation */
  /* transition: width 0.3s ease, height 0.3s ease, left 0.3s ease; */
}

/* Container queries preparation */
@container (min-width: 768px) {
  .responsive-animation {
    animation-duration: var(--timing-slow);
  }
}
```

### Reduced Motion Implementation
```javascript
class AccessibleAnimations {
  constructor() {
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.handleReducedMotion();
    this.prefersReducedMotion.addEventListener('change', this.handleReducedMotion.bind(this));
  }
  
  handleReducedMotion() {
    if (this.prefersReducedMotion.matches) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }
}

const accessibleAnimations = new AccessibleAnimations();
```

## Usage Guidelines

### Implementation Checklist
- [ ] Test animations on low-end devices
- [ ] Implement prefers-reduced-motion support
- [ ] Use IntersectionObserver for scroll animations
- [ ] Minimize will-change usage
- [ ] Test with screen readers
- [ ] Ensure keyboard navigation isn't affected
- [ ] Verify 60fps performance
- [ ] Test across different browsers

### Animation Hierarchy
1. **Critical**: Navigation, form interactions, loading states
2. **Enhanced**: Hover effects, scroll reveals, parallax
3. **Decorative**: Particle effects, complex transitions

*Animation system designed for luxury aesthetics with performance and accessibility as core principles*