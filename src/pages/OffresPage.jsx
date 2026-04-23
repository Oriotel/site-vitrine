import React, { useState, useEffect } from 'react';
import ProcessSteps from '@/components/offres/ProcessSteps';
import OpportunityList from '@/components/offres/OpportunityList';
import OpportunityDetails from '@/components/offres/OpportunityDetails';
import WhyJoinSection from '@/components/offres/WhyJoinSection';
import { BorderBeam } from '@/components/ui/BorderBeam';
import PageHero from '@/components/ui/PageHero';
import { useLoading } from '@/context/LoadingContext';
import Shimmer from '@/components/ui/Shimmer';

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
  const [isLoading, setIsLoading] = useState(true);
  const { setIsLayoutLoading } = useLoading();

  useEffect(() => {
    setIsLayoutLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsLayoutLoading(false);
    }, 1200);
    return () => {
      clearTimeout(timer);
      setIsLayoutLoading(false);
    };
  }, [setIsLayoutLoading]);

  const selectedJob = jobsData.find((job) => job.id === selectedJobId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <section className="relative w-full h-[55vh] flex items-center justify-center bg-white overflow-hidden">
           <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-slate-100/50 to-transparent" />
           <div className="relative z-10 flex flex-col items-center gap-5">
             <Shimmer className="h-8 w-40 rounded-full" />
             <Shimmer className="h-16 w-80 rounded-xl" />
             <Shimmer className="h-4 w-64" />
           </div>
        </section>
      </div>
    );
  }

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
        <ProcessSteps />

        {/* Main Section: Opportunities & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10">
          <div className="lg:col-span-5">
            <OpportunityList
              opportunities={jobsData}
              selectedId={selectedJobId}
              onSelect={setSelectedJobId}
            />
          </div>
          <div className="lg:col-span-7">
            <OpportunityDetails job={selectedJob} />
          </div>
        </div>

        {/* Why Join Us Section */}
        <WhyJoinSection />

      </div>
    </main>
  );
};

export default OffresPage;
