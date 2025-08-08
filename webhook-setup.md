# Razorpay Webhook Configuration

## Why Webhooks?
- Ensures payment status updates even if customer closes browser
- Handles failed/successful payments reliably
- Required for production environment

## Setup Process:

### 1. In Razorpay Dashboard:
- **Settings** → **Webhooks**
- **Add New Webhook**
- **URL**: `https://zerses.com/wc-api/rzp_webhook`
- **Secret**: Generate a strong secret (save this)
- **Events to Subscribe**:
  - payment.authorized
  - payment.failed
  - payment.captured
  - order.paid
  - refund.created

### 2. In WooCommerce:
- **Razorpay Settings** → **Webhook Secret**
- **Paste the secret** from Razorpay dashboard
- **Save Changes**

## Test Webhook:
```bash
# Test webhook URL (replace with your domain)
curl -X POST https://zerses.com/wc-api/rzp_webhook \
  -H "Content-Type: application/json" \
  -d '{"test": "webhook"}'
```