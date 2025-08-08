# Current Banner Configuration Backup

## Date: 2025-01-08

## Theme Information
- **Theme**: Ostore WordPress theme
- **Banner Function**: `ostore_home_slider` in `wp-content/themes/ostore/themerelic/hooks/ostore-hook.php`
- **Lines**: 208-280

## Current Theme Customizer Settings
Based on the code analysis, the current slider uses these settings:

### Slider Settings
- **Enable Slider**: `get_theme_mod('ostore_slider_enable', true)` - Default: enabled
- **Slider Category**: `get_theme_mod('ostore_slider_category', null)` - Default: null
- **Number of Slides**: `get_theme_mod('ostore_number_of_slider', 3)` - Default: 3 slides
- **Slider Style**: `get_theme_mod('ostore_slider_style', 'default')` - Default: full width

## Current Banner Structure
The existing banner uses WordPress posts from a specific category with:
- Post title as banner headline
- Post excerpt as banner description (trimmed to 10 words)
- Featured image as banner background
- Single CTA button with text "View Collection" linking to post permalink

## Current Button Implementation
```php
<a href="<?php the_permalink(); ?>" class="btn btn-blue btn-effect">
    <?php echo esc_html__('View Collection','ostore'); ?>
</a>
```

## Files to Monitor for Changes
1. `wp-content/themes/ostore/themerelic/hooks/ostore-hook.php` (main banner function)
2. WordPress posts in the slider category
3. Theme customizer settings
4. Any custom CSS modifications

## Rollback Instructions
To restore the original banner:
1. Restore the original `ostore_home_slider` function in ostore-hook.php
2. Restore original slider posts if modified
3. Reset theme customizer settings to defaults
4. Remove any custom CSS additions

## Original Banner Caption Code
```php
<div id="banner7-caption<?php echo get_the_ID(); ?>" class="banner7-caption nivo-html-caption nivo-caption">
    <div class="timethai"></div>
    <div class="banner7-content slider-<?php echo get_the_ID(); ?>">
        <div class="slide-caption">
            <div class="caption-content">
                <h2 class="animated fadeInDown"><?php the_title(); ?></h2>
                <span class="animated fadeInDown hidden-xs"><?php echo esc_html(wp_trim_words(get_the_excerpt(), 10)); ?></span>
                <a href="<?php the_permalink(); ?>" class="btn btn-blue btn-effect"><?php echo esc_html__('View Collection','ostore'); ?></a>
            </div>
        </div>
    </div>
</div>
```