import React, { useState } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import SectionTitle from '@/components/common/SectionTitle';

const networkers = [
  {
    id: 1,
    name: 'Sophie Laurent',
    role: 'CEO & Fondatrice',
    company: 'TechVision',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 2,
    name: 'Karim Benali',
    role: 'Directeur Innovation',
    company: 'FinTechPro',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 3,
    name: 'Isabelle Martin',
    role: 'VP Stratégie',
    company: 'GreenSolutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 4,
    name: 'Mehdi Alaoui',
    role: 'Co-Fondateur',
    company: 'Logistix',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 5,
    name: 'Camille Dupont',
    role: 'Directrice Marketing',
    company: 'CreativLab',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    linkedin: '#',
    twitter: '#',
  },
  {
    id: 6,
    name: 'Nicolas Remy',
    role: 'Investisseur',
    company: 'Capital Partners',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    linkedin: '#',
    twitter: '#',
  },
];



const NetworkerCard = ({ person, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <AnimatedSection
      delay={index * 80}
      animation={index % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in-down'}
      className="h-[380px]"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className="relative w-full h-full cursor-pointer"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />



          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <h3 className="!text-white font-bold text-xl leading-tight mb-1">{person.name}</h3>
            <p className="!text-white text-sm font-medium opacity-90">{person.role}</p>
            <p className="!text-white text-xs opacity-70 mt-1">{person.company}</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0C1879] to-[#111827] flex flex-col items-center justify-center p-7 text-center shadow-lg border border-[#1428C9]/30"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Avatar small */}
          <img
            src={person.image}
            alt={person.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-[#1428C9] shadow-[0_0_20px_rgba(20,40,201,0.5)] mb-4"
          />
          <h3 className="!text-white font-bold text-lg">{person.name}</h3>
          <p className="!text-white text-sm mt-1">{person.role} · {person.company}</p>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-[#1428C9] rounded-full my-5" />

          <p className="!text-white text-sm leading-relaxed">
            Un acteur clé du réseau ORIOTEL, apportant son expertise et sa vision au sein de la communauté.
          </p>

          {/* Social links */}
          <div className="flex gap-4 mt-6">
            <a
              href={person.linkedin}
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#1428C9]/20 hover:bg-[#1428C9] border border-[#1428C9]/40 flex items-center justify-center text-white transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={person.twitter}
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-[#1428C9]/20 hover:bg-[#1428C9] border border-[#1428C9]/40 flex items-center justify-center text-white transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>

          {/* CTA */}
          <button className="mt-5 px-6 py-2.5 bg-[#1428C9] hover:bg-[#1020A1] text-white text-xs font-semibold rounded-full transition-all duration-300">
            Contacter
          </button>
        </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const NetworkersEvent = () => {

  return (
    <section className="pt-10 pb-24 bg-[#F9FAFB] dark:bg-[#111827] font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <SectionTitle
          title="Nos Networkers"
          subtitle="Découvrez les professionnels qui animent notre réseau. Passez votre souris sur une carte pour en apprendre davantage."
          align="center"
        />



        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {networkers.map((person, i) => (
            <NetworkerCard key={person.id} person={person} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={200} className="text-center mt-16">
          <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-6">
            Rejoignez notre réseau de professionnels d'exception
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1428C9] hover:bg-[#1020A1] text-white font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,40,201,0.4)] hover:-translate-y-0.5 group">
            Rejoindre le réseau
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NetworkersEvent;
