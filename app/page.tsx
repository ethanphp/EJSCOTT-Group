import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import StickerBadge from "@/components/StickerBadge";
import TiltCard from "@/components/TiltCard";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileContactBar from "@/components/MobileContactBar";
import WorkGrid from "@/components/WorkGrid";
import Pricing from "@/components/Pricing";
import FaqList, { faqJsonLd } from "@/components/FaqList";
import ContactSection from "@/components/ContactSection";
import ReferralBanner from "@/components/ReferralBanner";
import JsonLd from "@/components/JsonLd";
import { LinkChips } from "@/components/PageHero";
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
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL, WHATSAPP, businessJsonLd, faqs } from "@/lib/site";
import { shortName, towns } from "@/lib/towns";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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

const included = [
  { icon: Sparkle, title: "Design, build & hosting", copy: "All sorted, start to finish." },
  { icon: Handshake, title: "Ongoing updates", copy: "Text or email me what needs changing." },
  { icon: CalendarCheck, title: "Booking, where you need it", copy: "Streamlined scheduling for appointment-led businesses." },
  { icon: ShieldCheck, title: "Plain-English support", copy: "No tech jargon, ever." },
];

export default function EJScottLanding() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              ...businessJsonLd,
              areaServed: towns.map((t) => ({ "@type": "City", name: t.name })),
            },
            { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "EJSCOTT Group" },
            faqJsonLd(faqs),
          ],
        }}
      />

      <SiteHeader />

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

        <WorkGrid />

        <Pricing />

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
                    not deal with the tech themselves. I grew up in Hitchin,
                    live in Stevenage, and work with clients right across
                    Hertfordshire and the UK.
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

        {/* AREAS & INDUSTRIES */}
        <section className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                Areas
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tighter md:text-4xl">
                Web design across Hertfordshire.
              </h2>
              <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink/70">
                From Hitchin, where I grew up, to Stevenage, where I live, and
                every town in between.
              </p>
              <div className="mt-8">
                <LinkChips
                  links={towns.map((t) => ({ href: `/web-design/${t.slug}`, label: shortName(t) }))}
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-blue">
                Industries
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tighter md:text-4xl">
                Built around your business.
              </h2>
              <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink/70">
                Salons need booking, trades need the phone to ring, cafés need
                their menu front and centre. See what I&apos;d build for you.
              </p>
              <div className="mt-8">
                <LinkChips
                  links={industries.map((i) => ({ href: `/websites-for/${i.slug}`, label: i.name }))}
                />
              </div>
            </Reveal>
          </div>
        </section>

        <ReferralBanner />

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
            <FaqList items={faqs} />
          </div>
        </section>

        <ContactSection source="/" />
      </main>

      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
