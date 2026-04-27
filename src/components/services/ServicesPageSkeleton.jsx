

/* ── Squelette complet de la page ────────────────────────── */
const ServicesPageSkeleton = () => (
  <div className="min-h-screen bg-white font-sans" aria-busy="true" aria-label="Chargement flamboyant de la page Services">
    {/* Injection des styles WOW vitaux */}
    <GlobalWowStyles />
    
    <HeroSkeletonWow />
    
    <SkeletonSection delay={80}>
      <ServiceCardsSkeleton />
    </SkeletonSection>

    <StatsSkeletonWow />
  </div>
);

export default ServicesPageSkeleton;
