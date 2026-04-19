import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Clock } from 'lucide-react';
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-signal-blue/10 text-signal-blue text-sm font-bold tracking-widest uppercase">
                Rejoignez-nous
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-midnight-slate leading-[1.1]">
                Postuler à <br/> 
                <span className="text-signal-blue">une offre.</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-md leading-relaxed">
                Prêt à dessiner le futur avec nous ? Nous sommes toujours à la recherche de nouveaux talents passionnés par l'architecture et l'innovation.
              </p>
            </div>

            {/* Grande Image Illustrative */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-midnight-slate/10 group aspect-[4/3] border border-gray-100"
            >
              <img 
                src="/career-hero.png" 
                alt="Travailler chez Oriotel" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-slate/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Recrutement ouvert</span>
                </div>
              </div>
            </motion.div>

            {/* Info Bloc - Données sécurisées */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard 
                icon={ShieldCheck}
                title="Données sécurisées"
                description="Vos informations personnelles sont traitées avec la plus grande confidentialité."
              />
              <InfoCard 
                icon={Clock}
                title="Réponse rapide"
                description="Nous nous engageons à vous répondre dans un délai de 5 à 10 jours ouvrés."
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
