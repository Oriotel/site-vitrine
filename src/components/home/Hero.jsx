import React, { useMemo } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Hyperspeed from '@/components/ui/Hyperspeed';

export function Hero() {

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
    <section className="relative w-full min-h-screen overflow-hidden bg-white font-sans flex flex-col">

      {/* ── HYPERSPEED BACKGROUND ── */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>

      {/* ── TOP BAR ── */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-16 pt-10 text-[#020c1a]/40 text-xs tracking-[0.3em] uppercase">
        <span>Telecom · Management · E-commerce</span>
        <span className="hidden md:block">Est. 2009 — Maroc</span>
      </div>

      {/* ── MAIN HERO AREA ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-4 md:px-10 lg:px-14 pb-20 pt-8">

        {/* ORIOTEL — Massive display word */}
        <div className="flex-1 flex items-center justify-center md:items-start md:pt-10">
          <h1
            className="select-none font-extrabold tracking-tighter leading-none text-left w-full text-[#020c1a]"
            style={{
              fontSize: 'clamp(64px, 15vw, 240px)',
            }}
          >
            ORIOTEL.
          </h1>
        </div>

        {/* ── BOTTOM ROW ── */}
        <div className="flex flex-col mt-auto relative z-20">
          {/* Bottom-left: tagline + description */}
          <div className="max-w-md flex flex-col gap-5">
            {/* Thin accent line */}
            <div className="w-10 h-[2px] bg-[#1428C9]" />
            <p className="text-[#020c1a]/90 text-lg md:text-xl font-light leading-relaxed">
              Orchestrer l'avenir<br />
              <span className="font-semibold text-[#020c1a]">de vos opérations.</span>
            </p>
            <p className="text-[#020c1a]/60 text-sm leading-relaxed max-w-xs">
              De l'infrastructure télécom à l'intelligence des flux de travail — des solutions sur-mesure pour votre croissance.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1428C9] hover:opacity-80 transition-opacity group mt-2"
            >
              Découvrir Oriotel
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* ── CENTER SCROLL ANIMATION ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#020c1a]/40 z-20">
        <span className="text-[10px] tracking-[0.3em] uppercase hidden md:block">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce text-[#1428C9]" />
      </div>

      {/* ── THIN BOTTOM ACCENT ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1428C9]/20 to-transparent z-10" />

    </section>
  );
}

export default Hero;