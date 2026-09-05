import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "../components/ChatWidget";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anugu Vaishnavi | AI & ML Portfolio",
  description: "Portfolio of Anugu Vaishnavi – AI & ML enthusiast, Full Stack Developer, and Data Analyst based in Hyderabad.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/logo.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
    apple: [
      { url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
    shortcut: ["/favicon.svg"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Anugu Vaishnavi | AI & ML Portfolio",
    description: "Portfolio of Anugu Vaishnavi – AI & ML enthusiast, Full Stack Developer, and Data Analyst based in Hyderabad.",
    url: "https://vaishnavireddy.dev",
    siteName: "Anugu Vaishnavi Portfolio",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Anugu Vaishnavi – AI & ML Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anugu Vaishnavi | AI & ML Portfolio",
    description: "Portfolio of Anugu Vaishnavi – AI & ML enthusiast, Full Stack Developer, and Data Analyst based in Hyderabad.",
    images: ["/images/og-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
