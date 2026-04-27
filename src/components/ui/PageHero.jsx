import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageHero Component
 * -----------------------------------------------------------
 * A reusable premium hero section for sub-pages.
 * Features:
 *  - Full-width background image with overlay
 *  - Animated title, subtitle (badge), and description
 *  - Responsive heights and typography
 * -----------------------------------------------------------
 */

const PageHero = ({ 
  title, 
  subtitle, 
  description, 
  image = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  overlayOpacity = "bg-black/65"
}) => {
  return (
    <section className="relative w-full h-[50vh] md:h-[65vh] min-h-[380px] md:min-h-[450px] flex items-center justify-center pt-20">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${overlayOpacity}`} />
      </div>
      
      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 md:mb-8 tracking-tight drop-shadow-xl leading-[1.1]">
            {title}
          </h1>
          
          {description && (
            <p className="text-base md:text-xl text-white/90 leading-relaxed font-light drop-shadow-md max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
