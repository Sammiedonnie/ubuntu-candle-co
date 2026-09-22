export default function BrandStory() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-6xl-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 py-24">
        <div
          className="h-[420px] relative"
          style={{ background: "linear-gradient(160deg, #D9CBB8 0%, #A9834F 100%)" }}
        >
          <span className="absolute bottom-3 left-3 font-sans text-[11px] uppercase tracking-wide text-espresso/55">
            Placeholder lifestyle photography
          </span>
        </div>

        <div>
          <h2 className="font-serif font-medium text-3xl md:text-4xl text-espresso leading-tight">
            I am because we are
          </h2>
          <p className="font-sans text-base text-espresso/80 mt-5 leading-relaxed max-w-[48ch]">
            At Ubuntu Candle Co., we believe the most meaningful moments are the ones we share.
          </p>
          <p className="font-sans text-base text-espresso/80 mt-4 leading-relaxed max-w-[48ch]">
            Inspired by the spirit of Ubuntu, our fragrances celebrate warmth, connection,
            storytelling and the feeling of home. Each candle is created to transform an ordinary
            space into a place where memories are made.
          </p>
        </div>
      </div>
    </section>
  );
}
