import React, { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { PremiumButton } from '@/components/ui/PremiumButton';
const expertises = [
  { id: 1, title: 'Gestion des opérations', name: 'Tamar Mendelson', role: 'Restaurant Critic', text: "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!", image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=600' },
  { id: 2, title: 'Audit stratégique', name: 'Sarah Lefevre', role: 'Consultante en stratégie', text: "Un audit précis et des recommandations concrètes qui ont transformé notre organisation. Leur approche personnalisée nous a permis de dépasser nos objectifs de croissance.", image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=600' },
  { id: 3, title: 'Expertise sectorielle', name: 'Karim Alaoui', role: 'CEO, TechSolutions', text: "Une expertise pointue et un accompagnement sur mesure. Les résultats ont été visibles dès les premières semaines. La méthode de travail est fluide et orientée vers la performance.", image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600' }
];

const ExpertisesSection = () => {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % expertises.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + expertises.length) % expertises.length);

  const minSwipeDistance = 50;
  const onTouchStart = (e) => { setTouchEnd(0); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e) => { setTouchEnd(e.targetTouches[0].clientX); };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  return (
    <section className="font-sans w-full pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="" 
          title="Expertises Sectorielles" 
          description="Notre équipe pluridisciplinaire vous accompagne avec des solutions pointues et sur-mesure."
          align="center" 
          // className="mb-8" 
        />
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0 relative touch-pan-y" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          
          {/* DESCRIPTION (Now Left on Desktop) */}
          <div className="w-full md:w-1/2 flex flex-col md:pr-8 lg:pr-10 relative">
            <div className="relative min-h-[220px]">
              {expertises.map((item, index) => {
                const isActive = active === index;
                return (
                  <div key={item.id} className={`w-full flex-col transition-all duration-700 ease-out pointer-events-none ${isActive ? 'relative opacity-100 translate-y-0 z-10 flex' : 'absolute top-0 left-0 opacity-0 translate-y-8 -z-10 flex pointer-events-none'}`}>
                    <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2">{item.name}</h3>
                    <h4 className="text-slate-500 text-[1.05rem] font-medium mb-1">{item.role}</h4>
                    <p className="text-[0.75rem] font-bold text-signal-blue uppercase tracking-wider mb-6">{item.title}</p>
                    <p className="text-slate-700 leading-relaxed text-[1.1rem] mb-6 max-w-lg">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-start gap-8 mt-8 md:mt-12 relative z-40">
              <div className="flex items-center gap-4">
                <button onClick={handlePrev} className="w-11 h-11 rounded-xl bg-[#1428C9]/10 backdrop-blur-md border border-[#1428C9]/20 text-[#1428C9] flex items-center justify-center hover:bg-[#1428C9]/20 hover:border-[#1428C9]/40 active:scale-95 transition-all duration-300 shadow-md focus:outline-none" aria-label="Expertise précédente"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg></button>
                <button onClick={handleNext} className="w-11 h-11 rounded-xl bg-[#1428C9]/10 backdrop-blur-md border border-[#1428C9]/20 text-[#1428C9] flex items-center justify-center hover:bg-[#1428C9]/20 hover:border-[#1428C9]/40 active:scale-95 transition-all duration-300 shadow-md focus:outline-none" aria-label="Expertise suivante"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg></button>
              </div>
              <PremiumButton 
                href="/services" 
                className="bg-[#1428C9]/10 backdrop-blur-md border border-[#1428C9]/20 text-[#1428C9] hover:bg-[#1428C9]/20 transition-all shadow-lg"
              >
                Tout voir
              </PremiumButton>
            </div>
          </div>

          {/* CARDS (Now Right on Desktop) */}
          <div className="w-full md:w-1/2 relative h-[380px] md:h-[500px] flex-shrink-0 perspective-1000">
            {expertises.map((item, index) => {
              const position = (index - active + expertises.length) % expertises.length;
              let transformStyle = '', opacity = 'opacity-100', zIndex = 0, widthClass = '';
              if (position === 0) { transformStyle = 'translateX(0) translateY(0%) scale(1) rotate(0deg)'; zIndex = 30; opacity = 'opacity-100'; widthClass = 'w-[85%] md:w-[85%]'; } 
              else if (position === 1) { transformStyle = 'translateX(30%) translateY(-10%) scale(0.9) rotate(2deg)'; zIndex = 20; opacity = 'opacity-80'; widthClass = 'w-[65%] md:w-[65%]'; } 
              else if (position === 2) { transformStyle = 'translateX(-30%) translateY(-5%) scale(0.9) rotate(-2deg)'; zIndex = 20; opacity = 'opacity-80'; widthClass = 'w-[65%] md:w-[65%]'; }
              return (
                <div key={item.id} className={`absolute m-auto inset-0 ${widthClass} h-[75%] md:h-[80%] rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${opacity}`} style={{ zIndex, transform: transformStyle, boxShadow: position === 0 ? '0 25px 50px -12px rgba(0, 0, 0, 0.3)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                  <div className={`absolute inset-0 bg-slate-900/40 mix-blend-multiply transition-opacity duration-700 ${position === 0 ? 'opacity-0' : 'opacity-100'}`}></div>
                  <img src={item.image} alt={item.name} draggable="false" className="w-full h-full object-cover pointer-events-none" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertisesSection;