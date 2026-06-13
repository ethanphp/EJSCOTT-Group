import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EJSCOTT Group | Websites for Hertfordshire Businesses",
    template: "%s | EJSCOTT Group",
  },
  description:
    "We build modern, high-converting websites for small businesses across Hertfordshire. Design, hosting, and updates handled for you.",
  keywords: [
    "web design Hertfordshire",
    "small business websites UK",
    "website designer Stevenage",
    "Watford web design",
    "Hemel Hempstead websites",
  ],
  metadataBase: new URL("https://ejscottgroup.co.uk"),
  openGraph: {
    title: "EJSCOTT Group",
    description:
      "Websites for Hertfordshire businesses. Built, hosted and managed for you.",
    url: "https://ejscottgroup.co.uk",
    siteName: "EJSCOTT Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EJSCOTT Group",
    description:
      "Websites for Hertfordshire businesses. Built, hosted and managed for you.",
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}