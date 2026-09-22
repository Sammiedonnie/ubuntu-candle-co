import { Wind, Flame, Eye, Leaf } from "lucide-react";

export const metadata = { title: "Candle Care — Ubuntu Candle Co." };

const careSteps = [
  { icon: Wind, text: "Trim the wick to a quarter inch before each burn." },
  { icon: Flame, text: "Allow the first burn to create a full, even melt pool." },
  { icon: Eye, text: "Never leave a burning candle unattended." },
  { icon: Leaf, text: "Keep candles away from drafts, and don't burn for more than 4 hours at a time." },
];

export default function CandleCarePage() {
  return (
    <main className="mx-auto max-w-6xl-content px-6 py-24">
      <h1 className="font-serif font-medium text-4xl text-espresso text-center">Candle care</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">
        {careSteps.map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex flex-col items-start">
            <Icon size={22} className="text-terracotta" />
            <p className="font-sans text-sm text-espresso/80 mt-3.5 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
