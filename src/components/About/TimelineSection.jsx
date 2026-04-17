import AnimatedSection from '@/components/common/AnimatedSection'
import SectionTitle from '@/components/common/SectionTitle'
import { timeline } from '@/constants/data'

const TimelineSection = () => (
  <section className="section-padding bg-slate-50/30">
    <div className="max-w-4xl mx-auto">
      <SectionTitle
        title="Notre Histoire"
        subtitle="Les étapes clés de notre parcours vers l'excellence"
      />
      <div className="relative mt-12">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <AnimatedSection
              key={i}
              delay={item.delay || i * 100}
              animation={i % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}
            >
              <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-600 ring-4 ring-primary-100 z-10 mt-[1.3rem]" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'}`}>
                  <div className={`bg-white rounded-xl p-6 shadow-sm border border-slate-100 w-full md:max-w-md ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="block text-primary-600 font-bold text-lg mb-1">
                        {item.year}
                      </span>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
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

export default TimelineSection
