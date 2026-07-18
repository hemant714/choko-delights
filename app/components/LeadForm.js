"use client";

import { useState } from "react";

const SEGMENTS = [
  "Wedding Gifting",
  "Corporate / HR Gifting",
  "Festive / Personal",
  "Bulk / Reseller",
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
        body: JSON.stringify({
          name,
          phone,
          segment,
          sourceUrl:
            typeof window !== "undefined" ? window.location.href : "",
        }),
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
      <div className="rounded-2xl border border-gold/40 bg-ivory p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-3xl">
          ✨
        </div>
        <h3 className="font-serif text-2xl text-espresso">Thank you!</h3>
        <p className="mt-3 text-espresso-soft">{feedback}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-gold underline underline-offset-4 hover:text-espresso"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-espresso-soft">
            Your name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Priya Sharma"
            className="w-full rounded-xl border border-espresso/15 bg-white px-4 py-3 text-espresso outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-espresso-soft">
            Phone number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit mobile"
            className="w-full rounded-xl border border-espresso/15 bg-white px-4 py-3 text-espresso outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </div>
      </div>

      {!compact && (
        <div>
          <label className="mb-1.5 block text-sm font-medium text-espresso-soft">
            I'm enquiring about…
          </label>
          <div className="flex flex-wrap gap-2">
            {SEGMENTS.map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => setSegment(s)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  segment === s
                    ? "border-gold bg-gold/15 text-espresso"
                    : "border-espresso/15 bg-white text-espresso-soft hover:border-gold/50"
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
        className="w-full rounded-xl bg-espresso px-6 py-3.5 font-medium tracking-wide text-ivory transition hover:bg-gold disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Request a Custom Quote"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-wine">{feedback}</p>
      )}

      <p className="text-center text-xs text-espresso-soft/70">
        We'll only use your number to discuss your gifting. No spam, ever.
      </p>
    </form>
  );
}
