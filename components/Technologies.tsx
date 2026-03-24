'use client';

import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import { FaReact, FaPython, FaMobileAlt } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiFirebase,
  SiPostgresql,
  SiOpenai,
  SiExpo,
  SiMongodb,
  SiVercel,
} from 'react-icons/si';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Technologies() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.35, 1, 1, 0.95]);

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
    <motion.section
      ref={sectionRef}
      id="technologies"
      className="py-24"
      style={{ opacity: sectionOpacity }}
    >
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-black mb-4"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Ecossistema de Performance
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Engenharia de ponta com as tecnologias que moldam o futuro do software global.
        </motion.p>
      </div>

      <div className="w-full">
        <InfiniteMarquee speed={20} direction="right" pauseOnHover={true}>
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-4 mx-8 min-w-[100px] transition-transform cursor-default"
            >
              <div className="text-5xl md:text-6xl text-gray-600 hover:text-primary transition-colors duration-300">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-gray-500 hover:text-white transition-colors">{tech.name}</span>
            </div>
          ))}
        </InfiniteMarquee>
      </div>
    </motion.section>
  );
}
