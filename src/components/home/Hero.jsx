import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the entrance animation after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen h-[100dvh] overflow-hidden bg-[#020c1a] font-sans flex flex-col">

      {/* ── VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
        >
          {/* 
            Replace this with your own video URL.
            A cinematic tech/corporate video works best here.
            Example: /assets/videos/hero-intro.mp4
          */}
          <source 
            src="https://cdn.coverr.co/videos/coverr-aerial-view-of-city-at-night-1573/1080p.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020c1a]/70 via-[#020c1a]/50 to-[#020c1a]/80" />
      </div>

      {/* ── MAIN HERO CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col lg:items-start items-center justify-center px-6 md:px-12 lg:px-20 pt-4 md:pt-20 pb-24 md:pb-20 lg:text-left text-center overflow-y-auto sm:overflow-hidden">

        <div className={`flex flex-col lg:items-start items-center gap-4 sm:gap-6 md:gap-10 w-full max-w-4xl py-0 md:py-4 shrink-0 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Logo */}
          <Logo asLink={false} className="h-20 sm:h-24 md:h-36 lg:h-48 shrink-0 brightness-0 invert" />

          {/* Tagline + description */}
          <div className={`flex flex-col lg:items-start items-center gap-3 md:gap-4 shrink-0 transition-all duration-1000 delay-300 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="w-8 md:w-12 h-[2px] bg-white/40" />
            <p className="text-white/90 text-base sm:text-xl md:text-2xl font-light leading-relaxed">
              Orchestrer l'avenir<br />
              <span className="font-semibold text-white">de vos opérations.</span>
            </p>
            <p className="text-white/50 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm lg:max-w-md block">
              De l'infrastructure télécom à l'intelligence des flux de travail — des solutions sur-mesure pour votre croissance.
            </p>
            <a
              href="/about"
              className="mt-2 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:opacity-80 transition-opacity group px-6 sm:px-8 py-2.5 border border-white/30 rounded-none hover:bg-white hover:text-[#020c1a] transition-all duration-300"
            >
              Découvrir Oriotel
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>

      {/* ── HERO SPONSORS BAR (Skeleton Tech style — transparent) ── */}
      <div className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-1000 delay-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 md:py-5 flex flex-col items-center gap-4">
          {/* <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/40 font-semibold whitespace-nowrap">
            Ils nous font confiance
          </span> */}
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-nowrap overflow-x-auto scrollbar-hide w-full">
            <img src="/assets/images/logo-iam.svg" alt="Maroc Telecom" className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
            <img src="/assets/images/logo-inwi.svg" alt="INWI" className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
            <img src="/assets/images/logo-orange.svg" alt="Orange" className="h-6 md:h-8 w-auto object-contain invert brightness-75 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
            <img src="/assets/images/logo-supmti.svg" alt="Supmti" className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;