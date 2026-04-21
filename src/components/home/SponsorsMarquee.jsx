import React from 'react';

export function SponsorsMarquee() {
  const partners = [
    { name: "Maroc Telecom (IAM)", logo: "/assets/images/logo-iam.svg" },
    { name: "INWI", logo: "/assets/images/logo-inwi.svg" },
    { name: "Orange", logo: "/assets/images/logo-orange.svg" },
  ];

  const repeatedPartners = [
    ...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners
  ];

  return (
    <section className="w-full border-y border-gray-200 dark:border-gray-800 overflow-hidden flex items-center py-8 md:py-12">
      <div className="flex w-max animate-marquee hover-pause items-center gap-20 md:gap-32 px-10">
        
        {repeatedPartners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center min-w-[120px]">
            <img 
              src={partner.logo} 
              alt={`Logo ${partner.name}`}
              className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
              title={partner.name}
            />
          </div>
        ))}

      </div>
    </section>
  );
}

export default SponsorsMarquee;