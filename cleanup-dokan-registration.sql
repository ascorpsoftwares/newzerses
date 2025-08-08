-- Clean up Dokan registration settings from database
-- Run these queries in your database

-- Remove Dokan options that might interfere with registration
DELETE FROM wp_options WHERE option_name LIKE 'dokan_%';

-- Remove Dokan user meta that might cause issues
DELETE FROM wp_usermeta WHERE meta_key LIKE 'dokan_%';

-- Ensure WooCommerce registration is enabled
UPDATE wp_options SET option_value = 'yes' WHERE option_name = 'woocommerce_enable_myaccount_registration';

-- Reset any corrupted registration settings
UPDATE wp_options SET option_value = 'yes' WHERE option_name = 'users_can_register';

-- Clean up any Dokan registration pages
UPDATE wp_posts SET post_status = 'trash' WHERE post_name IN ('seller-registration', 'vendor-registration') AND post_type = 'page';