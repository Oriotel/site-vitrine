import React, { useState } from 'react';
import ProcessSteps from '@/components/offres/ProcessSteps';
import OpportunityList from '@/components/offres/OpportunityList';
import OpportunityDetails from '@/components/offres/OpportunityDetails';
import WhyJoinSection from '@/components/offres/WhyJoinSection';

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
    <main className="bg-[#F9FAFB] min-h-screen pt-24 pb-20 font-sans text-[#111827]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#111827]">
            Notre Processus de <span className="text-[#1428C9]">Travail</span>
          </h1>
          <p className="text-lg text-gray-500">
            Découvrez comment nous intégrons nos nouveaux talents et explorez les opportunités actuelles au sein de notre équipe.
          </p>
        </div>

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
