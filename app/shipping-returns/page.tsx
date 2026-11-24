export const metadata = { title: "Shipping & Returns — Ubuntu Candle Co." };

const sections = [
  {
    heading: "Shipping rates",
    body: [
      "Free standard shipping on all orders of $50 or more.",
      "Orders under $50 ship for a flat rate of $7.95.",
      "We currently ship within the United States only.",
    ],
  },
  {
    heading: "Processing and delivery times",
    body: [
      "Every candle is hand-poured in small batches. Orders ship within 3–5 business days.",
      "Once shipped, orders are delivered by USPS, usually within 3–7 business days.",
      "You will receive an email with tracking information when your order ships.",
    ],
  },
  {
    heading: "Damaged or incorrect orders",
    body: [
      "If your candle arrives broken or damaged, email us a photo within 7 days of delivery and we will send a free replacement or issue a full refund.",
      "If we sent the wrong item, we will ship the correct one at no cost to you.",
    ],
  },
  {
    heading: "Returns",
    body: [
      "Unused candles may be returned within 30 days of delivery if they are unburned and in their original packaging.",
      "Customers are responsible for return shipping costs. Once we receive and inspect your return, your refund will be issued to your original payment method.",
      "For safety and hygiene reasons, burned or used candles cannot be returned.",
      "Gift sets and custom orders are final sale.",
    ],
  },
  {
    heading: "How to start a return",
    body: [
      "Email us at ubuntucandleco.shop@gmail.com with your order number and the reason for your return. We will reply with return instructions.",
    ],
  },
];

export default function ShippingReturnsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif font-medium text-4xl text-espresso text-center">
        Shipping &amp; Returns
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
        Questions? Contact us at{" "}
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