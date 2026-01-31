import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.interval(
    "cleanup-auth-codes",
    { minutes: 60 }, // Run every hour
    internal.desktopAuth.cleanupExpiredCodes
);

export default crons;
