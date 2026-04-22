import { useTranslation } from 'react-i18next'
import AnimatedSection from '@/components/common/AnimatedSection'
import { companyInfo } from '@/constants/data'

const AboutHero = () => {
  const { t } = useTranslation()

  return (
    <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-x-hidden bg-white">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-5 hero-ambient" />
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
