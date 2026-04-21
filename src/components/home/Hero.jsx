import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex items-end justify-center pt-32 pb-16 overflow-hidden font-sans">
      
      {/* 1. IMAGE DE FOND ET VOILE NOIR */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Architecture moderne et croissance"
          className="w-full h-full object-cover object-center"
          style={{
            transform: loaded ? 'scale(1)' : 'scale(1.08)',
            transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        {/* Voile noir (80% d'opacité) pour rendre l'image subtile et le texte très lisible */}
        <div className="absolute inset-0 bg-midnight-slate/80 backdrop-blur-[4px]"></div>
      </div>

      {/* 2. CONTENU (Texte et Boutons en bas à gauche) */}
      <div className="relative z-10 w-[90%] max-w-7xl mx-auto flex flex-col items-start justify-end text-left h-full pb-8 pt-32">
        
        {/* TITRE */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-light !text-white leading-tight md:leading-[1.1] mb-6 tracking-tight"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          Telecom reliability.<br className="hidden md:block" />
          Digital agility.
        </h1>

        {/* SOUS-TITRE */}
        <p
          className="text-base sm:text-lg md:text-xl !text-white mb-6 leading-relaxed max-w-2xl"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
          }}
        >
          De la robustesse de vos infrastructures matérielles à l'intelligence de vos flux de travail. <span className="font-bold">ORIOTEL</span> accompagne votre transformation avec des solutions ERP sur-mesure et des équipements de pointe.
        </p>

      </div>
    </section>
  );
}

export default Hero;