import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/auth/Login'
import { useAuth } from './context/AuthContext'

const MainLayout = lazy(() => import('./layouts/MainLayout'))
const Dashboard = lazy(() => import('./pages/dashboard'))
const ClientAddForm = lazy(() => import('./pages/dashboard/index'))

const LoadingFallback = () => (
    <div className="flex items-center justify-center h-screen">
        <div className="w-8 h-8 border-4 rounded-full border-primary border-t-transparent animate-spin"></div>
    </div>
)

function App() {
    const { isAuthenticated } = useAuth()

    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                <Route
                    path="/login"
                    element={
                        !isAuthenticated ? (
                            <Login />
                        ) : (
                            <Navigate to="/dashboard" />
                        )
                    }
                />

                <Route element={<ProtectedRoute />}>
                    <Route element={<MainLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/client-add" element={<ClientAddForm />} />
                        <Route
                            path="*"
                            element={<Navigate to="/dashboard" />}
                        />
                    </Route>
                </Route>

                <Route
                    path="/"
                    element={
                        <Navigate
                            to={isAuthenticated ? '/dashboard' : '/login'}
                        />
                    }
                />
            </Routes>
        </Suspense>
    )
}

export default App
