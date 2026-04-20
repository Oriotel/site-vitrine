import { team } from "@/constants/data";
import { UserCheck } from "lucide-react";
import { TeamCarousel } from "./TeamCarousel";
import { ScribbleText } from "../Common/ScribbleText";
import AnimatedSection from "../Common/AnimatedSection";
import { useTranslation } from "react-i18next";

export function TeamMarqueeSection() {
  const { t } = useTranslation();
  
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 md:py-32 max-w-[100vw]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating ambient blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-100/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-100/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center px-6 text-center">
          <AnimatedSection>
            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-xl shadow-primary-600/20">
              <UserCheck size={32} />
            </div>

            <h2 className="relative mb-6 font-carmine text-5xl md:text-6xl text-slate-900 tracking-tight">
              {t('about.team.title')}
              <svg
                className="absolute -top-4 -right-12 -z-10 w-48 md:w-64 text-primary-500/20 opacity-100"
                fill="none"
                height="86"
                viewBox="0 0 108 86"
                width="108"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="28"
                />
              </svg>
              <span className="block text-lg font-sans font-medium text-primary-600 mt-4 uppercase tracking-[0.2em]">
                {t('about.team.subtitle')}
              </span>
            </h2>
            <p className="max-w-2xl text-slate-600 text-lg md:text-xl leading-relaxed">
              {t('about.team.description')}
            </p>
          </AnimatedSection>
        </div>

        {/* Carousel with Fade Edges */}
        <div className="relative w-full">
          {/* Edge Mask Gradients - matches section bg */}
          <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-24 md:w-48 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-24 md:w-48 bg-gradient-to-l from-white to-transparent" />

          <div>
            <TeamCarousel members={team} />
          </div>
        </div>

        {/* CEO Quote / Testimonial: Redesigned to match reference image */}
        <div className="mx-auto mt-32 max-w-4xl px-6 text-center">
          <AnimatedSection animation="animate-fade-in-up">
            <h3 className="mb-12 text-2xl md:text-3xl font-semibold text-slate-900 leading-tight max-w-3xl mx-auto italic">
              "{t('about.team.testimonial')}"
            </h3>
            
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-slate-100 shadow-lg">
                <img
                  alt="Alexandre Moreau"
                  className="h-full w-full object-cover"
                  src={team[0].image}
                />
              </div>
              <div className="mt-2 text-center">
                <p className="text-xl font-bold text-slate-900 mb-1">
                  Alexandre Moreau
                </p>
                <p className="text-slate-500 font-medium text-sm md:text-base uppercase tracking-widest">
                  {t('about.team.founder_role')}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
