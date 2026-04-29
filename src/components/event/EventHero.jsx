import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const EventHero = () => {
  const { t } = useTranslation();
  const scrollToForm = () => {
    document.getElementById('event-application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0">
        <img 
          src="/assets/images/event-hero.png" 
          alt="Modern Business Event Morocco" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-midnight-slate/60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/30 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center md:text-left"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-orange-500/30"
          >
            {t('event_apply.hero.tag')}
          </motion.span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 shadow-sm">
            {t('event_apply.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl font-medium leading-relaxed">
            {t('event_apply.hero.description')}
          </p>
          
          <Button 
            onClick={scrollToForm}
            className="h-14 px-10 text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/20"
          >
            {t('event_apply.hero.cta')}
          </Button>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 rounded-full bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default EventHero;
