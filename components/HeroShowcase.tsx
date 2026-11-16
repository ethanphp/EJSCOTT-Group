"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, LockSimple } from "@phosphor-icons/react/dist/ssr";
import { caseStudies } from "@/lib/work";

// Real builds only: every slide is a live client site, taken from the case studies.
const slides = caseStudies.map((c) => ({
  slug: c.slug,
  client: c.client,
  tag: c.tag,
  domain: c.domain,
  desktop: c.desktop[0],
  mobile: c.mobile[0],
}));

const INTERVAL = 4500;

export default function HeroShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearTimeout(id);
  }, [active, paused, reduceMotion]);

  const current = slides[active];
  const fade = reduceMotion ? "" : "transition-opacity duration-700 ease-out";

  return (
    <div
      className="relative mx-auto w-full max-w-[600px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative">
        {/* Browser window */}
        <Link
          href={`/work/${current.slug}`}
          aria-label={`See how we built ${current.client}`}
          className="sticker group block overflow-hidden rounded-3xl bg-white"
        >
          <div className="flex items-center gap-2 border-b-2 border-ink px-4 py-3">
            <span className="h-3 w-3 rounded-full border border-ink/20 bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full border border-ink/20 bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full border border-ink/20 bg-[#28c840]" />
            <span className="ml-3 flex min-w-0 flex-1 items-center gap-1.5 rounded-full bg-paper px-3 py-1 font-mono text-xs text-ink/60">
              <LockSimple weight="bold" className="shrink-0 text-green-deep" />
              <span className="truncate">{current.domain}</span>
            </span>
            <ArrowUpRight
              weight="bold"
              className="ml-1 shrink-0 text-ink/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
            />
          </div>
          <div className="relative aspect-[16/10] bg-ink">
            {slides.map((s, i) => (
              <Image
                key={s.slug}
                src={s.desktop.src}
                alt={s.desktop.alt}
                fill
                sizes="(min-width: 768px) 600px, 100vw"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                className={`object-cover object-top ${fade} ${i === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </Link>

        {/* Phone */}
        <div className="sticker absolute -bottom-10 -right-5 w-[26%] rounded-[1.6rem] bg-ink p-1.5 lg:-right-10">
          <div className="relative aspect-[780/1688] overflow-hidden rounded-[1.2rem] bg-ink">
            {slides.map((s, i) => (
              <Image
                key={s.slug}
                src={s.mobile.src}
                alt={s.mobile.alt}
                fill
                sizes="160px"
                className={`object-cover object-top ${fade} ${i === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <span className="absolute left-1/2 top-1.5 h-3.5 w-12 -translate-x-1/2 rounded-full bg-ink" />
          </div>
        </div>

        {/* Turnaround sticker */}
        <div className="sticker-sm absolute -left-6 -top-6 rotate-[-5deg] rounded-2xl bg-blue px-5 py-3 font-display text-sm font-semibold text-white">
          Most sites live in a week
        </div>
      </div>

      {/* Caption + switcher, kept clear of the phone */}
      <div className="mt-7 flex items-center gap-4 pr-[30%]">
        <div className="flex shrink-0 gap-1.5" role="tablist" aria-label="Recent builds">
          {slides.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={s.client}
              onClick={() => setActive(i)}
              className="group/dot py-2"
            >
              <span
                className={`relative block h-2 overflow-hidden rounded-full border-2 border-ink transition-all duration-300 ${
                  i === active ? "w-10 bg-white" : "w-4 bg-ink/15 group-hover/dot:bg-ink/40"
                }`}
              >
                {i === active && (
                  <motion.span
                    key={`bar-${active}-${paused}`}
                    initial={{ scaleX: paused || reduceMotion ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: paused || reduceMotion ? 0 : INTERVAL / 1000, ease: "linear" }}
                    className="absolute inset-0 origin-left bg-green"
                  />
                )}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={current.slug}
            initial={reduceMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="min-w-0 truncate text-sm"
            aria-live="polite"
          >
            <span className="font-display font-semibold">{current.client}</span>
            <span className="text-ink/60"> · {current.tag}</span>
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
