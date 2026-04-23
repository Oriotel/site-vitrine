import { team } from "@/constants/data";
import { TeamCarousel } from "@/components/ui/TeamCarousel";
import { ScribbleText } from "@/components/common/ScribbleText";
import AnimatedSection from "@/components/common/AnimatedSection";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";

export function TeamMarqueeSection() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 max-w-[100vw]">

        <div className="relative z-10 mx-auto max-w-[1600px]">

          {/* Titre animé avec SectionTitle (HEAD) */}
          <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center px-6 text-center">
            <AnimatedSection>
              <SectionTitle
                title="Notre Équipe d'Experts"
                subtitle="L'excellence au service de vos ambitions"
                description="Une équipe passionnée et dévouée à transformer chaque détail de votre événement en un souvenir impérissable"
                align="center"
              />
            </AnimatedSection>
          </div>

          {/* Truly Infinite Carousel (HEAD + develop gradients) */}
          <div className="relative w-full overflow-hidden">
            {/* Edge Mask Gradients - Fusionnés avec le dark mode de develop */}
            <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-24 md:w-48 bg-gradient-to-r from-white to-transparent dark:from-slate-900" />
            <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-24 md:w-48 bg-gradient-to-l from-white to-transparent dark:from-slate-900" />

            <div>
              <TeamCarousel members={team} />
            </div>
          </div>

          {/* CEO Quote / Testimonial (HEAD) */}
          <div className="mx-auto mt-32 max-w-4xl px-6 text-center">
            <AnimatedSection animation="animate-fade-in-up">
              <h3 className="mb-12 text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white leading-tight max-w-3xl mx-auto italic">
                "{t('about.team.testimonial')}"
              </h3>

              <div className="flex flex-col items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-slate-100 dark:ring-slate-800 shadow-lg">
                  <img
                    alt="Alexandre Moreau"
                    className="h-full w-full object-cover"
                    src={team[0].image}
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    Alexandre Moreau
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base uppercase tracking-widest">
                    {t('about.team.founder_role')}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}