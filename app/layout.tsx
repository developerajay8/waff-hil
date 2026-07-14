import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";
import FixedSocialBar from "./components/global/FixedSocialBar";


// Google Fonts Optimization
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Premium SEO Metadata
export const metadata: Metadata = {
  title: "Waffhil | Premium Waffles & Desserts",
  description: "Experience the most luxurious and delicious waffles at Waffhil. Explore our menu, find stores, or open a franchise.",
  keywords: ["Waffles", "Premium Desserts", "Waffhil Franchise", "Best Waffles"],
  openGraph: {
    title: "Waffhil | Premium Waffles",
    description: "Experience the most luxurious and delicious waffles at Waffhil.",
    url: "https://waffhil.com",
    siteName: "Waffhil",
    images: [
      {
        url: "/logo-purple-box.jpg", // Aapki purple square image public folder me rkhna
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-background antialiased">
        <Header />
        {/* Main layout maintaining max-w 1440px universally */}
        <main className="min-h-screen">
          {children}
        </main>
        <FixedSocialBar />
        
        <Footer />
      </body>
    </html>
  );
};