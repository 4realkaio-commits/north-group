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

const links = [
  { href: "/sites-e-sistemas", label: "Sites e sistemas" },
  { href: "/automacoes-empresariais", label: "Automações" },
  { href: "/marketing-digital", label: "Marketing digital" },
];

export default function ServiceLanding({
  eyebrow,
  title,
  description,
  sections,
  benefits,
  cta,
  language = "pt",
}: ServiceLandingProps) {
  const isEnglish = language === "en";
  const whatsapp = "https://wa.me/551333967048";

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href={isEnglish ? "/en" : "/"} className="text-xl font-bold tracking-[0.2em]">
            NORTH GROUP
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-5 py-2.5 text-xs font-semibold transition hover:bg-white hover:text-black"
          >
            {isEnglish ? "CONTACT US" : "FALE CONOSCO"}
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-28 md:pb-32 md:pt-40">
        <div className="max-w-4xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight md:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`${whatsapp}?text=${encodeURIComponent(isEnglish ? "Hello, I would like to know more about NORTH GROUP solutions." : "Olá, gostaria de conhecer as soluções da NORTH GROUP.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-white/80"
            >
              {cta}
            </a>
            <Link
              href={isEnglish ? "/" : "/sites-e-sistemas"}
              className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition hover:border-white"
            >
              {isEnglish ? "Explore our solutions" : "Conheça nossas soluções"}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              {isEnglish ? "WHAT WE DO" : "O QUE FAZEMOS"}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {isEnglish
                ? "Technology designed around your business."
                : "Soluções pensadas para a realidade da sua empresa."}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section, index) => (
              <article key={section.title} className="rounded-2xl border border-white/10 p-8 md:p-10">
                <span className="text-sm text-white/35">0{index + 1}</span>
                <h3 className="mt-7 text-xl font-semibold">{section.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">{section.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
              {isEnglish ? "WHY NORTH GROUP" : "POR QUE A NORTH GROUP"}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {isEnglish
                ? "More than technology. A better way to operate."
                : "Mais do que tecnologia. Uma forma melhor de operar."}
            </h2>
          </div>
          <ul className="space-y-5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-4 border-b border-white/10 pb-5 text-white/75">
                <span className="text-white/40">—</span>
                <span className="leading-7">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            {isEnglish ? "LET'S BUILD SOMETHING BETTER" : "VAMOS CONSTRUIR ALGO MELHOR"}
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            {isEnglish
              ? "Your next step starts with the right solution."
              : "O próximo passo da sua empresa começa com a solução certa."}
          </h2>
          <a
            href={`${whatsapp}?text=${encodeURIComponent(isEnglish ? "Hello, I would like to talk about a project." : "Olá, gostaria de conversar sobre um projeto.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-white/80"
          >
            {isEnglish ? "Start a conversation" : "Iniciar uma conversa"}
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs text-white/40 md:flex-row">
          <span>NORTH GROUP — {isEnglish ? "Digital solutions for business." : "Soluções digitais para empresas."}</span>
          <div className="flex flex-wrap gap-5">
            <Link href="/sites-e-sistemas" className="hover:text-white">Sites e sistemas</Link>
            <Link href="/automacoes-empresariais" className="hover:text-white">Automações</Link>
            <Link href="/marketing-digital" className="hover:text-white">Marketing</Link>
            <Link href="/privacidade" className="hover:text-white">Privacidade</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
