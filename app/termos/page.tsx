
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
      "Estes Termos de Uso estabelecem condiÃ§Ãµes gerais para acesso e utilizaÃ§Ã£o do site da NORTH GROUP. Ao navegar pelo site, vocÃª concorda em respeitar as condiÃ§Ãµes aqui descritas.",
      "Se vocÃª nÃ£o concordar com estes termos, recomendamos que interrompa a utilizaÃ§Ã£o do site.",
    ],
  },
  {
    title: "02. Finalidade do site",
    paragraphs: [
      "O site apresenta informaÃ§Ãµes institucionais sobre a NORTH GROUP e suas Ã¡reas de atuaÃ§Ã£o, alÃ©m de permitir que visitantes entrem em contato para esclarecer dÃºvidas ou solicitar informaÃ§Ãµes sobre serviÃ§os.",
      "As informaÃ§Ãµes publicadas tÃªm carÃ¡ter informativo e nÃ£o representam, por si sÃ³, uma proposta comercial vinculante ou garantia de resultados especÃ­ficos.",
    ],
  },
  {
    title: "03. SolicitaÃ§Ãµes e propostas comerciais",
    paragraphs: [
      "O envio de uma mensagem ou solicitaÃ§Ã£o nÃ£o estabelece automaticamente uma relaÃ§Ã£o contratual entre o visitante e a NORTH GROUP.",
      "A contrataÃ§Ã£o de serviÃ§os, quando aplicÃ¡vel, dependerÃ¡ de alinhamento entre as partes e das condiÃ§Ãµes formalizadas na respectiva proposta ou contrato.",
    ],
  },
  {
    title: "04. Responsabilidades do visitante",
    paragraphs: [
      "O visitante compromete-se a utilizar o site de forma lÃ­cita, respeitosa e sem tentar comprometer sua disponibilidade, seguranÃ§a ou funcionamento.",
      "NÃ£o Ã© permitido utilizar o site para atividades fraudulentas, transmitir conteÃºdo malicioso ou tentar acessar Ã¡reas, sistemas ou informaÃ§Ãµes sem autorizaÃ§Ã£o.",
    ],
  },
  {
    title: "05. Propriedade intelectual",
    paragraphs: [
      "Os textos, elementos visuais, identidade de marca, layouts e demais materiais disponibilizados no site sÃ£o protegidos pela legislaÃ§Ã£o aplicÃ¡vel, quando cabÃ­vel.",
      "A reproduÃ§Ã£o, distribuiÃ§Ã£o ou utilizaÃ§Ã£o comercial desses materiais depende de autorizaÃ§Ã£o prÃ©via do respectivo titular, salvo nas hipÃ³teses permitidas por lei.",
    ],
  },
  {
    title: "06. Links e serviÃ§os de terceiros",
    paragraphs: [
      "O site pode conter links para plataformas externas, como o WhatsApp e o Instagram. Esses serviÃ§os possuem seus prÃ³prios termos e polÃ­ticas.",
      "A NORTH GROUP nÃ£o controla integralmente a disponibilidade, o conteÃºdo ou as prÃ¡ticas de privacidade de plataformas de terceiros.",
    ],
  },
  {
    title: "07. Disponibilidade e seguranÃ§a",
    paragraphs: [
      "Buscamos manter o site disponÃ­vel e funcionando adequadamente, mas nÃ£o garantimos funcionamento ininterrupto ou ausÃªncia total de falhas.",
      "Podem ocorrer interrupÃ§Ãµes temporÃ¡rias para manutenÃ§Ã£o, atualizaÃ§Ãµes ou situaÃ§Ãµes fora do nosso controle. Medidas de seguranÃ§a sÃ£o adotadas conforme aplicÃ¡vel, sem garantia de proteÃ§Ã£o absoluta.",
    ],
  },
  {
    title: "08. Privacidade e proteÃ§Ã£o de dados",
    paragraphs: [
      "O tratamento de dados pessoais relacionados Ã  utilizaÃ§Ã£o do site deverÃ¡ observar a legislaÃ§Ã£o aplicÃ¡vel, especialmente a Lei Geral de ProteÃ§Ã£o de Dados Pessoais (Lei nÂº 13.709/2018).",
      "Para entender como as informaÃ§Ãµes pessoais podem ser tratadas, consulte nossa PolÃ­tica de Privacidade.",
    ],
  },
  {
    title: "09. AlteraÃ§Ãµes dos termos",
    paragraphs: [
      "Estes termos poderÃ£o ser atualizados para refletir mudanÃ§as no site, nos serviÃ§os ou nas exigÃªncias legais. A versÃ£o publicada nesta pÃ¡gina serÃ¡ a referÃªncia para consulta.",
    ],
  },
  {
    title: "10. LegislaÃ§Ã£o aplicÃ¡vel",
    paragraphs: [
      "Estes termos serÃ£o interpretados conforme a legislaÃ§Ã£o brasileira. Eventuais questÃµes serÃ£o tratadas pelas vias adequadas, respeitadas as regras legais de competÃªncia aplicÃ¡veis.",
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
            â† Voltar ao site
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 px-5 py-20 sm:px-8 sm:py-28">
        <div className="pointer-events-none absolute inset-0 north-grid opacity-30" />

        <div className="relative mx-auto max-w-[1000px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-white" />
            <span className="text-[9px] uppercase tracking-[0.28em] text-white/45">
              CondiÃ§Ãµes de utilizaÃ§Ã£o
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-light leading-[0.95] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            TERMOS
            <br />
            <span className="text-white/35">DE USO.</span>
          </h1>

          <p className="mt-8 max-w-[580px] text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
            As condiÃ§Ãµes gerais para navegar pelo site e conhecer as soluÃ§Ãµes
            da NORTH GROUP.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[850px]">
          <p className="mb-10 border-b border-white/10 pb-8 text-sm leading-7 text-white/55">
            Estes termos buscam tornar claras as condiÃ§Ãµes de utilizaÃ§Ã£o do
            site. A contrataÃ§Ã£o de qualquer serviÃ§o dependerÃ¡ de condiÃ§Ãµes
            especÃ­ficas acordadas entre as partes.
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
              <p className="text-sm">Ficou com alguma dÃºvida?</p>
              <p className="mt-2 text-xs leading-6 text-white/45">
                Entre em contato com a NORTH GROUP.
              </p>
            </div>

            <a
              href="https://wa.me/551333967048?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20NORTH%20GROUP%20e%20tenho%20uma%20d%C3%BAvida."
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 border border-white/30 px-5 py-4 text-[9px] uppercase tracking-[0.15em] transition hover:bg-white hover:text-black"
            >
              Falar com a North
              <span aria-hidden="true">â†—</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-white/35">
            <Link
              href="/privacidade"
              className="underline underline-offset-4 transition hover:text-white"
            >
              Ler a PolÃ­tica de Privacidade
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
            Â© 2026 NORTH GROUP. Todos os direitos reservados.
          </p>

          <Link
            href="/"
            className="w-fit text-[9px] uppercase tracking-[0.15em] text-white/45 transition hover:text-white"
          >
            Voltar ao inÃ­cio
          </Link>
        </div>
      </footer>
    </main>
  );
}

