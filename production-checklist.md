# Razorpay Production Deployment Checklist

## Pre-Production:
- [ ] Complete Razorpay KYC verification
- [ ] Receive live API keys
- [ ] Test all payment methods (Cards, UPI, NetBanking, Wallets)
- [ ] Test webhook functionality
- [ ] Verify order status updates
- [ ] Test refund process

## SSL & Security:
- [ ] Ensure SSL certificate is active (https://zerses.com)
- [ ] Verify webhook URL is accessible
- [ ] Test payment forms on mobile devices
- [ ] Check PCI compliance requirements

## Go-Live Steps:
1. **Switch to Live Mode:**
   - WooCommerce → Settings → Payments → Razorpay
   - Disable "Test Mode"
   - Enter Live Key ID and Secret
   - Update Webhook Secret

2. **Update Webhook URL:**
   - Razorpay Dashboard → Webhooks
   - Update URL to production domain
   - Test webhook delivery

3. **Final Testing:**
   - Make a small test transaction (₹1)
   - Verify payment success
   - Check order status update
   - Test refund process

## Indian Payment Methods Supported:
- Credit/Debit Cards (Visa, Mastercard, RuPay)
- Net Banking (All major banks)
- UPI (GPay, PhonePe, Paytm, etc.)
- Wallets (Paytm, Mobikwik, Freecharge)
- EMI options
- Buy Now Pay Later (Simpl, LazyPay)

## Transaction Fees:
- Cards: 2% + GST
- UPI: 0% (up to ₹2000), then 0.4% + GST
- Net Banking: 0.9% + GST
- Wallets: 2% + GST