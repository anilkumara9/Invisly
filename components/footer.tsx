import { Logo } from '@/components/logo'
import Link from 'next/link'
import { LegalDialog } from './legal-dialogs'
import { PrivacyContent } from './privacy-content'
import { TermsContent } from './terms-content'
import { motion } from 'framer-motion'

const links = [
    { title: 'DISCLAIMER', href: '/disclaimer' },
]

export function Footer() {
    return (
        <footer className="py-12 md:py-16 relative">
            {/* Spline background container - restored to original size */}
            {/* <div className="spline-container absolute top-0 left-0 w-full h-full z-0">
                <iframe
                    src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    id="aura-spline"
                />
            </div> */}

            {/* Content container */}
            <div className="mx-auto max-w-5xl px-6 pb-12 pt-16 relative">
                {/* Overlay for better text readability - now positioned relative to content container */}
                <div
                    className="absolute inset-0 bg-black/40"
                    style={{ zIndex: -1 }}
                />

                {/* Platform logo positioned at the top of the footer */}
                <div className="my-6 flex justify-center w-full">
                    <img
                        src="/invisily1.png"
                        alt="Invisily"
                        className="h-28 md:h-32 object-contain drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                    />
                </div>

                <div className="my-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-white hover:text-white/80 duration-150 text-sm">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                    <LegalDialog
                        title="Privacy Policy"
                        triggerText="Privacy Policy"
                        className="text-white hover:text-white/80 duration-150 text-sm"
                    >
                        <PrivacyContent />
                    </LegalDialog>
                    <LegalDialog
                        title="Terms of Service"
                        triggerText="Terms of Service"
                        className="text-white hover:text-white/80 duration-150 text-sm"
                    >
                        <TermsContent />
                    </LegalDialog>
                </div>

                <div className="my-12 flex flex-wrap justify-center gap-6 sm:gap-8">
                    <Link
                        href="mailto:educationalpro6@gmail.com"
                        aria-label="Email"
                        className="text-white hover:text-white/80">
                        <svg
                            className="size-7 sm:size-8"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/anilkumar-meda-2b2624331"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-white hover:text-white/80">
                        <svg
                            className="size-7 sm:size-8"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://github.com/anilkumara9"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-white hover:text-white/80">
                        <svg
                            className="size-7 sm:size-8"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://anilkumarmeda.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Portfolio"
                        className="text-white hover:text-white/80">
                        <svg
                            className="size-7 sm:size-8"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://www.instagram.com/anil_kumar_meda07/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-white hover:text-white/80">
                        <svg
                            className="size-7 sm:size-8"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://x.com/anilKumar09873"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X/Twitter"
                        className="text-white hover:text-white/80">
                        <svg
                            className="size-7 sm:size-8"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Added footer background image below the footer content - removed gap completely */}
            <div className="w-full flex justify-center -mt-1 mb-0">
                <img
                    src="/assets/footerback.png"
                    alt="Footer Background"
                    className="w-full max-w-8xl object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                />
            </div>
            {/* Copyright with shadow effect above border */}
            <div className="mt-8 pt-6 border-t border-white/20 shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
                <span className="text-white block text-center font-bold text-lg">© 2025 Invisly. All rights reserved.</span>
            </div>
        </footer>

    )
}