import Image from "next/image";
import { giftSets } from "@/data/products";

export const metadata = { title: "Gifting — Ubuntu Candle Co." };

export default function GiftingPage() {
  return (
    <main className="bg-espresso">
      <div className="mx-auto max-w-6xl-content px-6 py-24">
        <div className="max-w-xl">
          <h1 className="font-serif font-medium text-4xl text-cream">Give the gift of Ubuntu</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {giftSets.map((set) => (
            <div key={set.slug}>
              <div className="h-[220px] relative" style={{ background: set.tone }}>
                <Image
                  src={set.image}
                  alt={set.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif text-lg text-cream mt-4">{set.name}</h3>
              <p className="font-sans text-sm text-cream/70 mt-1.5 leading-relaxed">{set.desc}</p>
              <p className="font-sans text-base text-bronze mt-2">${set.price}</p>
            </div>
          ))}
        </div>

        <button className="mt-14 bg-terracotta text-cream font-sans text-sm px-8 py-3.5">
          Shop gifts
        </button>
      </div>
    </main>
  );
}