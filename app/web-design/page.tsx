import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import StickerBadge from "@/components/StickerBadge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileContactBar from "@/components/MobileContactBar";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PHONE_DISPLAY, SITE_URL, businessJsonLd } from "@/lib/site";
import { districts, shortName, towns } from "@/lib/towns";

const title = "Web Design in Hertfordshire";
const description = `Web design across Hertfordshire, from Hitchin and Stevenage to St Albans and Watford. Websites from £39/month, with a free homepage design first. Call ${PHONE_DISPLAY}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/web-design" },
  openGraph: { title, description, url: "/web-design", siteName: "EJSCOTT Group", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function WebDesignHub() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              ...businessJsonLd,
              areaServed: towns.map((t) => ({ "@type": "City", name: t.name })),
            },
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Web design in Hertfordshire", url: `${SITE_URL}/web-design` },
            ]),
          ],
        }}
      />

      <SiteHeader />

      <main className="flex-1">
        <PageHero
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Hertfordshire", href: "/web-design" },
          ]}
          title={
            <>
              Web design across{" "}
              <StickerBadge color="green" rotate={-2}>
                Hertfordshire
              </StickerBadge>
            </>
          }
          lead="I grew up in Hitchin and live in Stevenage, and I build websites, booking systems and apps for businesses right across the county. Find your town below, or just get in touch. Wherever you are, you deal with me directly."
        />

        <section className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                Find your town.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {districts.map((district, i) => (
                <Reveal key={district} delay={(i % 3) * 0.08}>
                  <div className="sticker h-full rounded-3xl bg-white p-7">
                    <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                      {district}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {towns
                        .filter((t) => t.district === district)
                        .map((t) => (
                          <li key={t.slug}>
                            <Link
                              href={`/web-design/${t.slug}`}
                              className="group flex items-center justify-between gap-3 font-display text-xl font-semibold tracking-tight hover:text-blue"
                            >
                              {shortName(t)}
                              <ArrowRight
                                size={18}
                                weight="bold"
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-12 max-w-[60ch] text-lg leading-relaxed text-ink/70">
              Don&apos;t see your town? I work with businesses all over
              Hertfordshire and the rest of the UK. Most of the work happens by
              phone, video call and WhatsApp, so where you are doesn&apos;t
              matter.
            </p>
          </div>
        </section>

        <Pricing />

        <ContactSection source="/web-design" />
      </main>

      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
