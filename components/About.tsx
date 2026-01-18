import LiquidCard from '@/components/ui/LiquidCard';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import { FaBuilding } from 'react-icons/fa';
import Image from 'next/image';

export default function About() {
  const partners = [
    { 
      name: "Tiago Rocha", 
      role: "Head de Arquitetura", 
      company: "Rivian",
      desc: "Ex-Lead Architect na Rivian. Especialista em sistemas distribuídos e arquiteturas de altíssima escala.",
      image: "/tiago.png" 
    },
    { 
      name: "Hugo", 
      role: "Head de Produto", 
      company: "B2W",
      desc: "Liderou produtos digitais na B2W. Especialista em UX Strategy e ecossistemas de alta complexidade.",
      image: "/hugo.png" 
    },
    { 
      name: "Neemias", 
      role: "Head de Estratégia", 
      company: "Brunx",
      desc: "Estratega digital com passagens por Brunx e grandes players. Foco em soluções de negócio escaláveis.",
      image: "/neemias.png" 
    },
    { 
      name: "Rodrigo", 
      role: "Head de Tecnologia", 
      company: "Serasa",
      desc: "Pioneiro mobile na Serasa. Especialista em IA generativa e tecnologias que definem o futuro.",
      image: "/rodrigo.png" 
    },
  ];

  const companies = ["Rivian", "Globo", "TIM", "Serasa", "Google", "Amazon", "Nubank", "Spotify"];

  return (
    <section id="about" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Liderança Técnica de Elite
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Somos uma empresa de tecnologia estratégica fundada por especialistas vindos das maiores referências globais do mercado. 
            Na Braxen, seu projeto não é apenas um código; é uma solução de engenharia supervisionada diretamente por quem já escalou sistemas globais. 
            <span className="block mt-4 text-white font-medium">Founders-led Engineering: Senioridade máxima do início ao fim.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {partners.map((partner, index) => (
            <div key={index} className="h-[420px]">
              <LiquidCard intensity="low" className="h-full border border-white/5 bg-white/2">
                <div className="flex flex-col items-center justify-center h-full text-center p-6">
                  <div className="w-28 h-28 rounded-full bg-gray-900 mb-6 overflow-hidden border-2 border-primary/20 relative shadow-2xl shadow-primary/10">
                     <Image 
                        src={partner.image} 
                        alt={`Foto de ${partner.name}, ${partner.role} na Braxen`}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                     />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">{partner.name}</h3>
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-black">
                      {partner.role}
                    </span>
                    <span className="text-gray-500 text-[10px] uppercase font-bold">
                      Ex-{partner.company}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {partner.desc}
                  </p>
                </div>
              </LiquidCard>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-sm text-gray-500 mb-12 uppercase tracking-[0.3em] font-bold">Bagagem de Grande Escala</h3>
          
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
