"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { CHOOSE_NEED_EVENT } from "@/components/Pricing";
import { PHONE_DISPLAY, REPLY_PROMISE, WHATSAPP, needs } from "@/lib/site";

export const inputClass =
  "rounded-xl border-2 border-ink/15 bg-cream px-4 py-3 outline-none transition-colors focus:border-ink focus-visible:ring-4 focus-visible:ring-green/40";

const steps = [
  "What are you after?",
  "What's your business called?",
  "Where should I send your design?",
];

export default function ContactForm({
  defaultNeed = "",
  source = "/",
}: {
  defaultNeed?: string;
  source?: string;
}) {
  const emptyForm = {
    name: "",
    business: "",
    contact: "",
    need: defaultNeed,
    referredBy: "",
    website: "",
  };
  const [form, setForm] = useState(emptyForm);
  // Skip the first question when the page or a plan button has already answered it.
  const [step, setStep] = useState(defaultNeed ? 1 : 0);
  const [showReferral, setShowReferral] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sentName, setSentName] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const movedStep = useRef(false);

  useEffect(() => {
    function onChoose(e: Event) {
      const need = (e as CustomEvent<string>).detail;
      setForm((f) => ({ ...f, need }));
      setStep((s) => Math.max(s, 1));
    }
    window.addEventListener(CHOOSE_NEED_EVENT, onChoose);
    return () => window.removeEventListener(CHOOSE_NEED_EVENT, onChoose);
  }, []);

  // Move focus to the new question so keyboard and screen reader users follow along,
  // but not on first load, which would scroll the page to the form.
  useEffect(() => {
    if (movedStep.current) headingRef.current?.focus();
  }, [step]);

  function goTo(next: number) {
    movedStep.current = true;
    setStep(next);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function chooseNeed(need: string) {
    setForm({ ...form, need });
    goTo(1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step < steps.length - 1) {
      goTo(step + 1);
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });

      if (res.ok) {
        setSentName(form.name.split(" ")[0]);
        setStatus("sent");
        setForm(emptyForm);
      } else {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.error ?? "Something went wrong sending your message.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Couldn't connect. Check your internet and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="sticker mt-10 rounded-3xl bg-white p-8 md:p-10" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border-2 border-ink bg-green">
          <Check size={28} weight="bold" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
          Thanks{sentName ? `, ${sentName}` : ""}. Message received.
        </h3>
        <p className="mt-3 text-ink/70">
          {REPLY_PROMISE} Want a quicker chat?{" "}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-semibold text-blue hover:underline">
            Message me on WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  const isLastStep = step === steps.length - 1;

  return (
    <form onSubmit={handleSubmit} className="sticker mt-10 rounded-3xl bg-white p-8 text-left md:p-10">
      <div className="flex items-center justify-between gap-4">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-ink/60">
          Step {step + 1} of {steps.length}
        </p>
        {step > 0 && (
          <button
            type="button"
            onClick={() => goTo(step - 1)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-ink/70 hover:text-ink"
          >
            <ArrowLeft weight="bold" />
            Back
          </button>
        )}
      </div>

      <div className="mt-3 flex gap-2" aria-hidden="true">
        {steps.map((_, i) => (
          <span
            key={i}
            className={`h-2 flex-1 rounded-full border-2 border-ink transition-colors ${
              i <= step ? "bg-green" : "bg-cream"
            }`}
          />
        ))}
      </div>

      <h3
        ref={headingRef}
        tabIndex={-1}
        className="mt-8 font-display text-2xl font-semibold tracking-tight outline-none"
      >
        {steps[step]}
      </h3>

      {step === 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {needs.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => chooseNeed(n)}
              aria-pressed={form.need === n}
              className={`sticker-sm rounded-full px-5 py-3 text-left font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ${
                form.need === n ? "bg-green" : "bg-cream"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="mt-6 flex flex-col gap-2">
          <label htmlFor="business" className="text-sm font-semibold">Business name & town</label>
          <input
            id="business"
            name="business"
            value={form.business}
            onChange={handleChange}
            type="text"
            autoComplete="organization"
            required
            placeholder="e.g. Bloom Cafe, St Albans"
            className={inputClass}
          />
        </div>
      )}

      {isLastStep && (
        <>
          <div className="mt-6 flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold">Your name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              autoComplete="name"
              required
              placeholder="Jane Doe"
              className={inputClass}
            />
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <label htmlFor="contact-detail" className="text-sm font-semibold">Email or phone</label>
            <input
              id="contact-detail"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              type="text"
              required
              placeholder="hello@gmail.com or 07..."
              className={inputClass}
            />
          </div>

          {showReferral || form.referredBy ? (
            <div className="mt-6 flex flex-col gap-2">
              <label htmlFor="referredBy" className="text-sm font-semibold">
                Who recommended me? <span className="font-normal text-ink/60">(optional)</span>
              </label>
              <input
                id="referredBy"
                name="referredBy"
                value={form.referredBy}
                onChange={handleChange}
                type="text"
                autoFocus
                placeholder="Their name, so I can thank them"
                className={inputClass}
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowReferral(true)}
              className="mt-4 text-sm font-semibold text-ink/70 underline decoration-2 underline-offset-4 hover:text-ink"
            >
              Did someone recommend me?
            </button>
          )}
        </>
      )}

      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          value={form.website}
          onChange={handleChange}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {step > 0 && (
        <button
          type="submit"
          disabled={status === "sending"}
          className="sticker-sm mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue px-7 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none disabled:opacity-60"
        >
          {isLastStep ? (status === "sending" ? "Sending..." : "Get my free design") : "Next"}
          <ArrowRight weight="bold" />
        </button>
      )}

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-xl border-2 border-ink bg-[#ffe1dc] px-4 py-3 text-center text-sm font-medium">
          {errorMessage} You can also call or WhatsApp me on {PHONE_DISPLAY}.
        </p>
      ) : (
        <p className="mt-6 text-center text-sm text-ink/60">
          {REPLY_PROMISE} No obligation, no payment until you&apos;re happy.
        </p>
      )}
    </form>
  );
}
