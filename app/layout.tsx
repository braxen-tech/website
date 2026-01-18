import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Braxen | Engenharia de Software e IA de Alta Performance",
  description: "Transformamos ideias complexas em software fluido, robusto e escalável. Especialistas em Next.js, Python e Agentes de IA para empresas modernas.",
  keywords: ["Software House", "Desenvolvimento de Software", "Inteligência Artificial", "Agentes de IA", "Next.js", "React Native", "Python", "Supabase", "Consultoria de Tecnologia"],
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
    description: "Transformamos ideias complexas em software fluido e escalável. Sua parceira estratégica para a próxima era digital.",
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
    description: "Desenvolvimento de software de alta performance e Agentes de IA.",
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
