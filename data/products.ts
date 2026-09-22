export type Candle = {
  slug: string;
  name: string;
  price: number;
  notes: string[];
  mood: string;
  blurb: string;
  story: string;
  details: string;
  ingredients: string;
  burnTime: string;
  tone: string; // fallback background color while the photo loads
  image: string; // path to product photo in /public
  pairsWithSlug: string;
};

export type GiftSet = {
  slug: string;
  name: string;
  price: number;
  desc: string;
  image: string;
  tone: string;
};

// Swap this array for a CMS or commerce-API fetch later — every component
// reads through this module, never hardcodes candle data itself.
export const candles: Candle[] = [
  {
    slug: "savannah-rain",
    name: "Savannah Rain",
    price: 42,
    notes: ["Fresh Earth", "Eucalyptus", "Green Leaves", "Soft Woods"],
    mood: "Fresh · Grounding · Peaceful",
    blurb:
      "A fresh, grounding fragrance inspired by rain falling across warm earth.",
    story:
      "Savannah Rain began as a memory of the first rain after a long dry season — the smell of wet earth and eucalyptus carried on the wind.",
    details:
      "Hand-poured in small batches using a coconut-soy wax blend. Cotton wick. Reusable amber glass vessel, 8oz.",
    ingredients: "Coconut-soy wax blend, cotton wick, phthalate-free fragrance oils.",
    burnTime: "45–50 hours",
    tone: "linear-gradient(160deg, #6B6E48 0%, #3f4230 100%)",
    image: "/images/candles/savannah-rain.jpg",
    pairsWithSlug: "rooibos-nights",
  },
  {
    slug: "marula-gold",
    name: "Marula Gold",
    price: 46,
    notes: ["Vanilla", "Amber", "Honey", "Sandalwood"],
    mood: "Warm · Luxurious · Comforting",
    blurb:
      "A rich golden fragrance created for slow evenings, warm conversations and quiet luxury.",
    story:
      "Marula Gold began as a memory of dusk in the highveld — marula trees turning gold, honey drifting from open kitchen windows.",
    details:
      "Hand-poured in small batches using a coconut-soy wax blend. Cotton wick. Reusable amber glass vessel, 8oz.",
    ingredients: "Coconut-soy wax blend, cotton wick, phthalate-free fragrance oils.",
    burnTime: "45–50 hours",
    tone: "linear-gradient(160deg, #C98A3E 0%, #7a4d18 100%)",
    image: "/images/candles/marula-gold.jpg",
    pairsWithSlug: "rooibos-nights",
  },
  {
    slug: "rooibos-nights",
    name: "Rooibos Nights",
    price: 44,
    notes: ["Rooibos Tea", "Cedarwood", "Soft Smoke", "Warm Spice"],
    mood: "Cozy · Earthy · Intimate",
    blurb:
      "A comforting fragrance inspired by tea, conversation and evenings spent together.",
    story:
      "Rooibos Nights comes from long evenings around the fire, cups of tea passed hand to hand while stories are told.",
    details:
      "Hand-poured in small batches using a coconut-soy wax blend. Cotton wick. Reusable amber glass vessel, 8oz.",
    ingredients: "Coconut-soy wax blend, cotton wick, phthalate-free fragrance oils.",
    burnTime: "45–50 hours",
    tone: "linear-gradient(160deg, #8C4A2F 0%, #3c1f13 100%)",
    image: "/images/candles/rooibos-nights.jpg",
    pairsWithSlug: "marula-gold",
  },
];

export const giftSets: GiftSet[] = [
  {
    slug: "discovery-set",
    name: "African Evenings Discovery Set",
    desc: "All three signature fragrances in travel-size vessels.",
    price: 58,
    image: "/images/candles/discovery-set.jpg",
    tone: "linear-gradient(160deg, #A9834F 0%, #4a3520 100%)",
  },
  {
    slug: "trio-gift-box",
    name: "Ubuntu Trio Gift Box",
    desc: "Full-size Savannah Rain, Marula Gold and Rooibos Nights in a keepsake box.",
    price: 128,
    image: "/images/candles/trio-gift-box.jpg",
    tone: "linear-gradient(160deg, #A9834F 0%, #4a3520 100%)",
  },
  {
    slug: "build-your-own",
    name: "Build Your Own Candle Gift Box",
    desc: "Choose any two full-size candles plus a matchbox and wick trimmer.",
    price: 96,
    image: "/images/candles/build-your-own.jpg",
    tone: "linear-gradient(160deg, #A9834F 0%, #4a3520 100%)",
  },
];

export function getCandleBySlug(slug: string): Candle | undefined {
  return candles.find((c) => c.slug === slug);
}