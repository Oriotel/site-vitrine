import React, { useState, useEffect } from 'react';
import { jobsData } from '@/constants/jobs';
import JobList from './JobList';
import JobDetails from './JobDetails';

const JobsSection = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  // Automatically select the first job on desktop load
  useEffect(() => {
    if (jobsData.length > 0) {
      setSelectedJob(jobsData[0]);
    }
  }, []);

  return (
    <section className="py-20 bg-gray-50/50" id="jobs-list">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-slate mb-4">
            Nos Offres Ouvertes
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            Découvrez nos opportunités actuelles et trouvez le poste qui correspond à vos ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Colonne Gauche - Liste des jobs */}
          <div className="lg:col-span-5 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            <JobList 
              jobs={jobsData} 
              selectedJob={selectedJob} 
              onSelectJob={(job) => {
                setSelectedJob(job);
                // On mobile, scroll to details
                if (window.innerWidth < 1024) {
                  document.getElementById('job-details-view')?.scrollIntoView({ behavior: 'smooth' });
                }
              }} 
            />
          </div>

          {/* Colonne Droite - Détails du job */}
          <div id="job-details-view" className="lg:col-span-7 sticky top-24">
            <JobDetails job={selectedJob} />
          </div>

        </div>
      </div>
      
      {/* Add some basic scrollbar styling for the jobs list */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #1428C9; }
      `}} />
    </section>
  );
};

export default JobsSection;
