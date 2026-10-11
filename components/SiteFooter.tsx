import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/industries";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/site";
import { shortName, towns } from "@/lib/towns";

export default function SiteFooter() {
  return (
    <footer className="border-t-[2.5px] border-ink bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-28 md:px-10 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_1.4fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="EJSCOTT Group"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg border-2 border-cream"
              />
              <span className="font-display text-xl font-semibold">EJSCOTT Group</span>
            </Link>
            <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-cream/60">
              Websites, booking systems, apps and custom software, built and
              managed by Ethan for business owners across Hertfordshire and beyond.
            </p>
            <p className="mt-5 text-sm">
              <a href={PHONE_TEL} className="font-semibold text-cream hover:text-green">
                {PHONE_DISPLAY}
              </a>
              <span className="mx-3 text-cream/30">|</span>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-semibold text-cream hover:text-green">
                WhatsApp
              </a>
            </p>
          </div>

          <nav aria-label="Areas">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-green">
              <Link href="/web-design" className="hover:underline">Web design in Hertfordshire</Link>
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-cream/70 sm:grid-cols-3">
              {towns.map((t) => (
                <li key={t.slug}>
                  <Link href={`/web-design/${t.slug}`} className="hover:text-cream">
                    {shortName(t)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Industries">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-green">
              <Link href="/websites-for" className="hover:underline">Who I build for</Link>
            </p>
            <ul className="mt-4 grid gap-y-2 text-sm text-cream/70">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/websites-for/${i.slug}`} className="hover:text-cream">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-8 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} EJSCOTT Group
        </div>
      </div>
    </footer>
  );
}
