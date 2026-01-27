"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";

export default function TestUserPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const createTestUser = useMutation(api.users.createTestUser);
  const allUsers = useQuery(api.users.getAllUsers);

  useEffect(() => {
    console.log("Clerk user state:", { isLoaded, isSignedIn, user });
  }, [isLoaded, isSignedIn, user]);

  const handleCreateUser = async () => {
    if (!isSignedIn || !user) {
      console.error("User not signed in");
      return;
    }

    try {
      const result = await createTestUser({
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress || "",
        name: `${user.firstName || ""} ${user.lastName || ""}`.trim() || undefined,
        imageUrl: user.imageUrl || undefined,
      });
      console.log("Created user:", result);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <div className="text-center p-8 bg-gray-900 rounded-lg max-w-2xl">
        <h1 className="text-3xl font-bold text-white mb-6">User Test</h1>
        
        {!isLoaded && <p className="text-gray-300">Loading...</p>}
        
        {isLoaded && !isSignedIn && (
          <p className="text-gray-300">Please sign in to test user creation</p>
        )}
        
        {isLoaded && isSignedIn && user && (
          <div className="space-y-4">
            <div className="text-left bg-gray-800 p-4 rounded">
              <h2 className="text-xl font-semibold text-white mb-2">Current User</h2>
              <p className="text-gray-300">ID: {user.id}</p>
              <p className="text-gray-300">Email: {user.emailAddresses[0]?.emailAddress}</p>
              <p className="text-gray-300">Name: {user.firstName} {user.lastName}</p>
            </div>
            
            <button
              onClick={handleCreateUser}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Create User in Convex
            </button>
          </div>
        )}
        
        <div className="mt-8 text-left bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold text-white mb-2">All Users</h2>
          {allUsers ? (
            <pre className="text-gray-300 text-sm overflow-auto max-h-60">
              {JSON.stringify(allUsers, null, 2)}
            </pre>
          ) : (
            <p className="text-gray-300">Loading users...</p>
          )}
        </div>
      </div>
    </div>
  );
}