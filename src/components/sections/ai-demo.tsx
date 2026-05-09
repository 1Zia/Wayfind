"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

/* ─── Response engine ─── */
const RESPONSES: { keywords: string[]; reply: string }[] = [
  {
    keywords: ["website", "site", "web"],
    reply:
      "Our website packages start from PKR 50,000 for a clean 5-page professional site. Industry-specific packages (clinic, gym, restaurant, school) go from PKR 70K–150K and go live in 10–14 days. Want to see examples from your industry?",
  },
  {
    keywords: ["price", "cost", "pkr", "fee", "how much", "charges", "rate"],
    reply:
      "Transparent pricing: Website from PKR 50K · CRM from PKR 80K · AI Chatbot from PKR 60K · SEO from PKR 25K/month · Ads from PKR 30K/month. Bundle packages save 25–30%. Book a free call for your custom quote!",
  },
  {
    keywords: ["ai", "bot", "chatbot", "automation", "artificial"],
    reply:
      "We build AI assistants trained on your business — handling queries 24/7, booking appointments, qualifying leads and sending follow-ups automatically. Most clients reduce admin work by 50–70% within the first month.",
  },
  {
    keywords: ["seo", "rank", "google", "search", "ranking"],
    reply:
      "Our SEO includes keyword research, on-page optimization, technical fixes, Google Business management, local citations and monthly ranking reports. Most clients reach page 1 within 6–10 weeks.",
  },
  {
    keywords: ["ads", "meta", "facebook", "campaign", "instagram", "paid"],
    reply:
      "We run ROI-focused Google and Meta campaigns — creative, targeting, A/B testing, bidding and reporting all included. Average clients see 3–5× return on ad spend within 90 days.",
  },
  {
    keywords: ["contact", "whatsapp", "address", "location", "office", "where"],
    reply:
      "📍 B-17, B1 Markaz, Islamabad | 📧 hello@wayfind.pk | 📱 +92 300 000 0000 | 🕐 Mon–Sat 9am–7pm PKT. Book a free 30-minute strategy call anytime!",
  },
  {
    keywords: ["time", "long", "days", "weeks", "when", "timeline", "deadline", "fast"],
    reply:
      "Timelines: Website only: 10–14 days · Website + CRM: 3–4 weeks · Website + AI + CRM: 4–6 weeks · Full digital setup: 4–8 weeks. We always provide a clear milestone plan before starting.",
  },
];

const DEFAULT_REPLY =
  "WayFind builds complete digital growth systems — websites, AI, CRM, SEO and ads, all working as one engine for your business. What would you like to know? 🚀";

function getReply(input: string): string {
  const lower = input.toLowerCase();
  for (const { keywords, reply } of RESPONSES) {
    if (keywords.some((kw) => lower.includes(kw))) return reply;
  }
  return DEFAULT_REPLY;
}

/* ─── Types ─── */
type Message = { role: "user" | "ai"; text: string; id: number };

let msgId = 0;

const FEATURES = [
  "Handles customer queries automatically 24/7",
  "Books appointments on your calendar",
  "Works on website, WhatsApp, Facebook & Instagram",
  "Gets smarter with every conversation",
];

export function AiDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hi! I'm WayFind AI. Ask me about our services, pricing, timelines, or anything else 👋",
      id: ++msgId,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const send = useCallback(() => {
    const text = input.trim();
    if (!text || isTyping) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text, id: ++msgId }]);
    setIsTyping(true);
    setTimeout(() => {
      const reply = getReply(text);
      setMessages((prev) => [...prev, { role: "ai", text: reply, id: ++msgId }]);
      setIsTyping(false);
    }, 1200 + Math.random() * 600);
  }, [input, isTyping]);

  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    [send],
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left — Copy */}
        <div>
          <SectionEyebrow>AI in Action</SectionEyebrow>
          <h2 className="mt-6 font-display text-display-md max-w-xl text-balance leading-none tracking-tight">
            This is the AI we build into your business.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Every business we work with gets an AI assistant trained on their
            products, team and processes. Try it yourself — this bot knows
            everything about WayFind.
          </p>

          <ul className="mt-10 space-y-4">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                  aria-hidden
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-foreground/80">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Chat widget */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/5">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
              <span className="text-sm text-accent" aria-hidden>◈</span>
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-card bg-green-500" />
            </div>
            <div>
              <p className="text-[13px] font-medium">WayFind AI</p>
              <p className="text-[11px] text-muted-foreground">Always online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex h-80 flex-col gap-3 overflow-y-auto px-5 py-5 md:h-96">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-tr-sm bg-accent text-white"
                        : "rounded-tl-sm bg-muted text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-muted px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
                        style={{ animationDelay: `${i * 150}ms` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2.5 transition-colors focus-within:border-foreground">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder="Ask about pricing, timelines, services…"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                aria-label="Chat input"
              />
              <button
                onClick={send}
                disabled={!input.trim() || isTyping}
                data-cursor-hover
                aria-label="Send message"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-opacity disabled:opacity-40"
              >
                <Send size={13} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
