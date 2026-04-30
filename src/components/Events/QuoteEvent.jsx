import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const QuoteEvent = () => {
  const { t } = useTranslation();
  
  const founderData = {
    quote: t('events.quote.text'),
    author: 'Alexandre Moreau',
    role: t('about.team.founder_role'),
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1600',
    bgText: t('events.quote.bg'),
  };

  return (
    <section className="relative py-10 px-6 bg-transparent overflow-hidden font-sans">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1428C9]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#818CF8]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto h-auto lg:h-[380px] px-0 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col-reverse lg:flex-row rounded-[1.5rem] overflow-hidden shadow-xl border border-white/5 h-auto lg:h-full"
        >
          {/* Left Block: Message & Info */}
          <div
            className="w-full lg:w-[50%] p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden h-auto lg:h-full"
            style={{ backgroundImage: 'linear-gradient(135deg, #1428C9 0%, #0C1879 100%)' }}
          >
            {/* Subtle glow behind text */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-[0.6rem] font-semibold text-white/50 uppercase  mb-2">
                {t('events.quote.title')}
              </span>

              <div className="text-white/30 mb-0.5">
                <svg width="40" height="40" viewBox="0 0 120 100" fill="currentColor">
                  <path d="M0 100V40C0 18 18 0 40 0V20C29 20 20 29 20 40H40V100H0ZM80 100V40C80 18 98 0 120 0V20C109 20 100 29 100 40H120V100H80Z" />
                </svg>
              </div>

              <blockquote className="text-lg md:text-lg text-justify font-medium  text-white leading-tight mb-12 mt-12">
                "{founderData.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={founderData.image}
                  alt={founderData.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-black text-white uppercase tracking-tight leading-none">
                    {founderData.author}
                  </span>
                  <span className="text-white/60 text-[0.65rem] mt-1 font-medium">
                    {founderData.role}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Image & Overlay */}
          <div className="w-full lg:w-[65%] relative group h-[250px] lg:h-full">
            {/* Main Founder Image */}
            <img
              src={founderData.image}
              alt={founderData.author}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
            />

            {/* Gradient Overlay for the Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Background Text (Cinematic Label) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none overflow-hidden h-full items-center">
              <span className="text-[12vw] font-black text-white/10 tracking-tighter leading-none whitespace-nowrap">
                {founderData.bgText}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteEvent;
