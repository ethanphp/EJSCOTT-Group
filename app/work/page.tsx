import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import StickerBadge from "@/components/StickerBadge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileContactBar from "@/components/MobileContactBar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { SITE_URL, businessJsonLd, ogImage } from "@/lib/site";
import { caseStudies } from "@/lib/work";

const title = "Our Work";
const description =
  "Websites, ticketing and booking systems EJSCOTT Group has designed, built and looks after for real businesses. See the projects and the thinking behind them.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: { title, description, url: "/work", siteName: "EJSCOTT Group", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
};

export default function WorkHub() {
  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            businessJsonLd,
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Our work", url: `${SITE_URL}/work` },
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
          ]}
          title={
            <>
              Real sites for{" "}
              <StickerBadge color="green" rotate={-2}>
                real businesses.
              </StickerBadge>
            </>
          }
          lead="Every project here is live, looked after by us, and built around how that business actually works. Have a look around, then picture yours."
          checks={["Real projects, real screenshots", "Designed around each business", "Looked after once it's live"]}
          secondary={{ href: "#projects", label: "See the projects" }}
        />

        {/* CASE STUDIES */}
        <section id="projects" className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
                Case studies
              </p>
              <h2 className="mt-4 max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                What we built, and why.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {caseStudies.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.12}>
                  <Link
                    href={`/work/${c.slug}`}
                    className="sticker group flex h-full flex-col overflow-hidden rounded-3xl bg-white transition-transform hover:-translate-y-1"
                  >
                    <div className="aspect-video overflow-hidden border-b-[2.5px] border-ink">
                      <Image
                        src={c.card}
                        alt={`${c.client} website built by EJSCOTT Group`}
                        width={1600}
                        height={900}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-8">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/60">{c.tag}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{c.client}</h3>
                      <p className="mt-3 flex-1 leading-relaxed text-ink/70">{c.summary}</p>
                      <span className="mt-6 inline-flex items-center gap-2 font-semibold group-hover:text-blue">
                        See the project
                        <ArrowRight weight="bold" className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>


        <ContactSection
          heading="Want to be next?"
          intro="Tell me a bit about your business. I'll get back to you with a clear price and a free homepage design to look at. No payment until you're happy."
          source="/work"
        />
      </main>

      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
