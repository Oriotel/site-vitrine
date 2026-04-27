import React, { memo } from 'react';
import { useTranslation } from "react-i18next";

// Components
import { TeamCarousel } from "@/components/ui/TeamCarousel";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

// Data
import { team as localTeam } from "@/constants/data";

/**
 * CEOQuote Component
 * Renders the high-impact testimonial from the company founder.
 */
const FounderTestimonial = memo(({ founder }) => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto mt-12 max-w-4xl px-6 text-center">
      <AnimatedSection animation="animate-fade-in-up">
        {/* Quote Typography */}
        <h3 className="mb-12 text-2xl md:text-3xl font-semibold text-slate-900 leading-tight max-w-3xl mx-auto italic">
          "{t('about.team.testimonial')}"
        </h3>

        {/* Founder Attribution */}
        <footer className="flex flex-col items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-slate-100 shadow-lg max-[335px]:shadow-none">
            <img
              alt={founder.name}
              className="h-full w-full object-cover"
              src={founder.image}
              loading="lazy"
            />
          </div>
          <div className="mt-2 text-center">
            <p className="text-xl font-bold text-slate-900 mb-1">
              {founder.name}
            </p>
            <p className="text-slate-500 font-medium text-sm md:text-base uppercase tracking-widest">
              {t('about.team.founder_role')}
            </p>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  );
});

FounderTestimonial.displayName = 'FounderTestimonial';

/**
 * TeamSection
 * 
 * Showcases the 'Expert Team' through an interactive carousel and a founder's quote.
 * Optimized for wide viewports and production-grade maintenance.
 */
export const TeamSection = memo(() => {
  const { t } = useTranslation();
  
  const teamData = t('about.team_members', { returnObjects: true });
  
  const team = Array.isArray(teamData) 
    ? teamData.map((member, index) => ({
        ...member,
        image: localTeam[index]?.image || ''
      }))
    : [];

  const founder = team[0] || localTeam[0];

  return (
    <section 
      className="relative w-full overflow-hidden bg-white pt-8 pb-16 md:pt-12 md:pb-24 max-w-[100vw]"
      aria-labelledby="team-section-title"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-16">
        
        {/* Header: Title & Context */}
        <header className="mx-auto mb-20 flex max-w-4xl flex-col items-center px-6 text-center">
          <AnimatedSection>
            <SectionTitle
              id="team-section-title"
              title={t('about.team.title')}
              subtitle={t('about.team.subtitle')}
              description={t('about.team.description')}
              align="center"
            />
          </AnimatedSection>
        </header>

        {/* Interactive Layer: Infinite Team Carousel */}
        <div className="relative w-full">
          <TeamCarousel members={team} />
        </div>

        {/* Personal Layer: Founder's Vision */}
        {founder && <FounderTestimonial founder={founder} />}
      </div>
    </section>
  );
});

TeamSection.displayName = 'TeamSection';