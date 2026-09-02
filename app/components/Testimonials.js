"use client";

import { useCallback, useEffect, useState } from "react";

export default function Testimonials({ items = [] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  const go = useCallback(
    (n) => setIndex(((n % count) + count) % count),
    [count]
  );

  // Auto-advance every 5s unless paused.
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(id);
  }, [paused, count]);

  if (!count) return null;
  const t = items[index];

  return (
    <div
      className="relative mx-auto mt-12 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-3xl border border-espresso/10 bg-ivory px-6 py-10 text-center shadow-sm sm:px-12 sm:py-12">
        {/* decorative quote mark */}
        <span className="pointer-events-none absolute left-6 top-3 select-none font-serif text-7xl leading-none text-gold/20">
          &ldquo;
        </span>

        <div className="text-lg tracking-widest text-gold-bright">★★★★★</div>

        <blockquote
          key={index}
          className="reveal mx-auto mt-5 max-w-2xl font-serif text-xl italic leading-relaxed text-espresso sm:text-2xl"
        >
          {t.quote}
        </blockquote>

        <figcaption className="mt-7">
          <p className="font-medium text-espresso">{t.name}</p>
          <p className="text-sm text-espresso-soft">{t.role}</p>
        </figcaption>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(index - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso transition hover:border-gold hover:text-gold"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-gold" : "w-2 bg-espresso/20 hover:bg-espresso/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(index + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso transition hover:border-gold hover:text-gold"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
