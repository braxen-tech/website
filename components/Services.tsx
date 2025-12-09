import LiquidCard from '@/components/ui/LiquidCard';
import { FaCode, FaMobileAlt, FaCloud, FaRocket, FaBrain, FaBitcoin } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Engenharia de Software Sob Medida",
      description: "Desenvolvimento full-stack de alta complexidade. Sistemas web robustos, APIs escaláveis e microserviços."
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Mobile Apps & Superapps",
      description: "Experiências nativas e multiplataforma (React Native) que engajam. Do conceito à publicação nas lojas."
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "DevOps & Cloud Engineering",
      description: "Infraestrutura como código (IaC), CI/CD, kubernetes e arquiteturas serverless otimizadas para custo e performance."
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "IA & Transformação Digital",
      description: "Integração de LLMs (GPT, Claude), automação inteligente e análise de dados para modernizar seu negócio."
    },
    {
      icon: <FaBitcoin className="w-8 h-8" />,
      title: "Web3 & Blockchain Solutions",
      description: "Desenvolvimento de Smart Contracts, dApps e integração com tecnologias descentralizadas."
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Consultoria de Arquitetura",
      description: "Diagnóstico técnico, refatoração de sistemas legados e planejamento de arquitetura para alta escala."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Nossas Soluções</h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl text-lg">
            Cobertura tecnológica completa. Do backend crítico à interface pixel-perfect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="h-[280px]">
              <LiquidCard intensity="medium" className="h-full group hover:scale-[1.02] transition-transform">
                <div className="flex flex-col h-full p-8">
                  <div className="text-purple-500 mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:text-secondary group-hover:bg-white/10 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
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
