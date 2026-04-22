import { useRef } from 'react'
import { exploreData } from '@/constants/data'
import { Clock, Shield, Star, Compass, ArrowUpRight } from 'lucide-react'
import Button from '@/components/Common/Button'
import AnimatedSection from '@/components/Common/AnimatedSection'
import { InteractiveStoryGallery } from './InteractiveStoryGallery'
import { useTranslation } from 'react-i18next'

const ExploreSection = () => {
  const { t } = useTranslation()
  const { left } = exploreData

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Clock': return <Clock className="w-3.5 h-3.5" />
      case 'Shield': return <Shield className="w-3.5 h-3.5" />
      case 'Star': return <Star className="w-3.5 h-3.5" />
      default: return <Clock className="w-3.5 h-3.5" />
    }
  }

  return (
    <section className="section-padding bg-white overflow-x-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 lg:p-4 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">
            
            {/* Informative Part: Structured Sidebar */}
            <aside className="lg:col-span-4 flex flex-col h-[320px] sm:h-[340px] md:h-[380px] lg:h-[400px]">
              <AnimatedSection
                className="flex flex-col h-full p-3 sm:p-4 md:p-6 bg-slate-50/50 rounded-[1.5rem] border border-white/50 shadow-inner overflow-hidden"

                animation="fade-in-up"
              >
                {/* Header Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight font-carmine">
                    {t(left.title)}
                  </h3>
                  <p className="text-slate-600 leading-tight text-[9px] sm:text-[10px] md:text-xs font-medium">
                    {t(left.description)}
                  </p>

                </div>

                {/* Features List */}
                <div className="flex flex-wrap gap-1 md:gap-1.5 mt-2 sm:mt-4">

                  {left.features.map((feature) => (
                    <div 
                      key={feature.label} 
                      className="flex items-center gap-1.5 text-slate-700 text-[8px] font-bold bg-white px-2 py-1 rounded-md border border-slate-100 shadow-sm uppercase tracking-tight"
                    >
                      <span className="text-primary-600">{getIcon(feature.icon)}</span>
                      <span>{t(feature.label)}</span>
                    </div>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="flex items-center gap-2 mt-auto pt-1 sm:pt-3 md:pt-4 border-t border-slate-200/50">
                  <Button 
                    variant="primary"
                    className="rounded-lg px-3 sm:px-4 h-7 sm:h-8 md:h-9 text-[10px] sm:text-[11px] font-bold shadow-lg !bg-slate-900 !text-white flex-1"
                  >
                    {t(left.cta)}
                  </Button>
                  <button className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition-all border border-slate-200 shadow-sm group">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

              </AnimatedSection>
            </aside>

            {/* Gallery Part */}
            <main className="lg:col-span-8 relative flex flex-col lg:h-full overflow-hidden">
              <AnimatedSection animation="fade-in" delay={200} className="w-full lg:h-full flex items-center">
                <InteractiveStoryGallery stories={exploreData.stories} />
              </AnimatedSection>
            </main>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection
