import { notFound } from "next/navigation";
import Image from "next/image";
import { candles, getCandleBySlug } from "@/data/products";
import ProductAccordion from "@/components/product/ProductAccordion";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return candles.map((c) => ({ slug: c.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const candle = getCandleBySlug(params.slug);
  if (!candle) notFound();

  const pairsWith = getCandleBySlug(candle.pairsWithSlug);

  return (
    <main className="mx-auto max-w-6xl-content px-6 py-20">
      <ProductDetailClient candle={candle} />

      <div className="mt-10">
        <ProductAccordion candle={candle} />
      </div>

      {pairsWith && (
        <div className="mt-20 pt-10 border-t border-sand">
          <p className="font-sans text-xs tracking-widest uppercase text-olive">Pairs beautifully with</p>
          <div className="flex items-center gap-6 mt-4">
            <div className="w-[90px] h-[90px] relative" style={{ background: pairsWith.tone }}>
              <Image src={pairsWith.image} alt={pairsWith.name} fill className="object-cover" sizes="90px" />
            </div>
            <div>
              <p className="font-serif text-xl text-espresso">{pairsWith.name}</p>
              <p className="font-sans text-sm text-bronze">${pairsWith.price}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}