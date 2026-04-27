import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock } from 'lucide-react';
import ApplyForm from '@/components/apply/ApplyForm';
import InfoCard from '@/components/apply/InfoCard';

const ApplyPage = () => {
  const { t } = useTranslation();

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
                {t('apply.tag')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl primary-gradient-text text-midnight-slate leading-[1.1]">
                {t('apply.title')}
              </h1>
              <p className="text-lg text-gray-500 max-w-md leading-relaxed">
                {t('apply.description')}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img src="/career-hero.png" className="w-full h-full object-cover" alt="Travailler chez Oriotel" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard
                icon={ShieldCheck}
                title={t('apply.cards.security.title')}
                description={t('apply.cards.security.description')}
              />
              <InfoCard
                icon={Clock}
                title={t('apply.cards.response.title')}
                description={t('apply.cards.response.description')}
              />
            </div>
          </div>

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
