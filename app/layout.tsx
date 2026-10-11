import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, ogImage } from "@/lib/site";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      </body>
    </html>
  );
}
