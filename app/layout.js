import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  ),
  title: "Choko Delights - Luxury Chocolate Hampers & Premium Gifting",
  description:
    "Premium luxury gifting house. Handcrafted chocolates & couture hampers for weddings, festivals, personalized gifts and corporate & bulk orders. Delivered PAN India.",
  keywords: [
    "luxury gifting",
    "wedding gift hampers",
    "corporate gifting",
    "festive hampers",
    "personalized chocolate gifts",
    "bulk chocolate hampers India",
    "Choko Delights",
  ],
  openGraph: {
    title: "Choko Delights - Luxury Chocolate Hampers & Premium Gifting",
    description:
      "Handcrafted chocolates & couture hampers for weddings, festivals and corporate gifting. An experience, beautifully wrapped.",
    type: "website",
    images: ["/images/hero-peacock.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
