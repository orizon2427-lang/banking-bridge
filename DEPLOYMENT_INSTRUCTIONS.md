# BankingBridge Application System - Deployment Instructions

## Edge Function Deployment

The application form sends submissions via a Supabase Edge Function that emails you directly. This means **no database maintenance required** - applications come straight to your inbox.

### Steps to Deploy:

1. **Set up Resend API Key** (Free email service)
   - Go to https://resend.com and create a free account
   - Get your API key from the dashboard
   - Run this command to add it to Supabase:
   ```bash
   npx supabase secrets set RESEND_API_KEY=your_resend_api_key_here
   ```

2. **Deploy the Edge Function**
   ```bash
   npx supabase functions deploy submit-application --no-verify-jwt
   ```

### How It Works:

- When someone clicks "Apply" on your website, a modal form appears
- They fill in their details (name, email, university, division, etc.)
- Upon submission, the Edge Function sends you an email with all their information
- **No database queries** = no need to wake up the database every 6 days
- Applications arrive instantly in your inbox

### Alternative: Email Fallback

If you prefer not to deploy the Edge Function right now, the form will show an error message that directs users to email you directly at bankingbridge@email.com. This is already built into the application modal.

### Email Service (Resend):

- **Free tier**: 3,000 emails/month
- Perfect for application submissions
- No credit card required to start
- Simple API integration

### Security:

- Edge Function runs serverless (no maintenance needed)
- `verify_jwt` is set to `false` so the public form can submit
- No sensitive data stored anywhere
- All application data goes directly to your email

---

## Questions?

The application system is ready to use. Just deploy the Edge Function with the steps above, and you'll start receiving applications via email automatically!
