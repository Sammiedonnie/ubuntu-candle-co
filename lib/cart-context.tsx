"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Candle } from "@/data/products";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  qty: number;
  tone: string;
  image: string;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (candle: Candle, qty?: number) => void;
  updateQty: (slug: string, delta: number) => void;
  removeItem: (slug: string) => void;
  subtotal: number;
  count: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "ubuntu-candle-co-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = (candle: Candle, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === candle.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === candle.slug ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        {
          slug: candle.slug,
          name: candle.name,
          price: candle.price,
          qty,
          tone: candle.tone,
          image: candle.image,
        },
      ];
    });
    setIsOpen(true);
  };

  const updateQty = (slug: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.slug === slug ? { ...i, qty: Math.max(0, i.qty + delta) } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        updateQty,
        removeItem,
        subtotal,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}