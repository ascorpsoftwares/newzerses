<?php
/**
 * Portfolio Contact API - WordPress Plugin
 * File: /blog/wp-content/plugins/portfolio-contact/portfolio-contact.php
 * 
 * This creates a REST API endpoint for your React portfolio contact form
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Plugin Name: Portfolio Contact API
 * Description: REST API endpoint for React portfolio contact form
 * Version: 1.0
 * Author: Krishna Kumar Yadav
 */

class PortfolioContactAPI {
    
    public function __construct() {
        add_action('rest_api_init', array($this, 'register_routes'));
        add_action('init', array($this, 'handle_cors'));
        register_activation_hook(__FILE__, array($this, 'create_contact_table'));
    }
    
    /**
     * Handle CORS for React app
     */
    public function handle_cors() {
        // Handle preflight requests
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            header('Access-Control-Allow-Origin: https://krishnakky.com');
            header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
            header('Access-Control-Max-Age: 86400');
            exit(0);
        }
        
        // Add CORS headers to all responses
        add_action('rest_api_init', function() {
            remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
            add_filter('rest_pre_serve_request', function($value) {
                header('Access-Control-Allow-Origin: https://krishnakky.com');
                header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
                header('Access-Control-Allow-Headers: Content-Type, Authorization');
                return $value;
            });
        }, 15);
    }
    
    /**
     * Register REST API routes
     */
    public function register_routes() {
        register_rest_route('portfolio/v1', '/contact', array(
            'methods' => 'POST',
            'callback' => array($this, 'handle_contact_submission'),
            'permission_callback' => '__return_true',
            'args' => array(
                'name' => array(
                    'required' => true,
                    'type' => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                    'validate_callback' => array($this, 'validate_name')
                ),
                'email' => array(
                    'required' => true,
                    'type' => 'string',
                    'sanitize_callback' => 'sanitize_email',
                    'validate_callback' => array($this, 'validate_email')
                ),
                'message' => array(
                    'required' => true,
                    'type' => 'string',
                    'sanitize_callback' => 'sanitize_textarea_field',
                    'validate_callback' => array($this, 'validate_message')
                )
            )
        ));
        
        // Admin endpoint to get contact submissions
        register_rest_route('portfolio/v1', '/contacts', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_contact_submissions'),
            'permission_callback' => array($this, 'check_admin_permission')
        ));
    }
    
    /**
     * Validation functions
     */
    public function validate_name($value) {
        return !empty($value) && strlen($value) >= 2 && strlen($value) <= 100;
    }
    
    public function validate_email($value) {
        return is_email($value);
    }
    
    public function validate_message($value) {
        return !empty($value) && strlen($value) >= 10 && strlen($value) <= 2000;
    }
    
    public function check_admin_permission() {
        return current_user_can('manage_options');
    }
    
    /**
     * Handle contact form submission
     */
    public function handle_contact_submission($request) {
        $params = $request->get_params();
        
        // Extract and sanitize data
        $name = $params['name'];
        $email = $params['email'];
        $message = $params['message'];
        
        // Additional security checks
        if ($this->is_spam($name, $email, $message)) {
            return new WP_Error('spam_detected', 'Spam submission detected', array('status' => 400));
        }
        
        // Rate limiting (simple implementation)
        if ($this->is_rate_limited($email)) {
            return new WP_Error('rate_limited', 'Too many submissions. Please wait before submitting again.', array('status' => 429));
        }
        
        // Save to database
        $contact_id = $this->save_contact_submission($name, $email, $message);
        
        if (!$contact_id) {
            return new WP_Error('save_failed', 'Failed to save contact submission', array('status' => 500));
        }
        
        // Send email notification
        $email_sent = $this->send_email_notification($name, $email, $message, $contact_id);
        
        // Send auto-reply to user
        $this->send_auto_reply($name, $email);
        
        // Return success response
        return array(
            'success' => true,
            'message' => 'Thank you for your message! I\'ll get back to you soon.',
            'contact_id' => $contact_id,
            'email_sent' => $email_sent
        );
    }
    
    /**
     * Simple spam detection
     */
    private function is_spam($name, $email, $message) {
        $spam_keywords = array('viagra', 'casino', 'loan', 'bitcoin', 'crypto', 'investment');
        $content = strtolower($name . ' ' . $email . ' ' . $message);
        
        foreach ($spam_keywords as $keyword) {
            if (strpos($content, $keyword) !== false) {
                return true;
            }
        }
        
        // Check for excessive links
        if (substr_count($message, 'http') > 2) {
            return true;
        }
        
        return false;
    }
    
    /**
     * Simple rate limiting
     */
    private function is_rate_limited($email) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'portfolio_contacts';
        
        $recent_submissions = $wpdb->get_var($wpdb->prepare(
            "SELECT COUNT(*) FROM $table_name WHERE email = %s AND submitted_at > DATE_SUB(NOW(), INTERVAL 1 HOUR)",
            $email
        ));
        
        return $recent_submissions >= 3; // Max 3 submissions per hour
    }
    
    /**
     * Save contact submission to database
     */
    private function save_contact_submission($name, $email, $message) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'portfolio_contacts';
        
        $result = $wpdb->insert(
            $table_name,
            array(
                'name' => $name,
                'email' => $email,
                'message' => $message,
                'ip_address' => $this->get_client_ip(),
                'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
                'submitted_at' => current_time('mysql'),
                'status' => 'new'
            ),
            array('%s', '%s', '%s', '%s', '%s', '%s', '%s')
        );
        
        return $result ? $wpdb->insert_id : false;
    }
    
    /**
     * Send email notification to you
     */
    private function send_email_notification($name, $email, $message, $contact_id) {
        $to = 'krishnakky121@gmail.com';
        $subject = 'New Portfolio Contact: ' . $name;
        
        $email_body = "
New contact form submission from your portfolio:

Name: {$name}
Email: {$email}
Contact ID: {$contact_id}
Submitted: " . current_time('mysql') . "
IP Address: " . $this->get_client_ip() . "

Message:
{$message}

---
You can reply directly to this email to respond to {$name}.
        ";
        
        $headers = array(
            'Content-Type: text/plain; charset=UTF-8',
            'From: Portfolio <noreply@krishnakky.com>',
            'Reply-To: ' . $name . ' <' . $email . '>'
        );
        
        return wp_mail($to, $subject, $email_body, $headers);
    }
    
    /**
     * Send auto-reply to user
     */
    private function send_auto_reply($name, $email) {
        $subject = 'Thank you for contacting me - Krishna Kumar Yadav';
        
        $message = "
Hi {$name},

Thank you for reaching out through my portfolio website. I've received your message and will get back to you within 24-48 hours.

In the meantime, feel free to:
- Check out my latest projects on GitHub
- Connect with me on LinkedIn: https://www.linkedin.com/in/krishnakky999/
- Explore my technical blog posts

Best regards,
Krishna Kumar Yadav
Senior Software Engineer & Technology Leader

---
This is an automated response. Please don't reply to this email.
        ";
        
        $headers = array(
            'Content-Type: text/plain; charset=UTF-8',
            'From: Krishna Kumar Yadav <noreply@krishnakky.com>'
        );
        
        return wp_mail($email, $subject, $message, $headers);
    }
    
    /**
     * Get client IP address
     */
    private function get_client_ip() {
        $ip_keys = array('HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'HTTP_CLIENT_IP', 'REMOTE_ADDR');
        
        foreach ($ip_keys as $key) {
            if (!empty($_SERVER[$key])) {
                $ip = $_SERVER[$key];
                if (strpos($ip, ',') !== false) {
                    $ip = trim(explode(',', $ip)[0]);
                }
                if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                    return $ip;
                }
            }
        }
        
        return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    }
    
    /**
     * Get contact submissions (admin only)
     */
    public function get_contact_submissions($request) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'portfolio_contacts';
        
        $page = $request->get_param('page') ?: 1;
        $per_page = $request->get_param('per_page') ?: 20;
        $offset = ($page - 1) * $per_page;
        
        $contacts = $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM $table_name ORDER BY submitted_at DESC LIMIT %d OFFSET %d",
            $per_page,
            $offset
        ));
        
        $total = $wpdb->get_var("SELECT COUNT(*) FROM $table_name");
        
        return array(
            'contacts' => $contacts,
            'total' => (int) $total,
            'page' => (int) $page,
            'per_page' => (int) $per_page,
            'total_pages' => ceil($total / $per_page)
        );
    }
    
    /**
     * Create database table for contact submissions
     */
    public function create_contact_table() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'portfolio_contacts';
        
        $charset_collate = $wpdb->get_charset_collate();
        
        $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            name varchar(100) NOT NULL,
            email varchar(100) NOT NULL,
            message text NOT NULL,
            ip_address varchar(45) DEFAULT '',
            user_agent text DEFAULT '',
            status varchar(20) DEFAULT 'new',
            submitted_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY email (email),
            KEY submitted_at (submitted_at),
            KEY status (status)
        ) $charset_collate;";
        
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
}

