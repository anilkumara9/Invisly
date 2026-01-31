// convex/users.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const storeUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication");
    }

    // Check if we already have this user
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();

    const userData = {
      clerkId: identity.subject,
      email: identity.email!,
      name: identity.name,
      imageUrl: identity.pictureUrl,
      updatedAt: Date.now(),
    };

    if (user !== null) {
      // If we've seen this user before but their name or picture has changed, update them.
      if (user.name !== identity.name || user.imageUrl !== identity.pictureUrl || user.email !== identity.email) {
        await ctx.db.patch(user._id, userData);
      }
      return user._id;
    }

    // If it's a new user, create it.
    console.log(`Creating new user for clerkId: ${identity.subject}`);
    const userId = await ctx.db.insert("users", {
      ...userData,
      createdAt: Date.now(),
    });

    return userId;
  },
});

export const createUser = mutation({
  args: {
    clerkId: v.string(),
    stripeCustomerId: v.optional(v.string()),
    email: v.string(),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Validate email format
    if (!args.email || !args.email.includes('@')) {
      throw new Error("Invalid email format");
    }

    try {
      const existingUser = await ctx.db
        .query("users")
        .withIndex("by_clerk_id", q => q.eq("clerkId", args.clerkId))
        .unique();

      if (existingUser) {
        console.log(`User already exists with clerkId: ${args.clerkId}`);
        return existingUser._id;
      }

      const userId = await ctx.db.insert("users", {
        clerkId: args.clerkId,
        stripeCustomerId: args.stripeCustomerId,
        email: args.email.toLowerCase(), // Normalize email to lowercase
        name: args.name,
        imageUrl: args.imageUrl,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      console.log(`Created new user with ID: ${userId}`);
      return userId;
    } catch (error: unknown) {
      console.error("Error creating user:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to create user: ${errorMessage}`);
    }
  },
});

export const getUserByClerkId = query({
  args: {
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("Querying user by clerkId:", args.clerkId);
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", q => q.eq("clerkId", args.clerkId))
      .unique();
    console.log("Found user:", user);
    return user;
  },
});

// Helper function to validate user ID consistency
export const validateUserId = query({
  args: {
    clerkId: v.string(),
    expectedUserId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", q => q.eq("clerkId", args.clerkId))
      .unique();

    if (!user) {
      return { valid: false, error: "User not found" };
    }

    if (user._id !== args.expectedUserId) {
      return { valid: false, error: "User ID mismatch", expected: args.expectedUserId, actual: user._id };
    }

    return { valid: true, user };
  },
});

// Test function to get all users
export const getAllUsers = query({
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

// Test function to manually create a user
export const createTestUser = mutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", q => q.eq("clerkId", args.clerkId))
      .unique();

    if (existingUser) {
      return existingUser;
    }

    const userId = await ctx.db.insert("users", {
      clerkId: args.clerkId,
      email: args.email,
      name: args.name,
      imageUrl: args.imageUrl,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return userId;
  },
});
