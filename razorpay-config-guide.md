# Razorpay WooCommerce Configuration Guide

## Test Mode Setup:

1. **WordPress Admin** → **WooCommerce** → **Settings** → **Payments**
2. **Enable Razorpay** payment method
3. **Click "Manage"** next to Razorpay

### Basic Settings:
- **Enable/Disable**: ✅ Enable
- **Title**: "Pay with Razorpay (Cards, NetBanking, UPI, Wallets)"
- **Description**: "Pay securely using your credit/debit card, net banking, UPI, or wallet"

### API Configuration:
- **Test Mode**: ✅ Enable (for testing)
- **Key ID**: Your test key (starts with rzp_test_)
- **Key Secret**: Your test secret
- **Webhook Secret**: (Generate from Razorpay dashboard)

### Payment Options:
- **Payment Action**: Authorize and Capture
- **Order Success Message**: "Thank you for your order!"

## Production Setup:

### API Configuration:
- **Test Mode**: ❌ Disable
- **Key ID**: Your live key (starts with rzp_live_)
- **Key Secret**: Your live secret
- **Webhook Secret**: Live webhook secret

### Advanced Settings:
- **Enable Webhooks**: ✅ Yes
- **Webhook URL**: https://zerses.com/wc-api/rzp_webhook
- **Route Enable**: ✅ Yes (for better success rates)