import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { candles, giftSets } from "../../../data/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const FREE_SHIPPING_THRESHOLD = 5000; // $50.00 in cents
const FLAT_SHIPPING_RATE = 795; // $7.95 in cents
const MAX_QTY_PER_ITEM = 20;

type CartItem = { slug?: string; name?: string; qty?: number };

// Every product the store sells, with its real price
const catalog = [...candles, ...giftSets];

function findProduct(item: CartItem) {
  return catalog.find(
    (p) => (item.slug && p.slug === item.slug) || (item.name && p.name === item.name)
  );
}

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json();

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const origin = request.nextUrl.origin;
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    let subtotal = 0;

    for (const item of items as CartItem[]) {
      const product = findProduct(item);
      const qty = Number(item.qty);

      // Reject anything that isn't a real product or a sensible quantity
      if (!product || !Number.isInteger(qty) || qty < 1 || qty > MAX_QTY_PER_ITEM) {
        return NextResponse.json({ error: "Invalid item in cart" }, { status: 400 });
      }

      // Price comes from products.ts, never from the browser
      const unitAmount = Math.round(product.price * 100); // Stripe uses cents
      subtotal += unitAmount * qty;

      line_items.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            images: [`${origin}${product.image}`],
            tax_code: "txcd_99999999", // general physical goods
          },
          unit_amount: unitAmount,
          tax_behavior: "exclusive", // tax is added on top of the price
        },
        quantity: qty,
      });
    }

    const freeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop`,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: freeShipping ? 0 : FLAT_SHIPPING_RATE,
              currency: "usd",
            },
            display_name: freeShipping ? "Free standard shipping" : "Standard shipping",
            tax_behavior: "exclusive",
            tax_code: "txcd_92010001", // shipping
            delivery_estimate: {
              minimum: { unit: "business_day", value: 6 },
              maximum: { unit: "business_day", value: 12 },
            },
          },
        },
      ],
      automatic_tax: { enabled: true },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Unable to create checkout session" }, { status: 500 });
  }
}