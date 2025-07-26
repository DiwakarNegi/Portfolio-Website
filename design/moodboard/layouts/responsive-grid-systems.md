# Layout & Grid Systems for Luxury Interior Design Portfolio

## Overview
Sophisticated layout systems designed to showcase interior design work with elegant spacing, responsive grids, and purposeful white space that enhances rather than competes with portfolio content.

## Design Philosophy

### Layout Principles
- **Generous White Space**: Breathing room that suggests luxury and sophistication
- **Visual Hierarchy**: Clear content prioritization through strategic spacing
- **Golden Ratio**: Mathematical harmony in proportions and layouts
- **Mobile-First**: Progressive enhancement from touch devices to desktop

### Grid Philosophy
- **Asymmetrical Balance**: Dynamic layouts that feel organic yet structured
- **Content-Driven**: Grid adapts to content needs, not rigid constraints
- **Performance Focus**: Efficient CSS Grid and Flexbox implementations
- **Accessibility**: Logical reading order and keyboard navigation

## Base Grid System

### CSS Grid Foundation
```css
:root {
  /* Grid Breakpoints */
  --breakpoint-xs: 480px;
  --breakpoint-sm: 768px;
  --breakpoint-md: 1024px;
  --breakpoint-lg: 1200px;
  --breakpoint-xl: 1440px;
  --breakpoint-xxl: 1920px;
  
  /* Container Widths */
  --container-xs: 100%;
  --container-sm: 720px;
  --container-md: 960px;
  --container-lg: 1140px;
  --container-xl: 1320px;
  --container-xxl: 1600px;
  
  /* Grid Gaps */
  --gap-xs: 1rem;
  --gap-sm: 1.5rem;
  --gap-md: 2rem;
  --gap-lg: 3rem;
  --gap-xl: 4rem;
  
  /* Section Spacing */
  --section-padding-mobile: 4rem 1rem;
  --section-padding-tablet: 6rem 2rem;
  --section-padding-desktop: 8rem 0;
  
  /* Golden Ratio Spacing */
  --ratio-phi: 1.618;
  --space-xs: 0.5rem;    /* 8px */
  --space-sm: 0.75rem;   /* 12px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.618rem;  /* ~26px - Golden ratio */
  --space-xl: 2.618rem;  /* ~42px - φ² */
  --space-xxl: 4.236rem; /* ~68px - φ³ */
}

/* Responsive Container */
.container {
  width: 100%;
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-lg);
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 0 var(--space-xl);
  }
}

/* Fluid Container for Full-Width Sections */
.container-fluid {
  width: 100%;
  padding: 0 var(--space-md);
}
```

### Responsive Grid Classes
```css
/* Base Grid */
.grid {
  display: grid;
  gap: var(--gap-md);
}

/* Column Templates */
.grid-1 { grid-template-columns: 1fr; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }
.grid-auto { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }

/* Responsive Grid Variations */
@media (max-width: 767px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid-3,
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Gap Modifiers */
.gap-xs { gap: var(--gap-xs); }
.gap-sm { gap: var(--gap-sm); }
.gap-md { gap: var(--gap-md); }
.gap-lg { gap: var(--gap-lg); }
.gap-xl { gap: var(--gap-xl); }
```

## Specialized Portfolio Layouts

### Hero Section Layout
```css
.hero-layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  align-items: center;
  text-align: center;
  padding: 0 var(--space-lg);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
}

/* Two-Column Hero Variant */
.hero-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--gap-xl);
  min-height: 100vh;
  padding: 0 var(--space-xl);
}

@media (max-width: 1023px) {
  .hero-split {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--gap-lg);
  }
}
```

### Portfolio Grid Layouts

#### Masonry-Style Portfolio
```css
.portfolio-masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--gap-lg);
  align-items: start;
}

.portfolio-masonry .portfolio-item {
  break-inside: avoid;
  margin-bottom: var(--gap-md);
}

/* Enhanced Masonry with CSS Subgrid (when supported) */
@supports (grid-template-rows: subgrid) {
  .portfolio-masonry {
    grid-template-rows: masonry;
  }
}
```

