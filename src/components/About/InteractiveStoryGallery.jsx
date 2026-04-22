import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useTranslation } from 'react-i18next';

/**
 * InteractiveStoryGallery
 * A premium interactive gallery with a main focus card and a floating thumbnail stack.
 */
export const InteractiveStoryGallery = ({ stories }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % stories.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 w-full items-stretch lg:h-full py-1">
      
      {/* Left Part: Main Image Card */}
      <div className="xl:flex-1 relative group w-full h-[320px] sm:h-[340px] md:h-[380px] lg:h-[400px]">
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-200 transition-all duration-700">
          <img
            key={activeStory.image}
            src={activeStory.image}
            alt={t(activeStory.title)}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* Card Info Overlay */}
          <div className="absolute bottom-5 left-5 right-5 z-10 transition-all duration-500 transform group-hover:translate-x-1">
            <span className="inline-block px-2.5 py-1 bg-primary-600 text-white text-[8px] font-bold uppercase tracking-[0.2em] rounded-md mb-2 shadow-lg">
              {t(activeStory.category)}
            </span>
            <h3 className="text-sm md:text-base lg:text-lg font-bold !text-white leading-tight font-carmine">
              {t(activeStory.title)}
            </h3>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-5 right-5 flex gap-1.5 z-20">
            <button
              onClick={handlePrev}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Part: Thumbnail Stack and Meta Info */}
      <div className="xl:flex-1 relative w-full h-[320px] sm:h-[340px] md:h-[380px] lg:h-[400px]">
        <div className="relative h-full w-full p-4 md:p-6 flex flex-col justify-center items-center xl:items-start overflow-hidden bg-slate-50/30 rounded-[2rem] border border-slate-100">
          
          {/* Stacked Thumbnails Grid */}
          <div className="relative w-full h-[140px] md:h-[160px] flex items-center justify-center xl:justify-start mb-4">
            {stories.map((story, index) => {
              if (index === activeIndex) return null;
              const stackIndex = (index - activeIndex + stories.length) % stories.length;
              
              const xOffset = (stackIndex - 1) * 60;
              const yOffset = (stackIndex - 1) * 12;
              const scale = 1 - (stackIndex - 1) * 0.1;
              const opacity = 1 - (stackIndex - 1) * 0.25;
              const rotate = (stackIndex - 1) * 4;

              return (
                <button
                  key={story.id}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "absolute transition-all duration-700 ease-out hover:z-50 hover:scale-105 active:scale-95",
                    stackIndex > 1 ? "blur-[1px]" : "blur-0"
                  )}
                  style={{
                    transform: `translateX(${xOffset}px) translateY(${yOffset}px) scale(${scale}) rotate(${rotate}deg)`,
                    opacity: opacity,
                    zIndex: 40 - stackIndex,
                    left: '10%'
                  }}
                >
                  <div className="h-24 w-18 md:h-32 md:w-24 overflow-hidden rounded-xl shadow-xl border-2 border-white bg-white animate-float">
                    <img
                      src={story.image}
                      alt={t(story.title)}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Description Block */}
          <div className="w-full xl:max-w-xs px-2 lg:px-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-8 bg-primary-600/50" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-600/60">
                {t('common.details')}
              </span>
            </div>
            <p className="text-slate-600 text-[11px] md:text-[12px] leading-relaxed font-medium italic">
              "{t(activeStory.description)}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
