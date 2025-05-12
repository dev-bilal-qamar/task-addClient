import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react'
import {
    loginUser,
    logout,
    isAuthenticated as checkAuth,
} from '../services/api'

interface AuthContextType {
    isAuthenticated: boolean
    isLoading: boolean
    login: (
        username: string,
        password: string,
    ) => Promise<{ success: boolean; error?: string }>
    logout: () => void
    error: string | null
}

const defaultValue: AuthContextType = {
    isAuthenticated: false,
    isLoading: true,
    login: async () => ({ success: false }),
    logout: () => {},
    error: null,
}

const AuthContext = createContext<AuthContextType>(defaultValue)

export const useAuth = () => useContext(AuthContext)

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const checkAuthentication = () => {
            const authenticated = checkAuth()
            setIsAuthenticated(authenticated)
            setIsLoading(false)
        }

        checkAuthentication()
    }, [])

    const handleLogin = async (username: string, password: string) => {
        setIsLoading(true)
        setError(null)

        try {
            const result = await loginUser(username, password)

            if (result.success) {
                setIsAuthenticated(true)
                return { success: true }
            } else {
                setError(result.error || 'Login failed')
                return { success: false, error: result.error }
            }
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : 'Login failed'
            setError(errorMessage)
            return { success: false, error: errorMessage }
        } finally {
            setIsLoading(false)
        }
    }

    // Logout function
    const handleLogout = () => {
        logout()
        setIsAuthenticated(false)
    }

    const value = {
        isAuthenticated,
        isLoading,
        login: handleLogin,
        logout: handleLogout,
        error,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
