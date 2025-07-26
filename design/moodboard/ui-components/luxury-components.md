# Luxury UI Component Library

## Overview
A comprehensive collection of elegant UI components designed for luxury interior design portfolios. Each component emphasizes sophistication, subtle interactions, and premium aesthetics while maintaining accessibility and performance.

## Design Principles

### Component Philosophy
- **Subtle Sophistication**: Elegant without being ostentatious
- **Premium Materials**: Visual textures suggesting high-end finishes
- **Consistent Interactions**: Smooth, predictable user experiences
- **Accessibility First**: WCAG AA compliance in all components

## Button Components

### Primary Button (Luxury CTA)
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--gradient-champagne);
  color: var(--color-charcoal);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  font-weight: 500;
  text-decoration: none;
  border: 2px solid var(--color-gold);
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all var(--transition-medium);
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
  letter-spacing: 0.025em;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(212, 175, 55, 0.4);
  background: linear-gradient(135deg, #e8c547 0%, #f7e8b8 50%, #e8c547 100%);
  border-color: #e8c547;
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(212, 175, 55, 0.3);
}

.btn-primary:focus {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
```

### Secondary Button (Elegant Alternative)
```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--color-gold);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  font-weight: 500;
  text-decoration: none;
  border: 2px solid var(--color-gold);
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all var(--transition-medium);
  letter-spacing: 0.025em;
  position: relative;
  overflow: hidden;
}

.btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--gradient-champagne);
  transition: left var(--transition-medium);
  z-index: -1;
}

.btn-secondary:hover::before {
  left: 0;
}

.btn-secondary:hover {
  color: var(--color-charcoal);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(212, 175, 55, 0.2);
}
```

### Ghost Button (Minimal Elegance)
```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: 400;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.btn-ghost:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background: rgba(212, 175, 55, 0.1);
}
```

## Form Components

### Luxury Input Field
```css
.form-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.form-label {
  display: block;
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.form-input {
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
  backdrop-filter: blur(10px);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-gold);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
}

.form-input::placeholder {
  color: var(--text-muted);
  font-style: italic;
}

/* Floating Label Variant */
.floating-label {
  position: relative;
}

.floating-label .form-input {
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
}

.floating-label .form-label {
  position: absolute;
  top: 1rem;
  left: 1.25rem;
  margin: 0;
  transition: all var(--transition-fast);
  pointer-events: none;
  text-transform: none;
}

.floating-label .form-input:focus + .form-label,
.floating-label .form-input:not(:placeholder-shown) + .form-label {
  top: 0.375rem;
  font-size: var(--font-size-xs);
  color: var(--color-gold);
  text-transform: uppercase;
}
```

### Elegant Textarea
```css
.form-textarea {
  width: 100%;
  min-height: 120px;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  resize: vertical;
  transition: all var(--transition-fast);
}

.form-textarea:focus {
  outline: none;
  border-color: var(--color-gold);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
}
```

### Premium Checkbox & Radio
```css
.form-checkbox,
.form-radio {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--text-primary);
}

.form-checkbox input,
.form-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark,
.radiomark {
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all var(--transition-fast);
  position: relative;
}

.checkmark {
  border-radius: 0.25rem;
}

.radiomark {
  border-radius: 50%;
}

.form-checkbox input:checked ~ .checkmark,
.form-radio input:checked ~ .radiomark {
  background: var(--gradient-champagne);
  border-color: var(--color-gold);
}

.checkmark::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 6px;
  width: 6px;
  height: 10px;
  border: solid var(--color-charcoal);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.form-checkbox input:checked ~ .checkmark::after {
  opacity: 1;
}

.radiomark::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  background: var(--color-charcoal);
  border-radius: 50%;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.form-radio input:checked ~ .radiomark::after {
  opacity: 1;
}
```

## Navigation Components

### Luxury Navigation Bar
```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all var(--transition-fast);
}

.navbar-brand {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: -0.025em;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: 400;
  color: var(--text-secondary);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.5rem 0;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-champagne);
  transition: width var(--transition-fast);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-gold);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
