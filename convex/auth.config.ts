import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      // Use the environment variable for the Clerk JWT issuer domain
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN!,
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;

// https://equal-heron-37.clerk.accounts.dev