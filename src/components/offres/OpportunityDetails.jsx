import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaBookmark } from 'react-icons/fa';

const OpportunityDetails = ({ job }) => {
  if (!job) return null;

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 w-full sticky top-24">
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{job.title}</h2>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
            <FaMapMarkerAlt className="text-[#1428C9]" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
            <FaBriefcase className="text-[#1428C9]" />
            <span>{job.type}</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">Responsabilités</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {job.responsibilities.map((resp, idx) => (
              <li key={idx} className="leading-relaxed">{resp}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">Compétences requises</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="bg-[#1428C9]/10 text-[#1428C9] px-3 py-1 rounded-md text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
          <a href="/carrieres/postuler" className="w-full sm:flex-1">
            <button className="w-full bg-[#1428C9] hover:bg-[#1428C9]/90 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
              Postuler maintenant
            </button>
          </a>
          <button className="w-full sm:w-auto bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 border border-gray-200">
            <FaBookmark className="text-gray-400" />
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetails;
