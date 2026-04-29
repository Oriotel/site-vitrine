import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle } from 'lucide-react';
import FormInput from '@/components/apply/FormInput';

const EventForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    

    setStatus('success');
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-3xl shadow-lg border border-green-100 flex flex-col items-center text-center space-y-4"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-bold text-midnight-slate">Message Envoyé !</h3>
        <p className="text-gray-500 max-w-sm">
          Merci pour votre intérêt. Nous reviendrons vers vous sous peu pour confirmer votre participation.
        </p>
        <Button 
          onClick={() => setStatus('idle')}
          className="mt-4 bg-signal-blue text-white"
        >
          Envoyer un autre message
        </Button>
      </motion.div>
    );
  }

  return (
    <div id="event-application-form" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-midnight-slate mb-2">Formulaire de Participation</h2>
        <p className="text-sm text-gray-400">Remplissez les détails ci-dessous pour nous envoyer votre demande.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Nom complet"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Mohamed Alami"
          required
        />
        
        <FormInput
          label="Email professionnel"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="m.alami@entreprise.ma"
          required
        />

        <div className="space-y-1.5">
          <label htmlFor="department" className="block text-sm font-semibold text-midnight-slate ml-1">
            Département concerné <span className="text-red-500">*</span>
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-signal-blue/20 focus:border-signal-blue transition-all bg-gray-50/50 text-midnight-slate appearance-none"
          >
            <option value="" disabled>Sélectionnez un département</option>
            <option value="tech">Technologie & IT</option>
            <option value="marketing">Marketing & Comm</option>
            <option value="sales">Ventes & Business</option>
            <option value="other">Autre</option>
          </select>
        </div>

        <FormInput
          label="Votre message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Parlez-nous de votre projet ou demandez des informations..."
          isTextArea
        />

        <div className="pt-4 space-y-4">
          <Button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full h-14 text-base font-bold bg-signal-blue text-white rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            {status === 'submitting' ? (
              "Traitement en cours..."
            ) : (
              <>
                Envoyer le message
                <Send size={18} />
              </>
            )}
          </Button>
          
          <p className="text-center text-xs text-gray-400">
            Temps de réponse moyen : <span className="font-semibold text-gray-500">Moins de 24 heures ouvrées</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
