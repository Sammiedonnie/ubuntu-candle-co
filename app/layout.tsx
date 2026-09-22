import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import ConciergeButton from "@/components/concierge/ConciergePanel";
import { CartProvider } from "@/lib/cart-context";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Ubuntu Candle Co. — I Am Because We Are",
  description:
    "African-inspired luxury candles created to bring warmth, story and connection into your home.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-sans bg-cream text-espresso">
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <CartDrawer />
          <ConciergeButton />
        </CartProvider>
      </body>
    </html>
  );
}
