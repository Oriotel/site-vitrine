import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from '@/components/layout/Layout'

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
)

const HomePage = lazy(() => import('./pages/HomePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const JobsPage = lazy(() => import('./pages/JobsPage'))
const ApplyPage = lazy(() => import('./pages/ApplyPage'))
const EventApplyPage = lazy(() => import('./pages/EventApplyPage'))





function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/offres" element={<JobsPage />} />
          <Route path="/postuler" element={<ApplyPage />} />
          <Route path="/evenement" element={<EventApplyPage />} />


        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App