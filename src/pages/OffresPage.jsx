import React, { useState, Suspense } from 'react';
import LazySection from '@/components/ui/LazySection';
import PageHero from '@/components/ui/PageHero';

// Skeletons
import {
  ProcessSectionSkeleton,
  JobCardSkeleton,
  JobDetailsSkeleton,
  WhyJoinUsSkeleton
} from '@/components/jobs/skeletons';

// Lazy Components
const ProcessSteps = React.lazy(() => import('@/components/offres/ProcessSteps'));
const OpportunityList = React.lazy(() => import('@/components/offres/OpportunityList'));
const OpportunityDetails = React.lazy(() => import('@/components/offres/OpportunityDetails'));
const WhyJoinSection = React.lazy(() => import('@/components/offres/WhyJoinSection'));

const jobsData = [
  {
    id: 1,
    title: "Architecte d'Intérieur Senior",
    location: "Casablanca, Maroc",
    type: "CDI",
    responsibilities: [
      "Concevoir des espaces intérieurs innovants et fonctionnels.",
      "Gérer les projets de l'esquisse jusqu'à la livraison finale.",
      "Coordonner avec les fournisseurs, prestataires et clients.",
      "Assurer le suivi des chantiers et le respect des normes."
    ],
    skills: ["AutoCAD", "SketchUp", "Design Spatial", "Gestion de projet", "3ds Max"]
  },
  {
    id: 2,
    title: "Ingénieur Réseaux et Télécoms",
    location: "Rabat, Maroc",
    type: "CDI",
    responsibilities: [
      "Déployer, configurer et maintenir les infrastructures réseaux.",
      "Assurer la sécurité des systèmes et la prévention des risques.",
      "Intervenir en support technique de niveau 3.",
      "Rédiger la documentation technique et les procédures."
    ],
    skills: ["Cisco", "Sécurité Réseau", "Routage / Switching", "TCP/IP", "Linux"]
  },
  {
    id: 3,
    title: "Chef de Projet Électrique",
    location: "Tanger, Maroc",
    type: "CDD",
    responsibilities: [
      "Superviser l'ensemble des chantiers d'installation électrique.",
      "Gérer et animer les équipes techniques sur le terrain.",
      "S'assurer du respect des normes de sécurité en vigueur.",
      "Gérer les budgets et les plannings du projet."
    ],
    skills: ["Gestion de projet", "Électricité Industrielle", "Normes ISO", "Management", "AutoCAD Électrique"]
  }
];

const OffresPage = () => {
  const [selectedJobId, setSelectedJobId] = useState(jobsData[0].id);
  const selectedJob = jobsData.find((job) => job.id === selectedJobId);

  return (
    <main className="bg-[#F9FAFB] min-h-screen pb-20 font-sans text-[#111827]">
      <PageHero
        title="Carrières"
        subtitle="Nous rejoindre"
        description="Découvrez comment nous intégrons nos nouveaux talents et explorez les opportunités actuelles au sein de notre équipe."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000"
      />
      <div className="container mx-auto px-4 md:px-6 max-w-7xl mt-20">

        {/* Process Steps Section */}
        <LazySection skeleton={<ProcessSectionSkeleton />}>
          <ProcessSteps />
        </LazySection>

        {/* Main Section: Opportunities & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10">
          <div className="lg:col-span-5">
            <LazySection skeleton={<JobCardSkeleton />}>
              <OpportunityList
                opportunities={jobsData}
                selectedId={selectedJobId}
                onSelect={setSelectedJobId}
              />
            </LazySection>
          </div>
          <div className="lg:col-span-7">
            <LazySection skeleton={<JobDetailsSkeleton />}>
              <OpportunityDetails job={selectedJob} />
            </LazySection>
          </div>
        </div>

        {/* Why Join Us Section */}
        <LazySection skeleton={<WhyJoinUsSkeleton />}>
          <WhyJoinSection />
        </LazySection>

      </div>
    </main>
  );
};

export default OffresPage;
