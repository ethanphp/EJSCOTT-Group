import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/site";

export default function ContactSection({
  heading = "Let's get you online.",
  intro = "Tell me a bit about your business. I'll get back to you with a clear price and a free homepage design to look at. No payment until you're happy, and most websites are live within a week.",
  defaultNeed,
  source,
}: {
  heading?: string;
  intro?: string;
  defaultNeed?: string;
  source?: string;
}) {
  return (
    <section id="contact" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[720px] text-center">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
            Get in touch
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tighter md:text-6xl">
            {heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">{intro}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm defaultNeed={defaultNeed} source={source} />
        </Reveal>

        <p className="mt-8 text-sm text-ink/60">
          Rather talk? Call{" "}
          <a href={PHONE_TEL} className="font-semibold text-blue hover:underline">
            {PHONE_DISPLAY}
          </a>{" "}
          or{" "}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-semibold text-blue hover:underline">
            message me on WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
