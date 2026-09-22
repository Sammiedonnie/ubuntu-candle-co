"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";

export default function CheckoutSuccessPage() {
  const { items, updateQty } = useCart();

  // Clear the cart now that payment succeeded.
  useEffect(() => {
    items.forEach((item) => updateQty(item.slug, -item.qty));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif font-medium text-4xl text-espresso">Thank you for your order</h1>
      <p className="font-sans text-base text-espresso/80 mt-4 leading-relaxed">
        Your payment was successful. A confirmation email is on its way, and your candles will be
        on theirs soon.
      </p>
      <Link
        href="/shop"
        className="inline-block mt-8 bg-espresso text-cream font-sans text-sm px-8 py-3.5"
      >
        Continue shopping
      </Link>
    </main>
  );
}