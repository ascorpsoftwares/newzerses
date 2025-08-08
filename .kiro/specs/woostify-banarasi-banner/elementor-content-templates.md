# Elementor Content Templates - Banarasi Saree Banner

## Template 1: Heritage Focus

### Heading Widget Content:
**Text**: `Exquisite Handwoven Banarasi Sarees`
**HTML Tag**: H1
**Size**: Large (48px on desktop, responsive)
**Color**: #2b2b2b (Woostify heading color)
**Typography**: Poppins, Bold (700)

### Text Editor Widget Content:
```
Discover authentic Banarasi sarees crafted with centuries-old techniques. Premium silk, intricate zari work, and timeless elegance for your special occasions.
```
**Color**: #8f8f8f (Woostify text color)
**Typography**: Poppins, Regular (400)
**Size**: 16px desktop, 14px mobile

### Button Widget 1 (Primary):
**Text**: `Shop Banarasi Sarees`
**Link**: `/product-category/banarasi-sarees/`
**Style**: Primary
**Background Color**: #1346af (Woostify primary)
**Text Color**: #ffffff
**Border Radius**: 50px (Woostify default)
**Size**: Medium
**Icon**: None (or shopping bag icon)

### Button Widget 2 (Secondary):
**Text**: `View All Sarees`
**Link**: `/product-category/sarees/`
**Style**: Outline
**Background Color**: Transparent
**Text Color**: #2b2b2b
**Border Color**: #2b2b2b
**Border Width**: 2px
**Border Radius**: 50px
**Size**: Medium

---

## Template 2: Quality Focus

### Heading Widget Content:
**Text**: `Premium Silk Banarasi Sarees - Handwoven Perfection`
**HTML Tag**: H1
**Size**: Large
**Color**: #2b2b2b
**Typography**: Poppins, Bold (700)

### Text Editor Widget Content:
```
Indulge in the luxury of pure silk Banarasi sarees. Each piece represents the pinnacle of Indian textile artistry with unmatched quality and elegance.
```
**Color**: #8f8f8f
**Typography**: Poppins, Regular (400)

### Buttons: Same as Template 1

---

## Template 3: Occasion Focus

### Heading Widget Content:
**Text**: `Bridal Banarasi Sarees - Your Special Day Deserves the Best`
**HTML Tag**: H1
**Size**: Large
**Color**: #2b2b2b
**Typography**: Poppins, Bold (700)

### Text Editor Widget Content:
```
Make your wedding day unforgettable with our stunning collection of bridal Banarasi sarees. Traditional designs meet contemporary elegance for the modern bride.
```
**Color**: #8f8f8f
**Typography**: Poppins, Regular (400)

### Buttons: Same as Template 1

---

## Elementor Section Settings

### Section Layout:
**Structure**: 2 columns (50% / 50%)
**Column 1**: Content (heading, text, buttons)
**Column 2**: Image
**Vertical Align**: Middle
**Content Width**: Boxed
**Width**: 1200px (Woostify container width)

### Section Style:
**Background Type**: Classic or Gradient
**Background Color**: #f8f8f8 (light gray) or custom gradient
**Padding**: 
- Desktop: 80px top, 80px bottom
- Tablet: 60px top, 60px bottom  
- Mobile: 40px top, 40px bottom

### Responsive Settings:
**Desktop**: Side-by-side layout
**Tablet**: Stack columns, content first
**Mobile**: Stack columns, content first

---

## Custom CSS for Dual Buttons

Add this CSS to Elementor section or Woostify Customizer:

```css
/* Dual Button Layout for Banarasi Banner */
.banarasi-banner-buttons {
    display: flex;
    gap: 20px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.banarasi-banner-buttons .elementor-button {
    flex: 0 1 auto;
    min-width: 180px;
}

/* Primary Button Enhancement */
.banarasi-primary-btn.elementor-button {
    background-color: #1346af;
    border-color: #1346af;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.banarasi-primary-btn.elementor-button:hover {
    background-color: #3a3a3a;
    border-color: #3a3a3a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(19, 70, 175, 0.3);
}

/* Secondary Button Enhancement */
.banarasi-secondary-btn.elementor-button {
    background-color: transparent;
    color: #2b2b2b;
    border: 2px solid #2b2b2b;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.banarasi-secondary-btn.elementor-button:hover {
    background-color: #2b2b2b;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(43, 43, 43, 0.3);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .banarasi-banner-buttons {
        flex-direction: column;
        gap: 15px;
        margin-top: 25px;
    }
    
    .banarasi-banner-buttons .elementor-button {
        width: 100%;
        min-width: auto;
        padding: 15px 30px;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .banarasi-banner-buttons .elementor-button {
        padding: 12px 25px;
        font-size: 13px;
    }
}

/* Luxury Typography Enhancement */
.banarasi-banner-section .elementor-heading-title {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.banarasi-banner-section .elementor-text-editor {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 30px;
}

@media (max-width: 768px) {
    .banarasi-banner-section .elementor-text-editor {
        font-size: 16px;
        margin-bottom: 25px;
    }
}
```

---

## Image Requirements

### Banner Image Specifications:
**Dimensions**: 800x600px minimum (1200x900px recommended)
**Format**: WebP with JPG fallback
**File Size**: Under 200KB optimized
**Content**: High-quality Banarasi saree showcasing:
- Intricate zari work details
- Rich silk texture
- Traditional patterns
- Elegant draping or model wearing

### Alt Text Examples:
- "Premium handwoven Banarasi saree with intricate gold zari work"
- "Elegant silk Banarasi saree showcasing traditional craftsmanship"
- "Bridal Banarasi saree with detailed embroidery and rich silk fabric"

---

## Implementation Steps

### Step 1: Access Elementor Editor
1. Go to WordPress Admin → Pages
2. Find homepage (usually "Home" or front page)
3. Click "Edit with Elementor"

### Step 2: Locate Banner Section
1. Find the section with "Explore Amazing Fashionable Blazers"
2. Click on the section to select it
3. Note the current structure and widgets

### Step 3: Update Content
1. **Heading Widget**: Replace text with Banarasi Saree focused title
2. **Text Widget**: Update description with heritage/quality messaging
3. **Button Widgets**: Update text and links for e-commerce focus
4. **Image Widget**: Replace with high-quality Banarasi saree image

### Step 4: Apply Custom CSS
1. Add custom CSS to section advanced settings
2. Or add to Woostify Customizer → Additional CSS
3. Test responsive behavior

### Step 5: Test and Optimize
1. Preview changes in Elementor
2. Test on different devices
3. Verify button links work correctly
4. Check loading speed and performance