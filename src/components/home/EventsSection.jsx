import React, { useState, useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PremiumButton } from '@/components/ui/PremiumButton';

const events = [
  { id: 1, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800', title: 'Conférence Annuelle', description: 'Une plongée immersive dans l\'innovation corporative et notre nouvelle identité de marque.' },
  { id: 2, image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800', title: 'Séminaire Stratégique', description: 'Analyse des grandes tendances du marché et élaboration des stratégies de croissance.' },
  { id: 3, image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800', title: 'Gala de l\'Excellence', description: 'Célébration des résultats exceptionnels de l\'année avec tous nos partenaires de confiance.' },
  { id: 4, image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80&w=800', title: 'Atelier Opérations', description: 'Workshops interactifs destinés à optimiser les flux de travail dans un cadre dynamique.' },
  { id: 5, image: 'https://images.unsplash.com/photo-1475721025505-1113afab0f43?auto=format&fit=crop&q=80&w=800', title: 'Networking VIP', description: 'Rencontrez les leaders mondiaux de votre industrie lors de cette soirée exclusive et inspirante.' }
];

const EventsSection = () => {
  const [active, setActive] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % events.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + events.length) % events.length);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const minSwipeDistance = 50;
  const onTouchStart = (e) => { setTouchEnd(0); setTouchStart(e.targetTouches[0].clientX); setIsHovered(true); };
  const onTouchMove = (e) => { setTouchEnd(e.targetTouches[0].clientX); };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) { setIsHovered(false); return; }
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
    setIsHovered(false);
  };

  return (
    <section className="font-sans w-full py-6 md:py-10">
      <div className="max-w-6xl mx-auto relative px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-6 text-center">
          <SectionTitle 
              subtitle="" 
              title="Événements Oriotel" 
              description="Découvrez nos prochains événements et conférences"
              align="center" 
            />
        </div>
          <div className="flex flex-col items-start gap-8 mt-8 md:mt-12 ml-3 relative z-40">
            <PremiumButton 
              href="/evenements"
              className="text-[#1428C9]"
            >
              Tout voir
            </PremiumButton>
          </div>

        <div 
          className="relative w-full h-[350px] md:h-[500px] flex justify-center items-center [perspective:1200px] touch-pan-y" 
          onTouchStart={onTouchStart} 
          onTouchMove={onTouchMove} 
          onTouchEnd={onTouchEnd}
        >
          {/* Flèches de navigation (Skeleton Tech style) */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-8 z-[60] w-11 h-11 flex items-center justify-center rounded-full border-2 border-slate-800 bg-transparent text-slate-800 hover:bg-slate-800 hover:text-white active:scale-95 transition-all duration-300"
            aria-label="Événement précédent"
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-8 z-[60] w-11 h-11 flex items-center justify-center rounded-full border-2 border-slate-800 bg-transparent text-slate-800 hover:bg-slate-800 hover:text-white active:scale-95 transition-all duration-300"
            aria-label="Événement suivant"
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>
          {events.map((item, index) => {
            let distance = (index - active + events.length) % events.length;
            if (distance > 2) distance -= events.length;
            let transformStyle = '', zIndex = 50 - Math.abs(distance) * 10, opacityStyle = 1;
            if (distance === 0) { transformStyle = 'translateX(0) translateZ(50px) rotateY(0)'; opacityStyle = 1; } 
            else if (distance === 1) { transformStyle = 'translateX(75%) translateZ(-50px) rotateY(-30deg)'; opacityStyle = 0.8; } 
            else if (distance === -1) { transformStyle = 'translateX(-75%) translateZ(-50px) rotateY(30deg)'; opacityStyle = 0.8; } 
            else if (distance === 2) { transformStyle = 'translateX(125%) translateZ(-150px) rotateY(-45deg)'; opacityStyle = 0.4; } 
            else if (distance === -2) { transformStyle = 'translateX(-125%) translateZ(-150px) rotateY(45deg)'; opacityStyle = 0.4; }
            return (
              <div key={item.id} onClick={() => setActive(index)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="absolute w-[220px] md:w-[340px] h-[280px] md:h-[420px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group cursor-pointer" style={{ transform: transformStyle, zIndex, opacity: opacityStyle, transformStyle: 'preserve-3d' }}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover shadow-2xl rounded-none pointer-events-none" />
                <div className={`absolute inset-0 bg-[#111827]/80 ${distance === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 flex flex-col justify-end p-6 border-[1px] border-[#F9FAFB]/10 rounded-none pointer-events-none`}>
                  <h3 className={`text-[#F9FAFB] font-bold text-xl mb-2 ${distance === 0 ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'} transition-transform duration-300`}>{item.title}</h3>
                  <p className={`text-[#F9FAFB]/80 text-sm leading-relaxed ${distance === 0 ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'} transition-transform duration-300 delay-75`}>{item.description}</p>
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