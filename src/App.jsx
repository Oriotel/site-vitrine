import { Routes, Route } from 'react-router-dom'
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
        <Route path="/postuler" element={<ApplyPage />} />
        <Route path="/carrieres/postuler" element={<ApplyPage />} />
        <Route path="/carrieres/offres" element={<OffresPage />} />
        <Route path="/evenement" element={<EventApplyPage />} />
        <Route path="/evenements" element={<EventApplyPage />} />
        <Route path="/evenements/inscription" element={<EventApplyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/processus" element={<OffresPage />} />
      </Routes>
    </Layout>
  )
}

export default App