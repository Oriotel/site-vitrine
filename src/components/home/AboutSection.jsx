import { useTranslation } from 'react-i18next';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER AREA : Title Centered, Button Right */}
        <div className="flex flex-col relative mb-8 px-4">
          <SectionTitle 
            subtitle=""
            title={t('home.about.title')}
            align="center"
            description={t('home.about.description')}
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
              <span className="text-3xl md:text-4xl font-bold mb-1">{t('home.about.expertise_years')}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold">
                {t('home.about.expertise_label')}
              </span>
            </div>
          </div>

          <div className="flex flex-col mt-10 lg:mt-0">
            <p className="text-midnight-slate/70 text-lg leading-relaxed mb-6">
              {t('home.about.paragraph')}
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-[#1428C9]/5 rounded-lg group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="text-signal-blue w-6 h-6 shrink-0" fill="#1428C915" />
                </div>
                <span className="text-midnight-slate font-medium text-lg">
                  {t('home.about.point_1')}
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-[#1428C9]/5 rounded-lg group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="text-signal-blue w-6 h-6 shrink-0" fill="#1428C915" />
                </div>
                <span className="text-midnight-slate font-medium text-lg">
                  {t('home.about.point_2')}
                </span>
              </li>
            </ul>
            <div>
              <PremiumButton href="/about" className="text-[#1428C9]">
                {t('home.about.cta')}
              </PremiumButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;