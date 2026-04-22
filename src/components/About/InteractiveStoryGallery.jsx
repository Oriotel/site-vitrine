import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useTranslation } from 'react-i18next';

export const InteractiveStoryGallery = ({ stories }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 w-full items-stretch h-full py-2">
      {/* Left Part: Main Image Card - Perfectly contained */}
      <div className="flex-[5] relative group w-full h-[400px] xl:h-auto">
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-xl transition-all duration-700">
          <img
            key={activeStory.image}
            src={activeStory.image}
            alt={t(activeStory.title)}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 animate-fade-in"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* Content: Integrated for cleaner look */}
          <div className="absolute bottom-10 left-10 right-10 z-10 transition-all duration-500 transform group-hover:translate-x-2">
            <span className="inline-block px-4 py-1.5 bg-primary-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl mb-4 shadow-lg">
              {t(activeStory.category)}
            </span>
            <h3 className="text-3xl md:text-5xl font-bold !text-white mb-1 leading-tight font-carmine">
              {t(activeStory.title)}
            </h3>
          </div>

          {/* Nav Buttons: Shifted slightly for better containment view */}
          <div className="absolute bottom-10 right-10 flex gap-3 z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Part: Thumbnails & Story Info - Same Height */}
      <div className="flex-[3] flex flex-col justify-center items-center xl:items-start w-full py-4 overflow-hidden">
        {/* Floating Thumbnails Stack: Precise offsets to prevent bleeding */}
        <div className="relative w-full h-[280px] flex items-center justify-center xl:justify-start mb-6">
          {stories.map((story, index) => {
            if (index === activeIndex) return null;

            const stackIndex = (index - activeIndex + stories.length) % stories.length;

            const xOffset = (stackIndex - 1) * 70;
            const yOffset = (stackIndex - 1) * 15;
            const scale = 1 - (stackIndex - 1) * 0.12;
            const opacity = 1 - (stackIndex - 1) * 0.25;
            const rotate = (stackIndex - 1) * 6;

            return (
              <button
                key={story.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "absolute transition-all duration-700 ease-out hover:z-50 hover:scale-105 hover:rotate-0 hover:-translate-y-4 active:scale-95",
                  stackIndex > 1 ? "blur-[1px]" : "blur-0"
                )}
                style={{
                  transform: `translateX(${xOffset}px) translateY(${yOffset}px) scale(${scale}) rotate(${rotate}deg)`,
                  opacity: opacity,
                  zIndex: 40 - stackIndex,
                  left: '10%'
                }}
              >
                <div className="h-44 w-32 md:h-56 md:w-40 overflow-hidden rounded-[2rem] shadow-2xl border-[3px] border-white bg-white animate-float" style={{ animationDelay: `${stackIndex * 0.4}s` }}>
                  <img
                    src={story.image}
                    alt={t(story.title)}
                    className="h-full w-full object-cover transition-all duration-700"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Narrative Description: Elegant and contained */}
        <div className="w-full xl:max-w-xs mt-4 px-4 lg:px-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-primary-600 rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-600/40">
              {t('common.details')}
            </span>
          </div>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-semibold animate-fade-in-up italic">
            "{t(activeStory.description)}"
          </p>
        </div>
      </div>
    </div>
  );
};
