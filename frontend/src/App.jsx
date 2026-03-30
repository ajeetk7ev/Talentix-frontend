import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ToastContainer from './components/common/ToastContainer'
import PublicRoute from './components/auth/PublicRoute'
import api from './services/api'
import { setUser, setLoading } from './store/slices/authSlice'
import './App.css'

// Lazy load modules
const Home = lazy(() => import('./modules/home/Home'))
const Login = lazy(() => import('./modules/auth/Login'))
const Signup = lazy(() => import('./modules/auth/Signup'))

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      dispatch(setLoading(true));
      try {
        const response = await api.get('/profiles/me');
        if (response.data.success) {
          dispatch(setUser(response.data.data));
        }
      } catch (error) {
        console.log('No active session found.');
      } finally {
        dispatch(setLoading(false));
      }
    };

    checkAuth();
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-background text-primary font-heading font-black text-2xl animate-pulse tracking-widest">TALENTIX...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          <Route path="/signup" element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          } />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>


    </>
  )
}


export default App
