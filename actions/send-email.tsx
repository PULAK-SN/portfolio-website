"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import { render } from "@react-email/components";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const emailHtml = await render(
    <ContactFormEmail message={message} senderEmail={senderEmail} />
  );

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact_form<onboarding@resend.dev>",
      to: ["pulak.official22@gmail.com"],
      replyTo: senderEmail,
      subject: "Message from contact form",
      html: emailHtml,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
