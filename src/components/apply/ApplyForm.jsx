import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import FormInput from './FormInput';
import UploadCV from './UploadCV';

const ApplyForm = () => {
  const { t } = useTranslation();
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
      alert(t('apply.form.cv_alert'));
      return;
    }

    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));


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
        <h3 className="text-2xl font-bold text-midnight-slate">{t('apply.form.success_title')}</h3>
        <p className="text-gray-500 max-w-sm">
          {t('apply.form.success_desc')}
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
          {t('apply.form.another_apply')}
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-midnight-slate mb-1">{t('apply.form.title')}</h2>
        <p className="text-sm text-gray-400">{t('apply.form.subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label={t('apply.form.first_name')}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Ahmad"
            required
          />
          <FormInput
            label={t('apply.form.last_name')}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Ben"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label={t('apply.form.email')}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FormInput
            label={t('apply.form.phone')}
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
            {t('apply.form.position_label')} <span className="text-red-500">*</span>
          </label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-signal-blue/20 focus:border-signal-blue transition-all bg-gray-50/50 text-midnight-slate appearance-none"
          >
            <option value="" disabled>{t('apply.form.position_select')}</option>
            <option value="arch-int">{t('apply.form.position_arch')}</option>
            <option value="urbaniste">{t('apply.form.position_urban')}</option>
            <option value="proj-mgr">{t('apply.form.position_mgr')}</option>
            <option value="other">{t('apply.form.position_other')}</option>
          </select>
        </div>

        <FormInput
          label={t('apply.form.message_label')}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('apply.form.message_placeholder')}
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
                {t('common.sending')}
              </span>
            ) : t('apply.form.submit')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
