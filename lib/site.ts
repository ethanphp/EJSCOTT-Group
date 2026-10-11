// The live host. ejscott.co.uk redirects here, so canonicals and the sitemap must use it.
export const SITE_URL = "https://www.ejscott.co.uk";
// Link-preview image for WhatsApp, iMessage, Facebook and LinkedIn. Pages that set
// their own openGraph replace the layout's, so each one includes this explicitly.
export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "EJSCOTT Group: websites, online booking and apps for local businesses",
};
export const PHONE_DISPLAY = "07301 573293";
export const PHONE_TEL = "tel:+447301573293";
export const PHONE_E164 = "+447301573293";
export const WHATSAPP = `https://wa.me/447301573293?text=${encodeURIComponent(
  "Hi Ethan, I'd like to chat about a website for my business."
)}`;
export const REPLY_PROMISE = "I reply to every enquiry the same working day.";

export type Billing = "monthly" | "once";

// All prices live here. Edit these and the pricing section and FAQs follow.
export const plans = [
  {
    name: "Starter website",
    need: "New website",
    audience: "For sole traders and small local businesses.",
    price: {
      monthly: { headline: "£39", unit: "/month", detail: "£99 deposit, then monthly. 12-month minimum." },
      once: { headline: "£595", unit: "one-off", detail: "Then £15/month for hosting and changes." },
    },
    features: [
      "Up to 5 pages, designed around your business",
      "Looks great on phones",
      "Contact form, click-to-call and map",
      "Set up so local customers can find you on Google",
      "Hosting, security and small changes, all handled",
    ],
    featured: false,
  },
  {
    name: "Website + bookings",
    need: "Website + bookings",
    audience: "For salons, barbers, tutors and anyone who takes appointments.",
    price: {
      monthly: { headline: "£59", unit: "/month", detail: "£149 deposit, then monthly. 12-month minimum." },
      once: { headline: "£995", unit: "one-off", detail: "Then £25/month for hosting and changes." },
    },
    features: [
      "Everything in Starter, up to 8 pages",
      "Online booking, open 24/7",
      "Customers get instant confirmations",
      "You set your services, prices and hours",
      "Changes done first, ahead of the queue",
    ],
    featured: true,
  },
  {
    name: "Shops, apps & custom",
    need: "App or custom software",
    audience: "For online shops, apps and bigger ideas.",
    price: {
      monthly: { headline: "From £2,500", unit: "", detail: "Fixed quote, paid in 2–3 stages. Support from £49/month." },
      once: { headline: "From £2,500", unit: "", detail: "Fixed quote, paid in 2–3 stages. Support from £49/month." },
    },
    features: [
      "Online shops that take payments",
      "iPhone, Android and web apps",
      "Customer portals and internal tools",
      "One fixed price, agreed before we start",
      "Ongoing support, so it keeps running",
    ],
    featured: false,
  },
];

export type PlanNeed = (typeof plans)[number]["need"];

// Referral rewards. Change them here and the referral page, banner and FAQ follow.
export const referral = {
  clientReward: "a month free",
  otherReward: "£50",
  friendDiscount: "£50 off",
};

export const promises = [
  "Free homepage design before you pay anything",
  "No hidden costs, ever",
  "Your web address is always yours",
  "Most websites live within a week",
];

export const needs = [
  "New website",
  "Website + bookings",
  "Online shop",
  "App or custom software",
  "Changes to my current website",
  "Not sure yet",
];

export const work = [
  {
    image: "/djstevedee.png",
    tag: "Events DJ · Letchworth",
    title: "Modern DJ Website",
    copy: "A modern, conversion-focused site showcasing DJ Steve's music, events, and services. Designed to increase enquiries and drive more regular bookings.",
    href: "https://www.djstevedee.co.uk",
  },
  {
    image: "/hempteach.png",
    tag: "Tutor · Hertfordshire",
    title: "Tutoring Business",
    copy: "A clean, trust-building website for a local tutor that highlights services, testimonials, and easy booking. Helping turn visitors into students.",
    href: "https://www.hempteach.co.uk",
  },
];

// Real client quotes only. Testimonial sections stay hidden until there's at least one.
export const testimonials: { quote: string; name: string; business: string }[] = [];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How much does a website cost?",
    a: "A Starter website is £99 to get going and then £39 a month, or £595 if you'd rather pay once. Booking sites start at £59 a month. Online shops and apps are quoted at a fixed price, from £2,500. You'll always know the full cost before anything starts.",
  },
  {
    q: "Should I pay monthly or all at once?",
    a: "Monthly keeps the upfront cost low and includes everything: hosting, security and changes. Paying once costs more on day one but less over time, with a small monthly fee for hosting and changes. Both get you the same website.",
  },
  {
    q: "What's the free homepage design?",
    a: "Before you pay anything, I'll design your homepage so you can see exactly what you're getting. If you love it, you pay the deposit and I build the rest. If not, you walk away and owe nothing.",
  },
  {
    q: "How long does it take?",
    a: "Most websites are live within a week of getting your details and photos. Booking sites, shops and apps take longer, and I'll give you a date before we start.",
  },
  {
    q: "What's included in the monthly fee?",
    a: "Hosting (keeping your site online), security, backups, and small changes whenever you need them, like new prices, photos or opening hours. Just text or email me.",
  },
  {
    q: "Do I own my website?",
    a: "Your web address and everything you've written or photographed is always yours. If you pay once, the whole site is yours. On a monthly plan, you can take the site with you once the first 12 months are up.",
  },
  {
    q: "Do I need a web address or anything technical?",
    a: "No. I'll sort the web address, email and hosting for you, registered in your name. You don't need to know anything technical.",
  },
  {
    q: "Can you build an app for my business?",
    a: "Yes. iPhone and Android apps, web apps, customer portals and internal tools. Tell me what you want it to do and I'll come back with a fixed price and plain-English plan.",
  },
  {
    q: "Do you have a referral scheme?",
    a: `Yes. Refer a business and, once they go ahead, you get ${referral.clientReward} if you're a client, or ${referral.otherReward} if you're not. They get ${referral.friendDiscount} their deposit too. There's no limit on how many businesses you can refer.`,
  },
  {
    q: "I'm not in Hertfordshire. Can you still help?",
    a: "Of course. I'm based in Hertfordshire but work with businesses across the UK, by phone, video call or WhatsApp.",
  },
];

// Shared structured data for the business, reused on every page.
export const businessJsonLd = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "EJSCOTT Group",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  telephone: PHONE_E164,
  priceRange: "££",
  description:
    "Websites, booking systems and apps for small businesses, designed, hosted and looked after for you.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stevenage",
    addressRegion: "Hertfordshire",
    addressCountry: "GB",
  },
  founder: { "@type": "Person", name: "Ethan Scott" },
  areaServed: { "@type": "AdministrativeArea", name: "Hertfordshire" },
};
