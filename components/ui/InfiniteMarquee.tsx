'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react';
import type { MotionValue } from 'motion/react';
import type { CSSProperties, ReactNode } from 'react';

/** Entrada típica da velocidade de scroll (px/s) — calibrar se o skew ficar fraco/forte */
const SCROLL_VELOCITY_RANGE: [number, number] = [-2500, 2500];
/** Skew em graus aplicado ao track do marquee */
const SKEW_RANGE: [number, number] = [-8, 8];

interface InfiniteMarqueeProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
  /** Quando true, inclina o faixa conforme a velocidade vertical do scroll (efeito tipo CodeSandbox). */
  scrollVelocitySkew?: boolean;
}

export default function InfiniteMarquee({
  children,
  direction = 'left',
  speed = 40,
  className = '',
  pauseOnHover = true,
  scrollVelocitySkew = true,
}: InfiniteMarqueeProps) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const skew = useTransform(scrollVelocity, SCROLL_VELOCITY_RANGE, SKEW_RANGE, {
    clamp: true,
  });
  const skewSpring = useSpring(skew as MotionValue<number>, { stiffness: 400, damping: 45 });
  const reducedMotion = useReducedMotion();
  const applySkew = scrollVelocitySkew && !reducedMotion;

  const trackStyle = {
    '--animation-duration': `${speed}s`,
    skewX: applySkew ? skewSpring : 0,
  } as CSSProperties;

  return (
    <div className={`relative flex overflow-hidden w-full group ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

      <motion.div
        className={`flex w-max min-w-full ${
          direction === 'left' ? 'animate-scroll' : 'animate-scroll-reverse'
        } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={trackStyle}
      >
        <div className="flex shrink-0 items-center justify-around gap-8 py-4 px-4 min-w-full">{children}</div>
        <div className="flex shrink-0 items-center justify-around gap-8 py-4 px-4 min-w-full" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
