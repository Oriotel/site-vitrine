import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '@/components/ui/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const testimonialsData = t('home.testimonials_section.items', { returnObjects: true }) || [];
  
  const images = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600'
  ];

  const testimonials = testimonialsData.map((item, index) => ({
    ...item,
    id: index + 1,
    image: images[index]
  }));

  const handleNext = () => setActive(prev => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (isHovered || testimonials.length === 0) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <SectionTitle 
          subtitle="" 
          title={t('home.testimonials_section.title')}
          description={t('home.testimonials_section.description')}
          align="center" 
          className="mb-10" 
        />
        <div className="relative w-full h-[280px] md:h-[400px] flex justify-center items-center [perspective:1200px] touch-pan-y" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          {testimonials.map((item, index) => {
            let distance = (index - active + testimonials.length) % testimonials.length;
            if (distance > 2) distance -= testimonials.length;
            let transformStyle = '', zIndex = 50 - Math.abs(distance) * 10, opacityStyle = 1;
            if (distance === 0) { transformStyle = 'translateX(0) translateZ(50px) rotateY(0)'; opacityStyle = 1; } 
            else if (distance === 1) { transformStyle = 'translateX(75%) translateZ(-50px) rotateY(-30deg)'; opacityStyle = 0.8; } 
            else if (distance === -1) { transformStyle = 'translateX(-75%) translateZ(-50px) rotateY(30deg)'; opacityStyle = 0.8; } 
            else if (distance === 2) { transformStyle = 'translateX(125%) translateZ(-150px) rotateY(-45deg)'; opacityStyle = 0.4; } 
            else if (distance === -2) { transformStyle = 'translateX(-125%) translateZ(-150px) rotateY(45deg)'; opacityStyle = 0.4; }
            return (
              <div key={item.id} onClick={() => setActive(index)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="absolute w-[220px] h-[220px] md:w-[340px] md:h-[340px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer rounded-[2rem] overflow-hidden shadow-xl" style={{ transform: transformStyle, zIndex, opacity: opacityStyle, transformStyle: 'preserve-3d' }}>
                <img src={item.image} alt={item.name} draggable="false" className="w-full h-full object-cover pointer-events-none" />
              </div>
            );
          })}
          
          {/* Flèches de navigation */}
          <button 
            onClick={handlePrev} 
            className="absolute left-2 md:left-8 z-[60] w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/75 border border-white/30 text-white hover:bg-slate-700/90 transition-all duration-300 shadow-xl"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext} 
            className="absolute right-2 md:right-8 z-[60] w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/75 border border-white/30 text-white hover:bg-slate-700/90 transition-all duration-300 shadow-xl"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto h-[160px] flex flex-col justify-start transition-all duration-500" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="mb-8 flex flex-col items-center">
            <h4 className="text-xl font-bold text-[#1428C9]">{testimonials[active].name}</h4>
            <span className="text-xs text-[#111827]/50 uppercase tracking-widest mt-1">{testimonials[active].role}</span>
          </div>
          <p key={active} className="text-lg md:text-2xl italic text-[#111827]/80 leading-relaxed font-light animate-[fadeIn_0.5s_ease-out]">"{testimonials[active].quote}"</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;