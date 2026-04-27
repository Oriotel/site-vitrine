import React, { useMemo, useState, useCallback } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Hyperspeed from '@/components/ui/Hyperspeed';
// import ParticlesLogoReveal from '@/components/home/ParticlesLogoReveal';
import { Logo } from '@/components/ui/Logo';

export function Hero() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const hyperspeedOptions = useMemo(() => ({
    distortion: 'turbulentDistortion',
    colors: {
      roadColor: 0xffffff,
      islandColor: 0xffffff,
      background: 0xffffff,
      shoulderLines: 0x1428c9,
      brokenLines: 0x1428c9,
      leftCars: [0x1428c9, 0x071578, 0x020c1a],
      rightCars: [0x1428c9, 0x071578, 0x020c1a],
      sticks: 0x1428c9,
    }
  }), []);

  return (
    <section className="relative w-full h-screen h-[100dvh] overflow-hidden bg-white font-sans flex flex-col">

      {/* ── PARTICLES LOGO REVEAL INTRO (inside hero only) ── */}
      {/* {!introComplete && (
        <ParticlesLogoReveal onComplete={handleIntroComplete} />
      )} */}

      {/* ── HYPERSPEED BACKGROUND ── */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>

      {/* ── MAIN HERO AREA ── */}
      <div className="relative z-10 flex-1 flex flex-col lg:items-start items-center justify-center px-6 md:px-12 lg:px-20 pt-4 md:pt-20 lg:text-left text-center overflow-y-auto sm:overflow-hidden">

        {/* ── Content block: Logo + Tagline ── */}
        <div className="flex flex-col lg:items-start items-center gap-4 sm:gap-6 md:gap-10 w-full max-w-4xl py-0 md:py-4 shrink-0">

          {/* ORIOTEL Title — centered */}
          {/* <h1 className="text-7xl md:text-9xl tracking-[-0.02em] text-[#020c1a] font-gugi select-none">
            Oriotel
          </h1> */}
          <Logo asLink={false} className="h-20 sm:h-24 md:h-36 lg:h-48 shrink-0" />

          {/* Tagline + description */}
          <div className="flex flex-col lg:items-start items-center gap-3 md:gap-4 shrink-0">
            <div className="w-8 md:w-12 h-[2px] bg-[#1428C9]" />
            <p className="text-[#020c1a]/90 text-base sm:text-xl md:text-2xl font-light leading-relaxed">
              Orchestrer l'avenir<br />
              <span className="font-semibold text-[#020c1a]">de vos opérations.</span>
            </p>
            <p className="text-[#020c1a]/60 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm lg:max-w-md block">
              De l'infrastructure télécom à l'intelligence des flux de travail — des solutions sur-mesure pour votre croissance.
            </p>
            <a
              href="/about"
              className="mt-2 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1428C9] hover:opacity-80 transition-opacity group px-6 sm:px-8 py-2.5 border border-[#1428C9]/20 rounded-full hover:bg-[#1428C9] hover:text-white transition-all duration-300"
            >
              Découvrir Oriotel
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>

      {/* ── CENTER SCROLL ANIMATION ── */}
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#1428C9] z-20 hover:opacity-70 transition-opacity cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </button>

    </section>
  );
}

export default Hero;