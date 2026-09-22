import Link from "next/link";
import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import Reviews from "@/components/home/Reviews";
import Newsletter from "@/components/home/Newsletter";
import ProductCard from "@/components/product/ProductCard";
import { candles } from "@/data/products";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl-content px-6 py-24">
        <div className="max-w-xl">
          <h2 className="font-serif font-medium text-3xl text-espresso">
            The African Evenings collection
          </h2>
          <p className="font-sans text-base text-espresso/80 mt-3">
            Three fragrances. Three stories. One feeling of home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          {candles.map((c) => (
            <ProductCard key={c.slug} candle={c} />
          ))}
        </div>
      </section>

      <BrandStory />

      <section className="mx-auto max-w-6xl-content px-6 py-20 text-center">
        <h2 className="font-serif font-medium text-2xl text-espresso">Not sure where to start?</h2>
        <p className="font-sans text-base text-espresso/80 mt-2">
          Answer two quick questions and we'll match you with your Ubuntu scent.
        </p>
        <Link
          href="/scent-finder"
          className="inline-block mt-6 bg-terracotta text-cream font-sans text-sm px-8 py-3.5"
        >
          Find your scent
        </Link>
      </section>

      <Reviews />
      <Newsletter />
    </main>
  );
}
