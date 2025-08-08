# URL Configuration Guide

## Current Button URLs

The banner buttons are currently configured to link to:

1. **Primary Button** ("Shop Banarasi Sarees"): `/product-category/banarasi-sarees/`
2. **Secondary Button** ("View All Sarees"): `/product-category/sarees/`

## WooCommerce Category Setup Required

### Step 1: Create Product Categories

1. **Go to WordPress Admin** → WooCommerce → Products → Categories

2. **Create "Banarasi Sarees" Category**:
   - Name: `Banarasi Sarees`
   - Slug: `banarasi-sarees` (this creates the URL `/product-category/banarasi-sarees/`)
   - Description: Premium handwoven Banarasi sarees collection
   - Parent: None (or under "Sarees" if you prefer hierarchy)

3. **Create "Sarees" Category** (if not exists):
   - Name: `Sarees`
   - Slug: `sarees` (this creates the URL `/product-category/sarees/`)
   - Description: Complete collection of traditional Indian sarees
   - Parent: None

### Step 2: Verify URLs Work

After creating the categories, test these URLs in your browser:
- `https://yoursite.com/product-category/banarasi-sarees/`
- `https://yoursite.com/product-category/sarees/`

### Step 3: Alternative URL Configuration

If you need different URLs, you can modify the banner code in `ostore-hook.php`:

```php
// Current configuration (lines ~270-271):
<a href="<?php echo esc_url(get_site_url() . '/product-category/banarasi-sarees/'); ?>" class="btn btn-primary btn-effect">
<a href="<?php echo esc_url(get_site_url() . '/product-category/sarees/'); ?>" class="btn btn-secondary btn-effect">

// Alternative configurations:

// Option 1: Direct shop page links
<a href="<?php echo esc_url(wc_get_page_permalink('shop')); ?>" class="btn btn-primary btn-effect">

// Option 2: Custom page links
<a href="<?php echo esc_url(get_permalink(get_page_by_path('banarasi-collection'))); ?>" class="btn btn-primary btn-effect">

// Option 3: External links
<a href="https://yoursite.com/custom-banarasi-page/" class="btn btn-primary btn-effect">
```

## URL Testing Checklist

- [ ] `/product-category/banarasi-sarees/` loads correctly
- [ ] `/product-category/sarees/` loads correctly  
- [ ] Categories contain appropriate products
- [ ] Banner buttons link to correct pages
- [ ] Mobile navigation works properly
- [ ] URLs are SEO-friendly

## Troubleshooting

### If URLs Don't Work:
1. **Check Permalinks**: Go to Settings → Permalinks and click "Save Changes"
2. **Verify Category Slugs**: Ensure category slugs match the URLs in the code
3. **Check WooCommerce**: Ensure WooCommerce is active and configured

### If You Need Different URLs:
1. Update the category slugs in WooCommerce
2. Or modify the URLs in the banner code
3. Clear any caching plugins after changes

### Custom URL Structure:
If you prefer a different URL structure (e.g., `/collections/banarasi-sarees/`), you can:
1. Create custom pages instead of using product categories
2. Use WooCommerce shortcodes to display products
3. Update the banner URLs accordingly

## SEO Considerations

- Use descriptive category names and slugs
- Add category descriptions for better SEO
- Ensure categories have relevant products
- Consider breadcrumb navigation
- Add category images for better visual appeal