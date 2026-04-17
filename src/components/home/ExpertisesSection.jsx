import React, { useState } from 'react';

const expertises = [
  {
    id: 1,
    title: 'Gestion des opérations',
    name: 'Tamar Mendelson',
    role: 'Restaurant Critic',
    text: "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=600'
  },
  {
    id: 2,
    title: 'Audit stratégique',
    name: 'Sarah Lefevre',
    role: 'Consultante en stratégie',
    text: "Un audit précis et des recommandations concrètes qui ont transformé notre organisation. Leur approche personnalisée nous a permis de dépasser nos objectifs de croissance.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=600'
  },
  {
    id: 3,
    title: 'Expertise sectorielle',
    name: 'Karim Alaoui',
    role: 'CEO, TechSolutions',
    text: "Une expertise pointue et un accompagnement sur mesure. Les résultats ont été visibles dès les premières semaines. La méthode de travail est fluide et orientée vers la performance.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600'
  }
];

const ExpertisesSection = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % expertises.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + expertises.length) % expertises.length);

  return (
    <section className="py-20 bg-[#f6f8fb] overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre Section */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] text-center mb-3">
            Expertises Sectorielles
          </h2>
          <div className="w-10 h-[3px] bg-[#2563eb] rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-4 relative">
          
          {/* Stack d'images 3D (Gauche) */}
          <div className="w-full md:w-1/2 relative h-[380px] md:h-[500px] flex-shrink-0 perspective-1000">
            {expertises.map((item, index) => {
              // position = 0 (avant), 1 (droite), 2 (gauche)
              const position = (index - active + expertises.length) % expertises.length;
              
              let transformStyle = '';
              let opacity = 'opacity-100';
              let zIndex = 0;
              let widthClass = '';

              if (position === 0) {
                // Centre (Active) - Un peu descendue
                transformStyle = 'translateX(0) translateY(8%) scale(1) rotate(0deg)';
                zIndex = 30;
                opacity = 'opacity-100';
                widthClass = 'w-[75%] md:w-[70%]'; // Largeur normale
              } else if (position === 1) {
                // Suivant (Droite, un peu derrière) - Largeur diminuée
                transformStyle = 'translateX(45%) translateY(-5%) scale(0.9) rotate(2deg)';
                zIndex = 20;
                opacity = 'opacity-80'; 
                widthClass = 'w-[55%] md:w-[50%]';
              } else if (position === 2) {
                // Précédent (Gauche, un peu derrière) - Largeur diminuée
                transformStyle = 'translateX(-45%) translateY(0%) scale(0.9) rotate(-2deg)';
                zIndex = 20;
                opacity = 'opacity-80'; 
                widthClass = 'w-[55%] md:w-[50%]';
              }

              return (
                <div 
                  key={item.id}
                  className={`absolute m-auto inset-0 ${widthClass} h-[75%] md:h-[80%] rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${opacity}`}
                  style={{ 
                    zIndex,
                    transform: transformStyle,
                    boxShadow: position === 0 ? '0 25px 50px -12px rgba(0, 0, 0, 0.3)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
                  }}
                >
                  {/* Petit effet d'assombrissement pour les images de derrière */}
                  <div className={`absolute inset-0 bg-[#0f172a]/20 mix-blend-multiply transition-opacity duration-700 ${position === 0 ? 'opacity-0' : 'opacity-100'}`}></div>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>

          {/* Description et Navigation (Droite) */}
          <div className="w-full md:w-1/2 flex flex-col md:pl-8 lg:pl-16 relative">
            <div className="relative min-h-[220px]">
              {expertises.map((item, index) => {
                const isActive = active === index;
                
                return (
                  <div 
                    key={item.id}
                    className={`w-full flex-col transition-all duration-700 ease-out
                      ${isActive ? 'relative opacity-100 translate-y-0 z-10 flex' : 'absolute top-0 left-0 opacity-0 translate-y-8 -z-10 flex pointer-events-none'}`}
                  >
                    <h3 className="text-3xl font-extrabold text-[#1e293b] tracking-tight mb-2">
                      {item.name}
                    </h3>
                    <h4 className="text-[#64748b] text-[1.05rem] font-medium mb-1">
                      {item.role}
                    </h4>
                    <p className="text-[0.75rem] font-bold text-[#2563eb] uppercase tracking-wider mb-6">
                      {item.title}
                    </p>

                    <p className="text-[#334155] leading-relaxed text-[1.1rem] mb-6 max-w-md">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Boutons de navigation (Fixes sous le texte dynamique) */}
            <div className="flex items-center gap-4 mt-8 md:mt-12 relative z-40">
              <button 
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-[#0f172a] text-white flex items-center justify-center hover:bg-[#334155] hover:scale-105 active:scale-95 transition-all shadow-lg focus:outline-none"
                aria-label="Précédent"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#0f172a] text-white flex items-center justify-center hover:bg-[#334155] hover:scale-105 active:scale-95 transition-all shadow-lg focus:outline-none"
                aria-label="Suivant"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertisesSection;