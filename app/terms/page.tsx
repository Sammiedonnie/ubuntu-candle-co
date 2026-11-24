import Link from "next/link";

export const metadata = { title: "Terms of Service — Ubuntu Candle Co." };

const sections = [
  {
    heading: "About these terms",
    body: [
      "These Terms of Service apply to your use of the Ubuntu Candle Co. website and any purchase you make from Ubuntu Candle Co. LLC (\"we,\" \"us\"), a Georgia limited liability company based in Dallas, Georgia. By using our website or placing an order, you agree to these terms.",
    ],
  },
  {
    heading: "Our products",
    body: [
      "Our candles are hand-poured in small batches. Slight variations in color, texture, scent strength, and appearance are a natural part of handmade products and are not defects.",
      "Product photos are for illustration. Colors may look slightly different depending on your screen.",
    ],
  },
  {
    heading: "Candle safety",
    body: [
      "Candles involve an open flame. Always follow the safety warnings on the label and on our Candle Care page: burn within sight, keep away from things that catch fire, and keep away from children and pets.",
      "Please review the fragrance and ingredient information before purchasing if you have allergies or sensitivities.",
      "To the extent permitted by law, we are not responsible for injury or damage caused by misuse of our products or by failure to follow safety instructions.",
    ],
  },
  {
    heading: "Orders, pricing, and payment",
    body: [
      "All prices are in U.S. dollars. Applicable sales tax is calculated at checkout.",
      "Payments are processed securely by Stripe. Your order is confirmed once payment is successfully received.",
      "We reserve the right to cancel or refuse an order, for example if an item is out of stock or a pricing error occurs. If we cancel an order you have paid for, you will receive a full refund.",
    ],
  },
  {
    heading: "Shipping and returns",
    body: [
      "Shipping rates, delivery times, returns, and damaged-order support are explained on our Shipping & Returns page.",
    ],
  },
  {
    heading: "Ask Ubuntu scent concierge",
    body: [
      "Our \"Ask Ubuntu\" concierge uses artificial intelligence to suggest scents and answer general questions. Its responses are for guidance only and may not always be accurate. It does not provide medical, allergy, or safety advice. For order-specific questions, please email us directly.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All content on this website, including our name, logo, text, and images, belongs to Ubuntu Candle Co. LLC or is used with permission. You may not copy or reuse it without our written permission.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Ubuntu Candle Co. LLC is not liable for any indirect, incidental, or consequential damages arising from your use of our website or products. Our total liability for any claim will not exceed the amount you paid for the product involved.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of the State of Georgia, without regard to its conflict of law rules.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms from time to time. Changes will be posted on this page with a new \"Last updated\" date.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif font-medium text-4xl text-espresso text-center">
        Terms of Service
      </h1>
      <p className="font-sans text-sm text-espresso/60 text-center mt-3">
        Last updated: November 24, 2026
      </p>

      <div className="mt-14 space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-2xl text-espresso">{section.heading}</h2>
            <div className="mt-4 space-y-3">
              {section.body.map((line, i) => (
                <p key={i} className="font-sans text-sm text-espresso/80 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="font-sans text-sm text-espresso/80 mt-14 text-center">
        See our{" "}
        <Link href="/shipping-returns" className="text-terracotta underline underline-offset-4">
          Shipping &amp; Returns
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-terracotta underline underline-offset-4">
          Privacy Policy
        </Link>
        . Questions? Email{" "}
        <a
          href="mailto:ubuntucandleco.shop@gmail.com"
          className="text-terracotta underline underline-offset-4"
        >
          ubuntucandleco.shop@gmail.com
        </a>
      </p>
    </main>
  );
}