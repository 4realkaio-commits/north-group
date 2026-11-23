import type { Metadata } from "next";
import ServiceLanding from "../components/ServiceLanding";

export const metadata: Metadata = {
  title: "Growth & Estratégia | Crescimento Empresarial | NORTH GROUP",
  description:
    "Estratégia de crescimento, posicionamento de marca, aquisição de clientes e gestão de campanhas. A NORTH GROUP conecta marketing e estratégia aos objetivos do seu negócio.",
  alternates: { canonical: "/marketing-digital" },
  openGraph: {
    title: "Growth & Estratégia | NORTH GROUP",
    description:
      "Estratégias de crescimento, posicionamento e performance para empresas que querem evoluir.",
    url: "/marketing-digital",
    siteName: "NORTH GROUP",
    locale: "pt_BR",
    type: "website",
  },
};

export default function MarketingDigitalPage() {
  return (
    <ServiceLanding
      eyebrow="NORTH GROUP — GROWTH & ESTRATÉGIA"
      title="Estratégia para crescer. Inteligência para evoluir."
      description="Conectamos posicionamento, aquisição de clientes e performance para desenvolver estratégias alinhadas aos objetivos de crescimento da sua empresa."
      cta="Fale sobre seus objetivos"
      sections={[
        {
          title: "Estratégia e posicionamento",
          description:
            "Construção de um direcionamento estratégico para fortalecer a marca, comunicar valor e destacar sua empresa no mercado.",
        },
        {
          title: "Aquisição de clientes",
          description:
            "Planejamento de campanhas e ações digitais para alcançar públicos relevantes, gerar oportunidades e ampliar o potencial comercial.",
        },
        {
          title: "Marketing e performance",
          description:
            "Gestão e acompanhamento de campanhas, análise de indicadores e identificação de oportunidades para melhorar os resultados.",
        },
        {
          title: "Crescimento e otimização",
          description:
            "Análise da presença digital e dos processos de aquisição para identificar melhorias e orientar decisões estratégicas.",
        },
      ]}
      benefits={[
        "Posicionamento mais forte e profissional no mercado.",
        "Estratégias conectadas aos objetivos comerciais.",
        "Ações orientadas por dados e indicadores.",
        "Mais clareza para identificar oportunidades de crescimento.",
      ]}
    />
  );
}
