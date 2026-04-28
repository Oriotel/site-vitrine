import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Shield, Star, ArrowUpRight } from 'lucide-react';

// Components
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/common/AnimatedSection';
import { InteractiveStoryGallery } from './InteractiveStoryGallery';

// Data
import { exploreData } from '@/constants/data';

/**
 * Helper: Maps icon names to their respective Lucide components.
 * Extracted from component body for performance and clarity.
 */
const getFeatureIcon = (iconName) => {
  const iconProps = { className: "w-3.5 h-3.5" };
  switch (iconName) {
    case 'Clock': return <Clock {...iconProps} />;
    case 'Shield': return <Shield {...iconProps} />;
    case 'Star': return <Star {...iconProps} />;
    default: return <Clock {...iconProps} />;
  }
};

/**
 * FeatureTag Component
 * Represents a single feature label with its icon.
 */
const FeatureTag = memo(({ icon, label }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-1.5 text-slate-700 text-[10px] sm:text-xs font-bold bg-white px-3 py-1.5 rounded-md border border-slate-100 shadow-sm uppercase tracking-tight">
      <span className="text-primary-600">{getFeatureIcon(icon)}</span>
      <span>{t(label)}</span>
    </div>
  );
});

FeatureTag.displayName = 'FeatureTag';

/**
 * ExploreSection
 * 
 * A high-end interactive section featuring a dual-pane layout:
 * - Left: Structured sidebar with key value propositions and call-to-actions.
 * - Right: Interactive story gallery for immersive brand storytelling.
 */
const ExploreSection = () => {
  const { t } = useTranslation();
  const { left } = exploreData;

  return (
    <section className="py-12 md:py-16 px-4 bg-white relative overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 lg:p-4 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">

            {/* Content Sidebar */}
            <aside className="lg:col-span-4 flex flex-col h-full w-full">
              <AnimatedSection
                animation="fade-in-up"
                className="flex flex-col flex-1 w-full h-full p-4 sm:p-5 md:p-6 bg-slate-50/50 rounded-[1.5rem] border border-white/50 shadow-inner overflow-hidden"
              >
                {/* Information Area */}
                <div className="flex flex-col flex-1 justify-center gap-6 sm:gap-8">
                  <header className="flex flex-col gap-3">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 leading-tight">
                      {t(left.title)}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base font-medium">
                      {t(left.description)}
                    </p>
                  </header>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {left.features.map((feature) => (
                      <FeatureTag
                        key={feature.label}
                        icon={feature.icon}
                        label={feature.label}
                      />
                    ))}
                  </div>
                </div>

                {/* Footer Controls */}
                <footer className="flex items-center gap-3 mt-6 pt-4 sm:pt-5 border-t border-slate-200/50">
                  <Button
                    variant="primary"
                    className="rounded-lg px-4 sm:px-5 h-9 sm:h-10 text-xs sm:text-sm font-bold shadow-lg !bg-slate-900 !text-white flex-1"
                  >
                    {t(left.cta)}
                  </Button>
                  <button
                    className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition-all border border-slate-200 shadow-sm group"
                    aria-label={t('common.more_info') || "En savoir plus"}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </footer>
              </AnimatedSection>
            </aside>

            {/* Interactive Media Pane */}
            <main className="lg:col-span-8 relative flex flex-col lg:h-full overflow-hidden">
              <AnimatedSection
                animation="fade-in"
                delay={200}
                className="w-full lg:h-full flex items-center"
              >
                <InteractiveStoryGallery stories={exploreData.stories} />
              </AnimatedSection>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ExploreSection);
