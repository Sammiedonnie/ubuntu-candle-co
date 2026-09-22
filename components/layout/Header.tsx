"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Our Story", href: "/our-story" },
  { label: "Scent Finder", href: "/scent-finder" },
  { label: "Gifting", href: "/gifting" },
  { label: "Candle Care", href: "/candle-care" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? "bg-cream border-b border-sand" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl-content items-center justify-between px-6 py-5">
        <button
          className="md:hidden text-espresso"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <Link href="/" className="font-serif text-espresso text-xl tracking-wide">
          Ubuntu Candle Co.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs font-medium tracking-widest uppercase text-espresso border-b border-transparent pb-0.5 hover:border-terracotta transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-espresso">
          <button aria-label="Search">
            <Search size={19} />
          </button>
          <button aria-label="Account" className="hidden md:inline">
            <User size={19} />
          </button>
          <button aria-label="Shopping bag" onClick={openCart} className="relative">
            <ShoppingBag size={19} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-terracotta text-cream rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-cream">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-serif text-espresso text-lg">Ubuntu Candle Co.</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-espresso">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl text-espresso"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
