import Image from "next/image";

export const metadata = { title: "Our Story — Ubuntu Candle Co." };

export default function OurStoryPage() {
  return (
    <main>
      <section className="bg-espresso text-cream">
        <div className="mx-auto max-w-6xl-content px-6 py-28">
          <h1 className="font-serif font-medium text-5xl max-w-[16ch]">I am because we are</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl-content px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="h-[420px] relative bg-sand">
          <Image
            src="/images/our-story-brand.png"
            alt="Ubuntu Candle Co. brand mark"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col gap-5 font-sans text-base text-espresso/85 leading-relaxed max-w-[52ch]">
          <p>
            At Ubuntu Candle Co., we believe the most meaningful moments are the ones we share.
          </p>
          <p>
            Inspired by the spirit of Ubuntu — "I am because we are" — our fragrances celebrate
            warmth, connection, storytelling and the feeling of home.
          </p>
          <p>
            Each candle is created to transform an ordinary space into a place where memories are
            made — a scent to gather around, the way people have always gathered around fire and
            tea and conversation.
          </p>
        </div>
      </section>
    </main>
  );
}