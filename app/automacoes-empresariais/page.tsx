import type { Metadata } from "next";
import ServiceLanding from "../components/ServiceLanding";

export const metadata: Metadata = {
  title: "Automação Empresarial e de Processos | NORTH GROUP",
  description:
    "Automação empresarial, integração de ferramentas e otimização de processos. A NORTH GROUP desenvolve soluções para tornar a operação da sua empresa mais eficiente.",
  alternates: { canonical: "/automacoes-empresariais" },
  openGraph: {
    title: "Automação Empresarial | NORTH GROUP",
    description:
      "Automatize processos, conecte ferramentas e melhore a operação da sua empresa com soluções desenvolvidas pela NORTH GROUP.",
    url: "/automacoes-empresariais",
    siteName: "NORTH GROUP",
    locale: "pt_BR",
    type: "website",
  },
};

export default function AutomacoesEmpresariaisPage() {
  return (
    <ServiceLanding
      eyebrow="NORTH GROUP — AUTOMAÇÃO EMPRESARIAL"
      title="Automatize processos. Ganhe eficiência. Avance com estratégia."
      description="Desenvolvemos soluções de automação empresarial para reduzir tarefas repetitivas, conectar ferramentas e organizar processos. Tecnologia aplicada às necessidades reais da sua operação."
      cta="Converse com nossa equipe"
      sections={[
        {
          title: "Automação de processos",
          description: "Reduza atividades manuais e organize fluxos de trabalho com processos automatizados, definidos de acordo com a rotina da sua empresa.",
        },
        {
          title: "Integração de ferramentas",
          description: "Conecte plataformas e sistemas para facilitar a troca de informações e diminuir retrabalho entre diferentes áreas.",
        },
        {
          title: "Fluxos comerciais",
          description: "Estruture etapas de atendimento, acompanhamento de oportunidades e organização de informações comerciais.",
        },
        {
          title: "Soluções personalizadas",
          description: "Cada operação tem suas particularidades. Desenvolvemos automações considerando os objetivos e os processos de cada negócio.",
        },
      ]}
      benefits={[
        "Menos tarefas repetitivas e retrabalho operacional.",
        "Mais organização e padronização dos processos.",
        "Integração entre ferramentas utilizadas pela empresa.",
        "Mais clareza para acompanhar atividades e resultados.",
      ]}
    />
  );
}
