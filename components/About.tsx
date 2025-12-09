import LiquidCard from '@/components/ui/LiquidCard';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import { FaBuilding } from 'react-icons/fa';
import Image from 'next/image';

export default function About() {
  const partners = [
    { 
      name: "Tiago Rocha", 
      role: "CTO", 
      desc: "Ex-Lead Architect na Rivian. Especialista em sistemas distribuídos de alta disponibilidade.",
      image: "/tiago.png" 
    },
    { 
      name: "Hugo", 
      role: "Diretor de Produto", 
      desc: "Liderou time de produto na Globo. Especialista em produtos digitais e UX.",
      image: "/hugo.png" 
    },
    { 
      name: "Neemias", 
      role: "CSO", 
      desc: "Experiência em produtos digitais na Serasa. Visão estratégica de produto e UX.",
      image: "/neemias.png" 
    },
    { 
      name: "Rodrigo", 
      role: "Diretor de Tecnologia", 
      desc: "Pioneiro em soluções mobile na TIM. Especialista em IA e tecnologias emergentes.",
      image: "/rodrigo.png" 
    },
  ];

  const companies = ["Rivian", "Globo", "TIM", "Serasa", "Google", "Amazon", "Nubank", "Spotify"];

  return (
    <section id="about" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">DNA de Big Tech, Agilidade de Startup</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A Braxen nasceu da união de quatro líderes técnicos com passagens pelas maiores empresas de tecnologia do mundo. 
            Trouxemos a robustez, os processos e a excelência da engenharia de ponta para o universo ágil das startups e scale-ups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {partners.map((partner, index) => (
            <div key={index} className="h-[400px]">
              <LiquidCard intensity="low" className="h-full">
                <div className="flex flex-col items-center justify-center h-full text-center p-6">
                  <div className="w-32 h-32 rounded-full bg-gray-800 mb-6 overflow-hidden border-2 border-white/10 relative">
                     <Image 
                        src={partner.image} 
                        alt={partner.name}
                        fill
                        className="object-cover"
                     />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">{partner.name}</h3>
                  <p className="text-primary text-xs uppercase tracking-widest font-bold mb-4">{partner.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </LiquidCard>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl text-gray-500 mb-12 uppercase tracking-widest font-medium">Onde Deixamos Nossa Marca</h3>
          
          <InfiniteMarquee speed={30} direction="left">
            {companies.map((company) => (
               <div key={company} className="flex items-center gap-3 text-2xl font-bold text-white/40 hover:text-white transition-colors mx-8 grayscale hover:grayscale-0 duration-500">
                 <FaBuilding className="text-primary/50 group-hover:text-primary" />
                 {company}
               </div>
             ))}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
}
