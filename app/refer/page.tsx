import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import StickerBadge from "@/components/StickerBadge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileContactBar from "@/components/MobileContactBar";
import PageHero from "@/components/PageHero";
import ReferralForm from "@/components/ReferralForm";
import FaqList, { faqJsonLd } from "@/components/FaqList";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { ChatCircle, Gift, Handshake } from "@phosphor-icons/react/dist/ssr";
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL, WHATSAPP, businessJsonLd, referral, ogImage } from "@/lib/site";

const title = "Refer a Business";
const description = `Know a business that needs a website? Refer them to EJSCOTT Group and get ${referral.clientReward} if you're a client, or ${referral.otherReward} if you're not. They get ${referral.friendDiscount} too.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/refer" },
  openGraph: { title, description, url: "/refer", siteName: "EJSCOTT Group", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
};

const steps = [
  {
    icon: ChatCircle,
    title: "Tell me who",
    copy: "Fill in the form below, or just tell them to mention your name when they get in touch.",
  },
  {
    icon: Handshake,
    title: "I look after them",
    copy: "They get a free homepage design and no pressure. I'll keep you posted.",
  },
  {
    icon: Gift,
    title: "You get rewarded",
    copy: "Once they go ahead and pay their deposit, your reward is on its way.",
  },
];

const rewards = [
  {
    who: "If you're a client",
    reward: referral.clientReward,
    copy: "Your next month is on me. Pay-once clients get a free month of hosting and changes.",
    color: "bg-green",
  },
  {
    who: "If you're not a client",
    reward: referral.otherReward,
    copy: "A thank-you by bank transfer, for anyone who sends a business my way.",
    color: "bg-white",
  },
  {
    who: "For the business you refer",
    reward: referral.friendDiscount,
    copy: "Taken off their deposit or one-off price, on top of their free homepage design.",
    color: "bg-white",
  },
];

const terms = [
  "Your reward is due once the business you referred pays their deposit or first payment.",
  "There's no limit. Refer five businesses that go ahead, get five rewards.",
  "The business needs to mention your name when they get in touch, or you tell me first using the form.",
  "If two people refer the same business, the first one I hear about gets the reward.",
  "You can't refer yourself or a business you own.",
  "Rewards are a thank-you for introductions only, never for reviews.",
];

const referralFaqs = [
  {
    q: "Do I have to be a client to refer someone?",
    a: `No. Anyone can refer a business. Clients get ${referral.clientReward}, and everyone else gets ${referral.otherReward}.`,
  },
  {
    q: "Will you pester the business I refer?",
    a: "No. I'll only get in touch if you've given me their details with their OK. Otherwise I'll wait for them to contact me.",
  },
  {
    q: "What kind of businesses can I refer?",
    a: "Any business that needs a website, online booking, an online shop or an app: salons, barbers, trades, cafés, tutors, start-ups, anyone.",
  },
  {
    q: "When do I get my reward?",
    a: "As soon as they pay their deposit or first payment. I'll message you to let you know it's on its way.",
  },
];

export default function ReferPage() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            businessJsonLd,
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Refer a business", url: `${SITE_URL}/refer` },
            ]),
            faqJsonLd(referralFaqs),
          ],
        }}
      />

      <SiteHeader ctaHref="/#contact" />

      <main className="flex-1">
        <PageHero
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Refer a business", href: "/refer" },
          ]}
          title={
            <>
              Refer a business,{" "}
              <StickerBadge color="green" rotate={-2}>
                get rewarded
              </StickerBadge>
            </>
          }
          lead={`Know a business that needs a website? Introduce them to me. Once they go ahead, you get ${referral.clientReward} if you're a client, or ${referral.otherReward} if you're not, and they get ${referral.friendDiscount}.`}
          checks={["No limit on referrals", "Anyone can refer", "No pressure on the business"]}
          cta={{ href: "#refer-form", label: "Refer a business" }}
          secondary={{ href: "#how-it-works", label: "How it works" }}
        />

        {/* REWARDS */}
        <section className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-blue">
                Rewards
              </p>
              <h2 className="mt-4 max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                Everyone gets something.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {rewards.map((r, i) => (
                <Reveal key={r.who} delay={i * 0.12}>
                  <div className={`sticker h-full rounded-3xl p-8 ${r.color}`}>
                    <p className="text-sm font-semibold uppercase tracking-wider text-ink/70">{r.who}</p>
                    <p className="mt-4 font-display text-5xl font-semibold tracking-tighter">{r.reward}</p>
                    <p className="mt-4 leading-relaxed text-ink/70">{r.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="border-b-[2.5px] border-ink bg-paper px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                How it works
              </p>
              <h2 className="mt-4 max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                Three steps. No catch.
              </h2>
            </Reveal>

            <ol className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.12}>
                  <li className="sticker h-full rounded-3xl bg-white p-8">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-ink bg-green">
                        <s.icon size={24} weight="bold" />
                      </span>
                      <span className="font-display text-sm font-semibold text-ink/30">0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink/65">{s.copy}</p>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.1}>
              <div className="mt-14 max-w-[70ch]">
                <h3 className="font-display text-xl font-semibold tracking-tight">The small print, in plain English</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink/70">
                  {terms.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FORM */}
        <section id="refer-form" className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[720px] text-center">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                Refer a business
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tighter md:text-6xl">
                Who should I talk to?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                Tell me who you&apos;re referring. Only share their details if
                they&apos;re happy for me to get in touch. Otherwise, just tell
                them to mention your name.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ReferralForm />
            </Reveal>

            <p className="mt-8 text-sm text-ink/60">
              Rather tell me directly? Call{" "}
              <a href={PHONE_TEL} className="font-semibold text-blue hover:underline">
                {PHONE_DISPLAY}
              </a>{" "}
              or{" "}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-semibold text-blue hover:underline">
                message me on WhatsApp
              </a>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[900px]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                FAQ
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                Referral questions.
              </h2>
            </Reveal>
            <FaqList items={referralFaqs} />
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
