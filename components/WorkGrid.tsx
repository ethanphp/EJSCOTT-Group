import Image from "next/image";
import Reveal from "@/components/Reveal";
import { testimonials, work } from "@/lib/site";

export default function WorkGrid({
  heading = "Recent builds for real businesses.",
  intro = "Helping business owners look professional and win more customers, both locally and beyond.",
  items = work,
}: {
  heading?: string;
  intro?: string;
  items?: typeof work;
}) {
  return (
    <section id="work" className="border-b-[2.5px] border-ink bg-ink px-5 py-24 text-cream md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-green">
            Our work
          </p>
          <h2 className="mt-4 max-w-[26ch] font-display text-4xl font-semibold tracking-tighter md:text-5xl">
            {heading}
          </h2>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-cream/70">{intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {items.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.12}>
              <div className="group overflow-hidden rounded-3xl border-2 border-cream/15 transition-colors hover:border-green">
                <div className="aspect-video overflow-hidden border-b-2 border-cream/15 bg-cream/5">
                  <Image
                    src={w.image}
                    alt={`${w.title} built by EJSCOTT Group`}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-green">{w.tag}</div>
                  <h3 className="mt-2 font-display text-xl font-semibold">{w.title}</h3>
                  <p className="mt-3 leading-relaxed text-cream/60">{w.copy}</p>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noreferrer"
                    className="sticker-sm mt-5 inline-block rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
                  >
                    View site
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {testimonials.length > 0 && (
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.12}>
                <figure className="h-full rounded-3xl border-2 border-cream/15 p-8">
                  <blockquote className="font-display text-xl leading-snug tracking-tight">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm text-cream/60">
                    <span className="font-semibold text-cream">{t.name}</span>, {t.business}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
