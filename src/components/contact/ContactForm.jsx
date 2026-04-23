import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form Submitted:', formData);
    setStatus('success');

    // Reset form after 3 seconds
    setTimeout(() => {
      setStatus('idle');
      setFormData({ fullName: '', email: '', department: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-midnight-slate mb-2">Message envoyé !</h3>
          <p className="text-gray-500">Nous reviendrons vers vous sous peu.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-midnight-slate ml-1">
                Nom complet
              </label>
              <input
                required
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="ahmad benjeloun"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-signal-blue/20 focus:border-signal-blue transition-all bg-gray-50/50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-midnight-slate ml-1">
                Email professionnel
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ahmad@entreprise.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-signal-blue/20 focus:border-signal-blue transition-all bg-gray-50/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="department" className="text-sm font-medium text-midnight-slate ml-1">
              Département concerné
            </label>
            <select
              required
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-signal-blue/20 focus:border-signal-blue transition-all bg-gray-50/50 appearance-none"
            >
              <option value="" disabled>Sélectionnez un département</option>
              <option value="architecture">Architecture Intérieure</option>
              <option value="urbanisme">Urbanisme & Paysage</option>
              <option value="consulting">Conseil & Audit</option>
              <option value="other">Autre demande</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-midnight-slate ml-1">
              Votre message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet ou votre question..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-signal-blue/20 focus:border-signal-blue transition-all bg-gray-50/50 resize-none"
            ></textarea>
          </div>

          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full h-12 text-base font-semibold transition-all flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <span className="animate-pulse">Envoi en cours...</span>
            ) : (
              <>
                Envoyer le message
                <Send size={18} />
              </>
            )}
          </Button>

          <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
            Temps de réponse moyen : <span className="font-medium text-gray-500">Moins de 24 heures ouvrées</span>
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
