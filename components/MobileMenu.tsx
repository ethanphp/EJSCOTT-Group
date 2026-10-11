"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight, List, Phone, WhatsappLogo, X } from "@phosphor-icons/react/dist/ssr";
import { PHONE_TEL, WHATSAPP } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function MobileMenu({
  links,
  ctaHref,
}: {
  links: { href: string; label: string }[];
  ctaHref: string;
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    // Close if the screen grows to the desktop layout, where the links are visible.
    const desktop = window.matchMedia("(min-width: 1024px)");
    function onResize() {
      if (desktop.matches) setOpen(false);
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="sticker-sm relative flex h-10 w-10 items-center justify-center rounded-xl bg-white transition-transform active:translate-y-0.5 active:shadow-none lg:hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2, ease }}
            className="flex"
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop below the header; tapping it closes the menu. */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
              aria-hidden="true"
              className="absolute inset-x-0 top-full h-dvh bg-ink/40 lg:hidden"
            />

            <motion.div
              key="panel"
              id="mobile-menu"
              initial={{ opacity: 0, y: -16, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, y: -12, clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.35, ease }}
              className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.75rem)] overflow-y-auto overscroll-contain border-b-[2.5px] border-ink bg-cream lg:hidden"
            >
              <nav aria-label="Mobile" className="mx-auto max-w-[1400px] px-5 pt-4 pb-8 md:px-10">
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
                  className="divide-y-2 divide-ink/10"
                >
                  {links.map((l) => (
                    <motion.li
                      key={l.href}
                      variants={{
                        hidden: { opacity: 0, x: -16 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.3, ease } },
                      }}
                    >
                      <Link
                        href={l.href}
                        onClick={close}
                        className="group flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-tight"
                      >
                        {l.label}
                        <ArrowRight
                          size={20}
                          weight="bold"
                          className="text-ink/30 transition-transform group-hover:translate-x-1 group-hover:text-ink"
                        />
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 + links.length * 0.05, ease }}
                  className="mt-6 grid gap-3"
                >
                  <a
                    href={ctaHref}
                    onClick={close}
                    className="sticker-sm inline-flex items-center justify-center gap-2 rounded-full bg-blue px-6 py-3.5 font-semibold text-white active:translate-y-0.5 active:shadow-none"
                  >
                    Get a free design
                    <ArrowRight weight="bold" />
                  </a>
                  <div className="grid grid-cols-2 gap-3">
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
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
