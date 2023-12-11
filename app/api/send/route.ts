import EmailTemplate from "@/components/email-template";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "elayoutihasan@gmail.com",
      reply_to: email,
      subject: subject,
      text: "",
      react: EmailTemplate({ subject, message, email }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
