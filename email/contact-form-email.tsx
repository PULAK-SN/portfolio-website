import {
  Html,
  Body,
  Head,
  Preview,
  Section,
  Container,
  Text,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { MdEmail } from "react-icons/md";

interface ContactFormEmailProps {
  message: string;
  senderEmail: string;
}

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio contact form</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans text-gray-900">
          <Container className="bg-white border border-gray-200 rounded-lg shadow-md max-w-xl mx-auto p-6">
            <Section className="mb-6">
              <Text className="text-lg font-bold text-gray-800 flex items-center">
                <MdEmail /> New Contact Form Submission
              </Text>
              <Text className="text-sm text-gray-600">
                You’ve received a new message from your portfolio website.
              </Text>
            </Section>

            <Hr className="border-gray-500 mb-4" />

            <Section className="mb-4">
              <Text className="font-semibold text-[16px] text-gray-700">
                Message:
              </Text>
              <Text className="text-gray-800 text-[16px] leading-relaxed">
                {message}
              </Text>
            </Section>

            <Section>
              <Text className="font-semibold text-gray-700 flex items-center">
                <MdEmail /> Sender Email
              </Text>
              <Text>{senderEmail}</Text>
            </Section>

            <Hr className="border-gray-500 mt-6 mb-4" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
