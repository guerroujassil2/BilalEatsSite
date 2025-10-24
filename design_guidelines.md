# Design Guidelines for Bilal Restaurant Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium hospitality websites (Airbnb for warmth, high-end restaurant sites for sophistication), adapted for Arabic cultural context and traditional restaurant values.

**Core Design Principles**:
- Warmth and hospitality through visual hierarchy
- Authenticity and cultural respect in RTL layout
- Appetite appeal through strategic imagery
- Effortless navigation and information access

---

## Typography System

**Primary Font Family**: 'Tajawal' (Google Fonts) - Modern Arabic font with excellent readability
**Secondary Font**: 'Cairo' for headings - Bold and impactful

**Hierarchy**:
- Hero Title: Bold, 48px desktop / 32px mobile
- Section Headings: SemiBold, 36px desktop / 28px mobile  
- Subheadings: Medium, 24px desktop / 20px mobile
- Body Text: Regular, 18px desktop / 16px mobile
- Menu Items: Medium, 20px
- Prices: SemiBold, 20px with gold accent

---

## Layout System

**RTL Configuration**: Entire layout flows right-to-left for natural Arabic reading

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20
- Section padding: py-20 desktop / py-12 mobile
- Component spacing: gap-8 for grids
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl for text-heavy sections

**Grid Strategy**:
- Menu items: 3 columns desktop / 2 tablet / 1 mobile
- Contact section: 2 columns desktop / 1 mobile (form + info)
- About section: Single column, max-w-3xl centered

---

## Component Library

### Header/Navigation
- Sticky header with subtle shadow on scroll
- Right-aligned logo with Arabic calligraphy treatment
- Left-aligned navigation menu (RTL: القائمة، عن المطعم، اتصل بنا)
- Mobile: Hamburger menu (right side) with slide-in drawer
- Height: h-20, with px-8 horizontal padding

### Hero Section
- Full viewport height (min-h-screen) with gradient overlay
- Large background image showing restaurant ambiance/signature dish
- Centered content with restaurant name and tagline
- Primary CTA button with blurred background (backdrop-blur-md)
- Scroll indicator at bottom

### Menu Section
- Category tabs/filters at top (مقبلات، أطباق رئيسية، مشروبات، حلويات)
- Grid layout with menu cards
- Each card: dish image (if available), name, description (2 lines), price
- Hover effect: subtle lift (translate-y-1) and shadow increase

### About Section
- Two-column layout: restaurant story text + image showcase
- Background: subtle texture or warm tone
- Centered text block with generous line-height (1.8)

### Contact Section
- Split layout: Contact form (right) + Info block (left)
- Info includes: address with map icon, phone with icon, hours with clock icon
- Form fields: name, phone, message with validation states
- Submit button with success feedback

### Footer
- Three-column layout: About snippet, Quick Links, Social Media
- Bottom bar with copyright in Arabic
- Background: darker shade for contrast

---

## Images

**Hero Image**: 
- High-quality photograph of restaurant interior or signature dish platter
- Warm lighting, inviting atmosphere
- Overlaid with dark gradient (opacity 40-50%) for text readability
- Position: Cover, centered

**Menu Images** (Optional per dish):
- Square format (1:1 ratio), 300x300px minimum
- Professional food photography with garnish
- Consistent lighting and styling across all dishes

**About Section Image**:
- Chef preparing food OR interior ambiance shot
- Rectangular format, 800x600px
- Placement: Right side of text content

**Placeholder Strategy**: Use warm-toned placeholders (browns/golds) with food icons for missing images

---

## Interactive Elements

**Navigation Behavior**:
- Smooth scroll to sections (scroll-behavior: smooth)
- Active section highlighting in nav menu
- Sticky header appears after 100px scroll with fade-in

**Back to Top Button**:
- Fixed bottom-left (RTL: bottom-right) position
- Appears after 300px scroll
- Circular button with up arrow icon
- Smooth scroll to top on click

**Form Validation**:
- Real-time validation on blur
- Success/error states with Arabic messages
- Disabled submit until valid

**Animations**: Minimal and purposeful
- Fade-in on scroll for sections (once)
- Subtle hover states on interactive elements
- No distracting continuous animations

---

## Accessibility

**RTL Implementation**:
- `dir="rtl"` on HTML element
- Proper text-align: right for all content
- Mirrored layouts (flex-row-reverse where needed)
- Icon positions adjusted for RTL flow

**Form Accessibility**:
- Proper label associations (Arabic labels)
- Placeholder text in lighter shade
- Error messages in Arabic, clear and helpful
- Focus states with visible outline

**Contrast Requirements**:
- Text on backgrounds meets WCAG AA standards
- Hero text with adequate overlay darkness
- Interactive elements clearly distinguishable

---

## Responsive Breakpoints

- Mobile: < 640px (single column, stacked layout)
- Tablet: 640px - 1024px (2-column where appropriate)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Optimizations**:
- Larger touch targets (min 44px)
- Simplified menu to hamburger
- Stacked contact section
- Reduced padding (py-12 instead of py-20)

---

This design creates a warm, professional, and culturally appropriate experience for Bilal Restaurant that prioritizes visual appeal, easy navigation, and authentic Arabic content presentation.