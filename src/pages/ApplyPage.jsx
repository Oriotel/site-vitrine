import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import ApplyForm from '@/components/apply/ApplyForm';
import InfoCard from '@/components/apply/InfoCard';

const ApplyPage = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-cloud-white min-h-screen pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Colonne Gauche - Présentation */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight-slate leading-[1.1]">
                Postuler à <br/> 
                <span className="text-signal-blue">une offre.</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-md leading-relaxed">
                Rejoignez une équipe d'innovateurs passionnés qui redéfinissent le paysage architectural.
              </p>
            </div>

            {/* Grande Image Illustrative */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-midnight-slate/10 aspect-[4/3] border border-gray-100">
              <img 
                src="/career-hero.png" 
                alt="Travailler chez Oriotel" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bloc Info - Données sécurisées */}
            <div className="max-w-sm">
              <InfoCard 
                icon={ShieldCheck}
                title="Données sécurisées"
                description="Vos informations personnelles sont traitées avec la plus grande confidentialité."
              />
            </div>
          </div>

          {/* Colonne Droite - Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <ApplyForm />
          </motion.div>
          
        </div>
      </div>
    </motion.main>
  );
};

export default ApplyPage;
