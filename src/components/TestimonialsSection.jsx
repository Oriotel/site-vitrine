import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    name: 'Sarah Connor',
    role: 'CEO, TechNova',
    quote: 'La stratégie opérationnelle d\'Oriotel nous a permis de scaler nos processus avec une fluidité déconcertante.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    name: 'David Guetta',
    role: 'Directeur des Opérations, FinTechPro',
    quote: 'Un accompagnement sur-mesure et une expertise inégalée. Ils ont identifié nos goulots d\'étranglement instantanément.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
    name: 'Alice Dubois',
    role: 'Fondatrice, GreenSolutions',
    quote: 'Nous avons doublé notre rentabilité en moins de 6 mois grâce aux recommandations stratégiques d\'Oriotel.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    name: 'Marc Lefebvre',
    role: 'COO, Logistix',
    quote: 'Une vision claire et un plan d\'action concret. C\'est exactement ce que nous recherchions chez un partenaire à long terme.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600',
    name: 'Emma Rousseau',
    role: 'VP Média, CreativLab',
    quote: 'Les équipes d\'Oriotel maîtrisent l\'art d\'optimiser tous les niveaux tout en respectant l\'identité de l\'entreprise.'
  }
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(2); // Démarrer avec la carte du milieu
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play du carrousel de témoignages
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-24 bg-gradient-to-tr from-[#F9FAFB] to-[#e4e8fb] font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header Section (Thème Clair) */}
        <div className="text-center mb-16">
          <span className="text-[#1428C9] font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Ils nous font confiance
          </h2>
        </div>
        
        {/* Carrousel 3D Couvrant (Coverflow) */}
        <div className="relative w-full h-[280px] md:h-[400px] flex justify-center items-center [perspective:1200px]">
          {testimonials.map((item, index) => {
            // Distance relative pour gérer la disposition 3D
            let distance = (index - active + testimonials.length) % testimonials.length;
            if (distance > 2) distance -= testimonials.length;

            let transformStyle = '';
            let zIndex = 50 - Math.abs(distance) * 10;
            let opacityStyle = 1;
            let filterStyle = 'brightness(1)';

            // Pour fond clair, on limite l'assombrissement et joue plus sur l'opacité
            if (distance === 0) {
              transformStyle = 'translateX(0) translateZ(50px) rotateY(0deg)';
              opacityStyle = 1;
            } else if (distance === 1) {
              // Carte chevauchée à droite
              transformStyle = 'translateX(65%) translateZ(-50px) rotateY(-40deg)';
              opacityStyle = 0.8;
            } else if (distance === -1) {
              // Carte chevauchée à gauche
              transformStyle = 'translateX(-65%) translateZ(-50px) rotateY(40deg)';
              opacityStyle = 0.8;
            } else if (distance === 2) {
              // Carte aux bouts à droite
              transformStyle = 'translateX(120%) translateZ(-150px) rotateY(-55deg)';
              opacityStyle = 0.4;
            } else if (distance === -2) {
              // Carte aux bouts à gauche
              transformStyle = 'translateX(-120%) translateZ(-150px) rotateY(55deg)';
              opacityStyle = 0.4;
            }

            return (
              <div 
                key={item.id}
                onClick={() => setActive(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                // Carrés stricts avec bords fortement arrondis comme le mock-up
                className="absolute w-[220px] h-[220px] md:w-[340px] md:h-[340px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(20,40,201,0.15)]"
                style={{
                  transform: transformStyle,
                  zIndex: zIndex,
                  opacity: opacityStyle,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Couche de Bordure Fine (couleur adaptée pour fond clair) */}
                <div className="absolute inset-0 border-[2px] md:border-[3px] border-[#1428C9]/20 rounded-[2rem] z-10 pointer-events-none transition-colors duration-700"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* Le Texte du Témoignage Actif ci-dessous */}
        <div className="mt-12 text-center max-w-3xl mx-auto h-[160px] flex flex-col justify-start transition-all duration-500"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
          <p 
            key={active} 
            className="text-lg md:text-2xl italic text-[#111827]/80 leading-relaxed font-light animate-[fadeIn_0.5s_ease-out]"
          >
            "{testimonials[active].quote}"
          </p>
          <div className="mt-8 flex flex-col items-center">
            <h4 className="text-xl font-bold text-[#1428C9]">{testimonials[active].name}</h4>
            <span className="text-xs text-[#111827]/50 uppercase tracking-widest mt-1">
              {testimonials[active].role}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
