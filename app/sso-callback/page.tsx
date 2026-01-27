"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SSOCallback() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the sign-in page which will handle the SSO callback
    router.push("/sign-in");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white">Redirecting...</h2>
        <p className="text-gray-400 mt-2">Please wait while we redirect you</p>
      </div>
    </div>
  );
}
