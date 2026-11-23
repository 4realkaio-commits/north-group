import type { Metadata } from "next";
import ServiceLanding from "../components/ServiceLanding";

export const metadata: Metadata = {
  title: "NORTH GROUP | Digital Solutions, Software and Business Strategy",
  description:
    "NORTH GROUP develops websites, custom software, business automation and digital marketing strategies for companies looking to grow through technology.",
  alternates: { canonical: "/en" },
  openGraph: {
    title: "NORTH GROUP | Digital Solutions for Business",
    description:
      "Web development, custom systems, automation and digital strategies for businesses.",
    url: "/en",
    siteName: "NORTH GROUP",
    locale: "en_US",
    type: "website",
  },
};

export default function EnglishPage() {
  return (
    <ServiceLanding
      language="en"
      eyebrow="NORTH GROUP — DIGITAL SOLUTIONS"
      title="Technology and strategy to move your business forward."
      description="We develop professional websites, custom software, business automation and digital strategies designed around the needs of companies looking to grow."
      cta="Talk to our team"
      sections={[
        {
          title: "Websites and digital platforms",
          description: "Professional websites and digital experiences designed to strengthen your online presence and support your business goals.",
        },
        {
          title: "Custom software and systems",
          description: "Digital systems and tailored platforms built around your company's processes, needs and workflows.",
        },
        {
          title: "Business automation",
          description: "Automated workflows and integrations that help reduce repetitive tasks and improve operational efficiency.",
        },
        {
          title: "Digital marketing strategy",
          description: "Digital positioning, campaign management and performance analysis aligned with your business objectives.",
        },
      ]}
      benefits={[
        "Solutions tailored to your business needs.",
        "Technology connected to practical business goals.",
        "More organized workflows and digital operations.",
        "A strategic approach to digital growth.",
      ]}
    />
  );
}
