import { Plus } from "@phosphor-icons/react/dist/ssr";
import type { Faq } from "@/lib/site";

export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="mt-12 space-y-4">
      {items.map((f) => (
        <details key={f.q} className="group sticker-sm rounded-2xl bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-lg font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus weight="bold" className="shrink-0 transition-transform group-open:rotate-45" />
          </summary>
          <p className="px-6 pb-6 leading-relaxed text-ink/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
