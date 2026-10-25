
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Sites estratégicos",
    description:
      "Sites profissionais para fortalecer sua marca, transmitir confiança e transformar visitantes em oportunidades.",
    tag: "PRESENÇA DIGITAL",
  },
  {
    number: "02",
    title: "CRM e gestão de leads",
    description:
      "Organização de contatos, estruturação do funil comercial e acompanhamento de oportunidades.",
    tag: "PROCESSO COMERCIAL",
  },
  {
    number: "03",
    title: "Posicionamento de marca",
    description:
      "Uma comunicação estratégica para diferenciar sua empresa e fortalecer sua presença no mercado.",
    tag: "MARCA E ESTRATÉGIA",
  },
  {
    number: "04",
    title: "Conteúdo e marketing",
    description:
      "Planejamento de conteúdo e estratégias digitais alinhados aos objetivos do seu negócio.",
    tag: "CRESCIMENTO DIGITAL",
  },
  {
    number: "05",
    title: "Gestão empresarial",
    description:
      "Mais clareza sobre processos, indicadores e oportunidades para apoiar decisões melhores.",
    tag: "GESTÃO E PERFORMANCE",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos o momento da empresa, seus desafios e os pontos que merecem atenção.",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Definimos prioridades e construímos um plano de ação alinhado à realidade do negócio.",
  },
  {
    number: "03",
    title: "Execução",
    description:
      "Transformamos o planejamento em ações práticas, acompanhando a evolução e ajustando o que for necessário.",
  },
];

