"use client";

import { useState } from "react";
import type { Candle } from "@/data/products";

export default function ProductAccordion({ candle }: { candle: Candle }) {
  const [open, setOpen] = useState(0);

  const sections = [
    { title: "Fragrance story", body: candle.story },
    { title: "Candle details", body: candle.details },
    { title: "Ingredients", body: candle.ingredients },
    { title: "Burn time", body: candle.burnTime },
    { title: "Shipping", body: "Ships within 2–3 business days. Free shipping on orders over $75." },
  ];

  return (
    <div className="border-t border-sand">
      {sections.map((section, i) => (
        <div key={section.title} className="border-b border-sand">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between py-4 font-sans text-sm text-espresso text-left"
          >
            {section.title}
            <span className="text-terracotta">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="font-sans text-sm text-espresso/75 leading-relaxed pb-4 max-w-[60ch]">
              {section.body}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
