import axios from 'axios'

// Create axios instance with API base URL
export const api = axios.create({
    baseURL: 'https://jmotor.vps.webdock.cloud/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token')

            if (window.location.pathname !== '/login') {
                window.location.href = '/login'
            }
        }
        return Promise.reject(error)
    },
)

export const loginUser = async (username: string, password: string) => {
    try {
        const basicAuth = btoa(`${username}:${password}`)

        const response = await api.get('/auth/login', {
            headers: {
                Authorization: `Basic ${basicAuth}`,
            },
        })

        if (response.data && response.data.responseObj) {
            const token = response.data.responseObj
            localStorage.setItem('token', token)
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            return { success: true, token }
        }

        throw new Error('Invalid response format')
    } catch (error) {
        console.error('Login error:', error)
        return { success: false, error: 'Invalid credentials' }
    }
}

export const isAuthenticated = () => {
    return !!localStorage.getItem('token')
}

export const logout = () => {
    localStorage.removeItem('token')
    delete api.defaults.headers.common['Authorization']
    window.location.href = '/login'
}