const whatsappUrl =
  "https://wa.me/5513974015844?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20NORTH%20GROUP%20e%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es.";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-white selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Logo da NORTH GROUP"
              className="h-10 w-10 object-contain"
            />
            <span className="text-[11px] font-semibold tracking-[0.22em]">
              NORTH <span className="text-white/40">GROUP</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#sobre" className="text-xs text-white/55 transition hover:text-white">
              Sobre
            </a>
            <a href="#servicos" className="text-xs text-white/55 transition hover:text-white">
              Soluções
            </a>
            <a href="#processo" className="text-xs text-white/55 transition hover:text-white">
              Processo
            </a>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-[44px] items-center justify-between gap-3 border border-white/40 bg-[#050505] px-4 py-3 text-[9px] font-medium uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-[#111111] sm:px-5"
          >
            <span>Fale com a North</span>
            <span>↗</span>
          </a>
        </div>
      </header>

      <section className="relative flex min-h-[690px] items-center border-b border-white/10 sm:min-h-[760px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-180px] top-[10%] h-[450px] w-[450px] rounded-full bg-white/[0.035] blur-[120px]"
        />

        <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-32">
          <div className="animate-[fadeIn_0.8s_ease-out_both]">
            <div className="mb-9 flex items-center gap-3">
              <span className="h-px w-8 bg-white/70" />
              <p className="text-[9px] uppercase tracking-[0.32em] text-white/50 sm:text-[10px]">
                Assessoria de crescimento empresarial
              </p>
            </div>

            <h1 className="max-w-[850px] text-[clamp(3.5rem,9vw,8.5rem)] font-light leading-[0.83] tracking-[-0.085em]">
              SUA EMPRESA.
              <br />
              <span className="text-white/35">OUTRO NÍVEL.</span>
            </h1>

            <p className="mt-10 max-w-[470px] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Estratégia, estrutura e execução para empresas que querem
              crescer com mais direção, organização e clareza.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-[60px] items-center justify-between gap-8 border border-white/40 bg-[#050505] px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition hover:border-white hover:bg-[#111111]"
              >
                <span>Vamos conversar</span>
                <span className="text-base transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#servicos"
                className="inline-flex min-h-[60px] items-center justify-between gap-8 border border-white/20 bg-[#050505] px-6 py-5 text-[10px] uppercase tracking-[0.15em] text-white/70 transition hover:border-white/60 hover:bg-[#0c0c0c] hover:text-white"
              >
                Conheça as soluções
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[420px] items-center justify-center lg:flex">
            <div className="absolute h-[360px] w-[360px] rounded-full border border-white/[0.08]" />
            <div className="absolute h-[270px] w-[270px] rounded-full border border-white/[0.12]" />
            <div className="absolute h-[180px] w-[180px] rounded-full border border-white/[0.18]" />

            <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden border border-white/60 bg-[#050505]">
              <img
                src="/logo.jpg"
                alt="Logo da NORTH GROUP"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="absolute right-2 top-16 max-w-[155px] border border-white/10 bg-[#050505] p-4">
              <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                Nossa direção
              </p>
              <p className="mt-2 text-xs leading-5 text-white/85">
                Estratégia que sai do papel.
              </p>
            </div>

            <div className="absolute bottom-12 left-0 max-w-[170px] border border-white/10 bg-[#050505] p-4">
              <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                Nosso objetivo
              </p>
              <p className="mt-2 text-xs leading-5 text-white/85">
                Crescimento com estrutura.
              </p>
            </div>

            <div className="absolute bottom-2 right-10 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                NORTH GROUP
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
            <span className="text-[8px] uppercase tracking-[0.22em] text-white/35 sm:text-[9px]">
              Estratégia. Estrutura. Crescimento.
            </span>
            <a href="#sobre" className="text-[9px] uppercase tracking-[0.18em] text-white/40 transition hover:text-white">
              Explore ↓
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-24 border-b border-white/10 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-white/70" />
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                01 / Sobre a North
              </span>
            </div>
            <p className="mt-8 max-w-[260px] text-sm leading-7 text-white/40">
              Não basta trabalhar mais. É preciso saber onde sua empresa quer
              chegar e o que precisa mudar para isso acontecer.
            </p>
          </div>

          <div>
            <h2 className="max-w-[850px] text-3xl font-light leading-tight tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Crescimento não acontece por acaso.
              <span className="text-white/35"> Ele precisa de direção.</span>
            </h2>
            <p className="mt-8 max-w-[690px] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              A NORTH GROUP atua ao lado de empresas que buscam evoluir.
              Analisamos necessidades, identificamos oportunidades e
              estruturamos soluções que conectam presença digital, organização
              comercial e gestão empresarial.
            </p>
            <p className="mt-5 max-w-[690px] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Cada negócio tem uma realidade diferente. Por isso, nosso
              trabalho começa entendendo o seu momento, antes de definir quais
              ações fazem sentido.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-5 border-b border-white/30 pb-3 text-[10px] uppercase tracking-[0.16em] transition hover:border-white"
            >
              Entenda como podemos ajudar <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-24 border-b border-white/10 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-white/70" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                  02 / O que fazemos
                </span>
              </div>
              <h2 className="mt-8 text-4xl font-light tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                SOLUÇÕES
                <br />
                <span className="text-white/35">COM DIREÇÃO.</span>
              </h2>
            </div>
            <p className="max-w-[360px] text-sm leading-7 text-white/45">
              Diferentes frentes de atuação, conectadas a um mesmo objetivo:
              ajudar sua empresa a evoluir com mais estrutura.
            </p>
          </div>

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex min-h-[285px] flex-col bg-[#050505] p-7 transition-colors duration-300 hover:bg-[#0c0c0c] sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs text-white/35">{service.number}</span>
                  <span className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                    ↗
                  </span>
                </div>
                <div className="mt-12">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                    {service.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-medium tracking-[-0.035em] sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/45">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[285px] flex-col justify-between bg-[#050505] p-7 text-white transition-colors duration-300 hover:bg-[#0c0c0c] sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-white/35">06</span>
                <span className="text-xl text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-white">
                  ↗
                </span>
              </div>
              <div>
                <h3 className="max-w-[250px] text-3xl font-light leading-tight tracking-[-0.05em] sm:text-4xl">
                  Sua empresa precisa de outra solução?
                </h3>
                <p className="mt-5 text-[10px] uppercase tracking-[0.15em] text-white/45">
                  Vamos conversar →
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="processo" className="scroll-mt-24 border-b border-white/10 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-white/70" />
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/45">
              03 / Como trabalhamos
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <h2 className="text-4xl font-light leading-tight tracking-[-0.06em] sm:text-6xl">
              Primeiro,
              <br />
              <span className="text-white/35">entendemos.</span>
              <br />
              Depois, agimos.
            </h2>

            <div className="divide-y divide-white/10">
              {steps.map((step) => (
                <article key={step.number} className="grid gap-4 py-7 first:pt-0 sm:grid-cols-[65px_1fr] sm:gap-6">
                  <span className="text-xs text-white/35">{step.number}</span>
                  <div>
                    <h3 className="text-xl tracking-[-0.03em] sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[490px] text-sm leading-7 text-white/45">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-white/70" />
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/45">
              O próximo passo começa aqui
            </span>
          </div>
          <h2 className="mt-9 max-w-[1000px] text-5xl font-light leading-[0.95] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            SUA PRÓXIMA
            <br />
            <span className="text-white/35">FASE COMEÇA</span>
            <br />
            AGORA.
          </h2>
          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-[430px] text-sm leading-7 text-white/50 sm:text-base">
              Vamos entender o momento da sua empresa e identificar quais
              caminhos podem fazer sentido para o seu crescimento.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center justify-between gap-12 border border-white/40 bg-[#050505] px-7 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-[#111111]"
            >
              Iniciar uma conversa
              <span className="text-base transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050505] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <Link href="/" className="flex w-fit items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Logo da NORTH GROUP"
                className="h-9 w-9 object-contain"
              />
              <span className="text-[10px] font-semibold tracking-[0.2em]">
                NORTH <span className="text-white/40">GROUP</span>
              </span>
            </Link>

            <div className="flex flex-wrap gap-x-6 gap-y-4 text-[10px] text-white/45">
              <Link href="/privacidade" className="transition hover:text-white">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="transition hover:text-white">
                Termos de Uso
              </Link>
              <a
                href="https://www.instagram.com/northgroupp/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] tracking-[0.05em] text-white/30">
              © 2026 NORTH GROUP. Todos os direitos reservados.
            </p>
            <p className="text-[9px] tracking-[0.05em] text-white/30">
              Estratégia para negócios que querem evoluir.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
