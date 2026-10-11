import { Resend } from "resend";

// Set these in the hosting environment. The fallbacks keep the form working
// until a sending domain is verified in Resend.
const TO = process.env.CONTACT_TO_EMAIL ?? "ethan@ejscott.co.uk";
const FROM =
  process.env.CONTACT_FROM_EMAIL ?? "EJSCOTT Leads <onboarding@resend.dev>";

const LIMITS = { name: 100, business: 150, contact: 150, need: 60, message: 2000 };
type Field = keyof typeof LIMITS;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.website, 200)) {
    return Response.json({ success: true });
  }

  const fields = Object.fromEntries(
    (Object.keys(LIMITS) as Field[]).map((key) => [key, clean(body[key], LIMITS[key])])
  ) as Record<Field, string>;

  if (!fields.name || !fields.business || !fields.contact) {
    return Response.json(
      { success: false, error: "Please fill in your name, business and contact details." },
      { status: 400 }
    );
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.contact);
  const rows: [string, string][] = [
    ["Name", fields.name],
    ["Business", fields.business],
    ["Contact", fields.contact],
    ["Looking for", fields.need || "Not specified"],
    ["Message", fields.message || "—"],
  ];

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: isEmail ? fields.contact : undefined,
      subject: `New lead: ${fields.business}${fields.need ? ` (${fields.need})` : ""}`,
      html: `<h2>New lead</h2>${rows
        .map(
          ([label, value]) =>
            `<p><strong>${label}:</strong> ${escapeHtml(value).replace(/\n/g, "<br>")}</p>`
        )
        .join("")}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
    });

    if (error) {
      console.error("Resend error", error);
      return Response.json({ success: false, error: "Could not send." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    return Response.json({ success: false, error: "Could not send." }, { status: 500 });
  }
}
