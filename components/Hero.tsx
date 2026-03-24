'use client';

import LiquidCard from '@/components/ui/LiquidCard';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as const,
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } as const,
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 180]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-48 after:bg-gradient-to-t after:from-black after:via-black/60 after:to-transparent after:z-10 after:pointer-events-none">
      {/* Background Image — parallax */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        <Image
          src="/hero.jpg"
          alt="Background abstrato de partículas representando tecnologia e fluidez"
          fill
          className="object-cover scale-110"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      </motion.div>

      <motion.div
        className="container mx-auto px-6 relative z-30 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 drop-shadow-2xl"
        >
          Braxen <br />
          <span className="text-secondary">Soluções Inteligentes</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-3xl text-gray-300 max-w-2xl mx-auto mb-12 drop-shadow-lg font-light"
        >
          Transformamos ideias ambiciosas em software de alta performance. Sua parceira estratégica para construir o amanhã, hoje.
        </motion.p>

        <motion.div
          variants={ctaVariants}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <div className="">
            <LiquidCard
              intensity="high"
              className="cursor-pointer transition-transform w-64 h-20"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex items-center justify-center h-full">
                <span className="text-lg font-bold uppercase tracking-widest text-white drop-shadow-lg">Entrar em Contato</span>
              </div>
            </LiquidCard>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
