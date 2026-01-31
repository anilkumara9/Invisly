import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

export const testSendWelcomeEmail = action({
    args: {
        email: v.string(),
        name: v.string(),
    },
    handler: async (ctx, args) => {
        console.log("Testing email sending for:", args.email);
        await ctx.runAction(internal.emails.sendWelcomeEmail, {
            email: args.email,
            name: args.name,
        });
        return "Email sent (check logs)";
    },
});
