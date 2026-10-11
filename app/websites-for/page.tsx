import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileContactBar from "@/components/MobileContactBar";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PHONE_DISPLAY, SITE_URL, businessJsonLd } from "@/lib/site";
import { industries } from "@/lib/industries";

const title = "Websites for Small Businesses, by Industry";
const description = `Websites for salons, barbers, tradespeople, cafés, tutors and more, plus apps for start-ups. Built around how your customers book and buy. Call ${PHONE_DISPLAY}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/websites-for" },
  openGraph: { title, description, url: "/websites-for", siteName: "EJSCOTT Group", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function IndustriesHub() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            businessJsonLd,
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Who I build for", url: `${SITE_URL}/websites-for` },
            ]),
          ],
        }}
      />

      <SiteHeader />

      <main className="flex-1">
        <PageHero
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Who I build for", href: "/websites-for" },
          ]}
          title="Websites built around your business."
          lead="A salon needs online booking. A plumber needs the phone to ring. A café needs its menu and opening hours front and centre. I build each site around how your customers actually find you and buy from you."
        />

        <section className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                Who I build for.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((i, idx) => (
                <Reveal key={i.slug} delay={(idx % 3) * 0.08}>
                  <Link
                    href={`/websites-for/${i.slug}`}
                    className="sticker group flex h-full flex-col rounded-3xl bg-white p-7 transition-transform hover:-translate-y-1"
                  >
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{i.name}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-ink/65">{i.hook}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-semibold group-hover:text-blue">
                      See how I can help
                      <ArrowRight weight="bold" className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <p className="mt-12 max-w-[60ch] text-lg leading-relaxed text-ink/70">
              Don&apos;t see your type of business? That&apos;s fine. Tell me
              what you do and how your customers find you, and I&apos;ll build
              a site around it.
            </p>
          </div>
        </section>

        <Pricing />

        <ContactSection source="/websites-for" />
      </main>

      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
