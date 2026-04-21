import React from 'react';
import { FaUsers, FaStar, FaChartLine } from 'react-icons/fa';

const features = [
  { 
    id: 1, 
    title: 'Équipe Diverse', 
    description: 'Rejoignez des talents de tous horizons passionnés par léur métier.', 
    icon: FaUsers 
  },
  { 
    id: 2, 
    title: 'Excellence', 
    description: 'Nous visons toujours la plus haute qualité dans nos réalisations.', 
    icon: FaStar 
  },
  { 
    id: 3, 
    title: 'Évolution', 
    description: 'Des opportunités de carrière stimulantes et un apprentissage continu.', 
    icon: FaChartLine 
  }
];

const WhyJoinSection = () => {
  return (
    <div className="w-full mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Pourquoi nous rejoindre ?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-[#1428C9]/10 rounded-full flex items-center justify-center mb-6 text-[#1428C9]">
                <Icon className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyJoinSection;
