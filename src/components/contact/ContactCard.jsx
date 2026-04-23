import React from 'react';
import { motion } from 'framer-motion';

const ContactCard = ({ icon: Icon, title, value, subtext }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 transition-all hover:shadow-md h-full"
    >
      <div className="p-3 bg-signal-blue/10 rounded-lg text-signal-blue">
        <Icon size={24} />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
          {title}
        </h3>
        <p className="text-lg font-medium text-midnight-slate break-words">
          {value}
        </p>
        {subtext && (
          <p className="text-sm text-gray-400 mt-1 whitespace-pre-line">
            {subtext}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ContactCard;
