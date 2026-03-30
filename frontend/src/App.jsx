import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Lazy load modules (to be created)
// const Login = lazy(() => import('./modules/auth/Login'))

function App() {
  return (
    <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
      <Routes>
        <Route path="/" element={<div>Welcome to Talentix - Job Platform</div>} />
        {/* Auth Routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
