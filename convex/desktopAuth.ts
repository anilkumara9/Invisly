import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Generate a short-lived auth code
export const generateAuthCode = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Not authenticated");
        }

        // Generate a secure random code
        // simple implementation: timestamp + random string
        const code = Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);

        // Store in database with 2 minute expiration
        await ctx.db.insert("authCodes", {
            code,
            userId: identity.subject,
            expiresAt: Date.now() + 2 * 60 * 1000,
        });

        return code;
    },
});

// Exchange the auth code for a long-lived session token
export const exchangeCodeForToken = mutation({
    args: { code: v.string() },
    handler: async (ctx, args) => {
        // 1. Find the code
        const authCode = await ctx.db
            .query("authCodes")
            .withIndex("by_code", (q) => q.eq("code", args.code))
            .first();

        // 2. Validate
        if (!authCode) {
            throw new Error("Invalid code");
        }

        if (authCode.expiresAt < Date.now()) {
            // Clean up expired code
            await ctx.db.delete(authCode._id);
            throw new Error("Code expired");
        }

        // 3. Generate session token
        // Using a simple random string for now, but in production consider more entropy
        const token = Math.random().toString(36).substring(2) +
            Date.now().toString(36) +
            Math.random().toString(36).substring(2);

        // 4. Create session
        await ctx.db.insert("desktopSessions", {
            token,
            userId: authCode.userId,
            deviceName: "Desktop App", // Could be passed in args if we wanted
            createdAt: Date.now(),
            lastActiveAt: Date.now(),
        });

        // 5. Delete the used code
        await ctx.db.delete(authCode._id);

        return {
            token,
            userId: authCode.userId,
        };
    },
});

// Validate the session token
export const validateDesktopSession = query({
    args: { token: v.string() },
    handler: async (ctx, args) => {
        const session = await ctx.db
            .query("desktopSessions")
            .withIndex("by_token", (q) => q.eq("token", args.token))
            .first();

        if (!session) {
            return null;
        }

        // Optional: Update lastActiveAt (logic would need to be in a mutation or treated differently)
        // For a query, we just return the user info

        return {
            userId: session.userId,
        };
    },
});
