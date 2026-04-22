import React from 'react';
import { FaUserPlus, FaChartBar, FaCheckSquare, FaUsers } from 'react-icons/fa';

const steps = [
  { 
    id: 1, 
    title: 'Inscription', 
    description: 'Rejoignez notre écosystème. Une prise de contact simplifiée pour définir les premiers contours de votre projet architectural.', 
    icon: FaUserPlus 
  },
  { 
    id: 2, 
    title: 'Audit & Traitement', 
    description: 'Nos experts analysent vos besoins techniques, environnementaux et esthétiques pour élaborer un dossier complet et optimisé.', 
    icon: FaChartBar 
  },
  { 
    id: 3, 
    title: 'Validation', 
    description: "Confirmation finale des plans et des ressources. Nous nous assurons que chaque détail est aligné avec vos standards d'excellence.", 
    icon: FaCheckSquare 
  },
  { 
    id: 4, 
    title: 'Participation', 
    description: 'Lancement de la phase opérationnelle où vous restez acteur du projet à travers un suivi collaboratif et dynamique.', 
    icon: FaUsers 
  }
];

const ProcessSteps = () => {
  return (
    <div className="w-full mb-20 relative">
      {/* Ligne en pointillés (desktop uniquement) */}
      <div className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] border-t-[1.5px] border-dashed border-gray-300 z-0"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
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
