import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { NARD_EMAIL } from "@/app/_assets/constants";

// Validation schema
const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  emailOrPhone: z.string().min(5, "Provide a valid contact"),
  serviceType: z.string().min(2),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honey: z.string().optional(), // honeypot
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate input
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { name, emailOrPhone, serviceType, message, honey } = parsed.data;

    // Honeypot check
    if (honey && honey.trim() !== "") {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // Send email
    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: NARD_EMAIL,
      subject: `Contact form: ${serviceType}`,
      html: `
        <h3>New Contact Form Submission: nard.studios</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${emailOrPhone}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 },
    );
  }
}
