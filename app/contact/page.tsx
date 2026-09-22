export const metadata = { title: "Contact — Ubuntu Candle Co." };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="font-serif font-medium text-4xl text-espresso">Contact us</h1>
      <p className="font-sans text-base text-espresso/80 mt-2">
        Questions about an order, a gift, or a fragrance? We'd love to hear from you.
      </p>

      <form className="mt-10 flex flex-col gap-5">
        <input
          placeholder="Your name"
          className="font-sans text-sm px-4 py-3 border border-sand bg-cream text-espresso"
        />
        <input
          type="email"
          placeholder="name@email.com"
          className="font-sans text-sm px-4 py-3 border border-sand bg-cream text-espresso"
        />
        <textarea
          placeholder="How can we help?"
          rows={5}
          className="font-sans text-sm px-4 py-3 border border-sand bg-cream text-espresso"
        />
        <button
          type="submit"
          className="self-start bg-espresso text-cream font-sans text-sm px-8 py-3.5"
        >
          Send message
        </button>
      </form>
    </main>
  );
}
