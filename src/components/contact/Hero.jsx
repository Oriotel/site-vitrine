import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[450px] flex items-center justify-center pt-20">

      {/* Image de fond pleine largeur avec overlay sombre */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact-hero.png"
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold text-white tracking-tight drop-shadow-xl">
            Contactez-nous
          </h1>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl 2xl:text-2xl text-white/90 leading-relaxed font-light drop-shadow-md max-w-3xl">
            Vous avez un projet en tête ou une question sur nos services ?
            Notre équipe d'experts est prête à vous accompagner dans la
            réalisation de vos ambitions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
