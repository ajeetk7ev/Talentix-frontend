import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ToastContainer from './components/common/ToastContainer'
import useToast from './hooks/useToast'
import './App.css'

function App() {
  const { success, error } = useToast();

  return (
    <>
      <ToastContainer />
      
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <div className="p-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-4">
                <h1 className="text-4xl font-heading font-bold text-primary">Welcome to Talentix</h1>
                <p className="text-muted-foreground font-sans">The premium job platform for modern workers.</p>
                
                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => success('Welcome back! Configuration loaded.')}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Test Success Toast
                  </button>
                  <button 
                    onClick={() => error('Oops! Something went wrong.')}
                    className="px-6 py-2 bg-destructive text-destructive-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Test Error Toast
                  </button>
                </div>
              </div>
            } />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Suspense>
    </>
  )
}

export default App
