"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { recommendCandle, type Feeling, type Family } from "@/data/quizLogic";
import type { Recommendation } from "@/data/quizLogic";

function QuizQuestion<T extends string>({
  title,
  options,
  onSelect,
  step,
  total,
}: {
  title: string;
  options: T[];
  onSelect: (opt: T) => void;
  step: number;
  total: number;
}) {
  return (
    <div>
      <p className="font-sans text-xs tracking-widest uppercase text-olive">
        Step {step} of {total}
      </p>
      <h3 className="font-serif font-medium text-2xl text-espresso mt-2">{title}</h3>
      <div className="grid grid-cols-2 gap-3 mt-6">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className="font-sans text-sm text-espresso bg-cream border border-sand hover:border-terracotta px-4 py-3.5 text-left transition-colors"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function RecommendationResult({ result, onRestart }: { result: Recommendation; onRestart: () => void }) {
  const { candle, why } = result;
  return (
    <div>
      <p className="font-sans text-xs tracking-widest uppercase text-olive">Your Ubuntu scent</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 items-center">
        <div className="h-[220px] relative" style={{ background: candle.tone }}>
          <Image src={candle.image} alt={candle.name} fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div>
          <h3 className="font-serif font-medium text-3xl text-espresso">{candle.name}</h3>
          <p className="font-sans text-sm text-espresso/75 mt-2.5 leading-relaxed">{candle.blurb}</p>
          <p className="font-sans text-sm text-terracotta mt-3 italic">{why}</p>
          <div className="flex gap-3 mt-6">
            <Link href={`/shop/${candle.slug}`} className="bg-espresso text-cream font-sans text-sm px-6 py-3">
              Shop this candle
            </Link>
            <button
              onClick={onRestart}
              className="border border-espresso text-espresso font-sans text-sm px-6 py-3"
            >
              Retake quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuizFlow() {
  const [feeling, setFeeling] = useState<Feeling | null>(null);
  const [result, setResult] = useState<Recommendation | null>(null);

  const restart = () => {
    setFeeling(null);
    setResult(null);
  };

  return (
    <div className="mt-10 p-8 bg-sand min-h-[280px]">
      {!feeling && (
        <QuizQuestion<Feeling>
          title="What feeling do you want to create?"
          options={["Calm", "Warmth", "Freshness", "Comfort", "Romance"]}
          onSelect={setFeeling}
          step={1}
          total={2}
        />
      )}

      {feeling && !result && (
        <QuizQuestion<Family>
          title="What fragrance family do you prefer?"
          options={["Fresh", "Woody", "Sweet", "Spiced", "Earthy"]}
          onSelect={(family) => setResult(recommendCandle(feeling, family))}
          step={2}
          total={2}
        />
      )}

      {result && <RecommendationResult result={result} onRestart={restart} />}
    </div>
  );
}