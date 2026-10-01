import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Caveat, Inter } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lucky Mens Wear | New Collection Dabra - Premium Men's & Wedding Wear",
  description: "Official editorial website of Lucky Mens Wear (@new_collection_dabra). Discover royal sherwanis, 3-piece suits, Indo-western sets, designer kurtas, and groom wear in Dabra.",
  keywords: [
    "Lucky Mens Wear",
    "New Collection Dabra",
    "Dabra Mens Wear",
    "Groom Sherwani Dabra",
    "3 Piece Suit Dabra",
    "Indo Western Dabra",
    "@new_collection_dabra"
  ],
  authors: [{ name: "Lucky Mens Wear Dabra" }],
  openGraph: {
    title: "Lucky Mens Wear | New Collection Dabra",
    description: "Premium Men's & Wedding Wear Editorial Collection in Dabra.",
    type: "website",
    url: "https://www.instagram.com/new_collection_dabra/",
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
      className={`${bodoniModa.variable} ${cormorant.variable} ${caveat.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-[#f2f1ed] text-[#141414] font-sans antialiased selection:bg-[#007a5e] selection:text-white">
        {children}
      </body>
    </html>
  );
}
