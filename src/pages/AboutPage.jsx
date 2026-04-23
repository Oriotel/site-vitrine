
import React, { useState, useEffect } from 'react';
import PageHero from '@/components/ui/PageHero';
import { useTranslation } from 'react-i18next';
import { companyInfo } from '@/constants/data';
import { useLoading } from '@/context/LoadingContext';
import ExploreSection from '@/components/About/ExploreSection'
import TimelineSection from '@/components/About/TimelineSection'
import StatsSection from '@/components/About/StatsSection'
import {TeamMarqueeSection} from '@/components/About/TeamMarqueeSection'
import Shimmer from '@/components/ui/Shimmer'

const AboutPage = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const { setIsLayoutLoading } = useLoading();

  useEffect(() => {
    setIsLayoutLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsLayoutLoading(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
      setIsLayoutLoading(false);
    };
  }, [setIsLayoutLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <section className="relative w-full h-[55vh] flex items-center justify-center bg-white overflow-hidden">
           <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-slate-100/50 to-transparent" />
           <div className="relative z-10 flex flex-col items-center gap-5">
             <Shimmer className="h-8 w-40 rounded-full" />
             <Shimmer className="h-16 w-80 rounded-xl" />
             <Shimmer className="h-4 w-96" />
           </div>
        </section>
      </div>
    );
  }

  return (
    <>
    <main className="w-full overflow-x-hidden relative bg-white">
      <PageHero 
        title={t('about.hero.title')}
        subtitle="À propos"
        description={t(companyInfo.longDescription)}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
      />
      <ExploreSection />
      <TimelineSection />
      <TeamMarqueeSection />

    </main>
    </>
  )
}

export default AboutPage
