'use client';

import LiquidCard from '@/components/ui/LiquidCard';
import { FaCode, FaMobileAlt, FaCloud, FaRocket, FaBrain, FaTerminal } from 'react-icons/fa';
import { motion } from 'motion/react';

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Services() {
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Desenvolvimento Web com React e Next.js',
      description:
        'Sites e aplicações web rápidas com React e Next.js: Core Web Vitals, SEO técnico, acessibilidade e UX que convertem — do front ao deploy.',
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: 'Agentes de IA e Automação com LLMs',
      description:
        'Projetamos fluxos com modelos de linguagem (LLMs) e Python: copilotos internos, triagem inteligente e automação de processos com governança.',
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: 'Backend, APIs e Infraestrutura em Nuvem',
      description:
        'APIs seguras, banco de dados e autenticação com Supabase e Firebase: alta disponibilidade, observabilidade e custo sob controle.',
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: 'Apps Mobile e Lojas (iOS e Android)',
      description:
        'Aplicativos com foco em performance e React Native/Expo: do protótipo à publicação na App Store e Google Play, com atualizações contínuas.',
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Consultoria de Tecnologia e CTO as a Service',
      description:
        'Roadmap de produto, revisão de arquitetura e decisões de stack: liderança técnica pontual para acelerar entregas sem inflar o time.',
    },
    {
      icon: <FaTerminal className="w-8 h-8" />,
      title: 'Integração de Sistemas e Automação de TI',
      description:
        'Conectamos ERPs, CRMs e APIs legadas: menos trabalho manual, dados consistentes e monitoração para o que importa ao negócio.',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500"
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Serviços de desenvolvimento de software e IA para empresas
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Da engenharia web e mobile a agentes de IA e cloud: a Braxen une práticas de Big Tech a entregas enxutas para quem precisa escalar com segurança no Brasil.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="h-[280px]"
            >
              <LiquidCard intensity="medium" className="h-full group hover:scale-[1.02] transition-transform">
                <div className="flex flex-col h-full p-8">
                  <div className="text-secondary mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:text-secondary group-hover:bg-white/10 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                </div>
              </LiquidCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