#### Featured + Grid Layout
```css
.portfolio-featured {
  display: grid;
  grid-template-areas: 
    "featured featured"
    "item1 item2"
    "item3 item4";
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-lg);
}

.portfolio-featured .featured {
  grid-area: featured;
  aspect-ratio: 16/9;
}

.portfolio-featured .item:nth-child(2) { grid-area: item1; }
.portfolio-featured .item:nth-child(3) { grid-area: item2; }
.portfolio-featured .item:nth-child(4) { grid-area: item3; }
.portfolio-featured .item:nth-child(5) { grid-area: item4; }

@media (max-width: 1023px) {
  .portfolio-featured {
    grid-template-areas: 
      "featured"
      "item1"
      "item2"
      "item3"
      "item4";
    grid-template-columns: 1fr;
  }
}
```

#### Asymmetrical Portfolio Grid
```css
.portfolio-asymmetric {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 300px 200px 250px;
  gap: var(--gap-md);
  height: 750px;
}

.portfolio-asymmetric .item:nth-child(1) {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.portfolio-asymmetric .item:nth-child(2) {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
}

.portfolio-asymmetric .item:nth-child(3) {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
}

.portfolio-asymmetric .item:nth-child(4) {
  grid-column: 3 / 4;
  grid-row: 2 / 4;
}

@media (max-width: 1023px) {
  .portfolio-asymmetric {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 250px);
    height: auto;
  }
  
  .portfolio-asymmetric .item {
    grid-column: 1 / 2 !important;
    grid-row: auto !important;
  }
}
```

### Service Section Layouts

#### Three-Column Services
```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-xl);
  padding: var(--space-xxl) 0;
}

@media (max-width: 1023px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap-lg);
  }
}

@media (max-width: 767px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: var(--gap-md);
  }
}
```

#### Services with Feature
```css
.services-featured {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--gap-xl);
  align-items: center;
}

.services-featured .feature-content {
  padding: var(--space-xl);
}

.services-featured .services-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-lg);
}

@media (max-width: 1023px) {
  .services-featured {
    grid-template-columns: 1fr;
  }
  
  .services-featured .services-list {
    grid-template-columns: 1fr;
  }
}
```

## Content Layouts

### Article/Blog Layout
```css
.article-layout {
  display: grid;
  grid-template-columns: 1fr min(70ch, 100%) 1fr;
  gap: var(--gap-md);
}

.article-layout > * {
  grid-column: 2;
}

.article-layout .full-width {
  grid-column: 1 / -1;
}

.article-layout .wide {
  grid-column: 1 / -1;
  max-width: 1200px;
  margin: 0 auto;
}

/* Sidebar Layout Variant */
.article-sidebar {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--gap-xl);
  max-width: var(--container-lg);
  margin: 0 auto;
}

@media (max-width: 1023px) {
  .article-sidebar {
    grid-template-columns: 1fr;
  }
}
```

### Contact Section Layout
```css
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-xl);
  align-items: start;
}

.contact-info {
  padding: var(--space-xl);
}

.contact-form {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: var(--space-xl);
  backdrop-filter: blur(10px);
}

@media (max-width: 1023px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}
```

## Responsive Breakpoint System

### Breakpoint Mixins (SCSS)
```scss
// Breakpoint mixins for consistent responsive design
@mixin mobile-only {
  @media (max-width: 767px) {
    @content;
  }
}

@mixin tablet-up {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin desktop-up {
  @media (min-width: 1024px) {
    @content;
  }
}

@mixin large-up {
  @media (min-width: 1200px) {
    @content;
  }
}

@mixin xl-up {
  @media (min-width: 1440px) {
    @content;
  }
}

// Usage example
.portfolio-grid {
  grid-template-columns: 1fr;
  
  @include tablet-up {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @include desktop-up {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### CSS Custom Media Queries (Future)
```css
@custom-media --mobile (max-width: 767px);
@custom-media --tablet (min-width: 768px) and (max-width: 1023px);
@custom-media --desktop (min-width: 1024px);
@custom-media --large (min-width: 1200px);

