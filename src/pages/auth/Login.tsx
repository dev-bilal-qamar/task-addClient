import type React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Card, CardContent } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { FaLock, FaUserPlus } from 'react-icons/fa6'
import { Loader2 } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useToast } from '@/hooks/use-toast'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { login, isAuthenticated, isLoading: authLoading } = useAuth()
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    useEffect(() => {
        if (isAuthenticated) {
            const from = location.state?.from?.pathname || '/dashboard'
            navigate(from, { replace: true })
        }
    }, [isAuthenticated, navigate, location])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const result = await login(
                credentials.username,
                credentials.password,
            )

            if (result.success) {
                toast({
                    title: 'Success',
                    description: 'Logged in successfully',
                })
            } else {
                toast({
                    title: 'Error',
                    description: result.error || 'Login failed',
                })
            }
        } catch (error) {
            console.error('Login failed:', error)
            toast({
                title: 'Error',
                description: 'An unexpected error occurred',
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full shadow-md bg-gradient-to-r from-violet-500 to-indigo-600 shadow-indigo-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 text-white"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-light tracking-tight text-gray-900">
                        Welcome back
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Sign in to your account
                    </p>
                </div>

                <Card className="overflow-hidden bg-white border-none shadow-xl backdrop-blur-sm shadow-indigo-100">
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="username"
                                    className="text-xs font-medium text-gray-700"
                                >
                                    Username
                                </Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaUserPlus className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <Input
                                        value={credentials.username}
                                        name="username"
                                        id="username"
                                        type="text"
                                        placeholder="Enter your username"
                                        required
                                        onChange={handleChange}
                                        className="pl-10 text-sm transition-all bg-white border-gray-200 rounded-lg h-11 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label
                                        htmlFor="password"
                                        className="text-xs font-medium text-gray-700"
                                    >
                                        Password
                                    </Label>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaLock className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <Input
                                        value={credentials.password}
                                        name="password"
                                        id="password"
                                        type="password"
                                        required
                                        onChange={handleChange}
                                        className="pl-10 text-sm transition-all bg-white border-gray-200 rounded-lg h-11 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    variant="default"
                                    size="lg"
                                    className="relative w-full overflow-hidden font-medium text-white transition-all duration-200 rounded-lg shadow-md h-11 bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-lg hover:shadow-indigo-300/50"
                                    disabled={isLoading || authLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Signing in...</span>
                                        </>
                                    ) : (
                                        <span>Sign in</span>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Login
