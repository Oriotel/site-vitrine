import { Routes, Route } from 'react-router-dom'
import {lazy} from 'react'

//import { useTranslation } from 'react-i18next'


const AboutPage = lazy(() => import('@/pages/AboutPage'))

function App() {
  return (
    <Routes>
      <Route path="/a-propos" element={<AboutPage />} />
    </Routes>
  )
}

export default App