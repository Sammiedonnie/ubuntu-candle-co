import { Star } from "lucide-react";

const reviews = [
  {
    name: "Amara T.",
    product: "Marula Gold",
    rating: 5,
    text: "Fills the whole living room without being overwhelming. My new go-to candle for evenings.",
  },
  {
    name: "Jordan K.",
    product: "Rooibos Nights",
    rating: 5,
    text: "Smells exactly like the description promises — cozy and warm without being too sweet.",
  },
  {
    name: "Priya S.",
    product: "Savannah Rain",
    rating: 4,
    text: "Really fresh and clean scent. Would love a slightly stronger throw, but I still love it.",
  },
];

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl-content px-6 py-24">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="font-serif font-medium text-3xl text-espresso">
          Love from the Ubuntu community
        </h2>
        <span className="font-sans text-xs text-bronze border border-sand px-3 py-1">
          Demo reviews for preview purposes
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {reviews.map((r) => (
          <div key={r.name} className="border-t border-sand pt-5">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < r.rating ? "#B0532E" : "none"}
                  color="#B0532E"
                />
              ))}
            </div>
            <p className="font-sans text-sm text-espresso/80 mt-3 leading-relaxed">{r.text}</p>
            <p className="font-sans text-xs text-espresso mt-3">
              {r.name} · {r.product}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
