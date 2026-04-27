import React, { Suspense } from 'react';
import PageHero from '@/components/ui/PageHero';
import LazySection from '@/components/ui/LazySection';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

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
  return (
    <div className="bg-cloud-white min-h-screen">
      <PageHero
        title="Contactez-nous"
        subtitle="Nous contacter"
        description="Vous avez un projet en tête ou une question sur nos services ? Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos ambitions."
        image="/contact-hero.png"
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
                    title="Email"
                    value="oriotelcompany@gmail.com"
                    subtext="Notre équipe vous répond sous 24h."
                  />
                </LazySection>
                <LazySection skeleton={<ContactCardSkeleton />}>
                  <ContactCard
                    icon={Phone}
                    title="Téléphone"
                    value="+212 6 23 45 67 89"
                    subtext="Lun-Ven : 09:00 - 18:00 \Sam : Fermé"
                  />
                </LazySection>
                <LazySection skeleton={<ContactCardSkeleton />}>
                  <ContactCard
                    icon={MapPin}
                    title="Adresse"
                    value="13 Rue Hidaya, Hay Andalous Talh 13, Oujda
                            6ème étage – Immeuble Rital"
                    subtext="Siège social & Agence de telecommunication"
                  />
                </LazySection>
              </div>

              {/* Image Map Placeholder */}
              <LazySection skeleton={<MapSkeleton />}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative h-[300px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
                >
                  <img
                    src="/map-bg.png"
                    alt="Notre emplacement"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-midnight-slate/20 group-hover:bg-midnight-slate/10 transition-colors" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-gray-200">
                    <p className="text-sm font-bold text-midnight-slate">Oriotel Oujda</p>
                    <p className="text-xs text-gray-500">Cliquez pour ouvrir Maps</p>
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
