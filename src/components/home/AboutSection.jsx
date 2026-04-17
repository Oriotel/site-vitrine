import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    /* 1. Padding vertical réduit (py-16 au lieu de py-24) */
    <section className="relative z-10 bg-cloud-white py-16 md:py-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Espacement réduit entre les colonnes (gap-12 au lieu de gap-16) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ========== COLONNE GAUCHE : IMAGE & BADGE ========== */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            {/* 2. Image au format 4/3 pour être moins haute (aspect-[4/3]) */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Bureaux Oriotel" 
              className="w-full h-auto aspect-[4/3] object-cover rounded-[2rem] shadow-lg"
            />
            
            {/* Badge flottant légèrement réduit pour coller aux nouvelles proportions */}
            <div className="absolute -bottom-6 right-4 md:-bottom-8 md:-right-6 bg-signal-blue text-cloud-white p-5 md:p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center border-4 border-cloud-white">
              <span className="text-3xl md:text-4xl font-bold mb-1">15+</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold">
                Années d'expertise
              </span>
            </div>
          </div>


          {/* ========== COLONNE DROITE : CONTENU TEXTUEL ========== */}
          {/* Espace en haut réduit sur mobile (mt-10) */}
          <div className="flex flex-col mt-10 lg:mt-0">
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-signal-blue font-bold uppercase tracking-widest text-sm">
                Qui nous sommes
              </span>
              <Button size="sm" className="rounded-lg px-6 font-semibold shadow-sm">
                Plus
              </Button>
            </div>

            {/* Marges inférieures des textes réduites (mb-4 et mb-6) */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-midnight-slate leading-tight mb-4 tracking-tight">
              Pionnier de la gestion des opérations modernes.
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
              Chez <span className="font-semibold text-midnight-slate">ORIOTEL</span>, nous croyons que la structure est le socle de l'innovation. Depuis notre création, nous accompagnons les entreprises dans la curation de leurs flux de travail, transformant la complexité en fluidité architecturale.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-signal-blue w-5 h-5 shrink-0" fill="#1428C920" />
                <span className="text-midnight-slate font-medium text-base md:text-lg">
                  Optimisation des performances critiques
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-signal-blue w-5 h-5 shrink-0" fill="#1428C920" />
                <span className="text-midnight-slate font-medium text-base md:text-lg">
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