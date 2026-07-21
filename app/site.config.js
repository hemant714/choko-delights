// ─────────────────────────────────────────────────────────────
// Central place to swap in real contact details later.
// Replace the placeholder values below with the client's actual info.
// ─────────────────────────────────────────────────────────────
export const site = {
  brand: "Choko Delights",
  tagline: "One Bite, Endless Cravings",

  // Business WhatsApp number (country code, no +, no spaces)
  whatsappNumber: "919729000800",
  whatsappMessage:
    "Hi Choko Delights! I'd like to place a bulk / corporate order. Please share details.",

  // Message specifically for the "Click for more Designs" button
  designsMessage:
    "Hi Choko Delights! Could you please share more designs and details?",

  // Phone (display + click-to-call)
  phoneDisplay: "073060 00005",
  phoneDial: "+917306000005",

  email: "chokodelights2@gmail.com",

  location:
    "Plot No. 20, Ramdarbar, Industrial Area Phase II, Chandigarh, 160002",

  social: {
    instagram: "https://www.instagram.com/chokodelights?igsh=ZnNtYncyOHc4aDB5",
    facebook: "https://www.facebook.com/share/19L4ACAmYs/?mibextid=wwXIfr",
  },
};

export const whatsappLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
