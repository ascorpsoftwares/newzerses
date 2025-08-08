<?php
/**
 * WordPress Contact Form Handler
 * Add this to your WordPress theme's functions.php or create as a plugin
 */

// Add CORS headers for React app
add_action('init', 'handle_preflight');
function handle_preflight() {
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
        'callback' => 'handle_contact_form_submission',
        'permission_callback' => '__return_true',
    ));
});

function handle_contact_form_submission($request) {
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
    New contact form submission:
    
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
        // Optionally save to database
        global $wpdb;
        $wpdb->insert(
            $wpdb->prefix . 'contact_submissions',
            array(
                'name' => $name,
                'email' => $email,
                'message' => $message,
                'submitted_at' => current_time('mysql')
            )
        );
        
        return array(
            'success' => true,
            'message' => 'Thank you! Your message has been sent successfully.'
        );
    } else {
        return new WP_Error('email_failed', 'Failed to send email', array('status' => 500));
    }
}

// Create database table for contact submissions (optional)
register_activation_hook(__FILE__, 'create_contact_table');
function create_contact_table() {
    global $wpdb;
    
    $table_name = $wpdb->prefix . 'contact_submissions';
    
    $charset_collate = $wpdb->get_charset_collate();
    
    $sql = "CREATE TABLE $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name tinytext NOT NULL,
        email varchar(100) NOT NULL,
        message text NOT NULL,
        submitted_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) $charset_collate;";
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}
?>