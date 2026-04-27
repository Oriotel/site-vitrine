import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import EventHero from '@/components/event/EventHero';
import EventForm from '@/components/event/EventForm';
import ContactCard from '@/components/contact/ContactCard';

const EventApplyPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cloud-white min-h-screen">
      <EventHero />

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Section Gauche - Informations */}
            <div className="space-y-8">
              <div className="space-y-6">
                <ContactCard
                  icon={Mail}
                  title={t('event_apply.cards.email.title')}
                  value="event@oriotel.fr"
                  subtext={t('event_apply.cards.email.subtext')}
                />
                <ContactCard
                  icon={Phone}
                  title={t('event_apply.cards.phone.title')}
                  value="+212 5 23 45 67 89"
                  subtext={t('event_apply.cards.phone.subtext')}
                />
                <ContactCard
                  icon={MapPin}
                  title={t('event_apply.cards.address.title')}
                  value="Marina Casablanca, Tour Crystal, Maroc"
                  subtext={t('event_apply.cards.address.subtext')}
                />
              </div>

              {/* Encart Map Placeholder */}
              <div className="relative h-[300px] w-full bg-gray-200 rounded-3xl overflow-hidden border border-gray-100 shadow-sm group">
                <img
                  src="/map-bg.png"
                  alt="Emplacement de l'événement"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-midnight-slate/10">
                  <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200">
                    <p className="text-sm font-bold text-signal-blue flex items-center gap-2">
                      <MapPin size={16} /> {t('event_apply.map_cta')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Droite - Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <EventForm />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default EventApplyPage;
