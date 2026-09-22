import { candles, type Candle } from "./products";

export type Feeling = "Calm" | "Warmth" | "Freshness" | "Comfort" | "Romance";
export type Family = "Fresh" | "Woody" | "Sweet" | "Spiced" | "Earthy";

export type Recommendation = {
  candle: Candle;
  why: string;
};

// Kept as a plain, synchronous function so the Scent Finder and the
// Scent Concierge can both call it, and so it can be swapped for a real
// model call later without touching any UI component.
export function recommendCandle(feeling: Feeling, family: Family): Recommendation {
  if (feeling === "Freshness" || family === "Fresh" || family === "Earthy") {
    return {
      candle: candles.find((c) => c.slug === "savannah-rain")!,
      why: "You're drawn to clean, grounding air — Savannah Rain leads with fresh earth and eucalyptus.",
    };
  }
  if (feeling === "Romance" || feeling === "Comfort" || family === "Sweet") {
    return {
      candle: candles.find((c) => c.slug === "marula-gold")!,
      why: "Warmth and sweetness are your language — Marula Gold's vanilla and amber were made for slow evenings.",
    };
  }
  return {
    candle: candles.find((c) => c.slug === "rooibos-nights")!,
    why: "You want cozy and intimate — Rooibos Nights' tea and warm spice bring people together.",
  };
}

// Mock concierge reply — swap this for a real API route (e.g. /api/concierge
// calling an LLM with the products data as context) without changing the
// ConciergePanel component.
export function mockConciergeReply(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("bedroom") || lower.includes("relax") || lower.includes("calm")) {
    return "For a relaxing bedroom candle, I'd suggest Savannah Rain — its fresh, earthy notes create a calm, grounding atmosphere without being overpowering.";
  }
  if (lower.includes("date") || lower.includes("romantic") || lower.includes("evening")) {
    return "For date night, Marula Gold is the one — warm vanilla, amber and sandalwood set a slow, intimate mood.";
  }
  if (lower.includes("gift") || lower.includes("housewarming")) {
    return "For a housewarming gift, the African Evenings Discovery Set lets them try all three fragrances and find their own favorite.";
  }
  return "Tell me a bit more about the room, mood or occasion — I'll match you with a Savannah Rain, Marula Gold or Rooibos Nights candle.";
}
