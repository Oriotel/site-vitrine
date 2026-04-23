import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, selectedJob, onSelectJob }) => {
  return (
    <div className="flex flex-col gap-4">
      {jobs.map(job => (
        <JobCard 
          key={job.id} 
          job={job} 
          isSelected={selectedJob?.id === job.id} 
          onClick={onSelectJob} 
        />
      ))}
      
      {jobs.length === 0 && (
        <div className="p-8 text-center bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-gray-500">Aucune offre disponible pour le moment.</p>
        </div>
      )}
    </div>
  );
};

export default JobList;