```

### Breadcrumb Navigation
```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb-item:not(:last-child)::after {
  content: '/';
  color: var(--text-muted);
  opacity: 0.5;
}

.breadcrumb-link {
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.breadcrumb-link:hover {
  color: var(--color-gold);
}

.breadcrumb-current {
  color: var(--text-primary);
  font-weight: 500;
}
```

## Card Components

### Portfolio Card
```css
.portfolio-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all var(--transition-medium);
  backdrop-filter: blur(10px);
  cursor: pointer;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border-color: rgba(212, 175, 55, 0.3);
}

.portfolio-card-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.portfolio-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.portfolio-card:hover .portfolio-card-image img {
  transform: scale(1.05);
}

.portfolio-card-overlay {
  position: absolute;
  inset: 0;
  background: var(--gradient-dark);
  opacity: 0;
  transition: opacity var(--transition-medium);
  display: flex;
  align-items: center;
  justify-content: center;
}

.portfolio-card:hover .portfolio-card-overlay {
  opacity: 0.8;
}

.portfolio-card-content {
  padding: 1.5rem;
}

.portfolio-card-title {
  font-family: var(--font-display);
  font-size: var(--font-size-h5);
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.portfolio-card-description {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: var(--line-height-base);
  margin-bottom: 1rem;
}

.portfolio-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.portfolio-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(212, 175, 55, 0.2);
  color: var(--color-gold);
  font-size: var(--font-size-xs);
  font-weight: 500;
  border-radius: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Service Card
```css
.service-card {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  transition: all var(--transition-medium);
  backdrop-filter: blur(10px);
}

.service-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(212, 175, 55, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: var(--gradient-champagne);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--color-charcoal);
  transition: transform var(--transition-medium);
}

.service-card:hover .service-icon {
  transform: scale(1.1);
}

.service-title {
  font-family: var(--font-display);
  font-size: var(--font-size-h4);
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.service-description {
  color: var(--text-secondary);
  line-height: var(--line-height-base);
}
```

## Modal Components

### Luxury Modal
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-medium);
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal {
  background: var(--color-graphite);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  max-width: 600px;
  width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  transform: scale(0.9) translateY(20px);
  transition: transform var(--transition-medium);
}

.modal-overlay.active .modal {
  transform: scale(1) translateY(0);
}

.modal-header {
  padding: 2rem 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  font-family: var(--font-display);
  font-size: var(--font-size-h3);
  font-weight: 500;
  color: var(--text-primary);
}

.modal-close {
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

.modal-body {
  padding: 2rem;
}
```

## Implementation Guidelines

### Component Usage
```html
<!-- Primary Button Example -->
<button class="btn-primary">
  <i class="fas fa-arrow-right"></i>
  View Portfolio
</button>

<!-- Form Group Example -->
<div class="form-group floating-label">
  <input type="text" class="form-input" placeholder=" " required>
  <label class="form-label">Your Name</label>
</div>

<!-- Portfolio Card Example -->
<div class="portfolio-card">
  <div class="portfolio-card-image">
    <img src="project-image.jpg" alt="Modern Penthouse">
    <div class="portfolio-card-overlay">
      <button class="btn-ghost">View Details</button>
    </div>
  </div>
  <div class="portfolio-card-content">
    <h3 class="portfolio-card-title">Modern Penthouse</h3>
    <p class="portfolio-card-description">Sophisticated urban living space</p>
    <div class="portfolio-card-tags">
      <span class="portfolio-tag">Modern</span>
      <span class="portfolio-tag">Luxury</span>
    </div>
  </div>
</div>
```

### Accessibility Features
- Focus indicators on all interactive elements
- ARIA labels and roles where appropriate
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG AA)

### Performance Considerations
- CSS custom properties for easy theming
- Hardware-accelerated animations using transform and opacity
- Efficient selectors and minimal repaints
- Lazy loading for non-critical components

*Component library designed for luxury aesthetics with performance and accessibility in mind*