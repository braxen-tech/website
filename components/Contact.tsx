'use client';

import LiquidCard from '@/components/ui/LiquidCard';
import { FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';

const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const columnStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const itemStagger = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 200, damping: 22 },
  },
};

const submitVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.88 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 380, damping: 24 },
  },
};

export default function Contact() {
  const sendWhatsappMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send/?phone=5521973118404&text=${encodedMessage}&type=phone_number&app_absent=0`,
      '_blank'
    );
  };

  return (
    <motion.section
      id="contact"
      className="py-32 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <LiquidCard intensity="high" className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
              <motion.div variants={columnStagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <motion.h2
                  variants={titleVariants}
                  className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                >
                  Pronto para escalar?
                </motion.h2>
                <motion.p variants={itemStagger} className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Não importa a complexidade do desafio, temos a expertise para entregar. Vamos agendar uma conversa técnica para entender seu cenário.
                </motion.p>

                <div className="space-y-6">
                  <motion.a
                    variants={itemStagger}
                    href="mailto:contact@braxentech.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Email Direto</span>
                      <span className="text-lg font-medium">contact@braxentech.com</span>
                    </div>
                  </motion.a>
                  <motion.a
                    variants={itemStagger}
                    onClick={() => sendWhatsappMessage('Vim do site Braxen e gostaria de mais informações')}
                    className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <FaWhatsapp className="text-xl" />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Whatsapp</span>
                      <span className="text-lg font-medium">(21) 97311-8404</span>
                    </div>
                  </motion.a>
                  <motion.div variants={itemStagger} className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Base</span>
                      <span className="text-lg font-medium">Rio de Janeiro, RJ - Brasil</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div className="bg-black/20 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                <motion.form
                  variants={columnStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const target = e.target as HTMLFormElement;

                    if (!target.checkValidity()) {
                      return;
                    }

                    const name = (target.elements.namedItem('name') as HTMLInputElement)?.value || '';
                    const email = (target.elements.namedItem('email') as HTMLInputElement)?.value || '';
                    const subject = (target.elements.namedItem('subject') as HTMLTextAreaElement)?.value || '';

                    sendWhatsappMessage(`Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}`);
                  }}
                >
                  <motion.div variants={itemStagger}>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Nome Completo</label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder-gray-700"
                      placeholder="Ex: João Silva"
                    />
                  </motion.div>
                  <motion.div variants={itemStagger}>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Email Corporativo</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder-gray-700"
                      placeholder="voce@empresa.com"
                    />
                  </motion.div>
                  <motion.div variants={itemStagger}>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Assunto</label>
                    <textarea
                      name="subject"
                      rows={4}
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder-gray-700 resize-none"
                      placeholder="Descreva brevemente o assunto da conversa..."
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all uppercase tracking-wider flex items-center justify-center gap-2 group"
                    variants={submitVariants}
                  >
                    Iniciar Conversa
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.form>
              </motion.div>
            </div>
          </LiquidCard>
        </div>
      </div>
    </motion.section>
  );
}
