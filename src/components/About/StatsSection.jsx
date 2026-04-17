import React from 'react'
import { stats } from '@/constants/data'
import AnimatedSection from '@/components/common/AnimatedSection'

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[120px]" />
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
              <div className="text-4xl md:text-6xl font-bold text-white mb-2 font-carmine">
                {stat.value}
              </div>
              <div className="text-primary-100 text-sm md:text-base font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
