import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export function AboutSection() {
  return (
    <section className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER AREA : Title Centered, Button Right */}
        <div className="flex flex-col relative mb-8 px-4">
          <SectionTitle 
            subtitle=""
            title="Qui nous sommes ?"
            align="center"
            description="Pionnier de la gestion des opérations."
            className="mb-0 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Bureaux Oriotel" 
              className="w-full h-auto aspect-[4/3] object-cover rounded-[1.5rem] shadow-lg"
            />
            <div className="absolute -bottom-6 right-4 md:-bottom-8 md:-right-6 bg-signal-blue text-cloud-white p-5 md:p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center border-4 border-cloud-white">
              <span className="text-3xl md:text-4xl font-bold mb-1">15+</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold">
                Années d'expertise
              </span>
            </div>
          </div>

          <div className="flex flex-col mt-10 lg:mt-0 justify-center h-full">
            <div className="flex justify-end w-full mb-8">
              <a href="/about">
                <Button className="group relative overflow-hidden rounded-xl bg-signal-blue px-8 py-6 text-white transition-all hover:bg-signal-blue/90 hover:shadow-xl hover:shadow-signal-blue/20">
                  <span className="relative z-10 flex items-center gap-2 font-bold tracking-wide">
                    En savoir plus
                    <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </a>
            </div>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="p-3 bg-[#1428C9]/5 rounded-xl group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="text-signal-blue w-7 h-7 shrink-0" fill="#1428C915" />
                </div>
                <span className="text-midnight-slate font-semibold text-lg md:text-xl">
                  Optimisation des performances critiques
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-3 bg-[#1428C9]/5 rounded-xl group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="text-signal-blue w-7 h-7 shrink-0" fill="#1428C915" />
                </div>
                <span className="text-midnight-slate font-semibold text-lg md:text-xl">
                  Design de solutions scalables
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;