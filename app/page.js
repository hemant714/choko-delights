import Image from "next/image";
import LeadForm from "./components/LeadForm";
import Reveal from "./components/Reveal";
import { site, whatsappLink } from "./site.config";

/* ── Reusable icons ── */
function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}
function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function FacebookIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

const CATEGORIES = [
  {
    title: "Wedding Gifting",
    img: "/images/wedding.png",
    desc: "Heirloom-worthy hampers & favours that make every ceremony unforgettable.",
  },
  {
    title: "Festive Hampers",
    img: "/images/festive.png",
    desc: "Diwali, Rakhi, Eid & New Year - every celebration, wrapped in gold.",
  },
  {
    title: "Personalized Gifts",
    img: "/images/personalized.png",
    desc: "Bespoke trays & curated boxes, designed around your story.",
  },
  {
    title: "Premium Chocolates",
    img: "/images/chocolates.png",
    desc: "Small-batch, handcrafted chocolates in flavours worth remembering.",
  },
];

const WHY = [
  {
    title: "Premium Packaging",
    desc: "Every box, ribbon and tassel chosen to feel like a gift before it's opened.",
    icon: (
      <path d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V19.5m0-14.625A2.625 2.625 0 1114.625 7.5H12M3.75 7.5h16.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75H3.75A.75.75 0 013 10.5V8.25a.75.75 0 01.75-.75z" />
    ),
  },
  {
    title: "Customization",
    desc: "Colours, flavours, branding & scale - tailored entirely to your occasion.",
    icon: (
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    ),
  },
  {
    title: "Handcrafted Quality",
    desc: "Made in small batches, by hand - never mass-produced, always fresh.",
    icon: (
      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    ),
  },
  {
    title: "Luxury Presentation",
    desc: "Photo-worthy hampers that make an impression the moment they arrive.",
    icon: <path d="M6 3.75h12L21 9l-9 11.25L3 9l3-5.25zM3 9h18M9 3.75L12 9l3-5.25M12 9v11.25" />,
  },
  {
    title: "PAN India Delivery",
    desc: "Beautifully packed and delivered on time, to any corner of the country.",
    icon: (
      <>
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The packaging was beyond beautiful - our guests couldn't stop talking about it. It felt less like a gift and more like an experience.",
    name: "Ananya R.",
    role: "Wedding, Chandigarh",
  },
  {
    quote:
      "We ordered over 200 Diwali hampers for our team. Impeccable quality, delivered on time, and completely customised to our brand.",
    name: "Rohit M.",
    role: "HR Lead, Corporate Gifting",
  },
  {
    quote:
      "Delicious chocolates, stunning presentation and such an understanding team. Choko Delights is now our go-to for every celebration.",
    name: "Simran K.",
    role: "Repeat Client",
  },
];

const TRUST = [
  "Handcrafted with Love",
  "Premium Packaging",
  "Fully Customisable",
  "PAN India Delivery",
  "Luxury Hampers and Platters",
  "Wide variety of Chocolates",
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ── Announcement bar ── */}
      <div className="bg-espresso text-center text-[0.7rem] tracking-[0.22em] text-champagne uppercase">
        <div className="px-4 py-2">
          Premium Luxury Gifting · Handcrafted in Chandigarh · Delivered PAN India
        </div>
      </div>

      {/* ── Nav ── */}
      <header className="sticky top-0 z-40 border-b border-espresso/10 bg-ivory/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Choko Delights - true artisan chocolates"
              width={732}
              height={646}
              priority
              className="h-14 w-auto drop-shadow-sm sm:h-16"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-espresso-soft lg:flex">
            <a href="#categories" className="transition hover:text-espresso">Collections</a>
            <a href="#bulk" className="transition hover:text-espresso">Bulk Orders</a>
            <a href="#corporate" className="transition hover:text-espresso">Corporate</a>
            <a href="#why" className="transition hover:text-espresso">Why Us</a>
            <a href="#enquire" className="transition hover:text-espresso">Contact</a>
          </nav>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-medium text-ivory transition hover:bg-gold"
          >
            <WhatsAppIcon className="h-4 w-4 fill-current" />
            <span className="hidden sm:inline">WhatsApp</span> Enquiry
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="top" className="relative bg-gradient-to-b from-ivory via-ivory to-ivory-deep">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-64 h-80 w-80 rounded-full bg-beige/40 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:py-24">
          <Reveal>
            <div className="-mt-4 space-y-1.5 sm:-mt-8" aria-label="Choko Delights" role="img">
              <Image
                src="/word-choko.png"
                alt=""
                width={303}
                height={65}
                priority
                className="h-9 w-auto sm:h-11"
              />
              <Image
                src="/word-delights.png"
                alt=""
                width={415}
                height={65}
                priority
                className="h-9 w-auto sm:h-11"
              />
            </div>
            <span className="eyebrow mt-4 block">The Luxury Gifting House</span>
            <h1 className="mt-5 font-serif text-[2.6rem] leading-[1.06] tracking-tight text-espresso text-balance sm:text-6xl">
              Some Gifts are <span className="gold-text italic">Remembered</span> Long
              After the Last Bite.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-espresso-soft sm:text-lg">
              Handcrafted chocolates and couture{" "}
              <span className="font-semibold text-espresso">Hampers</span>,
              curated for{" "}
              <span className="font-semibold text-espresso">Weddings</span>,
              Festivals and the moments that matter.{" "}
              <span className="font-semibold text-espresso">Choko Delights</span>{" "}
              isn't just Chocolate - it's an experience, beautifully wrapped.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#enquire"
                className="rounded-full bg-espresso px-7 py-3.5 text-center font-medium tracking-wide text-ivory shadow-lg shadow-espresso/20 transition hover:bg-gold"
              >
                Click for more Designs
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-espresso/20 bg-white/70 px-7 py-3.5 text-center font-medium text-espresso transition hover:border-gold"
              >
                <WhatsAppIcon className="h-5 w-5 fill-[#25D366]" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-espresso-soft">
              <span className="text-gold-bright">★★★★★</span>
              <span>Loved for luxury packaging, great variety & handcrafted quality.</span>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 shadow-2xl shadow-espresso/15">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/hero-peacock.png"
                  alt="Luxury Choko Delights wedding hamper basket"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute right-3 top-4 rounded-2xl border border-gold/30 bg-ivory/95 px-4 py-3 shadow-xl backdrop-blur sm:-right-3 sm:top-6">
              <p className="font-serif text-lg text-espresso">50 → 5,000+</p>
              <p className="text-[0.7rem] uppercase tracking-widest text-espresso-soft">
                hampers per order
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust marquee ── */}
      <section className="border-y border-espresso/10 bg-sand py-4">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-10 pr-10 text-sm tracking-wide text-espresso-soft">
            {[...TRUST, ...TRUST].map((t, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                {t}
                <span className="text-gold">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section id="categories" className="mx-auto max-w-6xl px-5 py-16 sm:py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Our Collections</span>
          <h2 className="mt-4 font-serif text-3xl text-espresso text-balance sm:text-4xl md:whitespace-nowrap md:text-5xl">
            Curated For Life's Finest Occasions
          </h2>
          <div className="ornament mt-5">◆</div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <a href="#enquire" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-espresso/10 shadow-sm transition group-hover:shadow-xl group-hover:shadow-espresso/10">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/5 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                      <h3 className="font-serif text-xl">{c.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ivory/85">
                        {c.desc}
                      </p>
                      <span className="mt-3 inline-block text-xs font-medium uppercase tracking-widest text-gold-bright">
                        Enquire →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Brand experience band ── */}
      <section className="bg-ivory-deep py-16 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14">
          <Reveal className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/20 shadow-xl shadow-espresso/10">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/store.png"
                  alt="Choko Delights luxury store, Chandigarh"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 md:order-2">
            <span className="eyebrow">The Choko Experience</span>
            <h2 className="mt-4 font-serif text-3xl text-espresso text-balance sm:text-4xl">
              More Than Chocolate - A Feeling You Can Gift
            </h2>
            <p className="mt-5 leading-relaxed text-espresso-soft">
              Born in{" "}
              <span className="font-semibold text-espresso">Chandigarh</span>,{" "}
              <span className="font-semibold text-espresso">Choko Delights</span>{" "}
              was built on a simple belief: that a gift should feel as special as
              the person receiving it. Every hamper is hand-assembled, every
              chocolate crafted in small batches, and every detail - from the
              ribbon to the reveal - designed to delight.
            </p>
            <p className="mt-4 leading-relaxed text-espresso-soft">
              Whether it's a grand wedding, a festive celebration or a corporate
              milestone, we turn ordinary gifting into something unforgettable.
            </p>
            <a
              href="#categories"
              className="mt-7 inline-block rounded-full border border-espresso/25 px-7 py-3 font-medium text-espresso transition hover:border-gold hover:text-gold"
            >
              Explore Our Collections
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Bulk Orders ── */}
      <section id="bulk" className="relative overflow-hidden bg-espresso py-16 text-ivory sm:py-20 md:py-24">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-wine/20 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.28em] text-gold-soft">
              Bulk & Custom Gifting
            </span>
            <h2 className="mt-4 font-serif text-3xl text-ivory text-balance sm:text-4xl md:text-5xl">
              Planning A Bulk Order?
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ivory/75">
              Looking for customised bulk gifting for a wedding, a grand event or
              your entire team? From 50 to 5,000+ hampers, our team designs at
              scale - beautifully, and delivered PAN INDIA, on time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={`tel:${site.phoneDial}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-medium text-espresso transition hover:bg-gold-bright"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-medium text-white transition hover:brightness-105"
              >
                <WhatsAppIcon className="h-5 w-5 fill-white" />
                WhatsApp Now
              </a>
            </div>
            <p className="mt-5 text-sm text-ivory/60">
              Book Your Bulk Order today - customised, gift-ready and hassle-free.
            </p>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-3 sm:gap-4">
            {["/images/chocolates.png", "/images/potli.png", "/images/hearts.png", "/images/hamper-open.png"].map(
              (src) => (
                <div
                  key={src}
                  className="relative overflow-hidden rounded-2xl border border-gold/20 shadow-lg shadow-black/10"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={src}
                      alt="Bulk luxury chocolate hamper"
                      fill
                      sizes="(max-width: 768px) 45vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )
            )}
          </Reveal>
        </div>
      </section>

      {/* ── Corporate Gifting (secondary) ── */}
      <section id="corporate" className="mx-auto max-w-6xl px-5 py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/20 shadow-xl shadow-espresso/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/luxury-frame.png"
                  alt="Choko Delights corporate luxury hamper"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Corporate Gifting</span>
            <h2 className="mt-4 font-serif text-3xl text-espresso text-balance sm:text-4xl">
              Impress Clients. Delight Your Team.
            </h2>
            <p className="mt-5 leading-relaxed text-espresso-soft">
              Elevate every corporate occasion - Diwali, onboarding, appreciation
              and milestones - with branded, fully customisable hampers. Add your
              logo, choose your palette, and let us handle the volume with the
              same care we bring to every gift.
            </p>
            <ul className="mt-6 space-y-2 text-espresso-soft">
              {["Custom branding & personalised cards", "Volume pricing with premium finish", "Reliable, PAN-India dispatch"].map(
                (li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="mt-1 text-gold">◆</span>
                    {li}
                  </li>
                )
              )}
            </ul>
            <a
              href="#enquire"
              className="mt-7 inline-block rounded-full bg-espresso px-7 py-3.5 font-medium text-ivory transition hover:bg-gold"
            >
              Request a Custom Quote
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section id="why" className="bg-sand py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Choko Delights</span>
            <h2 className="mt-4 font-serif text-3xl text-espresso text-balance sm:text-4xl md:text-5xl">
              Luxury Is In Every Detail
            </h2>
            <div className="ornament mt-5">◆</div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-espresso/10 bg-ivory p-6 text-center transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-espresso/5">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gold">
                      {w.icon}
                    </svg>
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-espresso">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso-soft">
                    {w.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Loved & Trusted</span>
          <h2 className="mt-4 font-serif text-3xl text-espresso text-balance sm:text-4xl md:text-5xl">
            Words From Our Gifting Family
          </h2>
          <div className="ornament mt-5">◆</div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-2xl border border-espresso/10 bg-ivory p-7 shadow-sm">
                <div className="text-gold-bright">★★★★★</div>
                <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-espresso">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-espresso/10 pt-4">
                  <p className="font-medium text-espresso">{t.name}</p>
                  <p className="text-sm text-espresso-soft">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Enquiry / CTA ── */}
      <section id="enquire" className="relative overflow-hidden bg-espresso py-16 sm:py-20 md:py-28">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-gold-soft">
              Let's Create Something Beautiful
            </span>
            <h2 className="mt-4 font-serif text-3xl text-ivory text-balance sm:text-4xl md:text-5xl">
              Request A Custom Quote Today
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ivory/75">
              Share your name and number - our in-house team will reach out with
              curated options, pricing and ideas tailored to your occasion.
            </p>

            <div className="mt-8 space-y-4 text-ivory/90">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-gold-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]">
                  <WhatsAppIcon className="h-5 w-5 fill-white" />
                </span>
                Chat on WhatsApp
              </a>
              <a href={`tel:${site.phoneDial}`} className="flex items-center gap-3 transition hover:text-gold-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gold-soft">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition hover:text-gold-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">✉️</span>
                {site.email}
              </a>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">📍</span>
                <span className="pt-2 text-sm text-ivory/80">{site.location}</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-ivory p-6 shadow-2xl shadow-black/25 md:p-8">
            <h3 className="font-serif text-2xl text-espresso">Enquire now</h3>
            <p className="mb-6 mt-1 text-sm text-espresso-soft">
              Takes 20 seconds. No obligation.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-ivory-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 text-center md:flex-row md:text-left">
          <Image
            src="/logo.png"
            alt="Choko Delights"
            width={732}
            height={646}
            className="h-24 w-auto sm:h-28"
          />
          <p className="max-w-xs text-center text-sm text-espresso-soft">
            {site.tagline} - premium luxury gifting, handcrafted in Chandigarh.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md transition hover:scale-110"
              style={{
                background:
                  "linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
              }}
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md transition hover:scale-110"
            >
              <FacebookIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-espresso/10 py-5 text-center text-xs text-espresso-soft/70">
          © {new Date().getFullYear()} Choko Delights. All rights reserved.
        </div>
      </footer>

      {/* ── Floating WhatsApp ── */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center overflow-hidden rounded-full bg-[#25D366] shadow-xl shadow-black/25 transition-all duration-300 hover:pr-5 hover:shadow-2xl"
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center">
          <WhatsAppIcon className="h-7 w-7 fill-white" />
        </span>
        <span className="max-w-0 whitespace-nowrap text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100">
          Chat with us
        </span>
      </a>
    </main>
  );
}
