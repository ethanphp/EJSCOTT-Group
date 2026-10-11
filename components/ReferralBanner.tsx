import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight, Gift } from "@phosphor-icons/react/dist/ssr";
import { referral } from "@/lib/site";

export default function ReferralBanner() {
  return (
    <section className="border-b-[2.5px] border-ink bg-blue px-5 py-16 text-white md:px-10">
      <Reveal>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-5">
            <span className="sticker-sm flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green text-ink">
              <Gift size={28} weight="bold" />
            </span>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tighter md:text-4xl">
                Know a business that needs a website?
              </h2>
              <p className="mt-3 max-w-[60ch] text-lg leading-relaxed text-white/85">
                Refer them and get {referral.clientReward} if you&apos;re a client, or{" "}
                {referral.otherReward} if you&apos;re not. They get {referral.friendDiscount} too.
              </p>
            </div>
          </div>
          <Link
            href="/refer"
            className="sticker-sm inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
          >
            Refer a business
            <ArrowRight weight="bold" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
