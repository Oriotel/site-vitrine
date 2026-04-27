<<<<<<< HEAD
import React, { useState, Suspense } from 'react';
import LazySection from '@/components/ui/LazySection';
=======
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ProcessSteps from '@/components/offres/ProcessSteps';
import OpportunityList from '@/components/offres/OpportunityList';
import OpportunityDetails from '@/components/offres/OpportunityDetails';
import WhyJoinSection from '@/components/offres/WhyJoinSection';
>>>>>>> 542a43cf8930394cf6d0d173e32fc8ea4df6f95a
import PageHero from '@/components/ui/PageHero';

// Skeletons
import {
  ProcessSectionSkeleton,
  JobCardSkeleton,
  JobDetailsSkeleton,
  WhyJoinUsSkeleton
} from '@/components/jobs/skeletons';

// Lazy Components
const ProcessSteps = React.lazy(() => import('@/components/offres/ProcessSteps'));
const OpportunityList = React.lazy(() => import('@/components/offres/OpportunityList'));
const OpportunityDetails = React.lazy(() => import('@/components/offres/OpportunityDetails'));
const WhyJoinSection = React.lazy(() => import('@/components/offres/WhyJoinSection'));

const OffresPage = () => {
<<<<<<< HEAD
  const [selectedJobId, setSelectedJobId] = useState(jobsData[0].id);
  const selectedJob = jobsData.find((job) => job.id === selectedJobId);
=======
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
>>>>>>> 542a43cf8930394cf6d0d173e32fc8ea4df6f95a

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
        <LazySection skeleton={<ProcessSectionSkeleton />}>
          <ProcessSteps />
        </LazySection>

        {/* Main Section: Opportunities & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10">
          <div className="lg:col-span-5">
            <LazySection skeleton={<JobCardSkeleton />}>
              <OpportunityList
                opportunities={jobsData}
                selectedId={selectedJobId}
                onSelect={setSelectedJobId}
              />
            </LazySection>
          </div>
          <div className="lg:col-span-7">
<<<<<<< HEAD
            <LazySection skeleton={<JobDetailsSkeleton />}>
              <OpportunityDetails job={selectedJob} />
            </LazySection>
=======
            {selectedJob && <OpportunityDetails job={selectedJob} />}
>>>>>>> 542a43cf8930394cf6d0d173e32fc8ea4df6f95a
          </div>
        </div>

        {/* Why Join Us Section */}
        <LazySection skeleton={<WhyJoinUsSkeleton />}>
          <WhyJoinSection />
        </LazySection>

      </div>
    </main>
  );
};

export default OffresPage;
