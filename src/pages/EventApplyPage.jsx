<<<<<<< HEAD
import React, { Suspense } from 'react';
import LazySection from '@/components/ui/LazySection';
=======
import React from 'react';
import { useTranslation } from 'react-i18next';
>>>>>>> 542a43cf8930394cf6d0d173e32fc8ea4df6f95a
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

// Skeletons
import { EventHeroSkeleton, EventFormSkeleton } from '@/components/event/skeletons';
import { ContactCardSkeleton, MapSkeleton } from '@/components/contact/skeletons';

// Lazy Components
const EventHero = React.lazy(() => import('@/components/event/EventHero'));
const EventForm = React.lazy(() => import('@/components/event/EventForm'));
const ContactCard = React.lazy(() => import('@/components/contact/ContactCard'));

const EventApplyPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cloud-white min-h-screen">
      <LazySection skeleton={<EventHeroSkeleton />}>
        <EventHero />
      </LazySection>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Section Gauche - Informations */}
            <div className="space-y-8">
              <div className="space-y-6">
<<<<<<< HEAD
                <LazySection skeleton={<ContactCardSkeleton />}>
                  <ContactCard
                    icon={Mail}
                    title="Email"
                    value="event@oriotel.fr"
                    subtext="Contactez-nous pour toute question relative à l'événement."
                  />
                </LazySection>
                <LazySection skeleton={<ContactCardSkeleton />}>
                  <ContactCard
                    icon={Phone}
                    title="Téléphone"
                    value="+212 5 23 45 67 89"
                    subtext="Notre standard est ouvert de 09:00 à 18:00."
                  />
                </LazySection>
                <LazySection skeleton={<ContactCardSkeleton />}>
                  <ContactCard
                    icon={MapPin}
                    title="Adresse"
                    value="Marina Casablanca, Tour Crystal, Maroc"
                    subtext="Lieu principal de l'événement networking."
                  />
                </LazySection>
              </div>

              {/* Encart Map Placeholder */}
              <LazySection skeleton={<MapSkeleton />}>
                <div className="relative h-[300px] w-full bg-gray-200 rounded-3xl overflow-hidden border border-gray-100 shadow-sm group">
                  <img
                    src="/map-bg.png"
                    alt="Emplacement de l'événement"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-midnight-slate/10">
                    <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200">
                      <p className="text-sm font-bold text-signal-blue flex items-center gap-2">
                        <MapPin size={16} /> Voir sur Google Maps
                      </p>
                    </div>
=======
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
>>>>>>> 542a43cf8930394cf6d0d173e32fc8ea4df6f95a
                  </div>
                </div>
              </LazySection>
            </div>

            {/* Section Droite - Formulaire */}
            <div className="w-full">
              <LazySection skeleton={<EventFormSkeleton />}>
                <EventForm />
              </LazySection>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default EventApplyPage;
