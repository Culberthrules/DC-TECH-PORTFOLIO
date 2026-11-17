import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  type: string;
  message: string;
};

function validate(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;

  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    b.name.length <= 120 &&
    typeof b.email === "string" &&
    b.email.trim().length <= 320 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email.trim()) &&
    typeof b.type === "string" &&
    b.type.length <= 80 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0 &&
    b.message.length <= 5000
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!validate(body)) {
    return NextResponse.json(
      { error: "Enter your name, a valid email address, and a message." },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !from || !to) {
    console.error("[contact] Email delivery is not configured.");
    return NextResponse.json(
      { error: "The contact form is temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const type = body.type.trim();
  const message = body.message.trim();

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: "New portfolio enquiry",
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email}`,
        `Enquiry type: ${type.trim() || "Not specified"}`,
        "",
        message.trim(),
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend delivery failed:", error.message);
      return NextResponse.json(
        { error: "Your message could not be sent. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[contact] Resend request failed:", error);
    return NextResponse.json(
      { error: "Your message could not be sent. Please try again later." },
      { status: 502 }
    );
  }
}
