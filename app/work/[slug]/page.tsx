import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileContactBar from "@/components/MobileContactBar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { SITE_URL, businessJsonLd, ogImage } from "@/lib/site";
import { caseStudies, getCaseStudy, type Screenshot } from "@/lib/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};

  const title = `${study.client}: Our Work`;
  const description = `${study.summary} Designed, built and looked after by EJSCOTT Group.`;
  const url = `/work/${study.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "EJSCOTT Group", type: "website", images: [ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}

/** A screenshot in the browser window mock-up (traffic-light dots and address bar). */
function BrowserFrame({ shot, domain, eager = false }: { shot: Screenshot; domain: string; eager?: boolean }) {
  return (
    <div className="sticker overflow-hidden rounded-3xl bg-white">
      <div className="flex items-center gap-2 border-b-[2.5px] border-ink px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate font-mono text-xs text-ink/60">{domain}</span>
      </div>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={1920}
        height={1200}
        sizes="(min-width: 1400px) 1300px, 100vw"
        loading={eager ? "eager" : "lazy"}
        className="h-auto w-full"
      />
    </div>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  const url = `${SITE_URL}/work/${study.slug}`;
  const [lead, ...gallery] = study.desktop;
  const facts = [
    { label: "Project", value: study.client },
    { label: "Where", value: study.location },
    { label: "What we did", value: study.services.join(", ") },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            businessJsonLd,
            {
              "@type": "CreativeWork",
              "@id": `${url}#work`,
              name: `${study.client} website`,
              description: study.summary,
              url: study.url,
              image: `${SITE_URL}${study.card}`,
              creator: { "@id": `${SITE_URL}/#business` },
            },
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Our work", url: `${SITE_URL}/work` },
              { name: study.client, url },
            ]),
          ],
        }}
      />

      <SiteHeader />

      <main className="flex-1">
        <PageHero
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Our work", href: "/work" },
            { name: study.client, href: `/work/${study.slug}` },
          ]}
          title={study.title}
          lead={study.summary}
          checks={study.services}
          cta={{ href: "#contact", label: study.cta ?? "Get a site like this" }}
          secondary={{ href: "#screens", label: "See the screens" }}
        />

        {/* SHOWCASE */}
        <section className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal y={0}>
              <BrowserFrame shot={lead} domain={study.domain} eager />
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="font-display text-sm font-semibold uppercase tracking-widest text-ink/60">{f.label}</dt>
                    <dd className="mt-2 font-display text-xl font-semibold tracking-tight">{f.value}</dd>
                  </div>
                ))}
                <div>
                  <dt className="font-display text-sm font-semibold uppercase tracking-widest text-ink/60">Live site</dt>
                  <dd className="mt-3">
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noreferrer"
                      className="sticker-sm inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
                    >
                      {study.domain}
                      <ArrowUpRight size={14} weight="bold" />
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* BRIEF + WHAT WE BUILT */}
        <section className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-blue">{study.briefLabel ?? "The brief"}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                {study.headings.brief}
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/70">
                {study.brief.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-blue">What we built</p>
              </Reveal>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                {study.built.map((b, i) => (
                  <Reveal key={b.title} delay={(i % 2) * 0.08}>
                    <li className="sticker-sm h-full rounded-3xl bg-white p-7">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-green">
                        <Check size={20} weight="bold" />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{b.title}</h3>
                      <p className="mt-2 leading-relaxed text-ink/70">{b.copy}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SCREENS */}
        <section id="screens" className="border-b-[2.5px] border-ink bg-paper px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-blue">A closer look</p>
              <h2 className="mt-4 max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                {study.headings.screens}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
              {gallery.map((shot, i) => (
                <Reveal key={shot.src} delay={(i % 2) * 0.1} className={i === 0 && gallery.length % 2 === 1 ? "md:col-span-2" : ""}>
                  <figure>
                    <BrowserFrame shot={shot} domain={study.domain} />
                    <figcaption className="mt-5 max-w-[56ch] text-lg leading-relaxed text-ink/70">
                      {shot.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ON PHONES */}
        <section className="border-b-[2.5px] border-ink bg-ink px-5 py-24 text-cream md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green">On phones</p>
              <h2 className="mt-4 max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                {study.headings.mobile}
              </h2>
              <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-cream/70">
                {study.headings.mobileIntro}
              </p>
            </Reveal>

            <div
              className={`mt-16 grid grid-cols-2 gap-6 md:gap-8 ${study.mobile.length > 2 ? "md:grid-cols-4" : "max-w-xl"}`}
            >
              {study.mobile.map((shot, i) => (
                <Reveal key={shot.src} delay={i * 0.1}>
                  <figure>
                    <div className="overflow-hidden rounded-[2rem] border-[6px] border-cream/15">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={780}
                        height={1688}
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-4 text-center font-display text-sm font-semibold uppercase tracking-widest text-cream/60">
                      {shot.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ContactSection
          heading={study.contact?.heading ?? "Want a site like this?"}
          intro={
            study.contact?.intro ??
            "Tell me a bit about your business. I'll get back to you with a clear price and a free homepage design to look at. No payment until you're happy."
          }
          defaultNeed={study.contact?.need}
          source={`/work/${study.slug}`}
        />
      </main>

      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
