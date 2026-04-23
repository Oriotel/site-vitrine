import AnimatedSection from '@/components/common/AnimatedSection'
import SectionTitle from '@/components/common/SectionTitle'
import { timeline } from '@/constants/data'

const TimelineSection = () => (
  <section className="section-padding bg-[#fafafa] relative overflow-hidden group/section">
    {/* Animated background glow that follows scrolling (CSS approximated) */}
    <div className="absolute top-0 inset-x-0 h-full w-full pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary-400/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-400/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>

    <div className="max-w-5xl mx-auto relative z-10">
      <SectionTitle
        title="Notre Histoire"
        subtitle="Un parcours jalonné d'excellence et d'innovations."
      />

      <div className="relative mt-20">
        {/* Core Vertical line as in mockup */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-slate-200 overflow-hidden">
          {/* Animated glowing beam falling down the line */}
          <div className="w-full h-[20vh] bg-gradient-to-b from-transparent via-primary-400 to-transparent animate-[fall_3s_ease-in-out_infinite]" />
        </div>

        <div className="space-y-16 md:space-y-24">
          {timeline.map((item, i) => (
            <AnimatedSection
              key={i}
              delay={i * 150}
              animation={i % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}
            >
              <div className={`relative flex items-center w-full ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* The Dot Exactly as in mockup: Blue core, light blue outer ring */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-50 z-20 flex items-center justify-center transition-transform duration-500 hover:scale-125">
                  <div className="w-3.5 h-3.5 rounded-full bg-primary-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                </div>

                {/* Content Block */}
                <div className={`w-full pl-16 md:pl-0 md:w-1/2 flex ${i % 2 === 0 ? 'md:pr-16 md:justify-end' : 'md:pl-16 md:justify-start'}`}>

                  {/* The exact layout of the mockup card, enhanced to not be boring! */}
                  <div className={`bg-white rounded-2xl p-8 md:p-10 w-full max-w-md shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-primary-100 transition-all duration-500 group cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] flex flex-col ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>

                    <span className={`block text-primary-600 font-bold text-xl md:text-2xl mb-2 transition-transform duration-500 ${i % 2 === 0 ? 'group-hover:md:-translate-x-2' : 'group-hover:md:translate-x-2'} group-hover:translate-x-2 md:group-hover:translate-x-0`}>
                      {item.year}
                    </span>

                    <h4 className="font-bold text-slate-900 text-lg md:text-xl mb-3">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
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

    <style>{`
      @keyframes fall {
        0% { transform: translateY(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
    `}</style>
  </section>
)

export default TimelineSection
