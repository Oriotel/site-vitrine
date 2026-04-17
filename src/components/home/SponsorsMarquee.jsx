import React from 'react';

export function SponsorsMarquee() {
  // Vos partenaires
  const partners = [
    { name: "Maroc Telecom (IAM)", logo: "/assets/images/logo-iam.svg" },
    { name: "INWI", logo: "/assets/images/logo-inwi.svg" },
    { name: "Orange", logo: "/assets/images/logo-orange.svg" },
  ];

  // Duplication pour l'effet de boucle infinie
  const repeatedPartners = [
    ...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners
  ];

  return (
    /* Fond clair et neutre pour faire ressortir les logos noirs */
    <section className="w-full bg-cloud-white border-y border-gray-200 overflow-hidden flex items-center py-8 md:py-12">
      
      <div className="flex w-max animate-marquee hover-pause items-center gap-20 md:gap-32 px-10">
        
        {repeatedPartners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center min-w-[120px]">
            {/* L'ASTUCE EST ICI :
              1. brightness-0 : Transforme toutes les couleurs du logo en noir absolu.
              2. opacity-80 : Adoucit très légèrement le noir pour qu'il soit élégant (pas trop agressif).
              3. hover:brightness-100 : (Optionnel) Si on survole, le logo reprend ses vraies couleurs ! 
                 Si vous voulez qu'ils restent toujours noirs, enlevez simplement les classes "hover:...".
            */}
            <img 
              src={partner.logo} 
              alt={`Logo ${partner.name}`}
              className="h-10 md:h-14 w-auto object-contain brightness-0 opacity-80 hover:brightness-100 hover:opacity-100 transition-all duration-500 cursor-pointer"
              title={partner.name}
            />
          </div>
        ))}

      </div>
    </section>
  );
}

export default SponsorsMarquee;