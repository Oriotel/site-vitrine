import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image & Overlay (Shadow Sombre) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact-hero.png"
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >

          <h1 className="text-4xl md:text-6xl font-bold primary-gradient-text leading-[1.1] mb-6 drop-shadow-md">
            Contactez-nous <span className="text-signal-blue"></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-md">
            Vous avez un projet en tête ou une question sur nos services ?
            Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos ambitions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
