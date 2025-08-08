<?php
/**
 * Plugin Name: Portfolio Contact Form
 * Description: Handles contact form submissions from React portfolio
 * Version: 1.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Add CORS headers for React app
add_action('init', 'portfolio_handle_preflight');
function portfolio_handle_preflight() {
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        header('Access-Control-Allow-Origin: https://krishnakky.com');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        exit(0);
    }
}

// Register REST API endpoint for contact form
add_action('rest_api_init', function () {
    register_rest_route('contact/v1', '/submit', array(
        'methods' => 'POST',
        'callback' => 'portfolio_handle_contact_form_submission',
        'permission_callback' => '__return_true',
    ));
});

function portfolio_handle_contact_form_submission($request) {
    // Add CORS headers
    header('Access-Control-Allow-Origin: https://krishnakky.com');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');
    
    $parameters = $request->get_json_params();
    
    // Sanitize input
    $name = sanitize_text_field($parameters['name']);
    $email = sanitize_email($parameters['email']);
    $message = sanitize_textarea_field($parameters['message']);
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        return new WP_Error('missing_fields', 'All fields are required', array('status' => 400));
    }
    
    if (!is_email($email)) {
        return new WP_Error('invalid_email', 'Invalid email address', array('status' => 400));
    }
    
    // Prepare email
    $to = 'krishnakky121@gmail.com'; // Your email
    $subject = 'New Contact Form Submission from ' . $name;
    $email_message = "
New contact form submission from your portfolio:

Name: {$name}
Email: {$email}
Message: {$message}

Submitted from: https://krishnakky.com
Time: " . current_time('mysql') . "
";
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: Portfolio Contact <noreply@krishnakky.com>',
        'Reply-To: ' . $email
    );
    
    // Send email
    $sent = wp_mail($to, $subject, $email_message, $headers);
    
    if ($sent) {
        return array(
            'success' => true,
            'message' => 'Thank you! Your message has been sent successfully.'
        );
    } else {
        return new WP_Error('email_failed', 'Failed to send email. Please try again.', array('status' => 500));
    }
}
?>