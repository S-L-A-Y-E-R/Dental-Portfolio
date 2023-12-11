import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  subject: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  subject,
  message,
  email,
}) => (
  <Html>
    <Head />
    <Preview>New message from portfolio website.</Preview>
    <Tailwind>
      <Body className="bg-gray-100">
        <Container>
          <Section className="bg-white my-10 px-10 py-4 rounded-md border">
            <Heading className="leading-tight">{subject}</Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender&apos;s email is: {email}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;
