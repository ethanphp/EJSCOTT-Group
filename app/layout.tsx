import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";

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
    "EJSCOTT Group builds websites, booking systems, and custom software for local businesses and clients further afield. Design, hosting, and updates handled for you.",
  keywords: [
    "web design Hertfordshire",
    "small business websites UK",
    "website designer Stevenage",
    "custom software UK",
    "booking system websites",
  ],
  metadataBase: new URL("https://ejscottgroup.co.uk"),
  openGraph: {
    title: "EJSCOTT Group",
    description:
      "Websites, booking systems, and custom software — built and managed for you.",
    url: "https://ejscottgroup.co.uk",
    siteName: "EJSCOTT Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EJSCOTT Group",
    description:
      "Websites, booking systems, and custom software — built and managed for you.",
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
