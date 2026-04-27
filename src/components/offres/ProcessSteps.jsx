import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUserPlus, FaChartBar, FaCheckSquare, FaUsers } from 'react-icons/fa';

const ProcessSteps = () => {
  const { t } = useTranslation();
  
  const steps = [
    { 
      id: 1, 
      title: t('careers.process.steps.0.title'), 
      description: t('careers.process.steps.0.description'), 
      icon: FaUserPlus 
    },
    { 
      id: 2, 
      title: t('careers.process.steps.1.title'), 
      description: t('careers.process.steps.1.description'), 
      icon: FaChartBar 
    },
    { 
      id: 3, 
      title: t('careers.process.steps.2.title'), 
      description: t('careers.process.steps.2.description'), 
      icon: FaCheckSquare 
    },
    { 
      id: 4, 
      title: t('careers.process.steps.3.title'), 
      description: t('careers.process.steps.3.description'), 
      icon: FaUsers 
    }
  ];

  return (
    <div className="w-full mb-20 relative">
      {/* Ligne en pointillés (desktop uniquement) */}
      <div className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] border-t-[1.5px] border-dashed border-gray-300 z-0"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
        <div className="absolute top-0 left-0 w-full text-center mb-12 -translate-y-16">
           <h2 className="text-2xl font-bold text-gray-900">{t('careers.process.title')}</h2>
        </div>
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div 
              key={step.id} 
              className="flex flex-col items-center text-center px-4"
            >
              {/* Le bloc icône bleu */}
              <div className="w-14 h-14 bg-[#1428C9] rounded-xl shadow-md flex items-center justify-center mb-6 text-white shrink-0">
                <Icon className="text-2xl" />
              </div>
              
              <h3 className="text-[17px] font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-[13px] leading-relaxed text-gray-500 max-w-[260px] mx-auto">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessSteps;
