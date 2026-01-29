"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function SignInPage() {
    const { user, isLoaded } = useUser();
    const searchParams = useSearchParams();
    const isDesktop = searchParams?.get('source') === 'desktop';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const generateCode = useMutation((api as any).desktopAuth.generateAuthCode);

    const [status, setStatus] = useState<'idle' | 'generating' | 'redirecting' | 'error'>('idle');
    const [authCode, setAuthCode] = useState<string | null>(null);

    useEffect(() => {
        if (isLoaded && user && isDesktop && status === 'idle') {
            const handleDesktopAuth = async () => {
                try {
                    setStatus('generating');
                    const code = await generateCode();
                    setAuthCode(code);
                    setStatus('redirecting');

                    // Redirect to desktop app
                    window.location.href = `invisly://auth?code=${code}`;

                    // Optional: Close window or show success message after delay
                } catch (error) {
                    console.error("Failed to generate auth code:", error);
                    setStatus('error');
                }
            };
            handleDesktopAuth();
        }
    }, [isLoaded, user, isDesktop, generateCode, status]);

    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(to right, rgb(8, 8, 7) 50%, black 50%)' }}>
            {/* Logo Header - Fixed at top left */}
            <div className="fixed top-0 left-0 z-50 p-6">
                <Link href="/">
                    <Image
                        src="/invisily1.png"
                        alt="Invisily"
                        width={180}
                        height={48}
                        className="h-12 w-auto object-contain rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors cursor-pointer"
                    />
                </Link>
            </div>

            {/* Main Content */}
            <div className="min-h-screen flex items-start justify-start p-4 pt-40 w-full pl-32">
                <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-start w-full">
                    {/* Left side - Authentication Form */}
                    <div className="w-full lg:w-1/2 flex justify-start">
                        <div className="flex flex-col items-center">
                            {isDesktop && (status === 'generating' || status === 'redirecting') ? (
                                <div className="bg-[#7f4d02] border border-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md text-center text-white">
                                    <h2 className="text-2xl font-bold mb-4">Opening Invisly Desktop...</h2>
                                    <p className="mb-6 text-gray-200">
                                        We are attempting to open the desktop application.
                                        Please click <span className="font-bold text-yellow-400">Open Invisly</span> in the browser prompt.
                                    </p>

                                    <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

                                    <p className="text-sm text-gray-400 mb-2">If nothing happens, click below:</p>
                                    <button
                                        onClick={() => {
                                            if (authCode) {
                                                window.location.href = `invisly://auth?code=${authCode}`;
                                            }
                                        }}
                                        disabled={!authCode}
                                        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Open Invisly Desktop
                                    </button>
                                </div>
                            ) : (
                                <div className="bg-transparent border-0 rounded-none shadow-none p-6 w-full max-w-md">
                                    <SignIn
                                        appearance={{
                                            elements: {
                                                card: "bg-[rgb(127,77,2)] border border-gray-800 rounded-2xl shadow-lg p-0 max-w-none",
                                                headerTitle: "hidden",
                                                headerSubtitle: "hidden",
                                                socialButtons: "gap-3 mb-4",
                                                socialButtonsIconButton: "hidden",
                                                socialButtonsProviderIcon: "w-5 h-5",
                                                socialButtonsBlockButton: "w-full bg-black border-2 border-gray-700 hover:border-yellow-500 hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-all mb-3",
                                                dividerLine: "bg-black h-px",
                                                dividerText: "text-black text-sm px-4 !important",
                                                formFieldLabel: "text-gray-300 text-sm font-medium mb-2",
                                                formFieldInput: "bg-black border-2 border-gray-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all",
                                                formButtonPrimary: "bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition-all w-full shadow-md hover:shadow-lg",
                                                formFieldInputShowPasswordButton: "text-gray-400 hover:text-yellow-500",
                                                identityPreview: "border border-gray-700 rounded-lg bg-black",
                                                formResendCodeLink: "text-yellow-500 hover:text-yellow-400",
                                                footer: "hidden",
                                                footerAction: "hidden",
                                            },
                                            variables: {
                                                colorBackground: 'rgb(127, 77, 2)',
                                                colorText: '#ffffff',
                                                colorTextSecondary: '#cccccc',
                                                colorPrimary: '#ffc700',
                                                colorTextOnPrimaryBackground: '#000000',
                                                colorInputBackground: '#000000',
                                                colorInputText: '#ffffff',
                                            },
                                            layout: {
                                                socialButtonsVariant: "auto",
                                                logoPlacement: "none",
                                            }
                                        }}
                                        signUpUrl="/sign-up"
                                        afterSignInUrl={isDesktop ? "/sign-in?source=desktop" : "/"} // Ensure we stay/return to capture the desktop source if redirected locally, though Clerk usually handles this
                                        redirectUrl={isDesktop ? "/sign-in?source=desktop" : "/"}
                                    />
                                </div>
                            )}

                            {/* Custom Footer Link */}
                            <div className="mt-6 text-center">
                                <span className="text-gray-400 text-sm">Don&apos;t have an account? </span>
                                <Link href="/sign-up" className="text-yellow-500 hover:text-yellow-400 font-medium text-sm">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle separator shadow */}
            <div className="hidden lg:block fixed left-1/2 top-0 w-px h-screen bg-black z-40 shadow-[0_0_15px_5px_rgba(0,0,0,0.8)]"></div>

            {/* Right side - Image - Fixed position to cover entire right side */}
            <div className="hidden lg:block fixed right-0 top-8 w-1/2 h-screen">
                <Image
                    src="/images/invi1.png"
                    alt="Authentication"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}
