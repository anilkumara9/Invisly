"use client";

import { useUser } from "@clerk/nextjs";
import { PaymentHistory } from "@/components/sections/payment-history";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-xl">Please sign in to access your dashboard</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome back, {user?.firstName || user?.fullName || "User"}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">Name:</span> {user?.fullName}
                </div>
                <div>
                  <span className="font-medium">Email:</span> {user?.emailAddresses[0]?.emailAddress}
                </div>
                <div>
                  <span className="font-medium">Member since:</span> {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Unknown"}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subscription Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">Plan:</span> Pro Plan
                </div>
                <div>
                  <span className="font-medium">Status:</span> Active
                </div>
                <div>
                  <span className="font-medium">Renewal Date:</span> N/A (One-time payment)
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <PaymentHistory />
        </div>
      </div>
    </div>
  );
}