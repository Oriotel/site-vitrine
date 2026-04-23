import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, BarChart3, ClipboardCheck, Users } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: "Inscription",
      description: "Rejoignez notre écosystème. Une prise de contact simplifiée pour définir les premiers contours de votre projet architectural."
    },
    {
      id: 2,
      icon: BarChart3,
      title: "Audit & Traitement",
      description: "Nos experts analysent vos besoins techniques, environnementaux et esthétiques pour élaborer un dossier complet et optimisé."
    },
    {
      id: 3,
      icon: ClipboardCheck,
      title: "Validation",
      description: "Confirmation finale des plans et des ressources. Nous nous assurons que chaque détail est aligné avec vos standards d'excellence."
    },
    {
      id: 4,
      icon: Users,
      title: "Participation",
      description: "Lancement de la phase opérationnelle où vous restez acteur du projet à travers un suivi collaboratif et dynamique."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-signal-blue text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            MÉTHODOLOGIE ARCHITECTURALE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight mb-8">
            Notre Processus de Travail
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Une approche structurée et transparente pour transformer vos visions 
            architecturales en réalités tangibles et durables.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Dashed Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[1px] border-t border-dashed border-gray-300 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 gap-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center px-4"
                >
                  {/* Icon Box */}
                  <div className="w-20 h-20 rounded-[20px] bg-signal-blue flex items-center justify-center text-white mb-8 shadow-xl shadow-signal-blue/20">
                    <Icon size={32} />
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-xl font-bold text-[#111827] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
