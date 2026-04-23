import { useTranslation } from 'react-i18next'
import { stats } from '@/constants/data'
import AnimatedSection from '@/components/common/AnimatedSection'

const StatsSection = () => {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white relative overflow-hidden border-y border-slate-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-200 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary-200 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              className="text-center"
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="text-4xl md:text-6xl font-bold text-slate-900 mb-2 font-carmine">
                {stat.value}
              </div>
              <div className="text-primary-600 text-sm md:text-base font-bold tracking-wide uppercase">
                {t(stat.label)}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
