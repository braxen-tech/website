'use client';

import React, { useState, useEffect } from 'react';
import LiquidGlass from 'liquid-glass-react';

interface LiquidCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  intensity?: 'low' | 'medium' | 'high';
}

export default function LiquidCard({ 
  children, 
  className = '', 
  onClick,
  intensity = 'medium'
}: LiquidCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Configurações baseadas na intensidade
  const settings = {
    low: {
      displacementScale: 15,
      blurAmount: 0.05,
      saturation: 110,
      elasticity: 0.1
    },
    medium: {
      displacementScale: 40,
      blurAmount: 0.08,
      saturation: 130,
      elasticity: 0.2
    },
    high: {
      displacementScale: 80,
      blurAmount: 0.12,
      saturation: 150,
      elasticity: 0.35
    }
  };

  const config = settings[intensity];

  return (
    <div 
      className={`relative group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 ${className}`} 
      onClick={onClick}
    >
      {/* Camada de Efeito (Renderizada apenas no cliente para evitar problemas de hidratação) */}
      {mounted && (
        <div className="absolute inset-0 z-0 opacity-60">
          <LiquidGlass
            displacementScale={config.displacementScale}
            blurAmount={config.blurAmount}
            saturation={config.saturation}
            elasticity={config.elasticity}
            aberrationIntensity={2}
            cornerRadius={16}
            padding="0"
            className="w-full h-full"
          >
             <div className="w-full h-full opacity-0" />
          </LiquidGlass>
        </div>
      )}

      {/* Camada de Conteúdo */}
      <div className="relative z-10 w-full h-full pointer-events-auto">
        {children}
      </div>
    </div>
  );
}
