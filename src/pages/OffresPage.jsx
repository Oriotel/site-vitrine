import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ProcessSteps from '@/components/offres/ProcessSteps';
import OpportunityList from '@/components/offres/OpportunityList';
import OpportunityDetails from '@/components/offres/OpportunityDetails';
import WhyJoinSection from '@/components/offres/WhyJoinSection';
import PageHero from '@/components/ui/PageHero';
import { useLoading } from '@/context/LoadingContext';
import Shimmer from '@/components/ui/Shimmer';

const OffresPage = () => {
  const { t } = useTranslation();
  const [selectedJobId, setSelectedJobId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { setIsLayoutLoading } = useLoading();

  const jobsDataRaw = t('careers.jobs', { returnObjects: true });
  
  const jobsData = useMemo(() => {
    if (!Array.isArray(jobsDataRaw)) return [];
    return jobsDataRaw.map((job, index) => ({
      ...job,
      id: index + 1
    }));
  }, [jobsDataRaw]);

  useEffect(() => {
    setIsLayoutLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsLayoutLoading(false);
    }, 1200);
    return () => {
      clearTimeout(timer);
      setIsLayoutLoading(false);
    };
  }, [setIsLayoutLoading]);

  const selectedJob = useMemo(() => 
    jobsData.find((job) => job.id === selectedJobId) || jobsData[0],
  [jobsData, selectedJobId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <section className="relative w-full h-[55vh] flex items-center justify-center bg-white overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-slate-100/50 to-transparent" />
          <div className="relative z-10 flex flex-col items-center gap-5">
            <Shimmer className="h-8 w-40 rounded-full" />
            <Shimmer className="h-16 w-80 rounded-xl" />
            <Shimmer className="h-4 w-64" />
          </div>
        </section>
      </div>
    );
  }

  return (
    <main className="bg-[#F9FAFB] min-h-screen pb-20 font-sans text-[#111827]">
      <PageHero
        title={t('careers.hero.title')}
        subtitle={t('careers.hero.subtitle')}
        description={t('careers.hero.description')}
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000"
      />
      <div className="container mx-auto px-4 md:px-6 max-w-7xl mt-20">


        {/* Process Steps Section */}
        <ProcessSteps />

        {/* Main Section: Opportunities & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10">
          <div className="lg:col-span-5">
            <OpportunityList
              opportunities={jobsData}
              selectedId={selectedJobId}
              onSelect={setSelectedJobId}
            />
          </div>
          <div className="lg:col-span-7">
            {selectedJob && <OpportunityDetails job={selectedJob} />}
          </div>
        </div>

        {/* Why Join Us Section */}
        <WhyJoinSection />

      </div>
    </main>
  );
};

export default OffresPage;
