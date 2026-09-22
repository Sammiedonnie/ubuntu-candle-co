"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submit = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h2 className="font-serif font-medium text-3xl text-espresso">Join the Ubuntu community</h2>
        <p className="font-sans text-base text-espresso/80 mt-3">
          Be the first to discover new fragrances, stories and limited collections.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-olive mt-6">You're on the list.</p>
        ) : (
          <div className="mt-6">
            <div className="flex justify-center gap-3 flex-wrap">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className="font-sans text-sm px-4 py-3 border border-bronze bg-cream text-espresso min-w-[240px]"
              />
              <button
                onClick={submit}
                className="bg-espresso text-cream font-sans text-sm px-8 py-3"
              >
                Join the community
              </button>
            </div>
            {error && <p className="font-sans text-xs text-red-700 mt-2">{error}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
