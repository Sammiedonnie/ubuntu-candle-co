import QuizFlow from "@/components/quiz/QuizFlow";

export const metadata = { title: "Scent Finder — Ubuntu Candle Co." };

export default function ScentFinderPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif font-medium text-4xl text-espresso text-center">
        Find your Ubuntu scent
      </h1>
      <QuizFlow />
    </main>
  );
}
