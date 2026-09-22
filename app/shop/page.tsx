import ProductCard from "@/components/product/ProductCard";
import { candles } from "@/data/products";

export const metadata = { title: "Shop — Ubuntu Candle Co." };

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl-content px-6 py-20">
      <h1 className="font-serif font-medium text-4xl text-espresso">All candles</h1>
      <p className="font-sans text-base text-espresso/80 mt-2 max-w-[52ch]">
        Three fragrances, each inspired by a different African evening.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
        {candles.map((c) => (
          <ProductCard key={c.slug} candle={c} />
        ))}
      </div>
    </main>
  );
}
