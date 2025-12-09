import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Braxen | Software House",
  description: "Desenvolvimento de software de alta performance. Soluções futuristas para empresas modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
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
