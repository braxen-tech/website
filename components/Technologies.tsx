import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import { 
  FaReact, FaPython, FaMobileAlt
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiSupabase, 
  SiFirebase, SiPostgresql, SiOpenai, SiExpo, SiMongodb, SiVercel
} from 'react-icons/si';

export default function Technologies() {
  const techs = [
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'OpenAI', icon: <SiOpenai /> },
    { name: 'Supabase', icon: <SiSupabase /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'React Native', icon: <FaMobileAlt /> },
    { name: 'Expo', icon: <SiExpo /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Vercel', icon: <SiVercel /> },
  ];

  return (
    <section id="technologies" className="py-24">
      <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Ecossistema de Performance</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Engenharia de ponta com as tecnologias que moldam o futuro do software global.</p>
      </div>

      <div className="w-full">
        <InfiniteMarquee speed={20} direction="right" pauseOnHover={true}>
          {techs.map((tech) => (
            <div key={tech.name} className="group flex flex-col items-center gap-4 mx-8 min-w-[100px] transition-transform cursor-default">
              <div className="text-5xl md:text-6xl text-gray-600 hover:text-primary transition-colors duration-300">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-gray-500 hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
}
