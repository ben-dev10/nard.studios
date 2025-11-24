import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { NARD_EMAIL } from "@/app/_assets/constants";
import { checkRateLimit } from "./rate-limit";
import { escapeHtml } from "./xss";

/* Validation schema */
const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  emailOrPhone: z
    .string()
    .min(5, "Contact info is too short")
    .max(50, "Contact info is too long")
    .refine(
      (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        return emailRegex.test(val) || phoneRegex.test(val);
      },
      { message: "Please enter a valid email or phone number" },
    ),
  serviceType: z.string().min(2, "Please select a service").max(50),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  honey: z.string().max(0, "Invalid submission").optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

/*
 * main POST request function
 */
export async function POST(req: Request) {
  try {
    /* 1 */
    // pre-check 1: Check Content-Type
    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 400 },
      );
    }

    // pre-check 2: Rate limiting by IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "127.0.0.1";
    const rateLimitCheck = checkRateLimit(ip);

    if (!rateLimitCheck.allowed) {
      const resetTime = rateLimitCheck.resetTime;
      return NextResponse.json(
        {
          error: "Too many requests",
          message: `Please try again at ${resetTime?.toLocaleTimeString()}`,
          retryAfter: resetTime?.toISOString(),
        },
        { status: 429 },
      );
    }

    /* 2 */
    const body = await req.json();

    // Validate input
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      const flattened = z.flattenError(parsed.error);

      return NextResponse.json(
        { error: "Input validation failed", fields: flattened.fieldErrors },
        { status: 400 },
      );
    }

    const { name, emailOrPhone, serviceType, message, honey } = parsed.data;

    // Honeypot check
    if (honey && honey.trim() !== "") {
      console.log(`Spam detected from IP: ${ip}`);
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // Send email
    await resend.emails.send({
      from: "NARD.STUDIOS Contact <onboarding@resend.dev>",
      to: NARD_EMAIL,
      subject: `Contact form: ${serviceType}`,
      html: `
        <h3>New Contact Form Submission: nard.studios</h3>
        <p><strong>Name:</strong>${escapeHtml(name)}</p>
        <p><strong>Contact:</strong> ${escapeHtml(emailOrPhone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(serviceType)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 },
    );
  }
}
