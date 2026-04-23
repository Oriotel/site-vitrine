import React from 'react';
import { MapPin, Briefcase, Clock } from 'lucide-react';

const JobCard = ({ job, isSelected, onClick }) => {
  return (
    <div 
      onClick={() => onClick(job)}
      className={`p-6 rounded-2xl cursor-pointer transition-all duration-200 border ${
        isSelected 
          ? 'bg-signal-blue border-signal-blue shadow-md' 
          : 'bg-white border-gray-100 hover:border-signal-blue/30 hover:shadow-sm'
      }`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
            isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
          }`}>
            {job.department}
          </span>
          <h3 className={`text-lg font-bold mb-1 ${
            isSelected ? 'text-white' : 'text-midnight-slate'
          }`}>
            {job.title}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className={`flex items-center gap-1.5 text-sm ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
            <MapPin size={16} />
            <span>{job.location}</span>
          </div>
          <div className={`flex items-center gap-1.5 text-sm ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
            <Briefcase size={16} />
            <span>{job.type}</span>
          </div>
          <div className={`flex items-center gap-1.5 text-sm ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
            <Clock size={16} />
            <span>{job.experience}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
