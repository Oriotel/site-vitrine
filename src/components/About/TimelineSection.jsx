import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import AnimatedSection from '@/components/common/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';

// Data
import { timeline } from '@/constants/data';
import { cn } from '@/utils/cn';

/**
 * TimelineCard Component
 * Represents a single milestone in the company history.
 */
const TimelineCard = memo(({ item, index }) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection
      delay={index * 150}
      animation="animate-fade-in-up"
    >
      <div className={cn(
        "relative flex items-center w-full",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}>
        {/* Timeline Indicator (Dot) */}
        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 z-20 flex items-center justify-center shadow-sm transition-transform duration-500 hover:scale-125">
          <div className="w-3.5 h-3.5 rounded-full bg-primary-500 primary-glow" />
        </div>

        {/* Content Container */}
        <div className={cn(
          "w-full pl-16 md:pl-0 md:w-1/2 flex",
          isEven ? "md:pr-16 md:justify-end" : "md:pl-16 md:justify-start"
        )}>
          {/* Card: High impact with background image and localized content */}
          <div className={cn(
            "relative group/card overflow-hidden bg-slate-900 rounded-3xl w-full max-w-md shadow-2xl transition-all duration-700 cursor-pointer hover:-translate-y-3 flex flex-col text-left",
            isEven ? "md:text-right" : "md:text-left"
          )}>
            {/* Ambient Background Image Layer */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover/card:scale-110 pointer-events-none">
              <img
                src={item.image}
                alt={t(item.title)}
                loading="lazy"
                className="w-full h-full object-cover opacity-[0.35] transition-all duration-700 group-hover/card:opacity-[0.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* Typography & Metadata */}
            <div className="relative z-10 p-8 md:p-10">
              <span className={cn(
                "block !text-primary-400 font-bold text-2xl md:text-3xl mb-3 tracking-tighter transition-all duration-500 group-hover/card:translate-x-2 md:group-hover/card:translate-x-0",
                isEven ? "group-hover/card:md:-translate-x-2" : "group-hover/card:md:translate-x-2"
              )}>
                {item.year}
              </span>

              <h4 className="font-carmine !text-white text-xl md:text-2xl mb-4 group-hover/card:!text-primary-300 transition-colors">
                {t(item.title)}
              </h4>

              <p className="!text-white text-base md:text-lg leading-relaxed font-semibold">
                {t(item.description)}
              </p>
            </div>

            {/* Visual Accent */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-600 w-0 group-hover/card:w-full transition-all duration-700" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
});

TimelineCard.displayName = 'TimelineCard';

/**
 * TimelineSection
 * 
 * Orchestrates the 'Our History' narrative using a vertical staggered layout.
 * Optimized for readability and consistent spacing across all viewports.
 */
const TimelineSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white relative overflow-hidden group/section">
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle
          title={t('about.history.title')}
          subtitle={t('about.history.subtitle')}
          light={false}
        />

        <div className="relative mt-20">
          {/* Central Progress Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-slate-200 overflow-hidden">
            <div className="w-full h-[25vh] bg-gradient-to-b from-transparent via-primary-400 to-transparent animate-fall" />
          </div>

          {/* Milestone Cards Flow */}
          <div className="space-y-16 md:space-y-32">
            {timeline.map((item, index) => (
              <TimelineCard 
                key={`${item.year}-${index}`} 
                item={item} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TimelineSection);
