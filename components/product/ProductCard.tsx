"use client";

import Image from "next/image";
import Link from "next/link";
import type { Candle } from "@/data/products";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ candle }: { candle: Candle }) {
  const { addItem } = useCart();

  return (
    <div className="flex flex-col">
      <div
        className="w-full h-[340px] relative overflow-hidden"
        style={{ background: candle.tone }}
      >
        <Image
          src={candle.image}
          alt={candle.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="pt-5 border-t border-sand">
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif text-xl text-espresso">{candle.name}</h3>
          <span className="font-sans text-base text-bronze">${candle.price}</span>
        </div>

        <p className="font-sans text-sm text-espresso/75 mt-2.5 leading-relaxed">{candle.blurb}</p>
        <p className="font-sans text-xs text-olive mt-3">{candle.mood}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {candle.notes.map((n) => (
            <span key={n} className="font-sans text-xs text-espresso bg-sand px-2.5 py-1">
              {n}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-5">
          <button
            onClick={() => addItem(candle)}
            className="flex-1 bg-espresso text-cream font-sans text-sm py-3"
          >
            Quick add
          </button>
          <Link
            href={`/shop/${candle.slug}`}
            className="flex-1 text-center border border-espresso text-espresso font-sans text-sm py-3"
          >
            View candle
          </Link>
        </div>
      </div>
    </div>
  );
}