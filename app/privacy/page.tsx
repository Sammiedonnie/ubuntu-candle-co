export const metadata = { title: "Privacy Policy — Ubuntu Candle Co." };

const sections = [
  {
    heading: "Who we are",
    body: [
      "Ubuntu Candle Co. LLC (\"Ubuntu Candle Co.,\" \"we,\" \"us\") is a small, home-based candle company located in Dallas, Georgia. This policy explains what information we collect when you visit our website or place an order, and how we use it.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "Order information: your name, email address, shipping address, phone number (if provided), and the items you purchase.",
      "Payment information: payments are processed securely by Stripe. We never see or store your full card number.",
      "Newsletter: if you sign up, we collect your email address to send you updates and offers.",
      "Messages: if you contact us by email, or use our \"Ask Ubuntu\" scent concierge, we receive the information you share in those messages.",
      "Technical information: like most websites, our hosting provider may automatically log basic data such as your IP address, browser type, and pages visited, for security and performance.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "To process, ship, and support your orders.",
      "To reply to your questions and requests.",
      "To send newsletter emails, only if you subscribed. You can unsubscribe at any time using the link in any email.",
      "To keep our website secure and working properly.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We do not sell your personal information. We share it only with trusted services that help us run the business:",
      "Stripe, to process payments securely.",
      "Shipping carriers such as USPS, to deliver your order.",
      "Vercel, which hosts our website.",
      "Anthropic, the AI provider that powers our \"Ask Ubuntu\" scent concierge. Messages you type into the concierge are sent to this service to generate a response. Please do not share sensitive personal information in the chat.",
      "We may also disclose information if required by law.",
    ],
  },
  {
    heading: "Cookies and local storage",
    body: [
      "Our website may use your browser's storage to remember items in your cart. We do not use advertising or tracking cookies.",
    ],
  },
  {
    heading: "Your choices and rights",
    body: [
      "You may ask us to access, correct, or delete the personal information we hold about you by emailing ubuntucandleco.shop@gmail.com. We will respond within 30 days.",
    ],
  },
  {
    heading: "Data security",
    body: [
      "We use trusted, secure providers and take reasonable steps to protect your information. No method of transmission over the internet is 100% secure, but we work to keep your information safe.",
    ],
  },
  {
    heading: "Children's privacy",
    body: [
      "Our website is not intended for children under 13, and we do not knowingly collect information from them.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time. Changes will be posted on this page with a new \"Last updated\" date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif font-medium text-4xl text-espresso text-center">
        Privacy Policy
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
        Questions about your privacy? Contact us at{" "}
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