import React, { useState, useEffect, useCallback, useRef, memo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/utils/cn'

const PRIMARY = '#1428C9'

export const TeamCarousel = ({ members }) => {
  const memberCount = members.length

  // 6× duplication — loop boundary always off-screen, no visible jump
  const slides = React.useMemo(
    () => [...members, ...members, ...members, ...members, ...members, ...members],
    [members]
  )


  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,            // Infinite loop enabled
      align: 'center',       // 'center' aligns the fixed-width cards in the middle of small screens
      dragFree: false,       // keep snapping so slides always land cleanly
      skipSnaps: false,
      containScroll: false,
      duration: 65, // Increased for ultra-smooth movement
    }
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedPhysicalIndex, setSelectedPhysicalIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    const snapIndex = emblaApi.selectedScrollSnap()
    setSelectedPhysicalIndex(snapIndex)
    // Map the raw snap index back to 0–(memberCount-1)
    setActiveIndex(snapIndex % memberCount)
  }, [emblaApi, memberCount])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  // Scroll to the nearest occurrence of the chosen logical index
  const scrollToLogical = useCallback((logicalIdx) => {
    if (!emblaApi) return
    const snap = emblaApi.selectedScrollSnap()
    // Find the nearest clone of logicalIdx relative to current position
    const totalSlides = slides.length
    let best = -1
    let bestDist = Infinity
    for (let i = logicalIdx; i < totalSlides; i += memberCount) {
      const dist = Math.abs(i - snap)
      if (dist < bestDist) { bestDist = dist; best = i }
    }
    if (best !== -1) emblaApi.scrollTo(best)
  }, [emblaApi, memberCount, slides.length])

  return (
    <div className="relative w-full">
      {/* ── Track area: relative wrapper for gradient positioning ── */}
      <div className="relative">
        {/* Embla viewport — clean, no extra children */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex" style={{ marginLeft: '-2rem', padding: '2rem 0' }}>
            {slides.map((member, i) => (
              <div
                key={`${member.name}-${i}`}
                className="flex-[0_0_300px] sm:flex-[0_0_320px] md:flex-[0_0_340px] lg:flex-[0_0_360px] xl:flex-[0_0_380px] min-w-0 pl-8"
              >
                <SlideCard
                  member={member}
                  primary={PRIMARY}
                  isActive={i === selectedPhysicalIndex}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Edge Mask Gradients — outside embla viewport, overlaid via absolute positioning */}
        <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-24 md:w-48 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-24 md:w-48 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* ── Controls ── */}
      <div className="flex items-center justify-center gap-6 mt-6">
        {/* Prev */}
        <NavButton direction="prev" onClick={scrollPrev} primary={PRIMARY} />

        {/* Dots */}
        <div className="flex gap-2.5 items-center">
          {members.map((_, i) => (
            <DotButton 
              key={i} 
              index={i} 
              isActive={i === activeIndex} 
              primary={PRIMARY} 
              onClick={scrollToLogical} 
            />
          ))}
        </div>

        {/* Next */}
        <NavButton direction="next" onClick={scrollNext} primary={PRIMARY} />
      </div>
    </div>
  )
}

/* ─── Memoized Navigation Components ──────────────────────── */

const NavButton = memo(({ direction, onClick, primary }) => {
  const handleMouseEnter = useCallback(e => {
    e.currentTarget.style.background = primary;
    e.currentTarget.style.color = '#fff';
    e.currentTarget.style.borderColor = primary;
  }, [primary]);

  const handleMouseLeave = useCallback(e => {
    e.currentTarget.style.background = '';
    e.currentTarget.style.color = '';
    e.currentTarget.style.borderColor = '';
  }, []);

  return (
    <button
      onClick={onClick}
      className="h-11 w-11 flex items-center justify-center rounded-full bg-white shadow-md max-[335px]:shadow-none border border-slate-200 text-slate-800 transition-all duration-300 hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
    >
      {direction === 'prev' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
});
NavButton.displayName = 'NavButton';

const DotButton = memo(({ index, isActive, primary, onClick }) => {
  const handleClick = useCallback(() => onClick(index), [index, onClick]);
  
  return (
    <button
      onClick={handleClick}
      aria-label={`Go to slide ${index + 1}`}
      className="rounded-full transition-all duration-400"
      style={{
        width: isActive ? '2rem' : '0.5rem',
        height: '0.5rem',
        background: isActive ? primary : '#d1d5db',
        boxShadow: isActive ? `0 0 8px ${primary}77` : 'none',
      }}
    />
  );
});
DotButton.displayName = 'DotButton';

/* ─── Premium Slide Card ──────────────────────────────────── */
const SlideCard = memo(({ member, primary, isActive }) => (
  <div className={cn(
    "relative h-[450px] md:h-[500px] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl max-[335px]:shadow-none select-none transition-all duration-1000 ease-out",
    isActive ? "shadow-2xl max-[335px]:shadow-none -translate-y-2 scale-[1.02] z-10" : "opacity-80"
  )}>
    {/* Photo */}
    <img
      alt={member.name}
      src={member.image}
      loading="lazy"
      draggable="false"
      className={cn(
        "h-full w-full object-cover pointer-events-none transition-all duration-1000 ease-out",
        isActive ? "grayscale-0 scale-105" : "grayscale"
      )}
    />

    {/* Dark overlay — only active */}
    <div className={cn(
      "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-1000 ease-out pointer-events-none",
      isActive ? "opacity-100" : "opacity-0"
    )} />

    {/* Name tag */}
    <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
      <div className={cn(
        "rounded-2xl bg-white/92 backdrop-blur-sm px-4 py-3 border border-white/30 shadow-lg max-[335px]:shadow-none transition-transform duration-700 ease-out",
        isActive ? "translate-y-0" : "translate-y-10 opacity-0"
      )}>
        <h3 className="font-bold text-slate-900 text-sm leading-tight truncate">
          {member.name}
        </h3>
        <p className="font-semibold text-[11px] mt-0.5 uppercase tracking-wide truncate" style={{ color: primary }}>
          {member.role}
        </p>
      </div>
    </div>

    {/* Bottom accent line */}
    <div
      className={cn(
        "absolute bottom-0 left-0 h-[3px] transition-all duration-1000 ease-out rounded-b-3xl pointer-events-none",
        isActive ? "w-full" : "w-0"
      )}
      style={{ background: `linear-gradient(to right, ${primary}, #6366f1)` }}
    />
  </div>
));

SlideCard.displayName = 'SlideCard';
