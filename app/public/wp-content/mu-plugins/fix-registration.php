<?php
/**
 * Fix registration after Dokan removal
 * This file removes Dokan registration hooks and restores default WooCommerce registration
 */

// Remove Dokan registration hooks
add_action('init', function() {
    // Remove Dokan registration form fields
    remove_action('woocommerce_register_form', 'dokan_seller_reg_form_fields');
    remove_action('woocommerce_created_customer', 'dokan_new_vendor_created');
    
    // Remove Dokan registration validation
    remove_filter('woocommerce_registration_errors', 'dokan_validate_registration');
    
    // Ensure default customer role for new registrations
    add_filter('woocommerce_new_customer_data', function($customer_data) {
        $customer_data['role'] = 'customer';
        return $customer_data;
    });
    
    // Fix registration process
    add_action('woocommerce_created_customer', function($customer_id) {
        // Ensure user has customer role
        $user = new WP_User($customer_id);
        $user->set_role('customer');
    }, 5);
}, 1);

// Clean up any remaining Dokan registration data
add_action('wp_loaded', function() {
    if (isset($_POST['register']) && isset($_POST['email'])) {
        // Remove any Dokan-specific POST data that might interfere
        unset($_POST['role']);
        unset($_POST['vendor_registration']);
    }
});