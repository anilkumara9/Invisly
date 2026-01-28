# Application URLs

These URLs are used for redirecting users during authentication flows and payment processing.

## Payment Processing URLs

```
SUCCESS_URL=https://your-website.com/success
CANCEL_URL=https://your-website.com/cancel
```

## Authentication URLs

```
APP_REDIRECT_URI=https://your-website.com/auth/callback
CLERK_FRONTEND_API_URL=https://your-project-xxxxx.clerk.accounts.dev
```

## ConvexDB

```
CONVEX_URL=https://sleek-reindeer-994.convex.cloud
CONVEX_DEPLOYMENT_URL=https://sleek-reindeer-994.convex.cloud
```

## Usage Instructions

1. Replace `https://your-website.com` with your actual domain
2. Replace `your-project-xxxxx` with your actual Clerk project identifier
3. Replace `your-project-XXXX` with your actual Convex project identifier
4. Ensure these URLs are registered in your OAuth provider settings
5. For local development, you can use:
   ```
   SUCCESS_URL=http://localhost:3000/success
   CANCEL_URL=http://localhost:3000/cancel
   APP_REDIRECT_URI=http://localhost:3000/auth/callback
   CLERK_FRONTEND_API_URL=https://your-project-xxxxx.clerk.accounts.dev
   CONVEX_URL=https://sleek-reindeer-994.convex.cloud
   CONVEX_DEPLOYMENT_URL=https://sleek-reindeer-994.convex.cloud
   ```

## Security Notes

- Always use HTTPS in production environments
- Ensure redirect URIs are whitelisted in your authentication providers
- Keep these URLs consistent across your application configuration