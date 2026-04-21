import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const videos = [
  {
    // City / telecom / network infrastructure
    src: 'https://assets.mixkit.co/videos/preview/mixkit-fiber-optic-connected-to-a-data-center-50330-large.mp4',
    label: 'Infrastructure Telecom',
  },
  {
    // Business management / corporate operations
    src: 'https://assets.mixkit.co/videos/preview/mixkit-business-team-having-a-meeting-in-a-modern-office-17-large.mp4',
    label: 'Management & Opérations',
  },
  {
    // E-commerce / digital city at night
    src: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4',
    label: 'Digital & E-commerce',
  },
];

const VIDEO_DURATION = 7000; // ms per video

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const intervalRef = useRef(null);
  const videoRefs = useRef([]);

  const goTo = (index) => {
    setPrevIndex(activeIndex);
    setActiveIndex(index);
    setProgress(0);
  };

  const goNext = () => goTo((activeIndex + 1) % videos.length);

  useEffect(() => {
    // Auto-advance
    intervalRef.current = setInterval(goNext, VIDEO_DURATION);
    return () => clearInterval(intervalRef.current);
  }, [activeIndex]);

  useEffect(() => {
    // Progress bar animation
    setProgress(0);
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      setProgress(Math.min((elapsed / VIDEO_DURATION) * 100, 100));
      if (elapsed < VIDEO_DURATION) {
        progressRef.current = requestAnimationFrame(step);
      }
    };
    progressRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(progressRef.current);
  }, [activeIndex]);

  useEffect(() => {
    // Play the active video
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-midnight-slate font-sans">

      {/* ── VIDEO SLIDES ── */}
      {videos.map((video, index) => {
        const isActive = index === activeIndex;
        const isPrev = index === prevIndex;
        return (
          <div
            key={index}
            className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: isActive ? 1 : isPrev ? 0 : 0, pointerEvents: 'none' }}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              muted
              playsInline
              loop
              preload={index === 0 ? 'auto' : 'none'}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.target.src = video.fallback; }}
            />
          </div>
        );
      })}

      {/* ── DARK OVERLAY (cinematic) ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-midnight-slate via-midnight-slate/65 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-black/30 pointer-events-none" />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-12 lg:px-24 lg:pb-32 pointer-events-none">
        <div className="w-full max-w-4xl flex flex-col items-start text-left gap-6">

          {/* Badge */}
          <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-cloud-white/20 bg-cloud-white/10 px-4 py-1.5 text-sm font-medium text-cloud-white backdrop-blur-md transition-all hover:bg-cloud-white/20 cursor-pointer">
            <span className="flex h-2 w-2 rounded-full bg-signal-blue animate-pulse"></span>
            NOUVEAU : Découvrez notre méthodologie
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-cloud-white leading-[1.1] tracking-tight">
            Orchestrer l'avenir <br /> de vos opérations
          </h1>

          {/* Sous-titre */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
            De la robustesse de vos infrastructures matérielles à l'intelligence de vos flux de travail.{' '}
            <span className="font-bold text-cloud-white">ORIOTEL</span> accompagne votre transformation avec des solutions sur-mesure.
          </p>

          {/* CTA Buttons */}
          <div className="pointer-events-auto flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Button size="lg" className="w-full sm:w-auto bg-signal-blue hover:bg-signal-blue/90 text-white rounded-xl px-8 h-14 text-base font-semibold transition-all shadow-lg hover:shadow-signal-blue/25 group">
              Commencer le projet
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-cloud-white/20 hover:bg-cloud-white/10 text-white bg-transparent rounded-xl px-8 h-14 text-base font-semibold backdrop-blur-sm transition-all group">
              <Play className="mr-2 h-5 w-5 fill-transparent group-hover:fill-cloud-white transition-all" />
              Voir plus
            </Button>
          </div>
        </div>
      </div>

      {/* ── SLIDER CONTROLS (bottom right) ── */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-24 z-20 flex flex-col items-end gap-3">
        {/* Slide indicators with progress */}
        <div className="flex items-center gap-2">
          {videos.map((v, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={v.label}
              className="relative h-1 rounded-full overflow-hidden transition-all duration-500 focus:outline-none"
              style={{ width: i === activeIndex ? 48 : 20, background: 'rgba(255,255,255,0.25)' }}
            >
              {i === activeIndex && (
                <span
                  className="absolute inset-y-0 left-0 bg-signal-blue rounded-full transition-none"
                  style={{ width: `${progress}%` }}
                />
              )}
              {i !== activeIndex && (
                <span className="absolute inset-0 bg-white/40 rounded-full" />
              )}
            </button>
          ))}
        </div>
        {/* Current slide label */}
        <span className="text-xs text-white/50 tracking-widest uppercase font-medium">
          {videos[activeIndex].label}
        </span>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce opacity-60">
        <span className="text-[10px] text-white/50 uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  );
}

export default Hero;