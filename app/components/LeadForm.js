"use client";

import { useState } from "react";

const SEGMENTS = [
  "Sweet Shop / Reseller",
  "Corporate / HR Gifting",
  "Wedding Planner",
  "Other",
];

export default function LeadForm({ compact = false }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [segment, setSegment] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, segment }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setFeedback(data.message);
        setName("");
        setPhone("");
        setSegment("");
      } else {
        setStatus("error");
        setFeedback(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold/40 bg-cream p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-3xl">
          🍫
        </div>
        <h3 className="font-serif text-2xl text-choco">Request received!</h3>
        <p className="mt-3 text-choco-soft">{feedback}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-gold underline underline-offset-4 hover:text-choco"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-choco-soft">
            Your name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Priya Sharma"
            className="w-full rounded-xl border border-choco/15 bg-white px-4 py-3 text-choco outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-choco-soft">
            Phone number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit mobile"
            className="w-full rounded-xl border border-choco/15 bg-white px-4 py-3 text-choco outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </div>
      </div>

      {!compact && (
        <div>
          <label className="mb-1.5 block text-sm font-medium text-choco-soft">
            I am a…
          </label>
          <div className="flex flex-wrap gap-2">
            {SEGMENTS.map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => setSegment(s)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  segment === s
                    ? "border-gold bg-gold/15 text-choco"
                    : "border-choco/15 bg-white text-choco-soft hover:border-gold/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative w-full overflow-hidden rounded-xl bg-choco px-6 py-3.5 font-medium text-cream transition hover:bg-choco-soft disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Get a Bulk Quote →"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-rose">{feedback}</p>
      )}

      <p className="text-center text-xs text-choco-soft/70">
        We'll only use your number to discuss your order. No spam, ever.
      </p>
    </form>
  );
}
