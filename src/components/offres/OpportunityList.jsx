import React from 'react';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const OpportunityList = ({ opportunities, selectedId, onSelect }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Postes ouverts</h2>
      <div className="flex flex-col gap-3">
        {opportunities.map((job) => {
          const isActive = job.id === selectedId;
          return (
            <div 
              key={job.id}
              onClick={() => onSelect(job.id)}
              className={`
                cursor-pointer rounded-xl p-5 border transition-all duration-200
                ${isActive 
                  ? 'border-[#1428C9] bg-[#1428C9]/5 shadow-md' 
                  : 'border-gray-200 bg-white hover:border-[#1428C9]/50 hover:shadow-sm'
                }
              `}
            >
              <h3 className={`font-bold text-lg mb-2 ${isActive ? 'text-[#1428C9]' : 'text-gray-900'}`}>
                {job.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <FaMapMarkerAlt />
                  {job.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <FaBriefcase />
                  {job.type}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpportunityList;
