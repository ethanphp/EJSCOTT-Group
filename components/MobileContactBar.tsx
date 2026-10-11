import { Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { PHONE_TEL, WHATSAPP } from "@/lib/site";

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t-[2.5px] border-ink bg-cream px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={PHONE_TEL}
        className="sticker-sm inline-flex items-center justify-center gap-2 rounded-full bg-ink py-3 font-semibold text-cream active:translate-y-0.5 active:shadow-none"
      >
        <Phone weight="bold" /> Call
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="sticker-sm inline-flex items-center justify-center gap-2 rounded-full bg-green py-3 font-semibold text-ink active:translate-y-0.5 active:shadow-none"
      >
        <WhatsappLogo weight="bold" /> WhatsApp
      </a>
    </div>
  );
}
