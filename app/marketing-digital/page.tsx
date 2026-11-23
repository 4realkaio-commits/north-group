import type { Metadata } from "next";
import ServiceLanding from "../components/ServiceLanding";

export const metadata: Metadata = {
  title: "Marketing Digital e Estratégia para Empresas | NORTH GROUP",
  description:
    "Estratégias de marketing digital, posicionamento e campanhas para empresas. A NORTH GROUP conecta presença digital, comunicação e objetivos comerciais.",
  alternates: { canonical: "/marketing-digital" },
  openGraph: {
    title: "Marketing Digital para Empresas | NORTH GROUP",
    description:
      "Marketing digital, posicionamento e estratégias para fortalecer a presença da sua empresa e gerar oportunidades.",
    url: "/marketing-digital",
    siteName: "NORTH GROUP",
    locale: "pt_BR",
    type: "website",
  },
};

export default function MarketingDigitalPage() {
  return (
    <ServiceLanding
      eyebrow="NORTH GROUP — MARKETING DIGITAL"
      title="Posicione sua empresa. Fortaleça sua presença. Gere oportunidades."
      description="Ajudamos empresas a desenvolver uma presença digital mais estratégica, conectando comunicação, posicionamento e campanhas aos objetivos do negócio."
      cta="Fale sobre seu projeto"
      sections={[
        {
          title: "Estratégia e posicionamento",
          description: "Definição de direcionamento, comunicação e presença digital alinhados ao mercado e aos objetivos da empresa.",
        },
        {
          title: "Gestão de campanhas",
          description: "Planejamento e acompanhamento de campanhas digitais com foco em alcançar o público adequado e gerar oportunidades.",
        },
        {
          title: "Presença digital",
          description: "Desenvolvimento de uma comunicação consistente entre site, canais digitais e pontos de contato com potenciais clientes.",
        },
        {
          title: "Análise de desempenho",
          description: "Acompanhamento de indicadores para entender resultados, identificar oportunidades e orientar melhorias.",
        },
      ]}
      benefits={[
        "Comunicação mais clara e profissional.",
        "Estratégias alinhadas aos objetivos comerciais.",
        "Melhor aproveitamento dos canais digitais.",
        "Acompanhamento de campanhas e indicadores.",
      ]}
    />
  );
}
