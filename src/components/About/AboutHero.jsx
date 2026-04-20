import { useTranslation } from 'react-i18next'
import AnimatedSection from '@/components/Common/AnimatedSection'
import { companyInfo } from '@/constants/data'

const AboutHero = () => {
  const { t } = useTranslation()
  
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-x-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />
      <div className="absolute inset-0 opacity-10 hero-ambient" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h1 className="font-carmine mb-6 text-4xl md:text-5xl lg:text-7xl">
            <span className="primary-gradient-text">{t('about.hero.title')}</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-medium">
            {t(companyInfo.longDescription)}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default AboutHero
