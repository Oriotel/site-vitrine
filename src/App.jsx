import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-dark-900 gap-4">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full border-2 border-gold-500/20" />
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold-500 animate-spin" />
    </div>
    <span className="text-dark-400 text-sm font-montserrat tracking-wider">Chargement...</span>
  </div>
)

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