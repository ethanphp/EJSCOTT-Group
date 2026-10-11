"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { CHOOSE_NEED_EVENT } from "@/components/Pricing";
import { PHONE_DISPLAY, REPLY_PROMISE, WHATSAPP, needs } from "@/lib/site";

export const inputClass =
  "rounded-xl border-2 border-ink/15 bg-cream px-4 py-3 outline-none transition-colors focus:border-ink focus-visible:ring-4 focus-visible:ring-green/40";

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
    message: "",
    referredBy: "",
    website: "",
  };
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sentName, setSentName] = useState("");

  useEffect(() => {
    function onChoose(e: Event) {
      const need = (e as CustomEvent<string>).detail;
      setForm((f) => ({ ...f, need }));
    }
    window.addEventListener(CHOOSE_NEED_EVENT, onChoose);
    return () => window.removeEventListener(CHOOSE_NEED_EVENT, onChoose);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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

  return (
    <form onSubmit={handleSubmit} className="sticker mt-10 rounded-3xl bg-white p-8 text-left md:p-10">
      <div className="flex flex-col gap-2">
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
        <label htmlFor="business" className="text-sm font-semibold">Business name & location</label>
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

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="need" className="text-sm font-semibold">
          What are you after? <span className="font-normal text-ink/50">(optional)</span>
        </label>
        <select id="need" name="need" value={form.need} onChange={handleChange} className={inputClass}>
          <option value="">Choose one</option>
          {needs.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold">
          Anything else? <span className="font-normal text-ink/50">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. I'd like customers to book online, and I need it before Christmas."
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="referredBy" className="text-sm font-semibold">
          Did someone recommend me? <span className="font-normal text-ink/50">(optional)</span>
        </label>
        <input
          id="referredBy"
          name="referredBy"
          value={form.referredBy}
          onChange={handleChange}
          type="text"
          placeholder="Their name, so I can thank them"
          className={inputClass}
        />
      </div>

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

      <button
        type="submit"
        disabled={status === "sending"}
        className="sticker-sm mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue px-7 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Get my free design"}
        <ArrowRight weight="bold" />
      </button>

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-xl border-2 border-ink bg-[#ffe1dc] px-4 py-3 text-center text-sm font-medium">
          {errorMessage} You can also call or WhatsApp me on {PHONE_DISPLAY}.
        </p>
      ) : (
        <p className="mt-4 text-center text-sm text-ink/60">
          {REPLY_PROMISE} No obligation, no payment until you&apos;re happy.
        </p>
      )}
    </form>
  );
}
