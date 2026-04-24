import React, { useState, useEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
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

  const autoplayRef = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, playOnInit: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',       // 'center' aligns the fixed-width cards in the middle of small screens
      dragFree: false,       // keep snapping so slides always land cleanly
      skipSnaps: false,
      containScroll: false,
      duration: 28,
    },
    [autoplayRef.current]
  )

  const [activeIndex, setActiveIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    // Map the raw snap index back to 0–(memberCount-1)
    setActiveIndex(emblaApi.selectedScrollSnap() % memberCount)
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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

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
      {/* ── Viewport (overflow clipped here — gradients live inside) ── */}
      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        {/* Edge Mask Gradients — inside overflow-hidden so cards fade at edges */}
        <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-24 md:w-48 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-24 md:w-48 bg-gradient-to-l from-white to-transparent" />

        <div className="flex" style={{ gap: '1.5rem', padding: '1.5rem 0' }}>
          {slides.map((member, i) => (
            <div
              key={`${member.name}-${i}`}
              className="flex-[0_0_260px] sm:flex-[0_0_280px] md:flex-[0_0_320px] lg:flex-[0_0_360px] xl:flex-[0_0_380px] min-w-0"            >
              <SlideCard member={member} primary={PRIMARY} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Controls ── */}
      <div className="flex items-center justify-center gap-6 mt-6">
        {/* Prev */}
        <button
          onClick={scrollPrev}
          className="h-11 w-11 flex items-center justify-center rounded-full bg-white shadow-md border border-slate-200 text-slate-800 transition-all duration-300 hover:scale-110"
          style={{ '--hover-bg': PRIMARY }}
          onMouseEnter={e => { e.currentTarget.style.background = PRIMARY; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = PRIMARY }}
          onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = '' }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-2.5 items-center">
          {members.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToLogical(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-400"
              style={{
                width: i === activeIndex ? '2rem' : '0.5rem',
                height: '0.5rem',
                background: i === activeIndex ? PRIMARY : '#d1d5db',
                boxShadow: i === activeIndex ? `0 0 8px ${PRIMARY}77` : 'none',
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={scrollNext}
          className="h-11 w-11 flex items-center justify-center rounded-full bg-white shadow-md border border-slate-200 text-slate-800 transition-all duration-300 hover:scale-110"
          onMouseEnter={e => { e.currentTarget.style.background = PRIMARY; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = PRIMARY }}
          onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = '' }}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

/* ─── Premium Slide Card ──────────────────────────────────── */
const SlideCard = ({ member, primary }) => (
  <div className="group/card relative h-[500px] md:h-[560px] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl select-none transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
    {/* Photo */}
    <img
      alt={member.name}
      src={member.image}
      loading="lazy"
      draggable="false"
      className="h-full w-full object-cover pointer-events-none transition-all duration-700 grayscale group-hover/card:grayscale-0 group-hover/card:scale-105"
    />

    {/* Dark overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Name tag */}
    <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
      <div className="rounded-2xl bg-white/92 backdrop-blur-sm px-4 py-3 border border-white/30 shadow-lg translate-y-1 group-hover/card:translate-y-0 transition-transform duration-300">
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
      className="absolute bottom-0 left-0 h-[3px] w-0 group-hover/card:w-full transition-all duration-500 rounded-b-3xl pointer-events-none"
      style={{ background: `linear-gradient(to right, ${primary}, #6366f1)` }}
    />
  </div>
)