/* Usage (when supported) */
@media (--mobile) {
  .grid-responsive {
    grid-template-columns: 1fr;
  }
}
```

## Spacing System

### Consistent Spacing Scale
```css
/* Spacing utilities based on golden ratio */
.m-0 { margin: 0; }
.m-xs { margin: var(--space-xs); }
.m-sm { margin: var(--space-sm); }
.m-md { margin: var(--space-md); }
.m-lg { margin: var(--space-lg); }
.m-xl { margin: var(--space-xl); }
.m-xxl { margin: var(--space-xxl); }

/* Directional spacing */
.mt-lg { margin-top: var(--space-lg); }
.mb-lg { margin-bottom: var(--space-lg); }
.ml-lg { margin-left: var(--space-lg); }
.mr-lg { margin-right: var(--space-lg); }

/* Padding utilities */
.p-0 { padding: 0; }
.p-xs { padding: var(--space-xs); }
.p-sm { padding: var(--space-sm); }
.p-md { padding: var(--space-md); }
.p-lg { padding: var(--space-lg); }
.p-xl { padding: var(--space-xl); }
.p-xxl { padding: var(--space-xxl); }

/* Section spacing */
.section {
  padding: var(--section-padding-mobile);
}

@media (min-width: 768px) {
  .section {
    padding: var(--section-padding-tablet);
  }
}

@media (min-width: 1024px) {
  .section {
    padding: var(--section-padding-desktop);
  }
}
```

## Layout Examples

### Complete Homepage Layout
```html
<div class="homepage-layout">
  <!-- Hero Section -->
  <section class="hero-layout">
    <div class="hero-content">
      <h1>Luxury Interior Design</h1>
      <p>Creating sophisticated spaces</p>
      <button class="btn-primary">View Portfolio</button>
    </div>
  </section>
  
  <!-- Services Section -->
  <section class="section">
    <div class="container">
      <div class="services-grid">
        <div class="service-card">Residential Design</div>
        <div class="service-card">Commercial Spaces</div>
        <div class="service-card">Luxury Hospitality</div>
      </div>
    </div>
  </section>
  
  <!-- Portfolio Section -->
  <section class="section">
    <div class="container">
      <div class="portfolio-featured">
        <div class="featured">Featured Project</div>
        <div class="item">Project 1</div>
        <div class="item">Project 2</div>
        <div class="item">Project 3</div>
        <div class="item">Project 4</div>
      </div>
    </div>
  </section>
  
  <!-- Contact Section -->
  <section class="section">
    <div class="container">
      <div class="contact-layout">
        <div class="contact-info">Contact Information</div>
        <div class="contact-form">Contact Form</div>
      </div>
    </div>
  </section>
</div>
```

## Performance Considerations

### CSS Grid Optimization
- Use `grid-auto-rows: max-content` for dynamic content
- Implement `contain: layout style` for grid containers
- Use `will-change: transform` sparingly for animated grids
- Prefer CSS Grid over Flexbox for two-dimensional layouts

### Responsive Images in Grids
```css
.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;
}

/* Responsive aspect ratios */
@media (max-width: 767px) {
  .grid-image {
    aspect-ratio: 16/9;
  }
}
```

### Loading States
```css
.grid-loading {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--gap-md);
}

.skeleton-item {
  height: 200px;
  background: linear-gradient(90deg, 
    rgba(255,255,255,0.1) 25%, 
    rgba(255,255,255,0.2) 50%, 
    rgba(255,255,255,0.1) 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 0.5rem;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## Accessibility Guidelines

### Layout Accessibility
- Maintain logical reading order in grid layouts
- Use semantic HTML elements for layout structure
- Ensure touch targets are at least 44px × 44px
- Provide sufficient color contrast in all layout areas
- Test keyboard navigation through all layout sections

### Grid Accessibility Best Practices
```css
/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--color-gold);
  color: var(--color-charcoal);
  padding: 8px;
  text-decoration: none;
  border-radius: 0 0 4px 4px;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
}

/* Focus management for grid items */
.grid-item:focus {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}
```

*Layout system designed for luxury aesthetics with responsive excellence and accessibility compliance*