import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Echipa from './pages/Echipa.tsx'
import ESU2026 from './pages/ESU2026.tsx'
import FAQ from './pages/FAQ.tsx'
import DespreNoi from './pages/DespreNoi.tsx'
import Loading from './components/Loading.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Loading minDuration={1500} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/echipa" element={<Echipa />} />
        <Route path="/ESU2026" element={<ESU2026 />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<DespreNoi />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
