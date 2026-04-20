import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

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

const AboutPage = lazy(() => import('@/pages/AboutPage'))

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<AboutPage />} />
      </Routes>
    </Suspense>
  )
}

export default App