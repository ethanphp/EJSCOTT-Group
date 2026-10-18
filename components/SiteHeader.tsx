import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Our work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/web-design", label: "Areas" },
  { href: "/websites-for", label: "Industries" },
  { href: "/#about", label: "About" },
];

/** Pages without their own contact form pass ctaHref="/#contact". */
export default function SiteHeader({ ctaHref = "#contact" }: { ctaHref?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b-[2.5px] border-ink bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label="EJSCOTT Group home">
          <Image
            src="/logo.svg"
            alt="EJSCOTT Group"
            width={665}
            height={108}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] font-medium text-ink/80 hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className="sticker-sm hidden rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none md:inline-block"
          >
            Get a free design
          </a>
          <MobileMenu links={[...links, { href: "/refer", label: "Refer a business" }]} ctaHref={ctaHref} />
        </div>
      </nav>
    </header>
  );
}
