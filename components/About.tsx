'use client';

import LiquidCard from '@/components/ui/LiquidCard';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import { FaBuilding } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'motion/react';

const partnerCardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -72 : 72,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function About() {
  const partners = [
    {
      name: 'Hugo',
      role: 'Head de Produto',
      company: 'B2W',
      desc: 'Liderou produtos digitais na B2W. Especialista em UX Strategy e ecossistemas de alta complexidade.',
      image: '/hugo_profile.png',
    },
    {
      name: 'Neemias',
      role: 'Head de Estratégia',
      company: 'Brunx',
      desc: 'Estratega digital com passagens por Brunx e grandes players. Foco em soluções de negócio escaláveis.',
      image: '/neemias_profile.png',
    },
    {
      name: 'Rodrigo',
      role: 'Head de Tecnologia',
      company: 'Serasa',
      desc: 'Pioneiro mobile na Serasa. Especialista em IA generativa e tecnologias que definem o futuro.',
      image: '/rodrigo_profile.png',
    },
    {
      name: 'Tiago Rocha',
      role: 'Head de Arquitetura',
      company: 'Rivian',
      desc: 'Ex-Lead Architect na Rivian. Especialista em sistemas distribuídos e arquiteturas de altíssima escala.',
      image: '/tiago_profile.png',
    },
  ];

  const companies = ['Disney','Rivian', 'Globo', 'TIM', 'Serasa'];

  return (
    <section id="about" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
            initial={{ opacity: 0, x: -56 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Liderança Estratégica de Alto Nível
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Nossa liderança traz o DNA das gigantes de tecnologia para o seu negócio. Na Braxen, garantimos que cada solução seja acompanhada diretamente por especialistas habituados a desafios globais e arquiteturas complexas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              custom={index}
              variants={partnerCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="h-[420px] w-[275px]"
            >
              <div className="w-full h-full relative">
                <Image
                  src={partner.image}
                  alt={`Foto de ${partner.name}, ${partner.role} na Braxen`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.h3
            className="text-sm text-gray-500 mb-12 uppercase tracking-[0.3em] font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            Nossa expertise
          </motion.h3>

          <InfiniteMarquee speed={30} direction="left">
            {companies.map((company) => (
              <div
                key={company}
                className="flex items-center gap-3 text-2xl font-bold text-white/40 hover:text-white transition-colors mx-8 grayscale hover:grayscale-0 duration-500"
              >

                {company}
              </div>
            ))}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
}
