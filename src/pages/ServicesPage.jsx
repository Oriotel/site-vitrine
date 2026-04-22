import React from 'react';
import StatsSection from '../components/About/StatsSection';

const servicesList = [
  { 
    id: 1,
    title: 'Architecture d\'entreprise', 
    desc: 'Conception et modélisation de structures organisationnelles robustes et agiles face aux évolutions du marché.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 2,
    title: 'Optimisation opérationnelle', 
    desc: 'Amélioration continue de vos processus internes pour un rendement maximal et des coûts maîtrisés.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 3,
    title: 'Conseil stratégique', 
    desc: 'Accompagnement de vos dirigeants vers des prises de décisions à fort impact pour l\'avenir de l\'entreprise.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 4,
    title: 'Accompagnement sur mesure', 
    desc: 'Une présence continue et un suivi personnalisé à chaque étape clé de la croissance de votre structure.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 5,
    title: 'Transformation digitale', 
    desc: 'Intégrez les nouvelles technologies au cœur de votre métier pour gagner en agilité et en performance.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 6,
    title: 'Management de transition', 
    desc: 'Intervention d\'experts de haut niveau pour piloter vos équipes lors de phases critiques ou de transformation.',
    image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* 1. HERO SECTION (Pleine Largeur et Sombre) */}
      <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[450px] flex items-center justify-center pt-20">
        
        {/* Image de fond pleine largeur avec overlay sombre */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Bureau Oriotel Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        
        {/* Contenu textuel centré par dessus l'image */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-white/80 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 block border border-white/20 px-5 py-2 rounded-full backdrop-blur-sm">
            Expertise et conseil
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 md:mb-8 tracking-tight drop-shadow-xl">
            Nos Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light drop-shadow-md">
            Propulsez votre structure vers l'excellence grâce à nos solutions architecturales et opérationnelles sur mesure. Nous transformons vos défis en avantages compétitifs.
          </p>
        </div>
      </section>

      {/* 2. GRILLE DE 6 CARTES SIMPLES (Remplace l'animation de carrousel) */}
      <section className="bg-[#F9FAFB] pt-24 pb-12 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">Découvrez nos solutions</h2>
            <div className="w-16 h-1 bg-[#1428C9] mt-4 mx-auto lg:mx-0 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((svc) => (
              <div 
                key={svc.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(20,40,201,0.08)] border border-slate-100 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Image de la carte avec léger zoom horizontal au survol */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay subtil */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                {/* Contenu et Détails (Flex-grow pour aligner les boutons en bas) */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#111827] mb-3 leading-snug">{svc.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-prose flex-grow mb-8 line-clamp-3">
                    {svc.desc}
                  </p>
                  
                  {/* Action : Voir les détails */}
                  <div className="mt-auto border-t border-slate-100 pt-6">
                    <span 
                      className="inline-flex items-center text-[#1428C9] font-bold text-sm uppercase tracking-widest group-hover:text-[#111827] transition-colors"
                    >
                      Voir les détails
                      {/* Flèche qui s'anime vers la droite */}
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SECTION STATISTIQUES */}
      <StatsSection />
    </div>
  );
};

export default ServicesPage;
