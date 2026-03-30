import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ToastContainer from './components/common/ToastContainer'
import './App.css'

// Lazy load modules
const Home = lazy(() => import('./modules/home/Home'))

function App() {
  return (
    <>
      <ToastContainer />
      
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-background text-primary font-heading font-black text-2xl animate-pulse">Talentix...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}


export default App
