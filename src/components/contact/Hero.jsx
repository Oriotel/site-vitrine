import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-signal-blue/10 text-signal-blue text-sm font-bold tracking-widest uppercase mb-6">
            Contactez-nous
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-midnight-slate leading-[1.1] mb-6">
            Donnons vie à vos <span className="text-signal-blue">visions architecturales.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Vous avez un projet en tête ou une question sur nos services ? 
            Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos ambitions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
