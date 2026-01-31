import { v } from "convex/values";
import { mutation, query, internalMutation } from "./_generated/server";

// Generate a short-lived auth code
export const generateAuthCode = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Not authenticated");
        }

        // Rate limiting: Maximum 3 codes per minute per user
        const recentCodes = await ctx.db
            .query("authCodes")
            .withIndex("by_expires_at", (q) => q.gt("expiresAt", Date.now() + (2 * 60 * 1000) - (60 * 1000)))
            .filter((q) => q.eq(q.field("userId"), identity.subject))
            .collect();

        // Filter in memory for precise "last minute" check
        const oneMinuteFromNow = Date.now() + 60 * 1000;
        const codesCreatedLastMinute = recentCodes.filter(c => c.expiresAt > oneMinuteFromNow);

        if (codesCreatedLastMinute.length >= 3) {
            throw new Error("Rate limit exceeded. Please wait a moment.");
        }

        const code = Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);

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
        const authCode = await ctx.db
            .query("authCodes")
            .withIndex("by_code", (q) => q.eq("code", args.code))
            .first();

        if (!authCode) {
            throw new Error("Invalid code");
        }

        if (authCode.expiresAt < Date.now()) {
            await ctx.db.delete(authCode._id);
            throw new Error("Code expired");
        }

        const token = Math.random().toString(36).substring(2) +
            Date.now().toString(36) +
            Math.random().toString(36).substring(2);

        await ctx.db.insert("desktopSessions", {
            token,
            userId: authCode.userId,
            deviceName: "Desktop App",
            createdAt: Date.now(),
            lastActiveAt: Date.now(),
        });

        await ctx.db.delete(authCode._id);

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", authCode.userId))
            .first();

        return {
            token,
            userId: authCode.userId,
            email: user?.email,
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

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", session.userId))
            .first();

        return {
            userId: session.userId,
            email: user?.email,
        };
    },
});

// Internal mutation to clean up expired codes
export const cleanupExpiredCodes = internalMutation({
    args: {},
    handler: async (ctx) => {
        const now = Date.now();
        const expiredCodes = await ctx.db
            .query("authCodes")
            .withIndex("by_expires_at", (q) => q.lt("expiresAt", now))
            .take(100);

        for (const code of expiredCodes) {
            await ctx.db.delete(code._id);
        }

        if (expiredCodes.length > 0) {
            console.log(`Cleaned up ${expiredCodes.length} expired auth codes.`);
        }
    },
});
