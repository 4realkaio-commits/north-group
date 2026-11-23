import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criação de Sites e Desenvolvimento de Sistemas | NORTH GROUP",
  description:
    "A NORTH GROUP desenvolve sites profissionais, sistemas personalizados, plataformas digitais e integrações para empresas que buscam crescer com tecnologia.",
  alternates: {
    canonical: "/sites-e-sistemas",
  },
  openGraph: {
    title: "Criação de Sites e Desenvolvimento de Sistemas | NORTH GROUP",
    description:
      "Sites profissionais, sistemas sob medida e soluções digitais desenvolvidas para as necessidades da sua empresa.",
    url: "/sites-e-sistemas",
    siteName: "NORTH GROUP",
    locale: "pt_BR",
    type: "website",
  },
};

const whatsappUrl =
  "https://wa.me/551333967048?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20NORTH%20GROUP%20e%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es.";

const solutions = [
  {
    number: "01",
    title: "Sites profissionais",
    description:
      "Sites institucionais e páginas comerciais desenvolvidos para apresentar sua empresa, destacar seus serviços e transformar visitantes em oportunidades de negócio.",
  },
  {
    number: "02",
    title: "Sistemas personalizados",
    description:
      "Sistemas desenvolvidos sob medida para organizar informações, centralizar operações e atender aos processos específicos da sua empresa.",
  },
  {
    number: "03",
    title: "Plataformas digitais",
    description:
      "Ambientes digitais com funcionalidades próprias, áreas administrativas e recursos planejados de acordo com os objetivos de cada projeto.",
  },
  {
    number: "04",
    title: "Automações e integrações",
    description:
      "Integração entre ferramentas, sistemas e serviços para reduzir tarefas manuais, melhorar o fluxo de informações e otimizar processos.",
  },
];

const benefits = [
  {
    title: "Mais organização",
    description:
      "Centralize informações e estruture processos para facilitar a rotina e a gestão da empresa.",
  },
  {
    title: "Presença digital profissional",
    description:
      "Apresente seus serviços com clareza, fortaleça a credibilidade da marca e facilite o contato com potenciais clientes.",
  },
  {
    title: "Soluções sob medida",
    description:
      "Utilize ferramentas desenvolvidas considerando a realidade, os objetivos e as necessidades do seu negócio.",
  },
  {
    title: "Processos mais eficientes",
    description:
      "Conecte recursos e automatize etapas para diminuir atividades repetitivas e ganhar eficiência operacional.",
  },
];

const questions = [
  {
    question: "Quanto custa criar um site profissional?",
    answer:
      "O investimento depende da estrutura, do número de páginas, das funcionalidades e dos objetivos do projeto. A NORTH GROUP avalia cada necessidade para propor uma solução adequada.",
  },
  {
    question: "A NORTH GROUP desenvolve sistemas personalizados?",
    answer:
      "Sim. Os sistemas são planejados de acordo com os processos da empresa. O projeto pode incluir funcionalidades específicas, painéis administrativos, gestão de informações e integrações.",
  },
  {
    question: "É possível integrar um sistema com outras ferramentas?",
    answer:
      "Sim. Dependendo dos recursos disponíveis em cada plataforma, podemos desenvolver integrações para conectar ferramentas e facilitar a troca de informações entre sistemas.",
  },
  {
    question: "Minha empresa precisa ter uma equipe de tecnologia?",
    answer:
      "Não necessariamente. O projeto começa com o entendimento da necessidade da empresa e da solução mais adequada para sua estrutura.",
  },
  {
    question: "Como funciona o desenvolvimento de um projeto?",
    answer:
      "Primeiro entendemos os objetivos e os processos envolvidos. Depois avaliamos os requisitos, definimos a solução e estruturamos o desenvolvimento conforme o escopo acordado.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Entre em contato com a NORTH GROUP pelo WhatsApp e conte um pouco sobre sua empresa e o que deseja desenvolver. Assim podemos entender melhor o projeto.",
  },
];

