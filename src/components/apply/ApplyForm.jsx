import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import FormInput from './FormInput';
import UploadCV from './UploadCV';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Veuillez télécharger votre CV.');
      return;
    }


    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));


    console.log('Application Submitted:', { ...formData, cv: selectedFile });
    setStatus('success');
  };

  if (status === 'success') {
    return (

      <motion.div

        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-midnight-slate">Candidature envoyée !</h3>
        <p className="text-gray-500 max-w-sm">
          Merci d'avoir postulé chez Oriotel. Notre équipe RH examinera votre profil et reviendra vers vous prochainement.
        </p>

        <Button
          variant="outline"

          onClick={() => {
            setStatus('idle');
            setFormData({ firstName: '', lastName: '', email: '', phone: '', position: '', message: '' });
            setSelectedFile(null);
          }}
          className="mt-4"
        >
          Envoyer une autre candidature
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-midnight-slate mb-1">Candidature Spontanée</h2>
        <p className="text-sm text-gray-400">Remplissez le formulaire ci-dessous pour rejoindre l'aventure.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Prénom"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}

            placeholder="ahmad"

            required
          />
          <FormInput
            label="Nom"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}

            placeholder="ben"

            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Email professionnel"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}


            required
          />
          <FormInput
            label="Téléphone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}


            placeholder="+212 6 12 34 56 78"


            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="position" className="block text-sm font-semibold text-midnight-slate ml-1">
            Poste souhaité <span className="text-red-500">*</span>
          </label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-signal-blue/20 focus:border-signal-blue transition-all bg-gray-50/50 text-midnight-slate appearance-none"
          >
            <option value="" disabled>Sélectionnez un poste</option>
            <option value="arch-int">Architecte d'intérieur</option>
            <option value="urbaniste">Urbaniste & Paysage</option>
            <option value="proj-mgr">Chef de projet</option>
            <option value="other">Autre / Stage</option>
          </select>
        </div>

        <FormInput
          label="Message de motivation"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Dites-nous ce qui vous motive à nous rejoindre..."
          isTextArea
        />


        <UploadCV
          onFileSelect={setSelectedFile}
          selectedFile={selectedFile}
        />

        <div className="pt-2">
          <Button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full h-14 text-base font-bold rounded-xl shadow-lg shadow-signal-blue/20 hover:shadow-xl transition-all"
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
                Envoi en cours...
              </span>
            ) : "Soumettre ma candidature"}
          </Button>

        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
