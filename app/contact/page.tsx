import Link from "next/link";

export const metadata = { title: "Contact — Ubuntu Candle Co." };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="font-serif font-medium text-4xl text-espresso">Contact us</h1>
      <p className="font-sans text-base text-espresso/80 mt-2">
        Questions about an order, a gift, or a fragrance? We&apos;d love to hear from you.
      </p>

      <div className="mt-10 border border-sand bg-cream px-6 py-8 space-y-6">
        <div>
          <h2 className="font-serif text-xl text-espresso">Email</h2>
          <a
            href="mailto:ubuntucandleco.shop@gmail.com"
            className="font-sans text-sm text-terracotta underline underline-offset-4"
          >
            ubuntucandleco.shop@gmail.com
          </a>
          <p className="font-sans text-sm text-espresso/70 mt-1">
            We reply within 1–2 business days.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-espresso">Location</h2>
          <p className="font-sans text-sm text-espresso/80">
            Ubuntu Candle Co. LLC · Dallas, Georgia
          </p>
          <p className="font-sans text-sm text-espresso/70 mt-1">
            We are an online-only shop and do not offer in-person pickup or visits.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-espresso">Order help</h2>
          <p className="font-sans text-sm text-espresso/80">
            For order questions, please include your order number in your email.
          </p>
        </div>

        <a
          href="mailto:ubuntucandleco.shop@gmail.com?subject=Question%20for%20Ubuntu%20Candle%20Co."
          className="inline-block bg-espresso text-cream font-sans text-sm px-8 py-3.5"
        >
          Email us
        </a>
      </div>

      <p className="font-sans text-sm text-espresso/80 mt-10">
        Helpful links:{" "}
        <Link href="/shipping-returns" className="text-terracotta underline underline-offset-4">
          Shipping &amp; Returns
        </Link>{" "}
        ·{" "}
        <Link href="/privacy" className="text-terracotta underline underline-offset-4">
          Privacy Policy
        </Link>{" "}
        ·{" "}
        <Link href="/terms" className="text-terracotta underline underline-offset-4">
          Terms of Service
        </Link>
      </p>
    </main>
  );
}