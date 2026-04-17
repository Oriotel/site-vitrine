import React, { useRef } from 'react'
import { exploreData } from '@/constants/data'
import { Clock, Shield, Star, Compass, ArrowUpRight } from 'lucide-react'
import Button from '@/components/common/Button'
import AnimatedSection from '@/components/common/AnimatedSection'
import { CircularGallery } from '@/components/ui/circular-gallery'

const ExploreSection = () => {
  const { left, circularItems } = exploreData
  const scrollContainerRef = useRef(null)

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
    <section className="section-padding bg-slate-100/50 dark:bg-slate-950/50 overflow-x-hidden relative">
      <div className="container mx-auto">
        {/* Main Unified Card Container */}
        <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] p-4 lg:p-4 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Column 1: Informative (Left) */}
            <AnimatedSection 
              className="flex flex-col justify-between p-6 lg:p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 lg:col-span-1 z-20 min-h-[400px] lg:min-h-full"
              animation="fade-in-up"
            >
              <div className="flex flex-col gap-6 lg:gap-8">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm">
                  <Compass className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                
                <div className="space-y-4 lg:space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                    {left.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base lg:text-lg">
                    {left.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 lg:pt-4">
                    {left.features.map((feature) => (
                      <div key={feature.label} className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-xs lg:text-sm bg-white dark:bg-slate-900 px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl border border-slate-100 dark:border-slate-700/50 shadow-sm">
                        {getIcon(feature.icon)}
                        <span className="font-medium">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-8 lg:pt-10">
                <Button className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:scale-105 transition-transform rounded-2xl px-8 lg:px-10 h-12 lg:h-14 text-sm lg:text-base font-bold shadow-lg shadow-slate-900/10">
                  {left.cta}
                </Button>
                <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700 shadow-sm">
                  <ArrowUpRight className="w-6 h-6 lg:w-7 lg:h-7" />
                </button>
              </div>
            </AnimatedSection>

            {/* Column 2-3: 3D Circular Gallery Wrapper */}
            <div className="lg:col-span-2 relative min-h-[450px] lg:min-h-[600px] rounded-[2.5rem] bg-slate-50/50 dark:bg-slate-800/20 shadow-inner overflow-hidden flex flex-col group">
               {/* Custom Scrollbars hidden via style but container is scrollable */}
               <div 
                 ref={scrollContainerRef}
                 className="absolute inset-0 overflow-y-auto overflow-x-hidden"
                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
               >
                 {/* CSS Hide scrollbar for webkit */}
                 <style dangerouslySetInnerHTML={{__html: `
                   div::-webkit-scrollbar { display: none; }
                 `}} />
                 
                 <div style={{ height: '3000px' }} className="w-full">
                   <div className="sticky top-0 h-[450px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">
                     <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white dark:from-slate-900 via-transparent to-white dark:to-slate-900 opacity-20 z-10" />
                     <CircularGallery scrollContainerRef={scrollContainerRef} items={circularItems} className="w-full h-full" />
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection
