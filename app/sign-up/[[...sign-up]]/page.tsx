"use client";

import { SignUp, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
    const { isLoaded } = useUser();

    if (!isLoaded) {
        return null;
    }

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
                            <div className="bg-[rgb(127,77,2)] border border-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md">
                                <SignUp
                                    appearance={{
                                        elements: {
                                            card: "bg-transparent shadow-none border-0 p-0 max-w-none",
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
                                            footerActionText: "hidden",
                                            footerActionLink: "hidden",
                                            footerPageLink: "hidden",
                                            clerkLogo: "hidden",
                                            header: "hidden"
                                        },
                                        variables: {
                                            colorBackground: 'transparent',
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
                                    signInUrl="/sign-in"
                                    afterSignInUrl="/"
                                    afterSignUpUrl="/"
                                    redirectUrl="/"
                                />
                                {/* Custom Footer Link */}
                                <div className="mt-6 text-center">
                                    <span className="text-gray-400 text-sm">Already have an account? </span>
                                    <Link href="/sign-in" className="text-yellow-500 hover:text-yellow-400 font-medium text-sm">
                                        Sign in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Image - Fixed position to cover entire right side */}
                <div className="hidden lg:block fixed right-0 top-0 w-1/2 h-screen">
                    <Image
                        src="/login.png"
                        alt="Authentication"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
