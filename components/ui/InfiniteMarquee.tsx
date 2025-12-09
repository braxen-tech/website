import React from 'react';

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export default function InfiniteMarquee({
  children,
  direction = 'left',
  speed = 40,
  className = '',
  pauseOnHover = true,
}: InfiniteMarqueeProps) {
  return (
    <div className={`relative flex overflow-hidden w-full group ${className}`}>
      {/* Máscaras de gradiente para suavizar bordas */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

      {/* Container wrapper para animação */}
      <div 
        className={`flex w-max min-w-full ${
          direction === 'left' ? 'animate-scroll' : 'animate-scroll-reverse'
        } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={{ '--animation-duration': `${speed}s` } as React.CSSProperties}
      >
        {/* Renderiza o conteúdo 2 vezes para garantir o loop sem buracos */}
        <div className="flex shrink-0 items-center justify-around gap-8 py-4 px-4 min-w-full">
           {children}
        </div>
        <div className="flex shrink-0 items-center justify-around gap-8 py-4 px-4 min-w-full" aria-hidden="true">
           {children}
        </div>
      </div>
    </div>
  );
}
