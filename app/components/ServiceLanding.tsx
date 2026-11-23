import Link from "next/link";

type ServiceLandingProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  cta: string;
  language?: "pt" | "en";
};

export default function ServiceLanding({
  eyebrow,
  title,
  description,
  sections,
  benefits,
  cta,
  language = "pt",
}: ServiceLandingProps) {
  const en = language === "en";

  const whatsappUrl = `https://wa.me/551333967048?text=${encodeURIComponent(
    en
      ? "Hello, I found NORTH GROUP through the website and would like to learn more about your solutions."
      : "Olá, vim pelo site da NORTH GROUP e quero conhecer as soluções."
  )}`;

  const process = en
    ? [
        ["Understanding your needs", "We learn about your company, objectives and the challenges you want to solve."],
        ["Solution planning", "We define the requirements and structure a solution according to your business."],
        ["Project development", "We develop the planned solution with functionality and user experience in mind."],
        ["Delivery and next steps", "We organize the delivery and evaluate possible improvements for the project."],
      ]
    : [
        ["Entendimento da necessidade", "Conversamos sobre a empresa, seus objetivos e os desafios que precisam ser resolvidos."],
        ["Planejamento da solução", "Estruturamos as funcionalidades e definimos o escopo de acordo com as necessidades identificadas."],
        ["Desenvolvimento do projeto", "Desenvolvemos a solução planejada, considerando funcionalidade, experiência de uso e objetivos do negócio."],
        ["Entrega e próximos passos", "Organizamos a entrega conforme o escopo definido e avaliamos possíveis evoluções para o projeto."],
      ];

  const questions = en
    ? [
        ["What services does NORTH GROUP offer?", "We develop websites, custom systems, business automation and digital marketing strategies."],
        ["Are solutions customized for each company?", "Yes. Projects are planned according to each company's needs, processes and objectives."],
        ["How does a project begin?", "We start by understanding your needs and evaluating the most appropriate solution."],
        ["How can I request a proposal?", "Contact NORTH GROUP through WhatsApp and tell us about your project."],
      ]
    : [
        ["Como funciona o desenvolvimento de um projeto?", "Primeiro entendemos os objetivos e as necessidades da empresa. Depois estruturamos a solução e definimos o escopo do projeto."],
        ["As soluções são personalizadas?", "Sim. Cada projeto considera a realidade, os processos e os objetivos específicos de cada negócio."],
        ["Como solicitar um orçamento?", "Entre em contato com a NORTH GROUP pelo WhatsApp e conte um pouco sobre sua empresa e o que deseja desenvolver."],
        ["A NORTH GROUP atende empresas de outras regiões?", "Sim. Podemos conversar e desenvolver projetos para empresas de diferentes cidades e regiões."],
      ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="border-b border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href={en ? "/en" : "/"} className="text-sm font-semibold tracking-[0.25em]">
            NORTH GROUP
          </Link>
          <a
            href={whatsappUrl}
            className="border border-white/30 px-5 py-3 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
          >
            {en ? "Contact us" : "Fale conosco"}
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          {eyebrow}
        </p>

        <h1 className="mt-8 max-w-4xl text-5xl font-light leading-[1.05] tracking-tight sm:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-white/55">
          {description}
        </p>

        <a
          href={whatsappUrl}
          className="mt-10 inline-flex border border-white/30 px-7 py-5 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
        >
          {cta}
        </a>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              {en ? "Our approach" : "Nossa abordagem"}
            </p>
            <h2 className="mt-6 text-3xl font-light leading-tight sm:text-5xl">
              {en
                ? "Technology built around your business."
                : "Tecnologia construída em torno do seu negócio."}
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-white/55">
            <p>
              {en
                ? "Every company has its own challenges, processes and goals. The right digital solution starts with understanding how the business works and what needs to improve."
                : "Cada empresa possui desafios, processos e objetivos próprios. Uma solução adequada começa pelo entendimento de como o negócio funciona e do que precisa melhorar."}
            </p>
            <p>
              {en
                ? "Our work connects technology and strategy to develop practical solutions, improve workflows and support business operations."
                : "Nosso trabalho conecta tecnologia e estratégia para desenvolver soluções práticas, melhorar fluxos de trabalho e apoiar a operação das empresas."}
            </p>
            <p>
              {en
                ? "NORTH GROUP develops projects according to each company's reality, turning business needs into functional digital solutions."
                : "A NORTH GROUP desenvolve projetos considerando a realidade de cada empresa, transformando necessidades empresariais em soluções digitais funcionais."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            {en ? "Our solutions" : "Nossas soluções"}
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl font-light sm:text-5xl">
            {en
              ? "Solutions for different business needs."
              : "Soluções para diferentes necessidades."}
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-white/50">
            {en
              ? "Each project is planned according to the company's objectives, structure and processes."
              : "Cada projeto é planejado considerando os objetivos, a estrutura e os processos de cada negócio."}
          </p>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {sections.map((item, index) => (
              <article key={item.title} className="bg-[#050505] p-8 sm:p-10">
                <p className="text-xs tracking-[0.2em] text-white/35">
                  0{index + 1}
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
              {en ? "Business impact" : "Resultados para o negócio"}
            </p>
            <h2 className="mt-6 text-3xl font-light leading-tight sm:text-5xl">
              {en
                ? "More than developing. Creating solutions that make sense."
                : "Mais do que desenvolver. Criar soluções que fazem sentido."}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-white/50">
              {en
                ? "A digital solution should address a real need. Our focus is to understand your business and develop tools that contribute to its operations and goals."
                : "Uma solução precisa atender a uma necessidade real. Nosso foco é entender o cenário da empresa e desenvolver recursos que contribuam para sua operação e seus objetivos."}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {benefits.map((item) => (
              <article key={item}>
                <h3 className="text-lg font-medium">
                  {item}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  {en
                    ? "A practical benefit designed around your company's needs and objectives."
                    : "Um benefício pensado de acordo com as necessidades e os objetivos da sua empresa."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            {en ? "Our process" : "Nosso processo"}
          </p>
          <h2 className="mt-6 text-3xl font-light sm:text-5xl">
            {en ? "From planning to development." : "Do planejamento ao desenvolvimento."}
          </h2>

          <div className="mt-12 space-y-10">
            {process.map(([heading, text], index) => (
              <article key={heading}>
                <p className="text-xs tracking-[0.2em] text-white/35">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-medium">{heading}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            {en ? "Frequently asked questions" : "Dúvidas frequentes"}
          </p>
          <h2 className="mt-6 text-3xl font-light sm:text-5xl">
            {en ? "Questions about our solutions." : "Perguntas sobre nossas soluções."}
          </h2>

          <div className="mt-12 space-y-8">
            {questions.map(([question, answer]) => (
              <article key={question}>
                <h3 className="text-lg">{question}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  {answer}
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
          {en
            ? "Your next solution starts with a conversation."
            : "Sua próxima solução começa com uma conversa."}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50">
          {en
            ? "Tell us what your company needs. We will understand your project and explore the possibilities."
            : "Conte o que sua empresa precisa. Vamos entender seu projeto e avaliar as possibilidades."}
        </p>
        <a
          href={whatsappUrl}
          className="mt-10 inline-flex border border-white/40 px-8 py-5 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
        >
          {en ? "Talk to NORTH GROUP" : "Falar com a NORTH"}
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/35">
        © 2026 NORTH GROUP. {en ? "All rights reserved." : "Todos os direitos reservados."}
        <Link href={en ? "/en" : "/"} className="ml-3 underline">
          {en ? "Home" : "Página inicial"}
        </Link>
      </footer>
    </main>
  );
}
