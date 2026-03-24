import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Braxen | Engenharia de Software e IA de Alta Performance",
  description:
    "Empresa de software no Rio de Janeiro: desenvolvimento web com Next.js e React, apps mobile, backend em nuvem (Supabase, Firebase), agentes de IA e consultoria CTO.",
  keywords: [
    "Software House",
    "Desenvolvimento de Software",
    "Desenvolvimento Web",
    "Inteligência Artificial",
    "Agentes de IA",
    "Next.js",
    "React",
    "React Native",
    "Python",
    "Supabase",
    "Firebase",
    "SEO técnico",
    "CTO as a Service",
    "Automação de processos",
    "Consultoria de Tecnologia",
  ],
  authors: [{ name: "Braxen" }],
  creator: "Braxen",
  publisher: "Braxen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Braxen | Engenharia de Software e IA de Alta Performance",
    description:
      "Desenvolvimento web, mobile e IA para empresas. Engenharia de software com Next.js, agentes de IA e cloud — Braxen, Rio de Janeiro.",
    url: "https://braxentech.com",
    siteName: "Braxen",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Braxen - Soluções Inteligentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Braxen | Engenharia de Software e IA de Alta Performance",
    description:
      "Desenvolvimento web e mobile, backend em nuvem e agentes de IA. Software house Braxen — Rio de Janeiro.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Braxen",
    "url": "https://braxentech.com",
    "logo": "https://braxentech.com/favicon.ico",
    "description": "Empresa de tecnologia estratégica especializada em engenharia de software e IA.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-21-97311-8404",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <ScrollProgressBar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10">
          © {new Date().getFullYear()} Braxen. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
