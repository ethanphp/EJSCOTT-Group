import { cleanFields, clean, isEmail, readJson, sendLead } from "@/lib/leads";

const LIMITS = {
  name: 100,
  business: 150,
  contact: 150,
  need: 60,
  message: 2000,
  referredBy: 150,
  source: 200,
};

export async function POST(req: Request) {
  const body = await readJson(req);
  if (!body) {
    return Response.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.website, 200)) {
    return Response.json({ success: true });
  }

  const fields = cleanFields(body, LIMITS);

  if (!fields.name || !fields.business || !fields.contact) {
    return Response.json(
      { success: false, error: "Please fill in your name, business and contact details." },
      { status: 400 }
    );
  }

  const sent = await sendLead({
    heading: "New lead",
    subject: `New lead: ${fields.business}${fields.need ? ` (${fields.need})` : ""}${
      fields.referredBy ? ` · referred by ${fields.referredBy}` : ""
    }`,
    rows: [
      ["Name", fields.name],
      ["Business", fields.business],
      ["Contact", fields.contact],
      ["Looking for", fields.need || "Not specified"],
      ["Message", fields.message || "—"],
      ["Referred by", fields.referredBy || "—"],
      ["Sent from", fields.source || "/"],
    ],
    replyTo: isEmail(fields.contact) ? fields.contact : undefined,
  });

  return sent
    ? Response.json({ success: true })
    : Response.json({ success: false, error: "Could not send." }, { status: 502 });
}
