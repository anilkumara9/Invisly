import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll/smooth-scroll";
import { ClerkProvider } from '@clerk/nextjs';
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { calsans } from "@/fonts/calsans";
import { AuthLayoutWrapper } from "@/components/auth-layout-wrapper";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invisly - Invisible AI Assistant for Coding Interviews",
  description: "Ace your technical interviews with Invisly, the undetectable AI assistant. Completely invisible to screen share, never steals focus, and works seamlessly during online assessments.",
  generator: 'v0.app',
  keywords: ['AI assistant', 'coding interviews', 'technical interviews', 'screen share invisible', 'interview help'],
  manifest: '/manifest.json',
  openGraph: {
    title: "Invisly - Invisible AI Assistant",
    description: "Ace your technical interviews with complete stealth",
    type: "website",
    images: ['/invisily1.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisly - Invisible AI Assistant",
    description: "Ace your technical interviews with complete stealth",
    images: ['/invisily1.png'],
  },
  icons: {
    icon: '/invisily1.png',
    apple: '/invisily1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/"
      afterSignUpUrl="/"
      appearance={{
        layout: {
          logoImageUrl: '/invisily1.png',
          unsafe_disableDevelopmentModeWarnings: true,
        },
        variables: {
          colorBackground: '#000000',
          colorText: '#ffffff',
          colorTextSecondary: '#cccccc',
          colorPrimary: '#ffc700',
          colorTextOnPrimaryBackground: '#000000',
          colorInputBackground: '#111111',
          colorInputText: '#ffffff',
          colorNeutral: '#333333',
          colorShimmer: 'rgba(255,255,255,0.2)',
          fontWeight: {
            normal: 400,
            medium: 500,
            bold: 700,
          },
          fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
          },
        },
        elements: {
          footer: 'hidden',
          footerAction: 'hidden',
          footerAction__help: 'hidden',
          logoImage: {
            width: '60px',
            height: 'auto',
            borderRadius: '8px'
          },
          logo: 'hidden',
          clerkLogo: 'hidden',
          branding: 'hidden',
          socialButtons: {
            boxShadow: 'none',
            border: 'none',
          },
          socialButtonsIconButton: {
            filter: 'none',
            opacity: '1',
            border: 'none',
          },
          socialButtonsBlockButton: {
            filter: 'none',
            opacity: '1',
            color: '#ffffff',
            backgroundColor: '#111111',
            border: 'none',
          },
          socialButtonsBlockButtonText: {
            color: '#ffffff',
            fontWeight: '500',
          },
          socialButtonsProviderIcon: {
            filter: 'none',
            opacity: '1',
          },
        },
      }}
    >
      <html lang="en">
        <body
          className={`${geistMono.variable} ${calsans.variable} antialiased`}
          suppressHydrationWarning
        >
          <ConvexClientProvider>
            <SmoothScroll>
              <AuthLayoutWrapper
                header={<Header />}
                footer={<Footer />}
              >
                {children}
              </AuthLayoutWrapper>
            </SmoothScroll>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
