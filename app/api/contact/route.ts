import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, business, contact } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: "EJSCOTT Leads <onboarding@resend.dev>",
      to: ["ethan@ejscott.co.uk"], // 👈 change this
      subject: `New Website Lead: ${business}`,
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Contact:</strong> ${contact}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error }, { status: 500 });
  }
}