import React, { useMemo, useState, useCallback } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Hyperspeed from '@/components/ui/Hyperspeed';
import ParticlesLogoReveal from '@/components/home/ParticlesLogoReveal';
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
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-[20%] pt-16 md:pt-20 text-center overflow-hidden">

        {/* ── Content block: Logo + Tagline ── */}
        <div className="flex flex-col items-center gap-6 md:gap-10 w-full max-w-4xl">

          {/* ORIOTEL Title — centered */}
          {/* <h1 className="text-7xl md:text-9xl tracking-[-0.02em] text-[#020c1a] font-gugi select-none">
            Oriotel
          </h1> */}
          <Logo asLink={false} className="h-24 sm:h-32 md:h-44 lg:h-52" />

          {/* Tagline + description */}
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <div className="w-10 md:w-12 h-[2px] bg-[#1428C9]" />
            <p className="text-[#020c1a]/90 text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
              Orchestrer l'avenir<br />
              <span className="font-semibold text-[#020c1a]">de vos opérations.</span>
            </p>
            <p className="text-[#020c1a]/50 text-sm md:text-base leading-relaxed max-w-md hidden sm:block">
              De l'infrastructure télécom à l'intelligence des flux de travail — des solutions sur-mesure pour votre croissance.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1428C9] hover:opacity-80 transition-opacity group px-6 sm:px-8 py-2 md:py-2.5 border border-[#1428C9]/20 rounded-full hover:bg-[#1428C9] hover:text-white transition-all duration-300"
            >
              Découvrir Oriotel
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>

      {/* ── CENTER SCROLL ANIMATION ── */}
      <div className="relative pb-6 md:pb-10 flex flex-col items-center gap-2 text-[#020c1a]/40 z-20">
        <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase animate-bounce text-[#1428C9]">Scroll</span>
      </div>

    </section>
  );
}

export default Hero;