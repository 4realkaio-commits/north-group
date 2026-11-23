import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://www.northgroupglobal.com.br"),

  title: "NORTH GROUP | Tecnologia, Software e Crescimento Empresarial",

  description:
    "A NORTH GROUP conecta desenvolvimento de sites, sistemas personalizados, software, automação empresarial e Growth & Estratégia para impulsionar empresas.",

  applicationName: "NORTH GROUP",

  keywords: [
    "NORTH GROUP",
    "assessoria de crescimento empresarial",
    "desenvolvimento de sites",
    "criação de sites profissionais",
    "desenvolvimento de sistemas",
    "software personalizado",
    "automação empresarial",
    "integração de sistemas",
    "Growth e estratégia",
    "crescimento empresarial",
    "tecnologia para empresas",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.northgroupglobal.com.br",
    siteName: "NORTH GROUP",
    title: "NORTH GROUP | Tecnologia e Crescimento Empresarial",
    description:
      "Soluções tecnológicas, desenvolvimento de software, automação e estratégias empresariais para empresas que querem crescer.",
    images: [
      {
        url: "/logo.jpg",
        alt: "NORTH GROUP",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "NORTH GROUP | Tecnologia e Crescimento Empresarial",
    description:
      "Desenvolvimento de software, automação e estratégias para o crescimento empresarial.",
    images: ["/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.northgroupglobal.com.br/#organization",
      name: "NORTH GROUP",
      url: "https://www.northgroupglobal.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://www.northgroupglobal.com.br/logo.jpg",
      },
      description:
        "Assessoria de crescimento empresarial que conecta tecnologia, desenvolvimento de software, automação, Growth, estratégia comercial e gestão.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: "https://wa.me/551333967048",
        availableLanguage: "Portuguese",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.northgroupglobal.com.br/#website",
      url: "https://www.northgroupglobal.com.br",
      name: "NORTH GROUP",
      inLanguage: "pt-BR",
      publisher: {
        "@id": "https://www.northgroupglobal.com.br/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Script
        id="google-tag-manager"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-WMRW95PK"
        strategy="beforeInteractive"
      />

      <Script id="google-tag-manager-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
      </Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
