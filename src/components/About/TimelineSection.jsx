import AnimatedSection from '@/components/common/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { timeline } from '@/constants/data'
import { useTranslation } from 'react-i18next'

const TimelineSection = () => {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-white relative overflow-hidden group/section">
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle
          title={t('about.history.title')}
          subtitle={t('about.history.subtitle')}
          light={false}
        />

        <div className="relative mt-20">
          {/* Core Vertical line: Subtle for light mode */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-slate-200 overflow-hidden">
            <div className="w-full h-[25vh] bg-gradient-to-b from-transparent via-primary-400 to-transparent animate-fall" />
          </div>

          <div className="space-y-16 md:space-y-32">
            {timeline.map((item, i) => (
              <AnimatedSection
                key={i}
                delay={i * 150}
                animation={i % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in-up'}
              >
                <div className={`relative flex items-center w-full ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* The Dot: Light container with glowing primary core */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 z-20 flex items-center justify-center shadow-sm transition-transform duration-500 hover:scale-125">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary-500 primary-glow" />
                  </div>

                  {/* Content Block */}
                  <div className={`w-full pl-16 md:pl-0 md:w-1/2 flex ${i % 2 === 0 ? 'md:pr-16 md:justify-end' : 'md:pl-16 md:justify-start'}`}>

                    {/* Premium Dark Timeline Card: High impact with background image */}
                    <div className={`relative group/card overflow-hidden bg-slate-900 rounded-3xl w-full max-w-md shadow-2xl transition-all duration-700 cursor-pointer hover:-translate-y-3 flex flex-col ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>

                      {/* Background Image Layer (Optimized for dark theme) */}
                      <div className="absolute inset-0 transition-transform duration-700 group-hover/card:scale-110 pointer-events-none">
                        <img
                          src={item.image}
                          alt={t(item.title)}
                          className="w-full h-full object-cover opacity-[0.35] transition-all duration-700 group-hover/card:opacity-[0.5]"
                        />
                        {/* Minimized dark gradient overlay for maximum image visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      </div>

                      <div className="relative z-10 p-8 md:p-10">
                        <span className={`block !text-primary-400 font-bold text-2xl md:text-3xl mb-3 tracking-tighter transition-all duration-500 ${i % 2 === 0 ? 'group-hover/card:md:-translate-x-2' : 'group-hover/card:md:translate-x-2'} group-hover/card:translate-x-2 md:group-hover/card:translate-x-0`}>
                          {item.year}
                        </span>

                        <h4 className="font-carmine !text-white text-xl md:text-2xl mb-4 group-hover/card:!text-primary-300 transition-colors">
                          {t(item.title)}
                        </h4>

                        <p className="!text-white text-base md:text-lg leading-relaxed font-semibold">
                          {t(item.description)}
                        </p>
                      </div>

                      {/* Bottom accent bar */}
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-600 w-0 group-hover/card:w-full transition-all duration-700" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export default TimelineSection
