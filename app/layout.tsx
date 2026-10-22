import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { SITE_URL, ogImage } from "@/lib/site";

// Self-hosted (Latin subset, variable weight) so builds don't depend on
// fetching from Google Fonts, which intermittently failed on Vercel.
const display = localFont({
  src: "./fonts/SpaceGrotesk.woff2",
  variable: "--font-display",
  weight: "300 700",
  display: "swap",
});

const body = localFont({
  src: "./fonts/WorkSans.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EJSCOTT Group | Websites, Apps & Digital Builds",
    template: "%s | EJSCOTT Group",
  },
  description:
    "Websites, booking systems and apps for small businesses in Hertfordshire and across the UK. Designed, hosted and looked after for you, from £39/month. Free homepage design before you pay.",
  keywords: [
    "web design Hertfordshire",
    "small business websites UK",
    "website designer Stevenage",
    "custom software UK",
    "booking system websites",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "EJSCOTT Group",
    description:
      "Websites, booking systems, and custom software — built and managed for you.",
    url: SITE_URL,
    siteName: "EJSCOTT Group",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "EJSCOTT Group",
    description:
      "Websites, booking systems, and custom software — built and managed for you.",
    images: [ogImage.url],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbfaf6] text-[#0e1210]">
        {children}
        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "358f3304944b4cab8760ed49bfd7c444"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
