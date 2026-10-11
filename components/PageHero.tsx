import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";

export default function PageHero({
  breadcrumbs,
  title,
  lead,
  checks = ["From £39/month", "No payment until you love the design", "Most sites live in a week"],
  cta = { href: "#contact", label: "Get your free design" },
  secondary = { href: "#pricing", label: "See prices" },
}: {
  breadcrumbs: { name: string; href: string }[];
  title: ReactNode;
  lead: string;
  checks?: string[];
  cta?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden border-b-[2.5px] border-ink">
      <div className="noise-bg pointer-events-none absolute inset-0 opacity-[0.35]" />
      <div className="relative mx-auto max-w-[1400px] px-5 pt-14 pb-20 md:px-10 md:pt-20 md:pb-28">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/60">
            {breadcrumbs.map((b, i) => (
              <li key={b.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={b.href} className="hover:text-ink hover:underline">
                    {b.name}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-ink">
                    {b.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-8 max-w-[18ch] font-display text-5xl font-semibold leading-[1.05] tracking-tighter md:text-7xl">
          {title}
        </h1>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-ink/70 md:text-xl">{lead}</p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={cta.href}
              className="sticker group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
            >
              {cta.label}
              <ArrowRight className="transition-transform group-hover:translate-x-1" weight="bold" />
            </a>
            <a href={secondary.href} className="text-base font-semibold underline decoration-2 underline-offset-4 hover:text-blue">
              {secondary.label}
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/70">
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-1.5">
                <Check weight="bold" className="text-green-deep" /> {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function LinkChips({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="sticker-sm inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
          >
            {l.label}
            <ArrowRight size={14} weight="bold" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
