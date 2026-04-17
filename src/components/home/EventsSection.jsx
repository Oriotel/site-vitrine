import React, { useState, useEffect } from 'react';

const events = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    title: 'Conférence Annuelle',
    description: 'Une plongée immersive dans l\'innovation corporative et notre nouvelle identité de marque.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
    title: 'Séminaire Stratégique',
    description: 'Analyse des grandes tendances du marché et élaboration des stratégies de croissance.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
    title: 'Gala de l\'Excellence',
    description: 'Célébration des résultats exceptionnels de l\'année avec tous nos partenaires de confiance.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80&w=800',
    title: 'Atelier Opérations',
    description: 'Workshops interactifs destinés à optimiser les flux de travail dans un cadre dynamique.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1475721025505-1113afab0f43?auto=format&fit=crop&q=80&w=800',
    title: 'Networking VIP',
    description: 'Rencontrez les leaders mondiaux de votre industrie lors de cette soirée exclusive et inspirante.'
  }
];

const EventsSection = () => {
  const [active, setActive] = useState(2); // L'élément au milieu au démarrage
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play du carrousel
  useEffect(() => {
    if (isHovered) return; // Stoppe l'animation lorsqu'on survole

    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % events.length);
    }, 3000); // Défilement toutes les 3 secondes

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-20 bg-[#F9FAFB] font-sans overflow-hidden">
      <div className="max-w-full lg:max-w-[1600px] mx-auto px-0 sm:px-4 lg:px-8">
        
        {/* Header avec la Charte Graphique ORIOTEL */}
        <div className="flex justify-between items-end mb-4 px-4 sm:px-0">
          <div>
            <span className="text-[#1428C9] font-bold text-[0.7rem] uppercase tracking-[0.2em] mb-1 block">
              AGENDA
            </span>
            <h2 className="text-[1.3rem] md:text-[1.75rem] font-bold text-[#111827] tracking-tight">
              Événements ORIOTEL
            </h2>
          </div>
          <a 
            href="/evenements" 
            className="text-[#1428C9] font-semibold text-sm hover:opacity-80 transition-opacity flex items-center gap-1 group pb-1"
          >
            Tout voir 
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        {/* Ligne très fine de séparation éventuelle si nécessaire (optionnelle) */}
        
        {/* Container Carrousel 3D - Fond clair avec un dégradé subtil bleu basé sur le Signal Blue */}
        <div className="mt-4 relative w-full h-[350px] md:h-[500px] bg-gradient-to-tr from-[#F9FAFB] to-[#e4e8fb] flex justify-center items-center [perspective:1000px] overflow-hidden rounded-2xl shadow-inner border border-[#1428C9]/10">
          {events.map((item, index) => {
            // Calculer la distance de la carte par rapport au centre (-2, -1, 0, 1, 2)
            let distance = (index - active + events.length) % events.length;
            if (distance > 2) distance -= events.length;

            let transformStyle = '';
            let zIndex = 50 - Math.abs(distance) * 10;
            let opacityStyle = 1;

            // Positions et angles de la disposition Coverflow 3D
            if (distance === 0) {
              transformStyle = 'translateX(0) translateZ(0) rotateY(0)';
              opacityStyle = 1;
            } else if (distance === 1) {
              // Plus écarté pour toucher les bords
              transformStyle = 'translateX(120%) translateZ(-150px) rotateY(-30deg)';
              opacityStyle = 0.7;
            } else if (distance === -1) {
              transformStyle = 'translateX(-120%) translateZ(-150px) rotateY(30deg)';
              opacityStyle = 0.7;
            } else if (distance === 2) {
              // Extrêmité totalement étirée sur la droite
              transformStyle = 'translateX(260%) translateZ(-350px) rotateY(-45deg)';
              opacityStyle = 0.3;
            } else if (distance === -2) {
              // Extrêmité totalement étirée sur la gauche
              transformStyle = 'translateX(-260%) translateZ(-350px) rotateY(45deg)';
              opacityStyle = 0.3;
            }

            return (
              <div 
                key={item.id}
                onClick={() => setActive(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="absolute w-[200px] md:w-[320px] h-[280px] md:h-[420px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group cursor-pointer"
                style={{
                  transform: transformStyle,
                  zIndex: zIndex,
                  opacity: opacityStyle,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* L'image de l'événement */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover shadow-2xl"
                />
                
                {/* Description qui apparaît au survol sans le lien "Découvrir plus" */}
                <div className="absolute inset-0 bg-[#111827]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border-[1px] border-[#F9FAFB]/10">
                  <h3 className="text-[#F9FAFB] font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#F9FAFB]/80 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EventsSection;