// Initialize the plugin
new PortfolioContactAPI();

/**
 * Add admin menu for viewing contacts
 */
add_action('admin_menu', function() {
    add_menu_page(
        'Portfolio Contacts',
        'Portfolio Contacts',
        'manage_options',
        'portfolio-contacts',
        'portfolio_contacts_admin_page',
        'dashicons-email-alt',
        30
    );
});

function portfolio_contacts_admin_page() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'portfolio_contacts';
    
    // Handle status updates
    if (isset($_POST['update_status']) && isset($_POST['contact_id'])) {
        $contact_id = intval($_POST['contact_id']);
        $new_status = sanitize_text_field($_POST['status']);
        
        $wpdb->update(
            $table_name,
            array('status' => $new_status),
            array('id' => $contact_id),
            array('%s'),
            array('%d')
        );
        
        echo '<div class="notice notice-success"><p>Status updated successfully!</p></div>';
    }
    
    $contacts = $wpdb->get_results("SELECT * FROM $table_name ORDER BY submitted_at DESC LIMIT 50");
    
    ?>
    <div class="wrap">
        <h1>Portfolio Contact Submissions</h1>
        
        <table class="wp-list-table widefat fixed striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($contacts as $contact): ?>
                <tr>
                    <td><?php echo $contact->id; ?></td>
                    <td><?php echo esc_html($contact->name); ?></td>
                    <td><a href="mailto:<?php echo esc_attr($contact->email); ?>"><?php echo esc_html($contact->email); ?></a></td>
                    <td><?php echo esc_html(substr($contact->message, 0, 100)) . (strlen($contact->message) > 100 ? '...' : ''); ?></td>
                    <td><?php echo $contact->submitted_at; ?></td>
                    <td>
                        <span class="status-<?php echo $contact->status; ?>">
                            <?php echo ucfirst($contact->status); ?>
                        </span>
                    </td>
                    <td>
                        <form method="post" style="display: inline;">
                            <input type="hidden" name="contact_id" value="<?php echo $contact->id; ?>">
                            <select name="status">
                                <option value="new" <?php selected($contact->status, 'new'); ?>>New</option>
                                <option value="replied" <?php selected($contact->status, 'replied'); ?>>Replied</option>
                                <option value="closed" <?php selected($contact->status, 'closed'); ?>>Closed</option>
                            </select>
                            <input type="submit" name="update_status" value="Update" class="button button-small">
                        </form>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    
    <style>
    .status-new { color: #d63638; font-weight: bold; }
    .status-replied { color: #00a32a; }
    .status-closed { color: #646970; }
    </style>
    <?php
}
?>