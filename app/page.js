import Image from "next/image";
import LeadForm from "./components/LeadForm";
import Reveal from "./components/Reveal";
import { site, whatsappLink } from "./site.config";

const segments = [
  {
    icon: "🏪",
    title: "Sweet Shops & Resellers",
    desc: "Stock premium handcrafted chocolates and ready-to-sell hampers at wholesale rates. Consistent quality, reliable supply, festive-ready packaging.",
  },
  {
    icon: "🏢",
    title: "Corporate & HR Gifting",
    desc: "Impress clients and reward teams with customised, brandable gift trays. Diwali, onboarding, milestones — we handle volume with ease.",
  },
  {
    icon: "💍",
    title: "Wedding Planners",
    desc: "Elegant favour boxes and decor trays that match your palette. Bulk quantities delivered on schedule, styled to wow every guest.",
  },
];

const products = [
  {
    name: "Pearl Paisley Tray Hamper",
    note: "Signature gifting hamper",
    price: "from ₹799",
  },
  {
    name: "Golden Handle Decor Tray",
    note: "Reusable premium tray",
    price: "from ₹445",
  },
  {
    name: "Aam Berry Chocolates",
    note: "Handcrafted, small-batch",
    price: "from ₹499",
  },
  {
    name: "Almond Crunch",
    note: "Best-selling classic",
    price: "from ₹499",
  },
  {
    name: "Butter Scotch",
    note: "Crowd-favourite flavour",
    price: "from ₹499",
  },
  {
    name: "Custom Curated Baskets",
    note: "Built to your theme & budget",
    price: "on request",
  },
];

const steps = [
  { n: "01", t: "Tell us your need", d: "Quantity, occasion, budget & timeline." },
  { n: "02", t: "Get a curated quote", d: "We design options that fit your brief." },
  { n: "03", t: "Approve & customise", d: "Add branding, ribbons, cards & flavours." },
  { n: "04", t: "Delivered on time", d: "Packed beautifully, shipped across India." },
];

