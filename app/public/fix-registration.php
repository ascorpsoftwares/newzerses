<?php
/**
 * Emergency Registration Fix Script
 * Run this once to fix registration after Dokan removal
 */

// Include WordPress
require_once('wp-config.php');
require_once('wp-load.php');

// Clean up Dokan registration settings
delete_option('dokan_general');
delete_option('dokan_selling');
delete_option('dokan_withdraw');
delete_option('dokan_reverse_withdrawal');
delete_option('dokan_page_settings');

// Ensure WooCommerce registration is properly enabled
update_option('woocommerce_enable_myaccount_registration', 'yes');
update_option('users_can_register', '1');

// Remove Dokan user capabilities that might interfere
$users = get_users(array('meta_key' => 'wp_capabilities', 'meta_value' => 'seller'));
foreach($users as $user) {
    $user_obj = new WP_User($user->ID);
    $user_obj->set_role('customer');
}

// Clean up any Dokan registration pages
$dokan_pages = get_posts(array(
    'post_type' => 'page',
    'post_status' => 'any',
    'meta_query' => array(
        array(
            'key' => '_wp_page_template',
            'value' => 'dokan',
            'compare' => 'LIKE'
        )
    )
));

foreach($dokan_pages as $page) {
    wp_delete_post($page->ID, true);
}

echo "Registration fix completed successfully!\n";
echo "- Removed Dokan settings\n";
echo "- Enabled WooCommerce registration\n";
echo "- Reset user roles\n";
echo "- Cleaned up Dokan pages\n";
echo "\nYou can now delete this file: fix-registration.php\n";
?>