import { Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from '@/components/layout/Layout'

import { useTranslation } from 'react-i18next'

const LoadingSpinner = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50 gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-primary-500/10" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary-600 animate-spin" />
      </div>
      <span className="text-slate-500 text-xs font-montserrat font-bold tracking-[0.3em] uppercase">{t('common.loading')}</span>
    </div>
  )
}

const HomePage = lazy(() => import('./pages/HomePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const EventApplyPage = lazy(() => import('./pages/EventApplyPage'))
const ApplyPage = lazy(() => import('./pages/ApplyPage'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/postuler" element={<ApplyPage />} />
          <Route path="/evenement" element={<EventApplyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
export default App