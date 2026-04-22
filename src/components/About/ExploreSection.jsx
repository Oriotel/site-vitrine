import { useRef } from 'react'
import { exploreData } from '@/constants/data'
import { Clock, Shield, Star, Compass, ArrowUpRight } from 'lucide-react'
import Button from '@/components/common/Button'
import AnimatedSection from '@/components/common/AnimatedSection'
import { InteractiveStoryGallery } from './InteractiveStoryGallery'
import { useTranslation } from 'react-i18next'

const ExploreSection = () => {
  const { t } = useTranslation()
  const { left } = exploreData

  // Feature icon mapper
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Clock': return <Clock className="w-4 h-4" />
      case 'Shield': return <Shield className="w-4 h-4" />
      case 'Star': return <Star className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  return (
    <section className="section-padding bg-white overflow-x-hidden relative">
      {/* Decorative ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Unified Main Card Container - Tight Padding & Strict Containment */}
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch lg:min-h-[650px]">


            {/* Informative Part: Elevated Sidebar (Perfectly Aligned) */}
            <div className="lg:col-span-4 flex flex-col h-full">
              <AnimatedSection
                className="flex flex-col justify-between h-full p-6 md:p-10 lg:p-12 bg-slate-50/50 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/50 shadow-inner"

                animation="fade-in-up"
              >
                <div className="flex flex-col gap-10">
                  <div className="w-16 h-16 rounded-3xl bg-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-600/20">
                    <Compass className="w-8 h-8" />
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-carmine">

                      {t(left.title)}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-lg lg:text-xl font-medium">
                      {t(left.description)}
                    </p>

                    <div className="flex flex-wrap gap-2.5 pt-4">
                      {left.features.map((feature) => (
                        <div
                          key={feature.label}
                          className="flex items-center gap-2 text-slate-700 text-xs font-bold bg-white px-4 py-2.5 rounded-2xl border border-slate-100 shadow-sm uppercase tracking-wide"
                        >
                          <span className="text-primary-600">{getIcon(feature.icon)}</span>
                          <span>{t(feature.label)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-12">
                  <Button
                    variant="primary"
                    className="rounded-[1.5rem] px-10 h-14 text-base font-bold shadow-xl !bg-slate-900 !text-white"
                  >
                    {t(left.cta)}
                  </Button>
                  <button className="w-14 h-14 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 transition-transform border border-slate-200 shadow-md">
                    <ArrowUpRight className="w-7 h-7" />
                  </button>
                </div>
              </AnimatedSection>
            </div>

            {/* Interactive Gallery Part: More prominence & Same Height */}
            <div className="lg:col-span-8 relative flex flex-col h-full">
              <AnimatedSection animation="fade-in" delay={200} className="w-full h-full">
                <InteractiveStoryGallery stories={exploreData.stories} />
              </AnimatedSection>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection
