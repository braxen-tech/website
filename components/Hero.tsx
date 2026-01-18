'use client';

import LiquidCard from '@/components/ui/LiquidCard';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Braxen"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 relative z-30 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 drop-shadow-2xl">
          Braxen <br />
          <span className="text-secondary">Soluções Inteligentes</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-300 max-w-2xl mx-auto mb-12 drop-shadow-lg font-light">
        Transformamos ideias ambiciosas em software de alta performance. Sua parceira estratégica para construir o amanhã, hoje.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="">
             <LiquidCard intensity="high" className="cursor-pointer transition-transform w-64 h-20" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                <div className="flex items-center justify-center h-full">
                  <span className="text-lg font-bold uppercase tracking-widest text-white drop-shadow-lg">Entrar em Contato</span>
                </div>
             </LiquidCard>
          </div>
        
        </div>
      </div>
    </section>
  );
}
