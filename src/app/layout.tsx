import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { CartProvider } from "@/components/cart/CartProvider";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Wholesale Shilajit Supplier Pakistan`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  verification: {
    google: "9_GoZqFYnQi_oEMfy9DJ0mDbRNJCeOtQqxIeFymBEYs",
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileStickyCta />
        </CartProvider>
      </body>
    </html>
  );
}
