import React from 'react';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { BorderBeam } from '@/components/ui/BorderBeam';

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
                relative cursor-pointer rounded-xl p-5 border transition-all duration-200 overflow-hidden
                ${isActive
                  ? 'border-[#1428C9] bg-[#1428C9]/5 shadow-md scale-[1.02]'
                  : 'border-gray-200 bg-white hover:border-[#1428C9]/50 hover:shadow-sm'
                }
              `}
            >
              {isActive && (
                <BorderBeam
                  duration={6}
                  lightWidth={150}
                  lightColor=" #1428C9"
                  borderWidth={0.5}
                />
              )}
              <h3 className={` text-lg mb-2 ${isActive ? 'text-[#1428C9]' : 'text-gray-900'}`}>
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
