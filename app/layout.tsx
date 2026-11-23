import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northgroupglobal.com.br"),

  title: "Criação de Sites e Sistemas para Empresas | NORTH GROUP",

  description:
    "Criamos sites profissionais, sistemas personalizados e automações para empresas. Também desenvolvemos estratégias de marketing digital para impulsionar resultados.",

  applicationName: "NORTH GROUP",

  keywords: [
    "NORTH GROUP",
    "assessoria de crescimento empresarial",
    "tecnologia para empresas",
    "sistemas personalizados",
    "automação empresarial",
    "estratégias digitais",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://northgroupglobal.com.br",
    siteName: "NORTH GROUP",
    title: "Criação de Sites e Sistemas para Empresas | NORTH GROUP",
    description:
      "Sites profissionais, sistemas personalizados, automações e estratégias de marketing digital para empresas.",
  },

  twitter: {
    card: "summary",
    title: "Criação de Sites e Sistemas para Empresas | NORTH GROUP",
    description:
      "Sites profissionais, sistemas personalizados, automações e estratégias de marketing digital para empresas.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NORTH GROUP",
  url: "https://northgroupglobal.com.br",
  description:
    "Criação de sites profissionais, desenvolvimento de sistemas personalizados, automações e estratégias de marketing digital para empresas.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
