import LiquidCard from '@/components/ui/LiquidCard';
import { FaCode, FaMobileAlt, FaCloud, FaRocket, FaBrain, FaTerminal } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Web de Alta Performance",
      description: "Aplicações ultra-velozes com ReactJS e NextJS, unindo design impecável, SEO avançado e experiência do usuário de nível global."
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "IA & Agentes Inteligentes",
      description: "Desenvolvimento de Agentes de IA e automações complexas com Python e LLMs para transformar processos em operações inteligentes e escaláveis."
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Infraestrutura & Backend",
      description: "Arquiteturas robustas com Supabase e Firebase, garantindo segurança total, alta disponibilidade e performance para milhões de acessos."
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Apps & Mobile First",
      description: "Desenvolvimento de aplicativos nativos e híbridos focados em performance e UX superior, do conceito à publicação nas lojas."
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Consultoria Estratégica (CTO)",
      description: "Diagnóstico técnico, planejamento de arquitetura e consultoria de produto (CTO as a Service) para guiar sua jornada digital."
    },
    {
      icon: <FaTerminal className="w-8 h-8" />,
      title: "Soluções de TI & Automação",
      description: "Sistemas sob medida e automações de ponta a ponta para eliminar gargalos e integrar todo o seu ecossistema tecnológico."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Tecnologia de Ponta para Desafios Complexos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Combinamos engenharia de Big Tech com agilidade para entregar soluções que resolvem problemas reais e escalam seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="h-[280px]">
              <LiquidCard intensity="medium" className="h-full group hover:scale-[1.02] transition-transform">
                <div className="flex flex-col h-full p-8">
                  <div className="text-secondary mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:text-secondary group-hover:bg-white/10 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </LiquidCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
