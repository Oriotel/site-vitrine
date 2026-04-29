import React from 'react';
import HeroSkeleton from './HeroSkeleton';
import ContactCardSkeleton from './ContactCardSkeleton';
import ContactFormSkeleton from './ContactFormSkeleton';
import MapSkeleton from './MapSkeleton';

const ContactPageSkeleton = () => {
  return (
    <div className="bg-cloud-white min-h-screen">
      <HeroSkeleton />

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Colonne Gauche - Infos de contact */}
            <div className="lg:col-span-5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                <ContactCardSkeleton />
                <ContactCardSkeleton />
                <ContactCardSkeleton />
              </div>

              <MapSkeleton />
            </div>

            {/* Colonne Droite - Formulaire */}
            <div className="lg:col-span-7">
              <ContactFormSkeleton />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPageSkeleton;
