"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface ConvexUser {
  _id: string;
  clerkId: string;
  email: string;
  name?: string;
  imageUrl?: string;
  createdAt: number;
  updatedAt: number;
  stripeCustomerId?: string;
}

export default function TestAuthPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [convexUser, setConvexUser] = useState<ConvexUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Auth state:", { isLoaded, isSignedIn, user });
  }, [isLoaded, isSignedIn, user]);

  // Query Convex to see if the user exists
  const fetchedUser = useQuery(
    api.users.getUserByClerkId,
    isSignedIn && user ? { clerkId: user.id } : "skip"
  );

  useEffect(() => {
    if (fetchedUser !== undefined) {
      setConvexUser(fetchedUser as ConvexUser | null);
      setLoading(false);
      console.log("Convex user:", fetchedUser);
    }
  }, [fetchedUser]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center p-8 bg-gray-900 rounded-lg">
        <h1 className="text-3xl font-bold text-white mb-6">Authentication Test</h1>
        <div className="text-left text-gray-300">
          <p className="mb-2">Loaded: {isLoaded ? "Yes" : "No"}</p>
          <p className="mb-2">Signed In: {isSignedIn ? "Yes" : "No"}</p>
          {user && (
            <div>
              <p className="mb-2">User ID: {user.id}</p>
              <p className="mb-2">User Email: {user.emailAddresses[0]?.emailAddress}</p>
              <p className="mb-2">User Name: {user.fullName}</p>
            </div>
          )}
          
          <div className="mt-6">
            <h2 className="text-xl font-bold text-white mb-2">Convex User Status</h2>
            {loading ? (
              <p>Loading...</p>
            ) : convexUser ? (
              <div>
                <p className="mb-2">User found in Convex: Yes</p>
                <p className="mb-2">Convex User ID: {convexUser._id}</p>
                <p className="mb-2">Convex Clerk ID: {convexUser.clerkId}</p>
              </div>
            ) : (
              <p>User not found in Convex</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}