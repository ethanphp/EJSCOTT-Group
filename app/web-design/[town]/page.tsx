import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import StickerBadge from "@/components/StickerBadge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileContactBar from "@/components/MobileContactBar";
import PageHero, { LinkChips } from "@/components/PageHero";
import WorkGrid from "@/components/WorkGrid";
import Pricing from "@/components/Pricing";
import FaqList, { faqJsonLd } from "@/components/FaqList";
import ContactSection from "@/components/ContactSection";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL, businessJsonLd, faqs as generalFaqs, work } from "@/lib/site";
import { getTown, shortName, towns } from "@/lib/towns";
import { getIndustry } from "@/lib/industries";

export const dynamicParams = false;

export function generateStaticParams() {
  return towns.map((t) => ({ town: t.slug }));
}

type Props = { params: Promise<{ town: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const town = getTown((await params).town);
  if (!town) return {};

  const title = `Web Design in ${town.name}, Hertfordshire`;
  const description = `Web design in ${town.name} from £39/month. ${town.hook} Free homepage design before you pay. Call ${PHONE_DISPLAY}.`;
  const url = `/web-design/${town.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "EJSCOTT Group", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default async function TownPage({ params }: Props) {
  const town = getTown((await params).town);
  if (!town) notFound();

  const name = shortName(town);
  const url = `${SITE_URL}/web-design/${town.slug}`;
  const pageFaqs = [...town.faqs, generalFaqs[0], generalFaqs[2], generalFaqs[3]];
  const nearby = town.nearby.map(getTown).filter((t) => t !== undefined);
  const townIndustries = town.industries.map(getIndustry).filter((i) => i !== undefined);
  // Lead with a local project where there is one.
  const localWork = [...work].sort(
    (a, b) => Number(b.tag.includes(name)) - Number(a.tag.includes(name))
  );

  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              ...businessJsonLd,
              areaServed: [
                { "@type": "City", name: town.name },
                ...nearby.map((t) => ({ "@type": "City", name: t.name })),
              ],
            },
            {
              "@type": "WebPage",
              "@id": url,
              url,
              name: `Web design in ${town.name}`,
              about: { "@id": `${SITE_URL}/#business` },
            },
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Web design in Hertfordshire", url: `${SITE_URL}/web-design` },
              { name: town.name, url },
            ]),
            faqJsonLd(pageFaqs),
          ],
        }}
      />

      <SiteHeader />

      <main className="flex-1">
        <PageHero
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Hertfordshire", href: "/web-design" },
            { name, href: `/web-design/${town.slug}` },
          ]}
          title={
            <>
              Web design in{" "}
              <StickerBadge color="green" rotate={-2}>
                {name}
              </StickerBadge>
            </>
          }
          lead={town.lead}
        />

        {/* LOCAL */}
        <section className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-2 md:items-start">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                {town.district}
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                {town.localHeading}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/70">
                {town.local.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="sticker rounded-3xl bg-white p-8 md:p-10">
                {town.personal ? (
                  <>
                    <span className="sticker-sm inline-block rotate-[-2deg] rounded-full bg-blue px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      {town.personal.label}
                    </span>
                    <p className="mt-6 font-display text-2xl leading-snug tracking-tight">
                      {town.personal.copy}
                    </p>
                  </>
                ) : (
                  <>
                    <span className="sticker-sm inline-block rotate-[-2deg] rounded-full bg-blue px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      Who you&apos;ll work with
                    </span>
                    <p className="mt-6 font-display text-2xl leading-snug tracking-tight">
                      I&apos;m Ethan. I grew up in Hitchin, live in Stevenage, and
                      build websites for businesses right across Hertfordshire.
                      Work with me from {name} and you deal with me directly,
                      from the first chat to every change afterwards.
                    </p>
                  </>
                )}
                <p className="mt-6 text-ink/60">
                  Call or WhatsApp me on{" "}
                  <a href={PHONE_TEL} className="font-semibold text-ink underline decoration-2 underline-offset-4">
                    {PHONE_DISPLAY}
                  </a>
                  , or send a message below.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="border-b-[2.5px] border-ink bg-paper px-5 py-20 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tighter md:text-4xl">
                Websites for {name} businesses
              </h2>
              <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-ink/70">
                Whatever you do, I&apos;ll build a site around how your customers
                find you and book. Here are some of the businesses I build for
                in {name}:
              </p>
              <div className="mt-8">
                <LinkChips
                  links={[
                    ...townIndustries.map((i) => ({ href: `/websites-for/${i.slug}`, label: i.name })),
                    { href: "/websites-for", label: "See all" },
                  ]}
                />
              </div>
            </Reveal>
          </div>
        </section>

        <WorkGrid
          heading={`Real websites I've built in Hertfordshire.`}
          intro={`Have a look at recent work, then imagine your ${name} business here.`}
          items={localWork}
        />

        <Pricing
          heading={`Web design prices for ${name} businesses.`}
          intro="The same clear prices wherever you are. Spread the cost with a small deposit and a monthly fee, or pay once and own it outright. Either way, you see your free homepage design before you pay a penny."
        />

        {/* FAQ */}
        <section id="faq" className="border-b-[2.5px] border-ink bg-paper px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[900px]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                FAQ
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                Questions from {name} businesses.
              </h2>
            </Reveal>
            <FaqList items={pageFaqs} />
          </div>
        </section>

        {/* NEARBY */}
        <section className="border-b-[2.5px] border-ink px-5 py-20 md:px-10">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="font-display text-3xl font-semibold tracking-tighter md:text-4xl">
              Also working near {name}
            </h2>
            <div className="mt-8">
              <LinkChips
                links={[
                  ...nearby.map((t) => ({ href: `/web-design/${t.slug}`, label: `Web design in ${shortName(t)}` })),
                  { href: "/web-design", label: "All of Hertfordshire" },
                ]}
              />
            </div>
          </div>
        </section>

        <ContactSection
          heading={`Let's get your ${name} business online.`}
          source={`/web-design/${town.slug}`}
        />
      </main>

      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
