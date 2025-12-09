'use client';

import LiquidCard from '@/components/ui/LiquidCard';
import { FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <LiquidCard intensity="high" className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Pronto para escalar?
                </h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Não importa a complexidade do desafio, temos a expertise para entregar. 
                  Vamos agendar uma conversa técnica para entender seu cenário.
                </p>
                
                <div className="space-y-6">
                  <a href="mailto:contato@braxen.tech" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Email Direto</span>
                      <span className="text-lg font-medium">contato@braxen.tech</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Base</span>
                      <span className="text-lg font-medium">São Paulo, SP - Brasil</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Nome Completo</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder-gray-700" placeholder="Ex: João Silva" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Email Corporativo</label>
                    <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder-gray-700" placeholder="voce@empresa.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Sobre o Projeto</label>
                    <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder-gray-700 resize-none" placeholder="Descreva brevemente seu desafio..." />
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all uppercase tracking-wider flex items-center justify-center gap-2 group">
                    Iniciar Conversa
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </LiquidCard>
        </div>
      </div>
    </section>
  );
}