export default function SitesESistemasPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="border-b border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/" className="text-sm font-semibold tracking-[0.25em]">
            NORTH GROUP
          </a>
          <a
            href={whatsappUrl}
            className="border border-white/30 px-5 py-3 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
          >
            Fale conosco
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Tecnologia e desenvolvimento
        </p>

        <h1 className="mt-8 max-w-4xl text-5xl font-light leading-[1.05] tracking-tight sm:text-7xl">
          Criação de sites e sistemas personalizados para empresas.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-white/55">
          Desenvolvemos sites profissionais, sistemas sob medida e soluções
          digitais para empresas que desejam fortalecer sua presença online,
          otimizar processos e construir novas possibilidades de crescimento.
        </p>

        <a
          href={whatsappUrl}
          className="mt-10 inline-flex border border-white/30 px-7 py-5 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
        >
          Solicitar uma avaliação
        </a>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Desenvolvimento digital
            </p>
            <h2 className="mt-6 text-3xl font-light leading-tight sm:text-5xl">
              Tecnologia construída em torno do seu negócio.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-white/55">
            <p>
              A presença digital de uma empresa vai além de estar na internet.
              Um site profissional permite apresentar produtos e serviços,
              transmitir confiança e criar um caminho direto entre a marca e
              seus potenciais clientes.
            </p>
            <p>
              Já os sistemas personalizados ajudam a resolver desafios
              internos, organizar informações e estruturar operações. Em vez
              de adaptar toda a rotina da empresa a uma ferramenta genérica,
              é possível desenvolver recursos alinhados aos seus processos.
            </p>
            <p>
              A NORTH GROUP une desenvolvimento de sites, software e soluções
              tecnológicas para transformar necessidades empresariais em
              projetos digitais funcionais, planejados de acordo com cada
              realidade.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            Nossas soluções
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl font-light sm:text-5xl">
            Desenvolvimento digital para diferentes necessidades.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-white/50">
            Cada empresa possui desafios próprios. Por isso, desenvolvemos
            soluções considerando os objetivos, a estrutura e os processos de
            cada negócio.
          </p>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {solutions.map((item) => (
              <article key={item.number} className="bg-[#050505] p-8 sm:p-10">
                <p className="text-xs tracking-[0.2em] text-white/35">
                  {item.number}
                </p>
                <h3 className="mt-6 text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Tecnologia aplicada
            </p>
            <h2 className="mt-6 text-3xl font-light leading-tight sm:text-5xl">
              Mais do que desenvolver. Criar soluções que fazem sentido.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-white/50">
              Uma solução digital precisa atender a uma necessidade real.
              Nosso foco é entender o cenário da empresa e desenvolver
              ferramentas que contribuam para sua operação e seus objetivos.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {benefits.map((item) => (
              <article key={item.title}>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            Nosso processo
          </p>
          <h2 className="mt-6 text-3xl font-light sm:text-5xl">
            Do planejamento ao desenvolvimento.
          </h2>

          <div className="mt-12 space-y-10">
            <article>
              <p className="text-xs tracking-[0.2em] text-white/35">01</p>
              <h3 className="mt-3 text-xl font-medium">
                Entendimento da necessidade
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/50">
                Conversamos sobre a empresa, seus objetivos e os desafios que
                precisam ser resolvidos.
              </p>
            </article>

            <article>
              <p className="text-xs tracking-[0.2em] text-white/35">02</p>
              <h3 className="mt-3 text-xl font-medium">
                Planejamento da solução
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/50">
                Estruturamos as funcionalidades e definimos o escopo de acordo
                com as necessidades identificadas.
              </p>
            </article>

            <article>
              <p className="text-xs tracking-[0.2em] text-white/35">03</p>
              <h3 className="mt-3 text-xl font-medium">
                Desenvolvimento do projeto
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/50">
                Desenvolvemos a solução planejada, considerando funcionalidade,
                experiência de uso e objetivos do negócio.
              </p>
            </article>

            <article>
              <p className="text-xs tracking-[0.2em] text-white/35">04</p>
              <h3 className="mt-3 text-xl font-medium">
                Entrega e próximos passos
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/50">
                Organizamos a entrega conforme o escopo definido e avaliamos
                possíveis evoluções para o projeto.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            Dúvidas frequentes
          </p>
          <h2 className="mt-6 text-3xl font-light sm:text-5xl">
            Perguntas sobre sites e sistemas.
          </h2>

          <div className="mt-12 space-y-8">
            {questions.map((item) => (
              <article key={item.question}>
                <h3 className="text-lg">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-white/40">
          NORTH GROUP
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-light sm:text-6xl">
          Sua próxima solução começa com uma conversa.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50">
          Conte o que sua empresa precisa desenvolver. Vamos entender seu
          projeto e avaliar as possibilidades.
        </p>
        <a
          href={whatsappUrl}
          className="mt-10 inline-flex border border-white/40 px-8 py-5 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
        >
          Falar com a NORTH
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/35">
        © 2026 NORTH GROUP. Todos os direitos reservados.
        <a href="/" className="ml-3 underline">
          Página inicial
        </a>
      </footer>
    </main>
  );
}