const stats = [
  { k: "50,000+", v: "chocolates crafted" },
  { k: "500+", v: "corporate & event orders" },
  { k: "48 hrs", v: "avg. quote turnaround" },
  { k: "100%", v: "handcrafted, fresh" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-40 border-b border-choco/10 bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Choko Delights — true artisan chocolates"
              width={732}
              height={646}
              priority
              className="h-14 w-auto drop-shadow-sm sm:h-16"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-choco-soft md:flex">
            <a href="#segments" className="transition hover:text-choco">
              Who we serve
            </a>
            <a href="#products" className="transition hover:text-choco">
              Range
            </a>
            <a href="#how" className="transition hover:text-choco">
              How it works
            </a>
            <a href="#enquire" className="transition hover:text-choco">
              Contact
            </a>
          </nav>
          <a
            href="#enquire"
            className="rounded-full bg-choco px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-choco-soft"
          >
            Bulk Enquiry
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        id="top"
        className="relative bg-gradient-to-b from-cream via-cream to-cream-deep"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-rose/10 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
              Bulk & Corporate Orders
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight text-choco text-balance sm:text-5xl md:text-6xl">
              Gift chocolate that people{" "}
              <span className="text-gold italic">actually remember</span>.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-choco-soft sm:mt-6 sm:text-lg">
              Handcrafted chocolates and thoughtfully curated hampers — supplied
              in volume to sweet shops, corporate teams and wedding planners
              across India.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#enquire"
                className="rounded-full bg-choco px-7 py-3.5 text-center font-medium text-cream shadow-lg shadow-choco/20 transition hover:bg-choco-soft"
              >
                Get a Bulk Quote →
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-choco/20 bg-white/70 px-7 py-3.5 text-center font-medium text-choco transition hover:border-gold"
              >
                Chat on WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-choco-soft">
              <span className="text-gold">★★★★★</span> Trusted for beautiful
              packing, great variety & budget-friendly quality.
            </p>
          </div>

          <div className="reveal relative">
            <div className="relative rounded-[2rem] border border-gold/20 bg-white/50 p-3 shadow-2xl shadow-choco/10 backdrop-blur">
              <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-choco via-choco-soft to-[#7a5236] px-8 text-center">
                <Image
                  src="/logo.png"
                  alt="Choko Delights"
                  width={732}
                  height={646}
                  priority
                  className="w-56 max-w-[70%]"
                />
                <div className="gold-line mt-6 h-px w-40" />
                <p className="mt-5 font-serif text-2xl italic text-cream">
                  {site.tagline}
                </p>
                <p className="mt-3 text-sm text-cream/70">
                  Handcrafted in Chandigarh · Delivered nationwide
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-gold/30 bg-cream px-5 py-3 shadow-xl">
              <p className="text-2xl font-semibold text-choco">Custom</p>
              <p className="text-xs text-choco-soft">branding & packaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-choco/10 bg-choco text-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="text-center">
              <p className="font-serif text-3xl text-gold-soft md:text-4xl">
                {s.k}
              </p>
              <p className="mt-1 text-sm text-cream/70">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Segments ── */}
      <section id="segments" className="mx-auto max-w-6xl px-5 py-16 sm:py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Built for businesses
          </p>
          <h2 className="mt-3 font-serif text-3xl text-choco text-balance sm:text-4xl md:text-5xl">
            One partner for every kind of bulk order
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 md:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="group h-full rounded-3xl border border-choco/10 bg-white p-8 transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-choco/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream-deep text-3xl">
                  {s.icon}
                </div>
                <h3 className="mt-6 font-serif text-xl text-choco sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-choco-soft">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products" className="bg-cream-deep py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-gold">
                Our range
              </p>
              <h2 className="mt-3 font-serif text-3xl text-choco sm:text-4xl md:text-5xl">
                Chocolates, hampers & decor trays
              </h2>
            </div>
            <a
              href="#enquire"
              className="text-sm font-medium text-gold underline underline-offset-4 hover:text-choco"
            >
              Request the full catalogue →
            </a>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-choco/10 bg-white p-6 transition hover:border-gold/50">
                  <div>
                    <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-cream to-cream-deep ring-1 ring-choco/5" />
                    <h3 className="font-serif text-xl text-choco">{p.name}</h3>
                    <p className="mt-1 text-sm text-choco-soft">{p.note}</p>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-gold">
                    {p.price}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-choco-soft">
            Prices shown are retail references — bulk & corporate pricing is
            customised to your quantity.
          </p>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" className="mx-auto max-w-6xl px-5 py-16 sm:py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Simple process
          </p>
          <h2 className="mt-3 font-serif text-3xl text-choco sm:text-4xl md:text-5xl">
            From enquiry to doorstep
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="relative h-full rounded-3xl border border-choco/10 bg-white p-7">
                <span className="font-serif text-5xl text-gold/30">{s.n}</span>
                <h3 className="mt-3 font-serif text-xl text-choco">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-choco-soft">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Enquiry / CTA ── */}
      <section id="enquire" className="bg-choco py-16 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-gold-soft">
              Let's talk volume
            </p>
            <h2 className="mt-3 font-serif text-3xl text-cream text-balance sm:text-4xl md:text-5xl">
              Get a custom bulk quote today
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-cream/70">
              Drop your name and number — our team writes it down and reaches out
              with curated options and pricing for your order.
            </p>

            <div className="mt-8 space-y-4 text-cream/90">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-gold-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                </span>
                WhatsApp us
              </a>
              <a
                href={`tel:${site.phoneDial}`}
                className="flex items-center gap-3 transition hover:text-gold-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  📞
                </span>
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition hover:text-gold-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  ✉️
                </span>
                {site.email}
              </a>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  📍
                </span>
                {site.location}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-cream p-6 shadow-2xl shadow-black/20 md:p-8">
            <h3 className="font-serif text-2xl text-choco">
              Request a bulk quote
            </h3>
            <p className="mb-6 mt-1 text-sm text-choco-soft">
              Takes 20 seconds. No obligation.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-cream-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
          <Image
            src="/logo.png"
            alt="Choko Delights"
            width={732}
            height={646}
            className="h-14 w-auto"
          />
          <p className="text-sm text-choco-soft">{site.tagline}</p>
          <div className="flex gap-5 text-sm text-choco-soft">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-choco"
            >
              Instagram
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-choco"
            >
              Facebook
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-choco"
            >
              YouTube
            </a>
          </div>
        </div>
        <div className="border-t border-choco/10 py-5 text-center text-xs text-choco-soft/70">
          © {new Date().getFullYear()} Choko Delights. All rights reserved.
        </div>
      </footer>

      {/* ── Floating WhatsApp ── */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] shadow-xl shadow-black/25 transition-all duration-300 hover:gap-2 hover:pr-5 hover:shadow-2xl"
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-white"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>
        </span>
        <span className="max-w-0 whitespace-nowrap text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100">
          Chat with us
        </span>
      </a>
    </main>
  );
}
