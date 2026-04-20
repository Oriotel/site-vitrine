import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from '@/components/layout/Layout'

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-dark-900 gap-4">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full border-2 border-gold-500/20" />
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold-500 animate-spin" />
    </div>
    <span className="text-dark-400 text-sm font-montserrat tracking-wider">Chargement...</span>
  </div>
)

const HomePage = lazy(() => import('./pages/HomePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
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
        </Routes>
      </Suspense>
    </Layout>
  )
}
export default App