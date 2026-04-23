import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import SplashCursor from '@/components/ui/SplashCursor'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import EventApplyPage from './pages/EventApplyPage'
import ApplyPage from './pages/ApplyPage'
import OffresPage from './pages/OffresPage'

function App() {
  return (
    <Layout>
      <SplashCursor />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Routes Carrières */}
        <Route path="/postuler" element={<ApplyPage />} />
        <Route path="/carrieres/postuler" element={<ApplyPage />} />
        <Route path="/carrieres/offres" element={<OffresPage />} />

        {/* Routes Événements */}
        <Route path="/evenement" element={<EventApplyPage />} />
        <Route path="/evenements" element={<EventApplyPage />} />
        <Route
          path="/evenements/inscription"
          element={<EventApplyPage />}
        />

        {/* Routes À propos */}
        <Route path="/a-propos" element={<AboutPage />} />
        <Route
          path="/about"
          element={<Navigate to="/a-propos" replace />}
        />

        {/* Autres Routes */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/processus" element={<OffresPage />} />
      </Routes>
    </Layout>
  )
}

export default App