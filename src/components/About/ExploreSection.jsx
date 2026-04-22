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
      
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 lg:p-4 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">
            
            {/* Informative Part: Structured Sidebar */}
            <aside className="lg:col-span-4 flex flex-col h-full w-full">
              <AnimatedSection
                className="flex flex-col flex-1 w-full h-full p-4 sm:p-5 md:p-6 bg-slate-50/50 rounded-[1.5rem] border border-white/50 shadow-inner overflow-hidden"

                animation="fade-in-up"
              >
                {/* Main Content Area (Centered) */}
                <div className="flex flex-col flex-1 justify-center gap-6 sm:gap-8">
                  {/* Header Content */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 leading-tight font-carmine">
                      {t(left.title)}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base font-medium">
                      {t(left.description)}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {left.features.map((feature) => (
                      <div 
                        key={feature.label} 
                        className="flex items-center gap-1.5 text-slate-700 text-[10px] sm:text-xs font-bold bg-white px-3 py-1.5 rounded-md border border-slate-100 shadow-sm uppercase tracking-tight"
                      >
                        <span className="text-primary-600">{getIcon(feature.icon)}</span>
                        <span>{t(feature.label)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="flex items-center gap-3 mt-6 pt-4 sm:pt-5 border-t border-slate-200/50">
                  <Button 
                    variant="primary"
                    className="rounded-lg px-4 sm:px-5 h-9 sm:h-10 text-xs sm:text-sm font-bold shadow-lg !bg-slate-900 !text-white flex-1"
                  >
                    {t(left.cta)}
                  </Button>
                  <button className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition-all border border-slate-200 shadow-sm group">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
