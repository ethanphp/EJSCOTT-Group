"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { plans, promises, type Billing } from "@/lib/site";

export const CHOOSE_NEED_EVENT = "ejscott:choose-need";

export function chooseNeed(need: string) {
  window.dispatchEvent(new CustomEvent(CHOOSE_NEED_EVENT, { detail: need }));
}

export default function Pricing({
  heading = "Clear prices. No surprises.",
  intro = "Spread the cost with a small deposit and a monthly fee, or pay once and own it outright. Either way, you see your free homepage design before you pay a penny.",
  highlight,
}: {
  heading?: string;
  intro?: string;
  highlight?: string;
}) {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="border-b-[2.5px] border-ink px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-blue">
            Pricing
          </p>
          <h2 className="mt-4 max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
            {heading}
          </h2>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-ink/70">{intro}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="group"
            aria-label="Payment option"
            className="sticker-sm mt-10 inline-flex rounded-full bg-white p-1"
          >
            {(
              [
                ["monthly", "Deposit + monthly"],
                ["once", "Pay once"],
              ] as [Billing, string][]
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setBilling(value)}
                aria-pressed={billing === value}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  billing === value ? "bg-ink text-cream" : "text-ink/70 hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((p, i) => {
            const price = p.price[billing];
            const featured = highlight ? p.need === highlight : p.featured;
            return (
              <Reveal key={p.name} delay={i * 0.12}>
                <div
                  className={`sticker relative flex h-full flex-col rounded-3xl p-8 ${
                    featured ? "bg-green" : "bg-white"
                  }`}
                >
                  {featured && (
                    <span className="sticker-sm absolute -top-4 right-6 rotate-[3deg] rounded-full bg-blue px-4 py-1 text-xs font-semibold text-white">
                      {highlight ? "Best fit for you" : "Most popular"}
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-2 text-sm text-ink/70">{p.audience}</p>
                  <p className="mt-6 font-display text-5xl font-semibold tracking-tighter">
                    {price.headline}
                    {price.unit && (
                      <span className="ml-1 text-base font-medium tracking-normal text-ink/60">
                        {price.unit}
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-sm text-ink/70">{price.detail}</p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check weight="bold" className="mt-1 shrink-0 text-green-deep" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={() => chooseNeed(p.need)}
                    className={`sticker-sm mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ${
                      featured ? "bg-ink text-cream" : "bg-blue text-white"
                    }`}
                  >
                    {p.need === "App or custom software" ? "Get a fixed quote" : "Start with a free design"}
                    <ArrowRight weight="bold" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((promise) => (
              <li key={promise} className="flex items-center gap-3 font-medium">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-green">
                  <Check size={16} weight="bold" />
                </span>
                {promise}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-ink/70">
            Already have a website? I can take over the hosting, fix it up or
            give it a fresh look. Care plans from £15/month.{" "}
            <a
              href="#contact"
              onClick={() => chooseNeed("Changes to my current website")}
              className="font-semibold text-ink underline decoration-2 underline-offset-4 hover:text-blue"
            >
              Ask me about it
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
