import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock } from 'lucide-react';
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

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-signal-blue/10 text-signal-blue text-sm font-bold tracking-widest uppercase">
                Rejoignez-nous
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl primary-gradient-text text-midnight-slate leading-[1.1]">
                Postuler à <br />
                <span className="text-signal-blue">une offre.</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-md leading-relaxed">
                Prêt à dessiner le futur avec nous ? Nous sommes toujours à la recherche de nouveaux talents passionnés.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img src="/career-hero.png" className="w-full h-full object-cover" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard
                icon={ShieldCheck}
                title="Données sécurisées"
                description="Vos informations sont protégées."
              />
              <InfoCard
                icon={Clock}
                title="Réponse rapide"
                description="Réponse sous 5 à 10 jours."
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ApplyForm />
          </motion.div>

        </div>
      </div>
    </motion.main>
  );
};

export default ApplyPage;