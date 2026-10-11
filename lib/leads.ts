import { Resend } from "resend";

// Set these in the hosting environment. The fallbacks keep the forms working
// until a sending domain is verified in Resend.
const TO = process.env.CONTACT_TO_EMAIL ?? "ethan@ejscott.co.uk";
const FROM =
  process.env.CONTACT_FROM_EMAIL ?? "EJSCOTT Leads <onboarding@resend.dev>";

export function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Trims and length-limits every field in `limits`, ignoring anything else. */
export function cleanFields<K extends string>(body: Record<string, unknown>, limits: Record<K, number>) {
  return Object.fromEntries(
    (Object.keys(limits) as K[]).map((key) => [key, clean(body[key], limits[key])])
  ) as Record<K, string>;
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function readJson(req: Request): Promise<Record<string, unknown> | null> {
  try {
    const body = await req.json();
    return body && typeof body === "object" ? body : null;
  } catch {
    return null;
  }
}

/** Emails a lead to the owner. Returns false if it couldn't be sent. */
export async function sendLead({
  heading,
  subject,
  rows,
  replyTo,
}: {
  heading: string;
  subject: string;
  rows: [string, string][];
  replyTo?: string;
}) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo,
      subject,
      html: `<h2>${escapeHtml(heading)}</h2>${rows
        .map(
          ([label, value]) =>
            `<p><strong>${label}:</strong> ${escapeHtml(value).replace(/\n/g, "<br>")}</p>`
        )
        .join("")}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
    });

    if (error) {
      console.error("Resend error", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Lead email error", error);
    return false;
  }
}
