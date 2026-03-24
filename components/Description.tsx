'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Description() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(0% 50% 0% 50%)', 'inset(0% 0% 0% 0%)']
  );

  const imageParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageBlur = useTransform(scrollYProgress, [0, 0.5, 1], ['blur(8px)', 'blur(0px)', 'blur(0px)']);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 mx-auto relative min-h-screen flex flex-col sm:flex-row items-center justify-center overflow-hidden"
    >
      <div className="w-full h-full z-0 overflow-hidden flex items-center justify-end">
        <motion.div
          className="relative shrink-0"
          style={{
            clipPath,
            y: imageParallax,
            filter: imageBlur,
          }}
        >
          <Image
            src="/boy-future.png"
            alt="Representação visual de um jovem no futuro utilizando tecnologia avançada da Braxen"
            height={950}
            width={550}
            className="object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-20">
          <h2 className="text-3xl md:text-7xl font-bold mb-6">
            Soluções que impulsionam o seu <span className="text-secondary">FUTURO.</span>
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg mb-6">
            A Braxen não é apenas uma fornecedora de serviços; somos a sua parceira estratégica dedicada a impulsionar o crescimento e a evolução do seu negócio.
          </p>
          <p className="text-gray-400 max-w-3xl text-lg">
            Nosso compromisso fundamental é resolver problemas e entregar soluções concretas e eficazes para os desafios que a sua empresa enfrenta.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
