# Quick Reference Guide
## Elementor Banner Editing

## 🎯 **What to Change**

### **Current Content** → **New Content**

| Element | Current | New |
|---------|---------|-----|
| **Heading** | "Explore Amazing Fashionable Blazers this Shadi Season" | "Exquisite Handwoven Banarasi Sarees" |
| **Description** | Generic blazer text | "Discover authentic Banarasi sarees crafted with centuries-old techniques. Premium silk, intricate zari work, and timeless elegance for your special occasions." |
| **Button 1** | "Shop Now" | "Shop Banarasi Sarees" |
| **Button 1 Link** | Current link | `/product-category/banarasi-sarees/` |
| **Button 2** | "Learn More" | "View All Sarees" |
| **Button 2 Link** | Current link | `/product-category/sarees/` |

---

## 📝 **Copy-Paste Content**

### **Heading Text:**
```
Exquisite Handwoven Banarasi Sarees
```

### **Description Text:**
```
Discover authentic Banarasi sarees crafted with centuries-old techniques. Premium silk, intricate zari work, and timeless elegance for your special occasions.
```

### **Button 1:**
- **Text**: `Shop Banarasi Sarees`
- **Link**: `/product-category/banarasi-sarees/`
- **CSS Class**: `banarasi-primary-btn`

### **Button 2:**
- **Text**: `View All Sarees`
- **Link**: `/product-category/sarees/`
- **CSS Class**: `banarasi-secondary-btn`

---

## 🎨 **CSS Classes to Add**

### **Section CSS Class:**
```
banarasi-banner-section
```

### **Button Container CSS Class:**
```
banarasi-banner-buttons
```

---

## 🔗 **URLs to Create First**

Before editing the banner, create these WooCommerce categories:

1. **Go to**: WooCommerce → Products → Categories
2. **Create**:
   - Name: `Banarasi Sarees`, Slug: `banarasi-sarees`
   - Name: `Sarees`, Slug: `sarees`

---

## ✅ **Testing Checklist**

After making changes:
- [ ] Heading shows "Exquisite Handwoven Banarasi Sarees"
- [ ] Description mentions heritage and craftsmanship
- [ ] First button says "Shop Banarasi Sarees"
- [ ] Second button says "View All Sarees"
- [ ] Both buttons work and go to correct pages
- [ ] Mobile layout looks good
- [ ] No "Learn More" button visible

---

## 🚨 **If Something Goes Wrong**

### **CSS Not Working:**
1. Clear cache (LiteSpeed Cache → Purge All)
2. Check if CSS was added to Woostify style.css
3. Try adding CSS to Elementor section instead

### **Buttons Not Styled:**
1. Add CSS classes to buttons in Elementor
2. Check if custom CSS is loaded
3. Use browser inspector to verify classes

### **Links Don't Work:**
1. Verify WooCommerce categories exist
2. Check category slugs match URLs
3. Test URLs manually in browser

---

## 📱 **Mobile Preview**

Always test in Elementor's mobile preview:
- Text should be readable
- Buttons should stack vertically
- Touch targets should be large enough