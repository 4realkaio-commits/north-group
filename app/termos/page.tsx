
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | NORTH GROUP",
  description:
    "Consulte os termos de uso do site da NORTH GROUP.",
};

const sections = [
  {
    title: "01. Sobre estes termos",
    paragraphs: [
      "Estes Termos de Uso estabelecem condições gerais para acesso e utilização do site da NORTH GROUP. Ao navegar pelo site, você concorda em respeitar as condições aqui descritas.",
      "Se você não concordar com estes termos, recomendamos que interrompa a utilização do site.",
    ],
  },
  {
    title: "02. Finalidade do site",
    paragraphs: [
      "O site apresenta informações institucionais sobre a NORTH GROUP e suas áreas de atuação, além de permitir que visitantes entrem em contato para esclarecer dúvidas ou solicitar informações sobre serviços.",
      "As informações publicadas têm caráter informativo e não representam, por si só, uma proposta comercial vinculante ou garantia de resultados específicos.",
    ],
  },
  {
    title: "03. Solicitações e propostas comerciais",
    paragraphs: [
      "O envio de uma mensagem ou solicitação não estabelece automaticamente uma relação contratual entre o visitante e a NORTH GROUP.",
      "A contratação de serviços, quando aplicável, dependerá de alinhamento entre as partes e das condições formalizadas na respectiva proposta ou contrato.",
    ],
  },
  {
    title: "04. Responsabilidades do visitante",
    paragraphs: [
      "O visitante compromete-se a utilizar o site de forma lícita, respeitosa e sem tentar comprometer sua disponibilidade, segurança ou funcionamento.",
      "Não é permitido utilizar o site para atividades fraudulentas, transmitir conteúdo malicioso ou tentar acessar áreas, sistemas ou informações sem autorização.",
    ],
  },
  {
    title: "05. Propriedade intelectual",
    paragraphs: [
      "Os textos, elementos visuais, identidade de marca, layouts e demais materiais disponibilizados no site são protegidos pela legislação aplicável, quando cabível.",
      "A reprodução, distribuição ou utilização comercial desses materiais depende de autorização prévia do respectivo titular, salvo nas hipóteses permitidas por lei.",
    ],
  },
  {
    title: "06. Links e serviços de terceiros",
    paragraphs: [
      "O site pode conter links para plataformas externas, como o WhatsApp e o Instagram. Esses serviços possuem seus próprios termos e políticas.",
      "A NORTH GROUP não controla integralmente a disponibilidade, o conteúdo ou as práticas de privacidade de plataformas de terceiros.",
    ],
  },
  {
    title: "07. Disponibilidade e segurança",
    paragraphs: [
      "Buscamos manter o site disponível e funcionando adequadamente, mas não garantimos funcionamento ininterrupto ou ausência total de falhas.",
      "Podem ocorrer interrupções temporárias para manutenção, atualizações ou situações fora do nosso controle. Medidas de segurança são adotadas conforme aplicável, sem garantia de proteção absoluta.",
    ],
  },
  {
    title: "08. Privacidade e proteção de dados",
    paragraphs: [
      "O tratamento de dados pessoais relacionados à utilização do site deverá observar a legislação aplicável, especialmente a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).",
      "Para entender como as informações pessoais podem ser tratadas, consulte nossa Política de Privacidade.",
    ],
  },
  {
    title: "09. Alterações dos termos",
    paragraphs: [
      "Estes termos poderão ser atualizados para refletir mudanças no site, nos serviços ou nas exigências legais. A versão publicada nesta página será a referência para consulta.",
    ],
  },
  {
    title: "10. Legislação aplicável",
    paragraphs: [
      "Estes termos serão interpretados conforme a legislação brasileira. Eventuais questões serão tratadas pelas vias adequadas, respeitadas as regras legais de competência aplicáveis.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-white/70 text-lg font-semibold tracking-[-0.12em]">
              N.
            </span>

            <span className="text-[11px] font-semibold tracking-[0.22em]">
              NORTH <span className="text-white/40">GROUP</span>
            </span>
          </Link>

          <Link
            href="/"
            className="text-[9px] uppercase tracking-[0.16em] text-white/55 transition hover:text-white"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 px-5 py-20 sm:px-8 sm:py-28">
        <div className="pointer-events-none absolute inset-0 north-grid opacity-30" />

        <div className="relative mx-auto max-w-[1000px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-white" />
            <span className="text-[9px] uppercase tracking-[0.28em] text-white/45">
              Condições de utilização
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-light leading-[0.95] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            TERMOS
            <br />
            <span className="text-white/35">DE USO.</span>
          </h1>

          <p className="mt-8 max-w-[580px] text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
            As condições gerais para navegar pelo site e conhecer as soluções
            da NORTH GROUP.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[850px]">
          <p className="mb-10 border-b border-white/10 pb-8 text-sm leading-7 text-white/55">
            Estes termos buscam tornar claras as condições de utilização do
            site. A contratação de qualquer serviço dependerá de condições
            específicas acordadas entre as partes.
          </p>

          {sections.map((section) => (
            <article
              key={section.title}
              className="border-b border-white/10 py-8 first:pt-0"
            >
              <h2 className="text-lg font-medium tracking-[-0.025em] sm:text-xl">
                {section.title}
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-white/55">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}

          <div className="mt-10 flex flex-col gap-4 border border-white/15 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm">Ficou com alguma dúvida?</p>
              <p className="mt-2 text-xs leading-6 text-white/45">
                Entre em contato com a NORTH GROUP.
              </p>
            </div>

            <a
              href="https://wa.me/5513974015844?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20NORTH%20GROUP%20e%20tenho%20uma%20d%C3%BAvida."
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 border border-white/30 px-5 py-4 text-[9px] uppercase tracking-[0.15em] transition hover:bg-white hover:text-black"
            >
              Falar com a North
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-white/35">
            <Link
              href="/privacidade"
              className="underline underline-offset-4 transition hover:text-white"
            >
              Ler a Política de Privacidade
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-[10px] tracking-[0.2em]">
            NORTH GROUP
          </Link>

          <p className="text-[9px] tracking-[0.08em] text-white/30">
            © 2026 NORTH GROUP. Todos os direitos reservados.
          </p>

          <Link
            href="/"
            className="w-fit text-[9px] uppercase tracking-[0.15em] text-white/45 transition hover:text-white"
          >
            Voltar ao início
          </Link>
        </div>
      </footer>
    </main>
  );
}
