import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-beta-pink-10.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Edison Zhang — Software Engineer",
  description:
    "Edison Zhang is a CS student at UC San Diego and SWE intern at Intuit, building agentic AI systems, data infrastructure, and full-stack software.",
  keywords: [
    "Edison Zhang",
    "Software Engineer",
    "AI Agents",
    "LangChain",
    "LangGraph",
    "UCSD",
    "Intuit",
  ],
  authors: [{ name: "Edison Zhang" }],
  openGraph: {
    title: "Edison Zhang — Software Engineer",
    description:
      "CS @ UC San Diego · SWE Intern @ Intuit · building agentic AI & cloud software.",
    url: siteUrl,
    siteName: "Edison Zhang",
    images: [{ url: "/edison.png", width: 700, height: 1050 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edison Zhang — Software Engineer",
    description: "Building agentic AI & cloud software.",
    images: ["/edison.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <PostHogProvider>
          <div className="aurora" />
          {children}
        </PostHogProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
