import React from 'react';
import { motion } from 'framer-motion';

const InfoCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 transition-all"
    >
      <div className="p-3 bg-signal-blue/5 rounded-xl text-signal-blue shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-sm font-bold text-midnight-slate uppercase tracking-tight mb-0.5">
          {title}
        </h4>
        <p className="text-xs text-gray-500 leading-snug">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default InfoCard;
