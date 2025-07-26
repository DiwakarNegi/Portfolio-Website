# Interior Design Website - Design System Foundation

## Overview
This document serves as the comprehensive design system foundation for the premium interior design company portfolio website, derived from the mood board system.

## Color System

### Luxury Neutral Palettes

#### Warm Luxury
- **Warm White**: `#F5F2ED` - Primary background for warm sections
- **Cream**: `#E8E2D5` - Secondary background, card backgrounds
- **Warm Beige**: `#D4C4A8` - Accent elements, borders
- **Taupe**: `#B8A082` - Text on light backgrounds, subtle elements
- **Warm Brown**: `#8B7355` - Dark text, contrast elements

#### Cool Luxury
- **Pure White**: `#F8F9FA` - Clean backgrounds, minimal designs
- **Light Gray**: `#E9ECEF` - Subtle backgrounds, form fields
- **Silver**: `#CED4DA` - Borders, inactive states
- **Gray**: `#ADB5BD` - Secondary text, muted elements
- **Charcoal**: `#495057` - Primary text, headings

### Accent Colors

#### Metallic Accents
- **Gold**: `#D4AF37` - Primary luxury accent, CTA buttons
- **Silver Metallic**: `#C0C0C0` - Secondary metallic elements
- **Bronze**: `#B87333` - Tertiary metallic, warm accents
- **Rose Gold**: `#E5AA70` - Premium feminine touch
- **Gunmetal**: `#36454F` - Modern industrial elements

#### Jewel Tones
- **Sapphire Blue**: `#0F4C75` - Trust, professionalism
- **Emerald Green**: `#2E8B57` - Growth, luxury nature
- **Amethyst Purple**: `#800080` - Creativity, uniqueness
- **Ruby Red**: `#B22222` - Passion, bold statements
- **Amber Orange**: `#FF8C00` - Energy, warmth

## Typography System

### Font Stack
```css
/* Elegant Serif Headers */
--font-serif-elegant: 'Playfair Display', serif;
--font-serif-classic: 'Cormorant Garamond', serif;

/* Clean Sans-serif Body */
--font-sans-modern: 'Poppins', sans-serif;
```

### Typography Scale
```css
--font-size-xl: 3.5rem;    /* Hero headlines */
--font-size-lg: 2.5rem;    /* Section titles */
--font-size-md: 1.5rem;    /* Subsection headers */
--font-size-base: 1rem;    /* Body text */
--font-size-sm: 0.875rem;  /* Small text, captions */
```

### Font Pairing Recommendations
1. **Playfair Display + Poppins**: Luxury elegance with modern readability
2. **Cormorant Garamond + Poppins**: Classic sophistication with clean functionality

## Layout Patterns

### Hero Section Layouts
1. **Split Screen Hero**: Text content on left, hero image on right
2. **Full Screen Overlay**: Background image with centered content overlay
3. **Minimal Typography**: Clean typography-focused design with accent lines

### Portfolio Gallery Layouts
1. **Masonry Grid**: Dynamic grid with varying image sizes for visual interest
2. **Uniform Grid**: Consistent spacing and proportions for clean presentation

## Component Library

### Button Styles

#### Primary Buttons
```css
.btn-luxury {
    background: linear-gradient(135deg, #D4AF37, #B87333);
    color: white;
    padding: 14px 28px;
    border-radius: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
```

#### Secondary Buttons
```css
.btn-outline {
    background: transparent;
    color: #D4AF37;
    border: 2px solid #D4AF37;
    padding: 12px 26px;
    border-radius: 8px;
}
```

### Card Components

#### Luxury Project Card
- Background overlay on hover
- Metallic accent elements
- Typography hierarchy with serif headers
- Subtle shadows and glassmorphism effects

#### Minimal Project Card
- Clean lines and generous white space
- Subtle border treatments
- Sans-serif typography
- Understated hover effects

### Form Elements

#### Luxury Contact Form
- Glassmorphism background
- Gold accent focus states
- Elegant typography
- Premium styling with backdrop blur

## Brand Personality Guidelines

### Luxury & Sophistication
- **Colors**: Gold metallics, rich jewel tones
- **Typography**: Elegant serif headers
- **Elements**: High contrast, premium materials showcase
- **Mood**: Opulent, timeless, exclusive

