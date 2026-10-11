"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import StickerBadge from "@/components/StickerBadge";
import TiltCard from "@/components/TiltCard";
import {
  Globe,
  CalendarCheck,
  Wrench,
  DeviceMobile,
  ArrowRight,
  Sparkle,
  Handshake,
  ShieldCheck,
  Check,
  Plus,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

const PHONE_DISPLAY = "07301 573293";
const PHONE_TEL = "tel:+447301573293";
const WHATSAPP = `https://wa.me/447301573293?text=${encodeURIComponent(
  "Hi Ethan, I'd like to chat about a website for my business."
)}`;
const REPLY_PROMISE = "I reply to every enquiry the same working day.";

const services = [
  {
    icon: Globe,
    num: "01",
    title: "A website, built & managed for you",
    copy: "Clean, mobile-friendly websites that showcase your business properly. We handle the design, hosting, and updates, so you just send us what you'd like changed.",
  },
  {
    icon: CalendarCheck,
    num: "02",
    title: "Online booking systems",
    copy: "Let customers book around the clock. Perfect for salons, barbers, therapists, tutors, and anyone tired of missed calls.",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Online shops & custom software",
    copy: "From e-commerce stores to internal tools that save you hours each week, we build software around exactly what your business needs.",
  },
  {
    icon: DeviceMobile,
    num: "04",
    title: "Apps for phones & the web",
    copy: "Got an app idea, or need a portal for your customers? We build iPhone, Android and web apps, explained in plain English and priced up front.",
  },
];

const work = [
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

// Real client quotes only. The section stays hidden until there's at least one.
const testimonials: { quote: string; name: string; business: string }[] = [];

type Billing = "monthly" | "once";

// All prices live here. Edit these and the pricing section and FAQ follow.
const plans = [
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

const promises = [
  "Free homepage design before you pay anything",
  "No hidden costs, ever",
  "Your web address is always yours",
  "Most websites live within a week",
];

const included = [
  { icon: Sparkle, title: "Design, build & hosting", copy: "All sorted, start to finish." },
  { icon: Handshake, title: "Ongoing updates", copy: "Text or email me what needs changing." },
  { icon: CalendarCheck, title: "Booking, where you need it", copy: "Streamlined scheduling for appointment-led businesses." },
  { icon: ShieldCheck, title: "Plain-English support", copy: "No tech jargon, ever." },
];

const faqs = [
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
    q: "I'm not in Hertfordshire. Can you still help?",
    a: "Of course. I'm based in Hertfordshire but work with businesses across the UK, by phone, video call or WhatsApp.",
  },
];

const needs = [
  "New website",
  "Website + bookings",
  "Online shop",
  "App or custom software",
  "Changes to my current website",
  "Not sure yet",
];

const emptyForm = { name: "", business: "", contact: "", need: "", message: "", website: "" };

const inputClass =
  "rounded-xl border-2 border-ink/15 bg-cream px-4 py-3 outline-none transition-colors focus:border-ink focus-visible:ring-4 focus-visible:ring-green/40";

export default function EJScottLanding() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sentName, setSentName] = useState("");
  const [billing, setBilling] = useState<Billing>("monthly");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function chooseNeed(need: string) {
    setForm((f) => ({ ...f, need }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSentName(form.name.split(" ")[0]);
        setStatus("sent");
        setForm(emptyForm);
      } else {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.error ?? "Something went wrong sending your message.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Couldn't connect. Check your internet and try again.");
      setStatus("error");
    }
  }

  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b-[2.5px] border-ink bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="EJSCOTT Group"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg border-2 border-ink"
              priority
            />
            <span className="font-display text-xl font-semibold tracking-tight">
              EJSCOTT Group
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            <a href="#services" className="text-[15px] font-medium text-ink/80 hover:text-ink">Services</a>
            <a href="#work" className="text-[15px] font-medium text-ink/80 hover:text-ink">Work</a>
            <a href="#pricing" className="text-[15px] font-medium text-ink/80 hover:text-ink">Pricing</a>
            <a href="#about" className="text-[15px] font-medium text-ink/80 hover:text-ink">About</a>
            <a href="#faq" className="text-[15px] font-medium text-ink/80 hover:text-ink">FAQ</a>
          </div>

          <a
            href="#contact"
            className="sticker-sm hidden rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none md:inline-block"
          >
            Get a free design
          </a>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b-[2.5px] border-ink">
          <div className="noise-bg pointer-events-none absolute inset-0 opacity-[0.35]" />
          <div className="mx-auto max-w-[1400px] px-5 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
            <div className="grid gap-14 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.05] tracking-tighter md:text-7xl">
                  Get your business{" "}
                  <StickerBadge color="green" rotate={-2}>
                    online
                  </StickerBadge>{" "}
                  and{" "}
                  <StickerBadge color="blue" rotate={2} className="mt-2">
                    looking the part
                  </StickerBadge>
                </h1>

                <Reveal delay={0.15}>
                  <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink/70 md:text-xl">
                    We design, build and manage your entire online
                    presence. Website, bookings, and updates, all handled
                    for you. Perfect for busy owners who&apos;d rather leave
                    the tech to us, wherever your business is based.
                  </p>
                </Reveal>

                <Reveal delay={0.25}>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <a
                      href="#contact"
                      className="sticker group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
                    >
                      Get your free design
                      <ArrowRight className="transition-transform group-hover:translate-x-1" weight="bold" />
                    </a>
                    <a
                      href="#pricing"
                      className="text-base font-semibold underline decoration-2 underline-offset-4 hover:text-blue"
                    >
                      See prices
                    </a>
                  </div>
                  <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/70">
                    <li className="flex items-center gap-1.5">
                      <Check weight="bold" className="text-green-deep" /> From £39/month
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check weight="bold" className="text-green-deep" /> No payment until you love the design
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check weight="bold" className="text-green-deep" /> Hertfordshire-based, UK-wide
                    </li>
                  </ul>
                </Reveal>
              </div>

              <Reveal delay={0.2} y={0} className="relative hidden md:block">
                <TiltCard className="sticker mx-auto w-full max-w-md rounded-3xl bg-white p-6">
                  <div className="flex items-center gap-2 border-b-2 border-ink/10 pb-4">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    <span className="ml-3 font-mono text-xs text-ink/40">yourbusiness.co.uk</span>
                  </div>
                  <div className="mt-5 space-y-3 font-mono text-sm">
                    <p className="text-ink/40">$ ejscott build</p>
                    <p><span className="text-green-deep">✓</span> site designed</p>
                    <p><span className="text-green-deep">✓</span> bookings connected</p>
                    <p><span className="text-green-deep">✓</span> hosting live</p>
                    <p className="text-ink/40">$ status</p>
                    <p className="rounded-lg bg-green/30 px-3 py-2 text-ink">
                      taking new customers
                    </p>
                  </div>
                </TiltCard>
                <div className="sticker-sm absolute -bottom-6 -left-6 rotate-[-6deg] rounded-2xl bg-blue px-5 py-3 text-sm font-semibold text-white">
                  Most sites live in a week
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                Services
              </p>
              <h2 className="mt-4 max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                We handle the tech, you run the business.
              </h2>
              <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-ink/70">
                Not confident with computers? No problem. We take care of your
                entire online presence, building it, hosting it, and keeping
                it up to date, so you can focus on what you do best.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.12}>
                  <div className="sticker h-full rounded-3xl bg-white p-8 transition-transform hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-ink bg-green">
                        <s.icon size={24} weight="bold" />
                      </div>
                      <span className="font-display text-sm font-semibold text-ink/30">{s.num}</span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink/65">{s.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="border-b-[2.5px] border-ink bg-ink px-5 py-24 text-cream md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green">
                Our work
              </p>
              <h2 className="mt-4 max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                Recent builds for real businesses.
              </h2>
              <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-cream/70">
                Helping business owners look professional and win more
                customers, both locally and beyond.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {work.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.12}>
                  <div className="group overflow-hidden rounded-3xl border-2 border-cream/15 transition-colors hover:border-green">
                    <div className="aspect-video overflow-hidden border-b-2 border-cream/15 bg-cream/5">
                      <Image
                        src={w.image}
                        alt={w.title}
                        width={800}
                        height={450}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-green">
                        {w.tag}
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold">{w.title}</h3>
                      <p className="mt-3 leading-relaxed text-cream/60">{w.copy}</p>
                      <a
                        href={w.href}
                        target="_blank"
                        rel="noreferrer"
                        className="sticker-sm mt-5 inline-block rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
                      >
                        View site
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {testimonials.length > 0 && (
              <div className="mt-16 grid gap-8 md:grid-cols-2">
                {testimonials.map((t, i) => (
                  <Reveal key={t.name} delay={i * 0.12}>
                    <figure className="h-full rounded-3xl border-2 border-cream/15 p-8">
                      <blockquote className="font-display text-xl leading-snug tracking-tight">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-5 text-sm text-cream/60">
                        <span className="font-semibold text-cream">{t.name}</span>, {t.business}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-blue">
                Pricing
              </p>
              <h2 className="mt-4 max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                Clear prices. No surprises.
              </h2>
              <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-ink/70">
                Spread the cost with a small deposit and a monthly fee, or pay
                once and own it outright. Either way, you see your free
                homepage design before you pay a penny.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                role="group"
                aria-label="Payment option"
                className="sticker-sm mt-10 inline-flex rounded-full bg-white p-1"
              >
                {(
                  [
                    ["monthly", "Deposit + monthly"],
                    ["once", "Pay once"],
                  ] as [Billing, string][]
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setBilling(value)}
                    aria-pressed={billing === value}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                      billing === value ? "bg-ink text-cream" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {plans.map((p, i) => {
                const price = p.price[billing];
                return (
                  <Reveal key={p.name} delay={i * 0.12}>
                    <div
                      className={`sticker relative flex h-full flex-col rounded-3xl p-8 ${
                        p.featured ? "bg-green" : "bg-white"
                      }`}
                    >
                      {p.featured && (
                        <span className="sticker-sm absolute -top-4 right-6 rotate-[3deg] rounded-full bg-blue px-4 py-1 text-xs font-semibold text-white">
                          Most popular
                        </span>
                      )}
                      <h3 className="font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
                      <p className="mt-2 text-sm text-ink/70">{p.audience}</p>
                      <p className="mt-6 font-display text-5xl font-semibold tracking-tighter">
                        {price.headline}
                        {price.unit && (
                          <span className="ml-1 text-base font-medium tracking-normal text-ink/60">
                            {price.unit}
                          </span>
                        )}
                      </p>
                      <p className="mt-2 text-sm text-ink/70">{price.detail}</p>
                      <ul className="mt-8 flex-1 space-y-3">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <Check weight="bold" className="mt-1 shrink-0 text-green-deep" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        onClick={() => chooseNeed(p.need)}
                        className={`sticker-sm mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ${
                          p.featured ? "bg-ink text-cream" : "bg-blue text-white"
                        }`}
                      >
                        {p.need === "App or custom software" ? "Get a fixed quote" : "Start with a free design"}
                        <ArrowRight weight="bold" />
                      </a>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.1}>
              <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {promises.map((promise) => (
                  <li key={promise} className="flex items-center gap-3 font-medium">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-green">
                      <Check size={16} weight="bold" />
                    </span>
                    {promise}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-ink/70">
                Already have a website? I can take over the hosting, fix it up
                or give it a fresh look. Care plans from £15/month.{" "}
                <a
                  href="#contact"
                  onClick={() => chooseNeed("Changes to my current website")}
                  className="font-semibold text-ink underline decoration-2 underline-offset-4 hover:text-blue"
                >
                  Ask me about it
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-14 md:grid-cols-2 md:items-center">
              <Reveal>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-blue">
                  About
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                  Hi, I&apos;m Ethan. You&apos;ll deal with me, start to finish.
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/70">
                  <p>
                    EJSCOTT Group is me. I design, build and look after
                    websites and apps for business owners who&apos;d rather
                    not deal with the tech themselves. I&apos;m based in
                    Hertfordshire and know it well, but I work with clients
                    right across the UK too.
                  </p>
                  <p>
                    No call centres, no account managers, no being passed
                    around. You get my mobile number, and when something
                    needs changing, you text me and it gets done. I
                    don&apos;t hand you a site and disappear. Hosting,
                    security, updates and changes are all looked after, so if
                    you&apos;re not a &ldquo;computer person&rdquo;,
                    that&apos;s exactly what I&apos;m here for.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={PHONE_TEL}
                    className="sticker-sm inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
                  >
                    <Phone weight="bold" /> {PHONE_DISPLAY}
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="sticker-sm inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
                  >
                    <WhatsappLogo weight="bold" /> WhatsApp me
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="sticker rounded-3xl bg-white p-8 md:p-10">
                  <h3 className="font-display text-xl font-semibold">
                    What I take care of for you
                  </h3>
                  <div className="mt-6 grid gap-4">
                    {included.map((f) => (
                      <div key={f.title} className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-green">
                          <f.icon size={18} weight="bold" />
                        </span>
                        <div>
                          <p className="font-semibold">{f.title}</p>
                          <p className="mt-0.5 text-sm text-ink/60">{f.copy}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b-[2.5px] border-ink bg-paper px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[900px]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                FAQ
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                Questions people usually ask.
              </h2>
            </Reveal>

            <div className="mt-12 space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group sticker-sm rounded-2xl bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-lg font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus
                      weight="bold"
                      className="shrink-0 transition-transform group-open:rotate-45"
                    />
                  </summary>
                  <p className="px-6 pb-6 leading-relaxed text-ink/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[720px] text-center">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                Get in touch
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tighter md:text-6xl">
                Let&apos;s get you online.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                Tell me a bit about your business. I&apos;ll get back to you
                with a clear price and a free homepage design to look at. No
                payment until you&apos;re happy, and most websites are live
                within a week.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              {status === "sent" ? (
                <div className="sticker mt-10 rounded-3xl bg-white p-8 md:p-10" role="status">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border-2 border-ink bg-green">
                    <Check size={28} weight="bold" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                    Thanks{sentName ? `, ${sentName}` : ""}. Message received.
                  </h3>
                  <p className="mt-3 text-ink/70">
                    {REPLY_PROMISE} Want a quicker chat?{" "}
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-blue hover:underline"
                    >
                      Message me on WhatsApp
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="sticker mt-10 rounded-3xl bg-white p-8 text-left md:p-10"
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold">Your name</label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <label htmlFor="business" className="text-sm font-semibold">Business name & location</label>
                    <input
                      id="business"
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      type="text"
                      autoComplete="organization"
                      required
                      placeholder="e.g. Bloom Cafe, St Albans"
                      className={inputClass}
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <label htmlFor="contact-detail" className="text-sm font-semibold">Email or phone</label>
                    <input
                      id="contact-detail"
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      type="text"
                      required
                      placeholder="hello@gmail.com or 07..."
                      className={inputClass}
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <label htmlFor="need" className="text-sm font-semibold">
                      What are you after? <span className="font-normal text-ink/50">(optional)</span>
                    </label>
                    <select
                      id="need"
                      name="need"
                      value={form.need}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Choose one</option>
                      {needs.map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold">
                      Anything else? <span className="font-normal text-ink/50">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="e.g. I'd like customers to book online, and I need it before Christmas."
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  {/* Honeypot: hidden from people, filled in by spam bots. */}
                  <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="sticker-sm mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue px-7 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Get my free design"}
                    <ArrowRight weight="bold" />
                  </button>

                  {status === "error" ? (
                    <p role="alert" className="mt-4 rounded-xl border-2 border-ink bg-[#ffe1dc] px-4 py-3 text-center text-sm font-medium">
                      {errorMessage} You can also call or WhatsApp me on {PHONE_DISPLAY}.
                    </p>
                  ) : (
                    <p className="mt-4 text-center text-sm text-ink/60">
                      {REPLY_PROMISE} No obligation, no payment until you&apos;re happy.
                    </p>
                  )}
                </form>
              )}
            </Reveal>

            <p className="mt-8 text-sm text-ink/60">
              Rather talk? Call{" "}
              <a href={PHONE_TEL} className="font-semibold text-blue hover:underline">
                {PHONE_DISPLAY}
              </a>{" "}
              or{" "}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue hover:underline"
              >
                message me on WhatsApp
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t-[2.5px] border-ink bg-ink text-cream">
        <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-28 text-center md:px-10 md:pb-16">
          <div className="flex items-center justify-center gap-2.5">
            <Image
              src="/logo.png"
              alt="EJSCOTT Group"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg border-2 border-cream"
            />
            <span className="font-display text-xl font-semibold">EJSCOTT Group</span>
          </div>
          <p className="mx-auto mt-5 max-w-[46ch] text-sm leading-relaxed text-cream/60">
            Websites, booking systems, apps and custom software, built and
            managed for business owners across Hertfordshire and beyond.
          </p>
          <p className="mt-5 text-sm">
            <a href={PHONE_TEL} className="font-semibold text-cream hover:text-green">
              {PHONE_DISPLAY}
            </a>
            <span className="mx-3 text-cream/30">|</span>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-semibold text-cream hover:text-green">
              WhatsApp
            </a>
          </p>
          <div className="mx-auto mt-12 max-w-[1400px] border-t border-cream/15 pt-8 text-xs text-cream/40">
            © {new Date().getFullYear()} EJSCOTT Group
          </div>
        </div>
      </footer>

      {/* MOBILE CONTACT BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t-[2.5px] border-ink bg-cream px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <a
          href={PHONE_TEL}
          className="sticker-sm inline-flex items-center justify-center gap-2 rounded-full bg-ink py-3 font-semibold text-cream active:translate-y-0.5 active:shadow-none"
        >
          <Phone weight="bold" /> Call
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="sticker-sm inline-flex items-center justify-center gap-2 rounded-full bg-green py-3 font-semibold text-ink active:translate-y-0.5 active:shadow-none"
        >
          <WhatsappLogo weight="bold" /> WhatsApp
        </a>
      </div>
    </>
  );
}
