"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useEffect } from "react";

interface Payment {
  _id: string;
  userId: string;
  amount: number;
  currency: string;
  status: string;
  stripePaymentIntentId: string;
  stripeCustomerId: string;
  createdAt: number;
  updatedAt: number;
}

export function PaymentHistory() {
  const { isLoaded, isSignedIn, user } = useUser();
  const payments = useQuery(
    api.payments.getPaymentsByUserId,
    isSignedIn && user ? { userId: user.id } : "skip"
  );

  // Log user ID for debugging purposes
  useEffect(() => {
    if (user) {
      console.log("PaymentHistory component - User ID:", user.id);
    }
  }, [user]);

  if (!isLoaded) {
    return <div className="text-gray-400 p-4">Loading payment history...</div>;
  }

  if (!isSignedIn) {
    return <div className="text-gray-400 p-4">Please sign in to view payment history</div>;
  }

  if (!payments) {
    return <div className="text-gray-400 p-4">Loading payment history...</div>;
  }

  if (payments.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No payment history found</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {payments.map((payment: Payment) => (
            <div key={payment._id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="font-medium">
                  ${(payment.amount / 100).toFixed(2)} {payment.currency.toUpperCase()}
                </div>
                <div className="text-sm text-gray-500">
                  {format(new Date(payment.createdAt), "MMM d, yyyy h:mm a")}
                </div>
              </div>
              <Badge variant={
                payment.status === "succeeded" ? "default" :
                  payment.status === "failed" ? "destructive" : "secondary"
              }>
                {payment.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}