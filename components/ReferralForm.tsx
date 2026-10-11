"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { inputClass } from "@/components/ContactForm";
import { PHONE_DISPLAY } from "@/lib/site";

const emptyForm = {
  name: "",
  contact: "",
  isClient: "",
  business: "",
  theirContact: "",
  message: "",
  website: "",
};

export default function ReferralForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sentName, setSentName] = useState("");

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
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSentName(form.name.split(" ")[0]);
        setStatus("sent");
        setForm(emptyForm);
      } else {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.error ?? "Something went wrong sending your referral.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Couldn't connect. Check your internet and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="sticker mt-10 rounded-3xl bg-white p-8 text-center md:p-10" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border-2 border-ink bg-green">
          <Check size={28} weight="bold" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
          Thanks{sentName ? `, ${sentName}` : ""}. Referral received.
        </h3>
        <p className="mt-3 text-ink/70">
          I&apos;ll let you know when they get in touch, and again when your
          reward is on its way.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-semibold text-blue underline decoration-2 underline-offset-4"
        >
          Refer another business
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="sticker mt-10 rounded-3xl bg-white p-8 text-left md:p-10">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-green-deep">About you</p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="ref-name" className="text-sm font-semibold">Your name</label>
          <input
            id="ref-name"
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
        <div className="flex flex-col gap-2">
          <label htmlFor="ref-contact" className="text-sm font-semibold">Your email or phone</label>
          <input
            id="ref-contact"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            type="text"
            required
            placeholder="So I can send your reward"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="ref-client" className="text-sm font-semibold">Are you already a client?</label>
        <select
          id="ref-client"
          name="isClient"
          value={form.isClient}
          onChange={handleChange}
          required
          className={inputClass}
        >
          <option value="">Choose one</option>
          <option value="yes">Yes, I have a website with you</option>
          <option value="no">No, I just know someone who needs one</option>
        </select>
      </div>

      <p className="mt-10 font-display text-sm font-semibold uppercase tracking-widest text-green-deep">
        The business you&apos;re referring
      </p>

      <div className="mt-4 flex flex-col gap-2">
        <label htmlFor="ref-business" className="text-sm font-semibold">Business name & location</label>
        <input
          id="ref-business"
          name="business"
          value={form.business}
          onChange={handleChange}
          type="text"
          required
          placeholder="e.g. a barber in Hitchin"
          className={inputClass}
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="ref-their-contact" className="text-sm font-semibold">
          Their email or phone <span className="font-normal text-ink/50">(optional)</span>
        </label>
        <input
          id="ref-their-contact"
          name="theirContact"
          value={form.theirContact}
          onChange={handleChange}
          type="text"
          placeholder="Only if they're happy for me to get in touch"
          className={inputClass}
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="ref-message" className="text-sm font-semibold">
          Anything I should know? <span className="font-normal text-ink/50">(optional)</span>
        </label>
        <textarea
          id="ref-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. They've just opened and only have an Instagram page."
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="ref-website">Website</label>
        <input
          id="ref-website"
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
        {status === "sending" ? "Sending..." : "Send referral"}
        <ArrowRight weight="bold" />
      </button>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl border-2 border-ink bg-[#ffe1dc] px-4 py-3 text-center text-sm font-medium">
          {errorMessage} You can also call or WhatsApp me on {PHONE_DISPLAY}.
        </p>
      )}
    </form>
  );
}
