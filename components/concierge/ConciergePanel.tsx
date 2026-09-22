"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Message = { role: "user" | "assistant"; text: string };

const examplePrompts = [
  "I need something relaxing for my bedroom.",
  "I want a warm candle for date night.",
  "I need a candle as a housewarming gift.",
];

function ConciergePanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Tell me the mood, room or occasion you're shopping for, and I'll help you find your candle.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const history = messages;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data = await res.json();
      const reply = data.reply || "Sorry, I couldn't come up with a response. Please try again.";
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col w-[340px] max-h-[480px] bg-cream border border-sand shadow-2xl">
      <div className="flex items-center justify-between px-5 py-4 bg-espresso">
        <span className="font-serif text-cream text-base">Ubuntu Scent Concierge</span>
        <button onClick={onClose} aria-label="Close concierge" className="text-cream">
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`font-sans text-sm px-3 py-2 leading-relaxed max-w-[85%] ${
              m.role === "user"
                ? "self-end bg-terracotta text-cream"
                : "self-start bg-sand text-espresso"
            }`}
          >
            {m.text}
          </div>
        ))}

        {loading && (
          <div className="font-sans text-sm px-3 py-2 self-start bg-sand text-espresso/60">
            Thinking...
          </div>
        )}

        {messages.length === 1 && (
          <div className="flex flex-col gap-2 mt-2">
            {examplePrompts.map((p) => (
              <button
                key={p}
                onClick={() => send(p)}
                className="font-sans text-xs text-espresso border border-sand px-3 py-2 text-left"
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 px-4 py-3 border-t border-sand">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder="Describe the mood or occasion..."
          className="flex-1 font-sans text-sm bg-transparent outline-none text-espresso"
        />
        <button onClick={() => send(input)} aria-label="Send" className="text-terracotta">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}

export default function ConciergeButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <ConciergePanel onClose={() => setOpen(false)} />}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-terracotta text-cream font-sans text-sm px-5 py-3 shadow-lg"
      >
        <MessageCircle size={18} />
        Ask Ubuntu
      </button>
    </>
  );
}