'use client';

import LiquidCard from '@/components/ui/LiquidCard';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute min-w-full min-h-full object-cover opacity-60"
        >
          <source src="/video.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        
        {/* Overlay para escurecer o vídeo e garantir legibilidade */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        {/* Efeitos de luz sutis sobre o vídeo */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] z-20 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] z-20 mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-30 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 drop-shadow-2xl">
          Braxen <br />
          <span className="text-purple-500">Soluções Inteligentes</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 drop-shadow-lg font-light">
          Transformamos ideias complexas em software fluido, robusto e escalável. 
          Sua parceira tecnológica para a próxima era digital.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="">
             <LiquidCard intensity="high" className="cursor-pointer transition-transform w-64 h-20" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                <div className="flex items-center justify-center h-full">
                  <span className="text-lg font-bold uppercase tracking-widest text-white drop-shadow-lg">Entrar em Contato</span>
                </div>
             </LiquidCard>
          </div>
          
          <a href="#services" className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors pb-1 drop-shadow-md">
            Explorar Serviços
          </a>
        </div>
      </div>
    </section>
  );
}
