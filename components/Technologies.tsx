import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaMobileAlt 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiSupabase, 
  SiFirebase, SiPostgresql, SiMysql 
} from 'react-icons/si';

export default function Technologies() {
  const techs = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'React Native', icon: <FaMobileAlt /> },
    { name: 'Supabase', icon: <SiSupabase /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Python', icon: <FaPython /> },
  ];

  return (
    <section id="technologies" className="py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-400">Ferramentas de ponta para resultados excepcionais.</p>
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
