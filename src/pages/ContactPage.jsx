import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

import PageHero from '@/components/ui/PageHero';
import LazySection from '@/components/ui/LazySection';

// Skeletons
import {
  ContactCardSkeleton,
  ContactFormSkeleton,
  MapSkeleton
} from '@/components/contact/skeletons';

// Lazy Components
const ContactCard = React.lazy(() => import('@/components/contact/ContactCard'));
const ContactForm = React.lazy(() => import('@/components/contact/ContactForm'));

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cloud-white min-h-screen">
      <PageHero
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
        description={t('contact.hero.description')}
        image="/assets/images/contact-hero.png"
      />

      <section className="pt-16 pb-24 md:pt-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Colonne Gauche - Infos de contact */}
            <div className="lg:col-span-5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                <LazySection skeleton={<ContactCardSkeleton />}>
                  <ContactCard
                    icon={Mail}
                    title={t('contact.cards.email.title')}
                    value="oriotelcompany@gmail.com"
                    subtext={t('contact.cards.email.subtext')}
                  />
                </LazySection>
                <LazySection skeleton={<ContactCardSkeleton />}>
                  <ContactCard
                    icon={Phone}
                    title={t('contact.cards.phone.title')}
                    value="+212 6 23 45 67 89"
                    subtext={t('contact.cards.phone.subtext')}
                  />
                </LazySection>
                <LazySection skeleton={<ContactCardSkeleton />}>
                  <ContactCard
                    icon={MapPin}
                    title={t('contact.cards.address.title')}
                    value="13 Rue Hidaya, Hay Andalous Talh 13, Oujda 6ème étage – Immeuble Rital"
                    subtext={t('contact.cards.address.subtext')}
                  />
                </LazySection>
              </div>

              {/* Google Maps Embed */}
              <LazySection skeleton={<MapSkeleton />}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative h-[300px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d211.59861831945074!2d-1.9222014447247444!3d34.67768864805412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sma!4v1777547117927!5m2!1sfr!2sma"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('contact.map.title')}
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-gray-200 pointer-events-none">
                    <p className="text-sm font-bold text-midnight-slate">{t('contact.map.title')}</p>
                    <p className="text-xs text-gray-500">{t('contact.map.cta')}</p>
                  </div>
                </motion.div>
              </LazySection>
            </div>

            {/* Colonne Droite - Formulaire */}
            <div className="lg:col-span-7">
              <LazySection skeleton={<ContactFormSkeleton />}>
                <ContactForm />
              </LazySection>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
