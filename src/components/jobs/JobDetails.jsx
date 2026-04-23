import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Clock, Send, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobDetails = ({ job }) => {
  const navigate = useNavigate();

  if (!job) {
    return (
      <div className="h-full min-h-[400px] flex items-center justify-center bg-white rounded-3xl border border-gray-100 p-8 text-center hidden lg:flex">
        <p className="text-gray-400 text-lg">Sélectionnez une offre pour voir les détails.</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={job.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-8 md:p-10 border-b border-gray-100">
          <span className="inline-block px-3 py-1 bg-signal-blue/10 text-signal-blue text-sm font-bold rounded-full mb-4">
            {job.department}
          </span>
          <h2 className="text-3xl font-extrabold text-midnight-slate mb-6">
            {job.title}
          </h2>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-500 font-medium">
              <MapPin size={20} className="text-signal-blue" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 font-medium">
              <Briefcase size={20} className="text-signal-blue" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 font-medium">
              <Clock size={20} className="text-signal-blue" />
              <span>{job.experience} minimum</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              onClick={() => navigate('/postuler')}
              className="flex-1 sm:flex-none h-12 px-8 font-bold bg-signal-blue text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              Postuler maintenant
              <Send size={18} />
            </Button>
            <Button 
              variant="outline" 
              className="h-12 w-12 p-0 flex items-center justify-center shrink-0 border-gray-200 text-gray-500 hover:text-signal-blue hover:border-signal-blue/30"
              aria-label="Sauvegarder l'offre"
            >
              <Bookmark size={20} />
            </Button>
          </div>
        </div>

        <div className="p-8 md:p-10 space-y-8 bg-gray-50/30">
          <div>
            <h3 className="text-xl font-bold text-midnight-slate mb-4">Description du poste</h3>
            <p className="text-gray-600 leading-relaxed">
              {job.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-midnight-slate mb-4">Vos missions principales</h3>
            <ul className="space-y-3">
              {job.missions.map((mission, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-signal-blue shrink-0" />
                  <span className="leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-midnight-slate mb-4">Compétences recherchées</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JobDetails;
