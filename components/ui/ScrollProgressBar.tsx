'use client';

import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
      }}
      aria-hidden
    />
  );
}
