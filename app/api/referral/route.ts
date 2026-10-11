import { cleanFields, clean, isEmail, readJson, sendLead } from "@/lib/leads";
import { referral } from "@/lib/site";

const LIMITS = {
  name: 100,
  contact: 150,
  isClient: 10,
  business: 150,
  theirContact: 150,
  message: 2000,
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

  if (!fields.name || !fields.contact || !fields.business) {
    return Response.json(
      { success: false, error: "Please fill in your name, your contact details and the business you're referring." },
      { status: 400 }
    );
  }

  const isClient = fields.isClient === "yes";
  const sent = await sendLead({
    heading: "New referral",
    subject: `New referral: ${fields.business} (from ${fields.name}${isClient ? ", client" : ""})`,
    rows: [
      ["Referred by", fields.name],
      ["Their contact", fields.contact],
      ["Existing client?", `${isClient ? "Yes" : "No"} (reward: ${isClient ? referral.clientReward : referral.otherReward})`],
      ["Business referred", fields.business],
      ["Business contact", fields.theirContact || "Not given"],
      ["Notes", fields.message || "—"],
    ],
    replyTo: isEmail(fields.contact) ? fields.contact : undefined,
  });

  return sent
    ? Response.json({ success: true })
    : Response.json({ success: false, error: "Could not send." }, { status: 502 });
}
