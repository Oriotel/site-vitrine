import React, { useState } from 'react';

const servicesList = [
  { 
    id: 1,
    title: 'ARCHITECTURE D\'ENTREPRISE', 
    desc: 'Conception et modélisation de structures organisationnelles robustes et agiles face au marché.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    id: 2,
    title: 'OPTIMISATION OPÉRATIONNELLE', 
    desc: 'Amélioration continue de vos processus internes pour un rendement maximal et des coûts maîtrisés.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    id: 3,
    title: 'CONSEIL STRATÉGIQUE', 
    desc: 'Accompagnement de vos dirigeants vers des prises de décisions à fort impact pour l\'avenir.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    id: 4,
    title: 'ACCOMPAGNEMENT SUR MESURE', 
    desc: 'Une présence continue et un suivi personnalisé à chaque étape clé de votre croissance.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200'
  }
];

const engagements = [
  { title: 'Qualité', desc: 'Un standard de service irréprochable et rigoureux.' },
  { title: 'Fiabilité', desc: 'Des partenaires solides sur lesquels vous pouvez compter.' },
  { title: 'Accompagnement', desc: 'Une présence continue à chaque étape clé de votre projet.' },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [isServiceHovered, setIsServiceHovered] = useState(false);

  const nextService = () => setActiveService((prev) => (prev + 1) % servicesList.length);
  const prevService = () => setActiveService((prev) => (prev - 1 + servicesList.length) % servicesList.length);

  return (
    <div className="min-h-screen bg-white font-sans pt-24 lg:pt-32">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <span className="text-[#1428C9] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 block">
            Expertise et conseil
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] mb-6 tracking-tight">
            Nos Services
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            Propulsez votre structure vers l'excellence grâce à nos solutions architecturales et opérationnelles sur mesure. Nous transformons vos défis en avantages compétitifs.
          </p>
        </div>
        
        {/* Visuel Hero Carré pour matcher la page */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[450px] aspect-square bg-slate-100 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Bureau Oriotel" 
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* 2. CARROUSEL DES SERVICES (Basé sur le nouveau mock-up de luxe) */}
      <section className="relative w-full h-[60vh] min-h-[500px] md:h-[700px] bg-white py-12 overflow-hidden flex items-center justify-center border-y border-slate-200/60">
        
        {/* Ligne d'horizon décorative */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#111827]/5 -translate-y-1/2 pointer-events-none"></div>

        {/* Les cartes images (Slider) */}
        <div className="relative w-full h-[350px] md:h-[550px] flex items-center justify-center perspective-[2000px]">
          {servicesList.map((svc, i) => {
            let dist = (i - activeService + servicesList.length) % servicesList.length;
            if (dist > servicesList.length / 2) dist -= servicesList.length;

            let transformStyle = '';
            let opacityStyle = 0;
            let zIndexStyle = 0;

            if (dist === 0) {
              transformStyle = 'translateX(0) scale(1)';
              opacityStyle = 1;
              zIndexStyle = 20;
            } else if (dist === 1) {
              transformStyle = 'translateX(105%) scale(0.85)';
              opacityStyle = 0.6;
              zIndexStyle = 10;
            } else if (dist === -1) {
              transformStyle = 'translateX(-105%) scale(0.85)';
              opacityStyle = 0.6;
              zIndexStyle = 10;
            } else {
              transformStyle = dist > 0 ? 'translateX(200%) scale(0.7)' : 'translateX(-200%) scale(0.7)';
              opacityStyle = 0;
              zIndexStyle = 0;
            }

            const isActive = dist === 0;

            return (
              <div
                key={svc.id}
                className="absolute w-[75%] sm:w-[50%] md:w-[35%] lg:w-[32%] h-full max-w-[500px] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  transform: transformStyle,
                  opacity: opacityStyle,
                  zIndex: zIndexStyle,
                }}
              >
                 <div 
                   className={`relative w-full h-full overflow-hidden shadow-[0_30px_60px_rgba(20,40,201,0.2)] cursor-pointer group ${isActive ? 'rounded-none' : 'rounded-[2rem]'}`}
                   onMouseEnter={() => isActive && setIsServiceHovered(true)}
                   onMouseLeave={() => isActive && setIsServiceHovered(false)}
                   onClick={() => {
                      if (dist === 1) nextService();
                      if (dist === -1) prevService();
                   }}
                 >
                   <img 
                     src={svc.image} 
                     alt={svc.title} 
                     className={`w-full h-full object-cover transition-transform duration-[1500ms] ${isActive && isServiceHovered ? 'scale-105' : 'scale-100'}`} 
                   />
                   
                   {/* Fade sombre en bas et en haut pour mettre en valeur les interfaces superposées */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20 pointer-events-none"></div>

                   {/* Composant Texte sur Image central (Titre et Description au Hover) */}
                   <div className="absolute bottom-0 left-0 w-full p-6 md:p-14 flex flex-col justify-end h-full text-center pointer-events-none">
                      <h3 className="text-2xl md:text-5xl lg:text-6xl font-serif italic text-white drop-shadow-2xl transition-all duration-500 tracking-wide">
                        {svc.title}
                      </h3>
                      
                      {/* Description révélée au hover de l'élément actif */}
                      <div 
                        className={`overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive && isServiceHovered ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}
                      >
                        <p className="text-[#F9FAFB]/90 text-sm md:text-xl font-light border-t border-white/20 pt-6 max-w-2xl mx-auto drop-shadow-md">
                          {svc.desc}
                        </p>
                      </div>
                   </div>
                 </div>
              </div>
            );
          })}
        </div>

        {/* UI LATÉRALE INSPIRÉE DU MOCK-UP */}
        {/* Compteur (Gauche) */}
        <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center pointer-events-none">
           <span className="text-xs font-mono text-[#111827] font-bold tracking-widest mb-6 block">
              {String(activeService + 1).padStart(2, '0')}
           </span>
           <div className="w-8 h-[2px] bg-[#111827]/20 mb-6"></div>
           <span className="text-xs font-mono text-[#111827]/40 font-bold tracking-widest block">
              {String(servicesList.length).padStart(2, '0')}
           </span>
        </div>

        {/* Flèches de navigation (Droite) */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
           <button 
             onClick={nextService} 
             className="w-12 h-12 flex flex-col justify-center items-center text-[#111827]/70 hover:text-[#1428C9] hover:scale-110 transition-all font-light mb-4"
           >
             <span className="mb-2 text-2xl">›</span>
           </button>
           <div className="w-8 h-[2px] bg-[#111827]/20"></div>
           <button 
             onClick={prevService} 
             className="w-12 h-12 flex flex-col justify-center items-center text-[#111827]/70 hover:text-[#1428C9] hover:scale-110 transition-all font-light mt-4"
           >
             <span className="mt-2 text-2xl">‹</span>
           </button>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
