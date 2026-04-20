import { Routes, Route, Navigate } from 'react-router-dom'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <Routes>
      <Route path="/services" element={<ServicesPage />} />
      {/* Redirection vers /services par défaut pour faciliter vos tests */}
      <Route path="*" element={<Navigate to="/services" replace />} />
    </Routes>
  )
}

export default App