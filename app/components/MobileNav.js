"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { whatsappLink } from "../site.config";

const LINKS = [
  { href: "#categories", label: "Collections" },
  { href: "#chocolates", label: "Chocolates" },
  { href: "#bulk", label: "Bulk Orders" },
  { href: "#corporate", label: "Corporate" },
  { href: "#why", label: "Why Us" },
  { href: "#enquire", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portals need the DOM, so only render the drawer after mount.
  useEffect(() => setMounted(true), []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // The overlay + drawer are portaled to <body> so a `backdrop-filter`
  // ancestor (the sticky header) can't trap this fixed element in its box.
  const drawer = (
    <div className={`fixed inset-0 z-[100] lg:hidden ${open ? "visible" : "invisible"}`} aria-hidden={!open}>
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <nav
        className={`absolute right-0 top-0 flex h-full w-72 max-w-[82%] flex-col bg-ivory shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-espresso/10 px-5 py-4">
          <span className="font-serif text-lg text-espresso">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-espresso transition hover:bg-espresso/5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-2 py-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-espresso-soft transition hover:bg-espresso/5 hover:text-espresso"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="mt-auto border-t border-espresso/10 p-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-espresso px-5 py-3 text-sm font-medium text-ivory transition hover:bg-gold"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-espresso transition hover:bg-espresso/5"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {mounted && createPortal(drawer, document.body)}
    </div>
  );
}
