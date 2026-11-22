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

  title: "NORTH GROUP | Assessoria de Crescimento Empresarial",

  description:
    "Soluções em tecnologia, sistemas personalizados, automações e estratégias digitais para empresas que querem crescer.",

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
    title: "NORTH GROUP | Assessoria de Crescimento Empresarial",
    description:
      "Estratégia, tecnologia e execução para impulsionar o crescimento de empresas.",
  },

  twitter: {
    card: "summary",
    title: "NORTH GROUP | Assessoria de Crescimento Empresarial",
    description:
      "Estratégia, tecnologia e execução para impulsionar o crescimento de empresas.",
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
        {children}
      </body>
    </html>
  );
}
