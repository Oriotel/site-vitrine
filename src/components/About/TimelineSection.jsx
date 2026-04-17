
import AnimatedSection from '@/components/common/AnimatedSection'
import SectionTitle from '@/components/common/SectionTitle'
import { timeline } from '@/constants/data'

const TimelineSection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionTitle
        title="Notre Histoire"
        subtitle="Les étapes clés de notre parcours vers l'excellence"
      />
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/30 via-primary-500/10 to-transparent" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <AnimatedSection
              key={i}
              delay={item.delay || i * 100}
              animation={i % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}
            >
              <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full primary-gradient-bg ring-4 ring-white z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-primary-600 font-carmine font-bold text-lg">{item.year}</span>
                  <h4 className="font-carmine font-bold text-slate-900 mt-1 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default TimelineSection
