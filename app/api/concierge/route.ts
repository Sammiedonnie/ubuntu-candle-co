import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { candles } from "@/data/products";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

const productContext = candles
  .map(
    (c) =>
      `${c.name} ($${c.price}): ${c.blurb} Notes: ${c.notes.join(", ")}. Mood: ${c.mood}.`
  )
  .join("\n");

const systemPrompt = `You are the Ubuntu Scent Concierge for Ubuntu Candle Co., an African-inspired luxury candle brand with the tagline "I am because we are." You help customers find the right candle for their mood, room or occasion.

Here are the candles you can recommend:
${productContext}

Keep responses warm, concise (2-3 sentences), and always recommend one of the three candles above by name when appropriate. Never invent products that aren't listed here. Write in plain text only — do not use markdown formatting like asterisks or bullet points.`;

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const messages = [
      ...(history || []).map((h: { role: string; text: string }) => ({
        role: h.role,
        content: h.text,
      })),
      { role: "user", content: message },
    ];

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: systemPrompt,
      messages,
    });

    const textBlock = response.content.find((block) => block.type === "text");
    const rawReply = textBlock && "text" in textBlock ? textBlock.text : "I'm not sure how to help with that — could you tell me more about the mood or occasion?";
    const reply = rawReply.replace(/\*\*/g, "").replace(/\*/g, "");

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Concierge API error:", error);
    return NextResponse.json(
      { error: "Unable to get a response right now" },
      { status: 500 }
    );
  }
}