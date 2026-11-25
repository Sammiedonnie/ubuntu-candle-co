"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const FREE_SHIPPING_THRESHOLD = 50;

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const checkout = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 z-40 bg-espresso/40"
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed top-0 right-0 h-full z-50 w-[380px] max-w-[90vw] flex flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <span className="font-serif text-xl text-espresso">Your bag</span>
          <button onClick={closeCart} aria-label="Close cart" className="text-espresso">
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-4 border-b border-sand">
          {remaining > 0 ? (
            <p className="font-sans text-sm text-espresso/80">${remaining} away from free shipping</p>
          ) : (
            <p className="font-sans text-sm text-olive">You've unlocked free shipping</p>
          )}
          <div className="mt-2 h-[3px] bg-sand">
            <div
              className="h-full bg-terracotta transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-5">
          {items.length === 0 && (
            <p className="font-sans text-sm text-espresso/70">Your bag is empty.</p>
          )}
          {items.map((item) => (
            <div key={item.slug} className="flex gap-4">
              <div className="w-16 h-16 flex-shrink-0 relative" style={{ background: item.tone }}>
                {item.image && (
                  <Image src={item.image} alt={item.name} fill className="object-contain" sizes="64px" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <p className="font-serif text-base text-espresso">{item.name}</p>
                  <button
                    onClick={() => removeItem(item.slug)}
                    aria-label={`Remove ${item.name}`}
                    className="text-bronze"
                  >
                    <X size={14} />
                  </button>
                </div>
                <p className="font-sans text-sm text-bronze mt-0.5">${item.price}</p>
                <div className="flex items-center gap-3 mt-2 border border-sand w-fit">
                  <button
                    onClick={() => updateQty(item.slug, -1)}
                    className="p-1.5 text-espresso"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="font-sans text-sm text-espresso w-4 text-center">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.slug, 1)}
                    className="p-1.5 text-espresso"
                    aria-label="Increase quantity"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-5 border-t border-sand">
          <div className="flex items-center justify-between">
            <span className="font-sans text-sm text-espresso">Subtotal</span>
            <span className="font-sans text-base text-espresso">${subtotal}</span>
          </div>
          {error && <p className="font-sans text-xs text-red-700 mt-2">{error}</p>}
          <button
            onClick={checkout}
            disabled={items.length === 0 || loading}
            className="w-full mt-4 bg-espresso text-cream font-sans text-sm py-3 disabled:opacity-50"
          >
            {loading ? "Redirecting..." : "Proceed to checkout"}
          </button>
        </div>
      </aside>
    </>
  );
}