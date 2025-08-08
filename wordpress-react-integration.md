# WordPress + React Integration Guide

## Method 1: Custom Page Template

1. **Create a custom page template** in your WordPress theme:

```php
<?php
/*
Template Name: Portfolio Page
*/
get_header(); ?>

<div id="react-portfolio-root"></div>

<script src="<?php echo get_template_directory_uri(); ?>/assets/portfolio.js"></script>
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/portfolio.css">

<?php get_footer(); ?>
```

2. **Upload React build files** to your theme's assets folder
3. **Create a new page** in WordPress and assign the "Portfolio Page" template

## Method 2: WordPress Plugin Approach

Create a simple plugin to load your React app:

```php
<?php
/*
Plugin Name: Krishna Portfolio
Description: Loads React portfolio on specific pages
*/

function load_portfolio_assets() {
    if (is_page('portfolio')) {
        wp_enqueue_script('portfolio-js', plugin_dir_url(__FILE__) . 'dist/assets/index.js', array(), '1.0.0', true);
        wp_enqueue_style('portfolio-css', plugin_dir_url(__FILE__) . 'dist/assets/index.css', array(), '1.0.0');
    }
}
add_action('wp_enqueue_scripts', 'load_portfolio_assets');

function portfolio_shortcode() {
    return '<div id="root"></div>';
}
add_shortcode('portfolio', 'portfolio_shortcode');
?>
```

## Method 3: Replace Homepage

If you want React as your main site:

1. **Backup your current WordPress site**
2. **Upload React build to root directory**
3. **Rename WordPress to subfolder** (like `/blog/`)
4. **Update .htaccess** to handle routing