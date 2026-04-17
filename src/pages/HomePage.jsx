import React from 'react'
import SponsorsMarquee from '@/components/home/SponsorsMarquee'
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';

const HomePage = () => {
  return (
    <>
      {/* 1. La section principale (Hero) */}
      <Hero />
      {/* 2. LA NOUVELLE SECTION "QUI SOMMES-NOUS" */}
      {/* Elle va glisser naturellement sur le Hero ! */}
      <AboutSection />
      {/* 3. La bande défilante des sponsors en noir */}
      <SponsorsMarquee />
    </>
  )
}

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
)

export default HomePage
