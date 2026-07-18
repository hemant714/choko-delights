// ─────────────────────────────────────────────────────────────
// Central place to swap in real contact details later.
// Replace the placeholder values below with the client's actual info.
// ─────────────────────────────────────────────────────────────
export const site = {
  brand: "Choko Delights",
  tagline: "One Bite, Endless Cravings",

  // Business WhatsApp number (country code, no +, no spaces)
  whatsappNumber: "917306000005",
  whatsappMessage:
    "Hi Choko Delights! I'd like to place a bulk / corporate order. Please share details.",

  // Phone (display + click-to-call)
  phoneDisplay: "073060 00005",
  phoneDial: "+917306000005",

  email: "chokodelights2@gmail.com",

  location:
    "Plot No. 20, Ramdarbar, Industrial Area Phase II, Chandigarh, 160002",

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

export const whatsappLink = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;
