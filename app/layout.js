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
  title: "Choko Delights — Bulk Chocolates & Gift Hampers for Business",
  description:
    "Handcrafted chocolates, curated gift hampers and decor trays — made for bulk & corporate orders. Trusted by sweet shops, HR teams and wedding planners across India.",
  keywords: [
    "bulk chocolates",
    "corporate gifting",
    "wedding gift hampers",
    "chocolate hampers India",
    "Choko Delights",
  ],
  openGraph: {
    title: "Choko Delights — Bulk Chocolates & Gift Hampers",
    description:
      "Curated chocolate hampers for corporate gifting, weddings and resellers. One Bite, Endless Cravings.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
