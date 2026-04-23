import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600',
    tag: 'Conférence',
    title: 'Conférence Annuelle ORIOTEL',
    subtitle: 'Innovation & Excellence',
    date: '15 Juin 2026',
    location: 'Paris, France',
    description: 'Une plongée immersive dans l\'innovation corporative.',
    accent: '#1428C9',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600',
    tag: 'Gala',
    title: 'Gala de l\'Excellence 2026',
    subtitle: 'Célébration & Prestige',
    date: '22 Juillet 2026',
    location: 'Monaco',
    description: 'Célébration des résultats exceptionnels de l\'année.',
    accent: '#818CF8',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600',
    tag: 'Séminaire',
    title: 'Séminaire Stratégique',
    subtitle: 'Vision & Croissance',
    date: '10 Septembre 2026',
    location: 'Casablanca, Maroc',
    description: 'Analyse des grandes tendances du marché.',
    accent: '#1428C9',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1475721025505-1113afab0f43?auto=format&fit=crop&q=80&w=1600',
    tag: 'Networking',
    title: 'Soirée Networking VIP',
    subtitle: 'Connexions & Opportunités',
    date: '5 Novembre 2026',
    location: 'Dubai, UAE',
    description: 'Rencontrez les leaders mondiaux de votre industrie.',
    accent: '#818CF8',
  },
];

const DURATION = 3000;

const SlideEvent = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setCurrent(index);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, current]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => { setProgress(0); next(); }, DURATION);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  useEffect(() => {
    if (isPaused) return;
    setProgress(0);
    const step = 100 / (DURATION / 50);
    const timer = setInterval(() => setProgress(p => Math.min(p + step, 100)), 50);
    return () => clearInterval(timer);
  }, [isPaused, current]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[60vh] min-h-[420px] overflow-hidden font-sans border-b border-white/5 mt-16 md:mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
            style={{ transform: i === current ? 'scale(1.05)' : 'scale(1.1)', transition: 'transform 4s ease-out' }}
          />
        </div>
      ))}

      {/* ── Overlays ── */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-midnight-slate via-midnight-slate/70 to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-midnight-slate/90 via-transparent to-transparent" />

      {/* ── Decorative Slide Number ── */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-[3] pr-10 opacity-5 pointer-events-none hidden md:block">
        <span className="text-[25vh] font-bold leading-none text-white select-none">
          {String(current + 1).padStart(2, '0')}
        </span>
      </div>

      {/* ── Content ── */}
      <div className="relative z-[4] h-full flex flex-col justify-center px-6 lg:px-10 pt-10">
        <div className="w-full max-w-[1400px] mr-auto">
          <div className="max-w-[750px]">
            
            {/* Header info bar (Combined Tag + Date + Location) */}
            <div 
              key={`info-${current}`}
              className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-3 text-white"
              style={{ animation: 'fadeInUp 0.5s ease-out both' }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: slide.accent }} />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">{slide.tag}</span>
              </div>
              <div className="flex items-center gap-4 text-[0.65rem] font-medium !text-white">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {slide.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {slide.location}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1
              key={`title-${current}`}
              className="font-bold !text-white leading-tight mb-2"
              style={{ 
                fontSize: 'clamp(2rem, 5vh, 4rem)', 
                animation: 'fadeInUp 0.55s ease-out both',
                animationDelay: '100ms'
              }}
            >
              {slide.title}
            </h1>

            {/* Combined Subtitle & Small Description */}
            <div 
              key={`desc-${current}`}
              className="mb-6"
              style={{ animation: 'fadeInUp 0.55s ease-out both', animationDelay: '200ms' }}
            >
              <p className="!text-white text-lg md:text-xl font-light mb-2">
                {slide.subtitle}
              </p>
              <p className="!text-white text-xs md:text-sm max-w-[500px] leading-relaxed">
                {slide.description}
              </p>
            </div>

            {/* CTA Button */}
            <div 
              key={`cta-${current}`}
              style={{ animation: 'fadeInUp 0.55s ease-out both', animationDelay: '300ms' }}
            >
              <button
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 text-white font-bold text-xs rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ 
                  background: `linear-gradient(135deg, ${slide.accent}, #0C1879)`,
                  boxShadow: `0 8px 25px ${slide.accent}44` 
                }}
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Participer à l'événement</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── Navigation Bar (Bottom) ── */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] bg-gradient-to-t from-midnight-slate/80 to-transparent">
        {/* Progress Line */}
        <div className="w-full h-[3px] bg-white/5 overflow-hidden">
          <div
            className="h-full transition-none"
            style={{ 
              width: `${progress}%`, 
              background: `linear-gradient(90deg, ${slide.accent}, #818CF8)`,
              transition: 'width 0.05s linear'
            }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-bold">{String(current + 1).padStart(2, '0')}</span>
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/70 text-sm font-medium">{String(slides.length).padStart(2, '0')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{ 
                    width: i === current ? '24px' : '6px',
                    background: i === current ? slide.accent : 'rgba(255,255,255,0.2)' 
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={prev} className="p-2.5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" strokeWidth={2} /></svg>
            </button>
            <button onClick={next} className="p-2.5 rounded-full text-white transition-transform hover:scale-110 active:scale-95" style={{ background: slide.accent }}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" strokeWidth={2} /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideEvent;
