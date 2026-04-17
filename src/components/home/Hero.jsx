import React from 'react';
import { Button } from '@/components/ui/button';
// import { Wifi } from 'lucide-react'; // On utilise Lucide pour l'icône de réseau

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-cloud-white pt-24 pb-12 overflow-hidden font-sans">
      
      {/* 1. IMAGE DE FOND ET VOILE BLANC */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Architecture moderne et croissance"
          className="w-full h-full object-cover object-center"
        />
        {/* Voile blanc (85% d'opacité) pour rendre l'image subtile et le texte très lisible */}
        <div className="absolute inset-0 bg-cloud-white/85 backdrop-blur-[2px]"></div>
      </div>

      {/* 2. GRAND ICÔNE DE RÉSEAU (WIFI/ONDES) SUR LA DROITE */}
      {/* Il est positionné en absolu, tourné, et rendu semi-transparent pour décorer sans gêner */}
      {/* <div className="absolute top-1/2 -translate-y-1/2 -right-40 md:-right-20 z-0 pointer-events-none opacity-5 text-signal-blue">
        <Wifi className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] -rotate-90" strokeWidth={0.5} />
      </div> */}

      {/* 3. CONTENU CENTRAL (Texte et Boutons) */}
      <div className="relative z-10 w-[90%] max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* TITRE - Utilise la police Montserrat par défaut */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-light text-midnight-slate leading-tight md:leading-[1.1] mb-6 tracking-tight">
          Telecom reliability.<br className="hidden md:block" />
          Digital agility.
        </h1>

        {/* SOUS-TITRE */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
          De la robustesse de vos infrastructures matérielles à l'intelligence de vos flux de travail. <span className="font-bold text-signal-blue">ORIOTEL</span> accompagne votre transformation avec des solutions ERP sur-mesure et des équipements de pointe.
        </p>

        {/* BOUTONS CENTRÉS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button className="w-full sm:w-auto px-8 py-6 text-base rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
            En savoir plus
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full sm:w-auto px-8 py-6 text-base rounded-full font-semibold border-2 border-signal-blue/20 text-signal-blue hover:bg-blue-50 transition-all"
          >
            Voir nos services
          </Button>
        </div>

      </div>
    </section>
  );
}

export default Hero;