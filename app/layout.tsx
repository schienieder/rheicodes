import type { Metadata } from "next";
import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import StickyTopNav from "@/components/StickyTopNav";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = 'rheicodes';
const siteDescription = 'Welcome to rheicodes - web portfolio of Justine Rhei Torres, a full-stack web developer based in the Philippines.';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: siteDescription,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicons/favicon-16x16.png',
    apple: '/icons/apple-touch-icon-180.png',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: ['/social/og-image-1200x630.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/social/og-image-1200x630.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <StickyTopNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
