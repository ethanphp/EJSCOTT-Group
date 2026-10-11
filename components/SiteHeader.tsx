import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/web-design", label: "Areas" },
  { href: "/websites-for", label: "Industries" },
  { href: "/#about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-[2.5px] border-ink bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="EJSCOTT Group"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg border-2 border-ink"
            priority
          />
          <span className="font-display text-xl font-semibold tracking-tight">EJSCOTT Group</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] font-medium text-ink/80 hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href="#contact"
          className="sticker-sm hidden rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none md:inline-block"
        >
          Get a free design
        </a>
      </nav>
    </header>
  );
}
