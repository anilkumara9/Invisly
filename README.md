# Archive

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/shared-8867s-projects/v0-archive)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/7OBKdWwIbzR)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/shared-8867s-projects/v0-archive](https://vercel.com/shared-8867s-projects/v0-archive)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/7OBKdWwIbzR](https://v0.app/chat/projects/7OBKdWwIbzR)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Stripe Price ID (for testing)
NEXT_PUBLIC_STRIPE_PRICE_ID=your_stripe_price_id

# Convex Configuration
NEXT_PUBLIC_CONVEX_URL=your_convex_domain_url

# App URL
NEXT_PUBLIC_APP_URL=https://invisly.in
```

Refer to `.env.example` for a complete template.

## Authentication & Payment Integration

For details on the planned OAuth authentication and Stripe payment gateway integration, please refer to our comprehensive guide:

[AUTH_STRIPE_INTEGRATION.md](AUTH_STRIPE_INTEGRATION.md)

## Stripe & Convex Integration

For implementation details on integrating Stripe webhook functionality with Convex to automatically add authenticated users to your Convex database, please refer to:

[STRIPE_CONVEX_INTEGRATION.md](STRIPE_CONVEX_INTEGRATION.md)

## Testing Integration

For instructions on testing the integration between Clerk, Stripe, and Convex, please refer to:

[TESTING_INTEGRATION.md](TESTING_INTEGRATION.md)