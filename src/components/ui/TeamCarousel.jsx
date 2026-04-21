import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/utils/cn'

export const TeamCarousel = ({ members }) => {
  // Higher duplication factor to ensure a "truly infinite" feel for small datasets
  const duplicatedMembers = React.useMemo(() => [
    ...members, ...members, ...members,
    ...members, ...members, ...members,
    ...members, ...members, ...members,
    ...members, ...members, ...members
  ], [members])

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: true,
      dragFree: true,
      containScroll: false,
      duration: 25,
      inViewThreshold: 0.7
    },
    [Autoplay({ delay: 1800, stopOnInteraction: false, playOnInit: true })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className="relative w-full px-4">
      {/* Carousel Viewport */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing isolate" ref={emblaRef}>
        <div className="flex -ml-6 items-center py-4">
          {duplicatedMembers.map((member, index) => {
            return (
              <div
                className="flex-[0_0_100%] min-w-0 pl-6 sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_400px] transition-all duration-500 overflow-hidden"
                key={`${member.name}-${index}`}
              >
                <div className="relative group/card h-[550px] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-2xl transition-all duration-500 cursor-pointer">
                  <img
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-110"
                    src={member.image}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 backdrop-blur-md p-3 border border-white/20 pointer-events-none">
                    <h3 className="font-bold text-slate-900 text-sm">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium text-[10px]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Control Bar (Buttons + Dots) */}
      <div className="flex items-center justify-center gap-8 mt-4">
        <button
          onClick={scrollPrev}
          className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 text-slate-900 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex justify-center gap-3">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                index === (selectedIndex % members.length)
                  ? "w-8 bg-primary-600 shadow-[0_0_10px_rgba(20,40,201,0.5)]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 text-slate-900 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
