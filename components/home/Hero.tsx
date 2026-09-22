"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const base = "transition-all duration-700";
  const shown = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  return (
    <section className="relative w-full overflow-hidden bg-espresso min-h-[88vh]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(176,83,46,0.35), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl-content flex flex-col items-start justify-center px-6 py-32 md:py-40">
        <p className={`font-sans text-sm tracking-widest uppercase text-bronze ${base} ${shown}`}>
          African Evenings Collection
        </p>
        <h1
          className={`font-serif font-medium text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.05] text-cream mt-3 max-w-[14ch] ${base} ${shown}`}
          style={{ transitionDelay: "100ms" }}
        >
          Light. Warmth. Connection.
        </h1>
        <p
          className={`font-sans text-lg text-cream/80 mt-6 max-w-[38ch] leading-relaxed ${base} ${shown}`}
          style={{ transitionDelay: "200ms" }}
        >
          African-inspired fragrances created to bring warmth, story and connection into your home.
        </p>
        <div className={`mt-9 flex gap-4 ${base} ${shown}`} style={{ transitionDelay: "300ms" }}>
          <Link
            href="/shop"
            className="bg-terracotta text-cream font-sans text-sm tracking-wide px-8 py-3.5"
          >
            Shop the collection
          </Link>
          <Link
            href="/our-story"
            className="border border-bronze text-cream font-sans text-sm tracking-wide px-8 py-3.5"
          >
            Our story
          </Link>
        </div>
      </div>
    </section>
  );
}
