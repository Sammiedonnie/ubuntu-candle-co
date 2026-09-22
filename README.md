# Ubuntu Candle Co.

"I Am Because We Are." — an African-inspired luxury candle e-commerce prototype
built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's included

- Home, Shop, Product Detail, Our Story, Scent Finder, Gifting, Candle Care and
  Contact pages
- Slide-out cart drawer with free-shipping progress, persisted to localStorage
- Interactive two-question Scent Finder quiz
- "Ask Ubuntu" scent concierge chat panel with mock responses
- All candle/gift-set data lives in `data/products.ts` — edit names, prices,
  descriptions, scent notes and images there; every page and component reads
  through this one file
- Demo customer reviews clearly marked as placeholder data

## What to change before this goes live

1. **Photography** — every product image is currently a CSS gradient
   placeholder marked "Placeholder photography". Replace the `tone` gradients
   in `data/products.ts` with real photos (drop images in `public/` and swap
   the `<div style={{ background: candle.tone }} />` blocks for `next/image`).
2. **Commerce backend** — `lib/cart-context.tsx` currently persists the cart
   to `localStorage` only. To go live, connect it to Shopify's Storefront API
   or Stripe Checkout: the cart's public interface (`addItem`, `updateQty`,
   `removeItem`, `subtotal`) is intentionally the only thing components talk
   to, so swapping the implementation shouldn't require touching UI code.
3. **AI Concierge** — `data/quizLogic.ts` exports `mockConciergeReply()`, a
   plain keyword-matching function. Replace its internals with a call to a
   real LLM API (never call it with an exposed API key from the client —
   route it through a Next.js API route, e.g. `app/api/concierge/route.ts`).
4. **Reviews** — replace the placeholder array in
   `components/home/Reviews.tsx` with real customer review data once you have
   it, and remove the "Demo reviews" badge.
5. **Logo** — the header currently renders the wordmark "Ubuntu Candle Co." as
   text. Swap it for your logo file in `components/layout/Header.tsx`.
6. **Contact form** — the form in `app/contact/page.tsx` doesn't submit
   anywhere yet; wire it to an email service or API route of your choice.
