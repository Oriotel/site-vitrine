import React, { useState, useEffect } from 'react';
import StatsSection from '../components/About/StatsSection';
import ServicesPageSkeleton from '../components/services/ServicesPageSkeleton';
import SectionTitle from '../components/ui/SectionTitle';
import { useLoading } from '@/context/LoadingContext';
import PageHero from '../components/ui/PageHero';
import ServiceModal from '../components/services/ServiceModal';

const servicesList = [
  {
    id: 1,
    title: "Architecture d'entreprise",
    desc: "Conception et modélisation de structures organisationnelles robustes et agiles face aux évolutions du marché.",
    details: "Nous analysons votre organisation de A à Z pour concevoir un modèle structurel qui allie clarté, efficacité et scalabilité. Notre approche intègre les meilleures pratiques internationales tout en respectant votre culture d'entreprise.",
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    points: [
      "Diagnostic de la structure organisationnelle existante",
      "Modélisation des processus métier (BPMN, ArchiMate)",
      "Alignement stratégique entre IT et business",
      "Définition des rôles, responsabilités et gouvernances",
      "Feuille de route de transformation architecturale",
    ],
  },
  {
    id: 2,
    title: 'Optimisation opérationnelle',
    desc: "Amélioration continue de vos processus internes pour un rendement maximal et des coûts maîtrisés.",
    details: "Nos experts identifient les inefficacités, goulots d'étranglement et sources de gaspillage dans vos opérations pour déployer des leviers d'amélioration mesurables et durables.",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    points: [
      "Cartographie et audit des processus opérationnels",
      "Déploiement des méthodologies Lean & Six Sigma",
      "Réduction des coûts et délais de production",
      "Mise en place d'indicateurs de performance (KPIs)",
      "Accompagnement au changement et formation des équipes",
    ],
  },
  {
    id: 3,
    title: 'Conseil stratégique',
    desc: "Accompagnement de vos dirigeants vers des prises de décisions à fort impact pour l'avenir de l'entreprise.",
    details: "Nos consultants seniors travaillent directement with votre comité de direction pour co-construire des stratégies différenciantes, ancrées dans la réalité du marché et orientées résultats.",
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    points: [
      "Analyse de marché et veille concurrentielle",
      "Définition de la vision et des orientations stratégiques",
      "Élaboration du business plan et business model",
      "Stratégie de croissance, fusion-acquisition et expansion",
      "Coaching exécutif et facilitation de comités de direction",
    ],
  },
  {
    id: 4,
    title: 'Accompagnement sur mesure',
    desc: "Une présence continue et un suivi personnalisé à chaque étape clé de la croissance de votre structure.",
    details: "Chaque entreprise est unique. C'est pourquoi nos programmes d'accompagnement sont entièrement personnalisés selon votre secteur, votre maturité et vos objectifs spécifiques.",
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    points: [
      "Programme de suivi mensuel avec revues de performance",
      "Référent dédié disponible tout au long du projet",
      "Ateliers de co-construction et workshops stratégiques",
      "Adaptation continue du plan d'action selon les résultats",
      "Reporting transparent et tableaux de bord personnalisés",
    ],
  },
  {
    id: 5,
    title: 'Transformation digitale',
    desc: "Intégrez les nouvelles technologies au cœur de votre métier pour gagner en agilité et en performance.",
    details: "La transformation digitale ne se résume pas à la technologie : c'est un changement culturel profond. Nous vous guidons de la stratégie numérique jusqu'à l'implémentation, en embarquant vos collaborateurs.",
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    points: [
      "Audit de maturité numérique et diagnostic digital",
      "Définition de la roadmap de transformation",
      "Sélection et intégration des outils digitaux (ERP, CRM, BI…)",
      "Conduite du changement et montée en compétences",
      "Optimisation de l'expérience client et collaborateur",
    ],
  },
  {
    id: 6,
    title: 'Management de transition',
    desc: "Intervention d'experts de haut niveau pour piloter vos équipes lors de phases critiques ou de transformation.",
    details: "Quand votre entreprise traverse une crise, une restructuration ou une période de croissance rapide, nos managers de transition interviennent rapidement pour stabiliser, piloter et transformer.",
    image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800',
    points: [
      "Prise de fonction rapide (48h à 72h) en mode opérationnel",
      "Gestion de crise et plan de redressement",
      "Pilotage de projets de restructuration et réorganisation",
      "Intérim de direction générale, DG, DAF, DRH, DSI",
      "Transfert de compétences et passation avec les équipes internes",
    ],
  },
];

const ServicesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelected] = useState(null);
  const { setIsLayoutLoading } = useLoading();

  useEffect(() => {
    setIsLayoutLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsLayoutLoading(false);
    }, 1800);
    return () => {
      clearTimeout(timer);
      setIsLayoutLoading(false);
    };
  }, [setIsLayoutLoading]);

  if (isLoading) return <ServicesPageSkeleton />;

  return (
    <div className="min-h-screen bg-white font-sans animate-[fadeIn_0.5s_ease-out_both]">

      {/* 1. HERO SECTION */}
      <PageHero 
        title="Nos Services"
        subtitle="Expertise et conseil"
        description="Propulsez votre structure vers l'excellence grâce à nos solutions architecturales et opérationnelles sur mesure. Nous transformons vos défis en avantages compétitifs."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      {/* 2. GRILLE DE 6 CARTES */}
      <section className="bg-[#F9FAFB] pt-24 pb-12 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 flex flex-col items-start text-left">
            <SectionTitle title="Découvrez nos solutions" align="left" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((svc) => (
              <div
                key={svc.id}
                onClick={() => setSelected(svc)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(20,40,201,0.08)] border border-slate-100 transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Contenu */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#111827] mb-3 leading-snug">{svc.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-prose flex-grow mb-8 line-clamp-3">
                    {svc.desc}
                  </p>

                  {/* CTA → ouvre le modal */}
                  <div className="mt-auto border-t border-slate-100 pt-6">
                    <button
                      className="inline-flex items-center text-[#1428C9] font-bold text-sm uppercase tracking-widest group-hover:text-[#111827] transition-colors"
                    >
                      Voir les détails
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATISTIQUES */}
      <StatsSection />

      {/* 4. MODAL DÉTAILS */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default ServicesPage;
