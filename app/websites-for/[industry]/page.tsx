import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileContactBar from "@/components/MobileContactBar";
import PageHero, { LinkChips } from "@/components/PageHero";
import WorkGrid from "@/components/WorkGrid";
import Pricing from "@/components/Pricing";
import FaqList, { faqJsonLd } from "@/components/FaqList";
import ContactSection from "@/components/ContactSection";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { Check, X } from "@phosphor-icons/react/dist/ssr";
import { PHONE_DISPLAY, SITE_URL, businessJsonLd, faqs as generalFaqs, work, ogImage } from "@/lib/site";
import { getIndustry, industries } from "@/lib/industries";
import { shortName, towns } from "@/lib/towns";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

type Props = { params: Promise<{ industry: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = getIndustry((await params).industry);
  if (!industry) return {};

  const title = industry.title;
  const isCustom = industry.plan === "App or custom software";
  const description = `${industry.title} in Hertfordshire and across the UK. ${industry.hook} ${
    isCustom ? "Fixed prices, agreed up front." : "From £39/month, with a free homepage design first."
  } Call ${PHONE_DISPLAY}.`;
  const url = `/websites-for/${industry.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "EJSCOTT Group", type: "website", images: [ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}

export default async function IndustryPage({ params }: Props) {
  const industry = getIndustry((await params).industry);
  if (!industry) notFound();

  const url = `${SITE_URL}/websites-for/${industry.slug}`;
  const pageFaqs = [...industry.faqs, generalFaqs[0], generalFaqs[2], generalFaqs[3]];
  const related = industry.related.map(getIndustry).filter((i) => i !== undefined);
  const example = industry.workIndex !== undefined ? work[industry.workIndex] : undefined;
  const isCustom = industry.plan === "App or custom software";
  const isApps = industry.slug === "startups-and-app-ideas";
  const defaultNeed = isApps
    ? "App or custom software"
    : industry.slug === "shops-and-retail"
      ? "Online shop"
      : industry.plan;
  const localTowns = towns.filter((t) => t.industries.includes(industry.slug));

  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            businessJsonLd,
            {
              "@type": "Service",
              "@id": `${url}#service`,
              name: industry.title,
              serviceType: isApps ? "App development" : "Web design",
              description: industry.lead,
              provider: { "@id": `${SITE_URL}/#business` },
              areaServed: { "@type": "AdministrativeArea", name: "Hertfordshire" },
              url,
            },
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Who I build for", url: `${SITE_URL}/websites-for` },
              { name: industry.name, url },
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
            { name: "Who I build for", href: "/websites-for" },
            { name: industry.name, href: `/websites-for/${industry.slug}` },
          ]}
          title={industry.title}
          lead={industry.lead}
          checks={
            isApps
              ? ["Fixed price, agreed up front", "Plain English, no jargon", "Looked after once it's live"]
              : undefined
          }
        />

        {/* PROBLEMS → FEATURES */}
        <section className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
              <Reveal>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                  Sound familiar?
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                  The problems I fix.
                </h2>
                <ul className="mt-8 space-y-4">
                  {industry.problems.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-lg leading-relaxed text-ink/75">
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-[#ffe1dc]">
                        <X size={14} weight="bold" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className="grid gap-6 sm:grid-cols-2">
                {industry.features.map((f, i) => (
                  <Reveal key={f.title} delay={i * 0.1}>
                    <div className="sticker h-full rounded-3xl bg-white p-7">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink bg-green">
                        <Check size={18} weight="bold" />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{f.title}</h3>
                      <p className="mt-2 leading-relaxed text-ink/65">{f.copy}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {example ? (
          <WorkGrid
            heading="I've built one of these already."
            intro="A real project for a real Hertfordshire business. Have a look, then imagine yours."
            items={[example]}
          />
        ) : (
          <WorkGrid intro="A couple of recent projects. Every site is designed around the business it's for." />
        )}

        <Pricing
          highlight={industry.plan}
          heading={isCustom ? "Fixed prices, agreed before we start." : "Clear prices. No surprises."}
        />

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
            <FaqList items={pageFaqs} />
          </div>
        </section>

        {/* LINKS */}
        <section className="border-b-[2.5px] border-ink px-5 py-20 md:px-10">
          <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tighter md:text-4xl">
                Working across Hertfordshire
              </h2>
              <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink/70">
                I&apos;m based in Stevenage and work with {industry.name.toLowerCase()} all over the
                county, and further afield by phone and video call.
              </p>
              <div className="mt-8">
                <LinkChips
                  links={[
                    ...(localTowns.length ? localTowns : towns.slice(0, 6)).map((t) => ({
                      href: `/web-design/${t.slug}`,
                      label: shortName(t),
                    })),
                    { href: "/web-design", label: "All areas" },
                  ]}
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tighter md:text-4xl">
                Related
              </h2>
              <div className="mt-8">
                <LinkChips
                  links={[
                    ...related.map((i) => ({ href: `/websites-for/${i.slug}`, label: i.name })),
                    { href: "/websites-for", label: "Everyone I build for" },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <ContactSection
          heading={isApps ? "Tell me about your idea." : "Let's get you online."}
          intro={
            isApps
              ? "Tell me what you'd like to build. I'll get back to you with questions, a plain-English plan and a fixed price. No jargon, and no obligation."
              : undefined
          }
          defaultNeed={defaultNeed}
          source={`/websites-for/${industry.slug}`}
        />
      </main>

      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
