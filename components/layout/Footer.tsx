import Link from "next/link";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All candles", href: "/shop" },
      { label: "Gifting", href: "/gifting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/our-story" },
      { label: "Candle care", href: "/candle-care" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
            { label: "FAQ", href: "/contact" },
      { label: "Shipping & returns", href: "/shipping-returns" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-6xl-content px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="font-serif text-xl">Ubuntu Candle Co.</p>
          <p className="font-sans text-sm text-bronze mt-3">I am because we are.</p>
          <div className="flex gap-4 mt-6 font-sans text-xs text-bronze">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Pinterest</a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="font-sans text-xs tracking-widest uppercase text-bronze">{col.title}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-sm text-cream/85 hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
