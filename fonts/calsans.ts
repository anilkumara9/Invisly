import localFont from "next/font/local";

export const calsans = localFont({
  src: [
    {
      path: "../public/fonts/CalSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-calsans",
  fallback: ["sans-serif"],
});