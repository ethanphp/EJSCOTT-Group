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
  ArrowRight,
  Sparkle,
  Handshake,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    icon: Globe,
    num: "01",
    title: "A website, built & managed for you",
    copy: "Clean, mobile-friendly websites that showcase your business properly. We handle the design, hosting, and changes — just send us what you'd like updated.",
  },
  {
    icon: CalendarCheck,
    num: "02",
    title: "Online booking systems",
    copy: "Let customers book around the clock — built for salons, barbers, therapists, tutors, and anyone tired of missed calls.",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Custom software & solutions",
    copy: "E-commerce stores, internal tools, or fully bespoke web apps — built around exactly what your business needs, wherever you're based.",
  },
];

const work = [
  {
    image: "/djstevedee.png",
    tag: "Events DJ · Letchworth",
    title: "Modern DJ Website",
    copy: "A modern, conversion-focused site showcasing DJ Steve's music, events and services — delivering a clear uplift in enquiries and regular bookings.",
    href: "https://www.djstevedee.co.uk",
  },
  {
    image: "/hempteach.png",
    tag: "Tutor · Hertfordshire",
    title: "Tutoring Business",
    copy: "A clean, trust-building website for a local tutor that highlights services, testimonials and easy booking — helping convert visitors into students.",
    href: "https://www.hempteach.co.uk",
  },
];

const included = [
  { icon: Sparkle, title: "Design, build & hosting", copy: "All sorted, start to finish." },
  { icon: Handshake, title: "Ongoing updates", copy: "Just send us what needs changing." },
  { icon: CalendarCheck, title: "Booking, where you need it", copy: "Streamlined scheduling for appointment-led businesses." },
  { icon: ShieldCheck, title: "Plain-English support", copy: "No tech jargon, ever." },
];

export default function EJScottLanding() {
  const [form, setForm] = useState({ name: "", business: "", contact: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", business: "", contact: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch {
      alert("Network error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b-[2.5px] border-ink bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-ink bg-green font-display text-sm font-bold">
              EJ
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              EJSCOTT Group
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-[15px] font-medium text-ink/80 hover:text-ink">Services</a>
            <a href="#work" className="text-[15px] font-medium text-ink/80 hover:text-ink">Work</a>
            <a href="#about" className="text-[15px] font-medium text-ink/80 hover:text-ink">About</a>
            <a href="#contact" className="text-[15px] font-medium text-ink/80 hover:text-ink">Contact</a>
          </div>

          <a
            href="#contact"
            className="sticker-sm hidden rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none md:inline-block"
          >
            Get online today
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
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-green" />
                    Based in Hertfordshire, working further afield
                  </div>
                </Reveal>

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
                    presence — website, bookings, updates — so you don&apos;t
                    have to. Perfect for busy owners who&apos;d rather leave
                    the tech to us, wherever your business is based.
                  </p>
                </Reveal>

                <Reveal delay={0.25}>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <a
                      href="#contact"
                      className="sticker group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
                    >
                      Get online today
                      <ArrowRight className="transition-transform group-hover:translate-x-1" weight="bold" />
                    </a>
                    <a
                      href="#work"
                      className="text-base font-semibold underline decoration-2 underline-offset-4 hover:text-blue"
                    >
                      View our work
                    </a>
                  </div>
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
                  Live in under a week
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
                entire online presence — building it, hosting it, and keeping
                it up to date — so you can focus on what you do best.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
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
                customers — locally and beyond.
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
                  Rooted in Hertfordshire. Not limited by it.
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/70">
                  <p>
                    We build modern, effective websites and digital tools for
                    business owners who&apos;d rather not deal with the tech
                    themselves. We&apos;re based in Hertfordshire and know it
                    well — but our clients aren&apos;t only local, and neither
                    is the work. Websites, booking systems, and custom
                    software for whoever needs them built properly.
                  </p>
                  <p>
                    Best of all, we don&apos;t just hand you a site and
                    disappear. We look after hosting, security, updates and
                    changes for you — so if you&apos;re not a &ldquo;computer
                    person&rdquo;, that&apos;s exactly what we&apos;re here
                    for.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="sticker rounded-3xl bg-white p-8 md:p-10">
                  <h3 className="font-display text-xl font-semibold">
                    What we take care of for you
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

        {/* CONTACT */}
        <section id="contact" className="px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[720px] text-center">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                Get in touch
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tighter md:text-6xl">
                Ready to get online today?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                Share a few details about your business and we&apos;ll handle
                everything else — no jargon, no stress, just a high-quality
                website built for you, often in under a week.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <form onSubmit={handleSubmit} className="sticker mt-10 rounded-3xl bg-white p-8 text-left md:p-10">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Your name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="rounded-xl border-2 border-ink/15 bg-cream px-4 py-3 outline-none transition-colors focus:border-ink"
                  />
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <label className="text-sm font-semibold">Business name & location</label>
                  <input
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="e.g. Bloom Cafe, St Albans"
                    className="rounded-xl border-2 border-ink/15 bg-cream px-4 py-3 outline-none transition-colors focus:border-ink"
                  />
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <label className="text-sm font-semibold">Email or phone</label>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="hello@gmail.com or 07..."
                    className="rounded-xl border-2 border-ink/15 bg-cream px-4 py-3 outline-none transition-colors focus:border-ink"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="sticker-sm mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue px-7 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send message — let's talk"}
                  <ArrowRight weight="bold" />
                </button>

                {success && (
                  <p className="mt-4 text-center text-sm font-medium text-green-deep">
                    Message sent — we&apos;ll get back to you soon.
                  </p>
                )}
              </form>
            </Reveal>

            <p className="mt-8 text-sm text-ink/60">
              Or phone us directly at{" "}
              <a href="tel:07301573293" className="font-semibold text-blue hover:underline">
                07301 573293
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t-[2.5px] border-ink bg-ink text-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-16 text-center md:px-10">
          <div className="flex items-center justify-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-cream bg-green font-display text-sm font-bold text-ink">
              EJ
            </span>
            <span className="font-display text-xl font-semibold">EJSCOTT Group</span>
          </div>
          <p className="mx-auto mt-5 max-w-[46ch] text-sm leading-relaxed text-cream/60">
            Websites, booking systems, and custom software — built and
            managed for business owners, based in Hertfordshire and beyond.
          </p>
          <div className="mx-auto mt-12 max-w-[1400px] border-t border-cream/15 pt-8 text-xs text-cream/40">
            © {new Date().getFullYear()} EJSCOTT Group
          </div>
        </div>
      </footer>
    </>
  );
}
