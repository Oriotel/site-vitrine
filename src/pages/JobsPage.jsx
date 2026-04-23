import React from 'react';
import { motion } from 'framer-motion';
import ProcessSection from '@/components/jobs/ProcessSection';
import JobsSection from '@/components/jobs/JobsSection';
import WhyJoinUs from '@/components/jobs/WhyJoinUs';

const JobsPage = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-cloud-white pt-20"
    >
      {/* Optional: A very small clean header dedicated to the page title */}
      <div className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-midnight-slate mb-4">
            Rejoignez l'aventure <span className="text-signal-blue">Oriotel</span>.
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Découvrez nos offres d'emploi, comprenez notre processus de recrutement et apprenez pourquoi notre équipe est le meilleur endroit pour développer votre carrière.
          </p>
        </div>
      </div>

      <ProcessSection />
      
      <JobsSection />
      
      <WhyJoinUs />

    </motion.main>
  );
};

export default JobsPage;
