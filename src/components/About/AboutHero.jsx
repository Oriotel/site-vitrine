import React from 'react'
import AnimatedSection from '@/components/common/AnimatedSection'
import { companyInfo } from '@/constants/data'

const AboutHero = () => (
  <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-x-hidden bg-slate-50 dark:bg-slate-950">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(20,40,201,0.05) 0%, transparent 50%)',
      }}
    />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <AnimatedSection>
        <h1 className="font-carmine mb-6 text-4xl md:text-5xl lg:text-7xl">
          <span className="primary-gradient-text">Qui sommes-nous?</span>
        </h1>
        <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {companyInfo.longDescription}
        </p>
      </AnimatedSection>
    </div>
  </section>
)

export default AboutHero
