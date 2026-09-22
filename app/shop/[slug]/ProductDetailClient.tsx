"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import type { Candle } from "@/data/products";
import { useCart } from "@/lib/cart-context";

export default function ProductDetailClient({ candle }: { candle: Candle }) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
      <div className="h-[520px] relative" style={{ background: candle.tone }}>
        <Image
          src={candle.image}
          alt={candle.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      <div>
        <h1 className="font-serif font-medium text-4xl text-espresso">{candle.name}</h1>
        <p className="font-sans text-lg text-bronze mt-1.5">${candle.price}</p>
        <p className="font-sans text-base text-espresso/80 mt-4 leading-relaxed max-w-[48ch]">
          {candle.blurb}
        </p>
        <p className="font-sans text-xs text-olive mt-4">{candle.mood}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {candle.notes.map((n) => (
            <span key={n} className="font-sans text-xs text-espresso bg-sand px-2.5 py-1">
              {n}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-8">
          <div className="flex items-center border border-sand">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="p-3 text-espresso"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="font-sans text-sm text-espresso w-7 text-center">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="p-3 text-espresso" aria-label="Increase quantity">
              <Plus size={14} />
            </button>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => addItem(candle, qty)}
            className="flex-1 bg-espresso text-cream font-sans text-sm py-3.5"
          >
            Add to bag — ${candle.price * qty}
          </button>
          <button className="flex-1 border border-espresso text-espresso font-sans text-sm py-3.5">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}