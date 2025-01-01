import axios from "axios";
import { NextResponse } from "next/server";

import { logger } from "@/lib/logger";
import { acquireToken, createEmailHTML } from "@/lib/mail";

export const revalidate = 0;
export const fetchCache = "force-no-store";

export async function GET() {
  return NextResponse.json({ hello: "Hello from message service" });
}

export async function POST(req) {
  const request = await req.json();
  logger.log(request, "Request");
  const { name, email, phone, message } = request;

  const token = await acquireToken();
  const graphEndpoint = "";
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const emailContent = createEmailHTML({
    name,
    email,
    phone,
    message,
  });

  const mailOptions = {
    message: {
      subject: "New Contact Form Submission",
      body: {
        contentType: "HTML",
        content: emailContent,
      },
      toRecipients: [
        {
          emailAddress: {
            address: process.env.MAILER_RECIPIENT_EMAIL,
          },
        },
      ],
      importance: "Normal",
      hasAttachments: false,
    },
  };

  try {
    const response = await axios.post(graphEndpoint, mailOptions, {
      headers,
    });
    if (response.status === 202) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      logger.error(`${response.status},Failed to send email`);
      logger.error(response.data);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  } catch (error) {
    logger.error(error.message, "Error sending email:");
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }
}
