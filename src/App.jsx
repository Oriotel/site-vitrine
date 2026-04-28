import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import SplashCursor from '@/components/ui/SplashCursor'
import { LoadingProvider } from '@/context/LoadingContext'

// Lazy-loaded page components for route-level code splitting
const HomePage = React.lazy(() => import('./pages/HomePage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'))
const EventApplyPage = React.lazy(() => import('./pages/EventApplyPage'))
const ApplyPage = React.lazy(() => import('./pages/ApplyPage'))
const OffresPage = React.lazy(() => import('./pages/OffresPage'))
const EventsPage = React.lazy(() => import('./pages/EventsPage'))

function App() {
  return (
    <LoadingProvider>
      <Layout>
        <SplashCursor />

        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Routes Carrières */}
            <Route path="/postuler" element={<ApplyPage />} />
            <Route path="/carrieres/postuler" element={<ApplyPage />} />
            <Route path="/carrieres/offres" element={<OffresPage />} />

            {/* Routes Événements */}
            <Route path="/evenement" element={<EventApplyPage />} />
            <Route path="/evenements" element={<EventsPage />} />
            <Route path="/evenements/inscription" element={<EventApplyPage />} />

            {/* Routes À propos */}
            <Route path="/a-propos" element={<AboutPage />} />
            <Route
              path="/about"
              element={<Navigate to="/a-propos" replace />}
            />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/processus" element={<OffresPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </LoadingProvider>
  )
}

export default App