### Modern & Minimalist
- **Colors**: Monochromatic schemes, cool neutrals
- **Typography**: Clean sans-serif
- **Elements**: Generous white space, geometric layouts
- **Mood**: Clean, functional, sophisticated

### Warm & Inviting
- **Colors**: Warm neutral palettes
- **Typography**: Friendly, approachable fonts
- **Elements**: Organic shapes, natural textures
- **Mood**: Cozy, welcoming, lived-in luxury

### Bold & Dramatic
- **Colors**: High contrast combinations
- **Typography**: Bold display fonts
- **Elements**: Dynamic layouts, strong hierarchy
- **Mood**: Statement-making, artistic, confident

## Implementation Guidelines

### CSS Custom Properties
```css
:root {
    /* Color System */
    --id-warm-white: #F5F2ED;
    --id-cream: #E8E2D5;
    --id-warm-beige: #D4C4A8;
    --id-taupe: #B8A082;
    --id-warm-brown: #8B7355;
    
    --id-pure-white: #F8F9FA;
    --id-light-gray: #E9ECEF;
    --id-silver: #CED4DA;
    --id-gray: #ADB5BD;
    --id-charcoal: #495057;
    
    --id-gold: #D4AF37;
    --id-silver-metallic: #C0C0C0;
    --id-bronze: #B87333;
    --id-rose-gold: #E5AA70;
    --id-gunmetal: #36454F;
    
    --id-sapphire: #0F4C75;
    --id-emerald: #2E8B57;
    --id-amethyst: #800080;
    --id-ruby: #B22222;
    --id-amber: #FF8C00;
    
    /* Typography */
    --font-serif-elegant: 'Playfair Display', serif;
    --font-serif-classic: 'Cormorant Garamond', serif;
    --font-sans-modern: 'Poppins', sans-serif;
    
    /* Gradients */
    --luxury-gradient: linear-gradient(135deg, #D4AF37, #B87333);
    --metallic-gold: linear-gradient(135deg, #FFD700, #FFA500);
    --warm-neutral-gradient: linear-gradient(135deg, #F5F2ED, #B8A082);
    --cool-neutral-gradient: linear-gradient(135deg, #F8F9FA, #495057);
}
```

### Spacing System
```css
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
--spacing-xl: 48px;
--spacing-xxl: 64px;

--container-max-width: 1200px;
--section-padding: 120px 0;
--card-border-radius: 16px;
```

### Animation & Transitions
```css
--transition-fast: 0.3s ease;
--transition-medium: 0.5s ease;
--transition-slow: 0.8s ease;

--shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.2);
--shadow-md: 0 8px 30px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.4);
--shadow-glow: 0 0 30px rgba(212, 175, 55, 0.4);
```

## Usage Recommendations

### When to Use Each Color Palette
- **Warm Luxury**: Residential projects, cozy commercial spaces
- **Cool Luxury**: Modern offices, minimalist residences
- **Metallic Accents**: Premium elements, call-to-action buttons
- **Jewel Tones**: Statement pieces, accent walls, feature elements

### Typography Hierarchy
1. **Hero Headlines**: Playfair Display, 3.5rem, luxury gradient color
2. **Section Titles**: Playfair Display, 2.5rem, gold accent
3. **Subsection Headers**: Cormorant Garamond, 1.5rem, charcoal
4. **Body Text**: Poppins, 1rem, gray
5. **Small Text**: Poppins, 0.875rem, muted gray

### Component Usage
- **Luxury Cards**: High-end residential projects, premium services
- **Minimal Cards**: Commercial projects, clean modern designs
- **Luxury Forms**: Contact forms, consultation requests
- **Button Hierarchy**: Primary (luxury gradient), Secondary (outline), Tertiary (ghost)

## Accessibility Considerations
- All color combinations meet WCAG AA contrast requirements
- Font sizes scale appropriately for different screen sizes
- Interactive elements have clear focus states
- Color is not the only means of conveying information

## Technical Implementation
- Use CSS custom properties for easy theme switching
- Implement responsive design with mobile-first approach
- Utilize modern CSS features (Grid, Flexbox, backdrop-filter)
- Optimize for performance with efficient animations
- Ensure cross-browser compatibility

This design system foundation provides a comprehensive framework for creating a cohesive, premium interior design website that reflects sophistication, luxury, and professional excellence.