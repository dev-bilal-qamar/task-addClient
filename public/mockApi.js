// This is a mock API service for development purposes
// In a real application, this would be replaced by actual API endpoints

// Mock authentication endpoints
const mockAuth = {
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "user1" && password === "admin") {
          resolve({
            token: "mock-jwt-token-xyz123",
            user: {
              id: 1,
              name: "John Doe",
              email: "john.doe@example.com",
              role: "Admin",
            },
          })
        } else {
          reject({ message: "Invalid username or password" })
        }
      }, 800)
    })
  },

  validateToken: (token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (token === "mock-jwt-token-xyz123") {
          resolve({
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            role: "Admin",
          })
        } else {
          reject({ message: "Invalid or expired token" })
        }
      }, 500)
    })
  },
}

// Mock client endpoints
const mockClients = {
  getAll: () => {
    return fetch("/mockData/clients.json")
      .then((response) => response.json())
      .then((data) => data.clients)
  },

  add: (clientData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Math.floor(Math.random() * 1000),
          ...clientData,
          createdAt: new Date().toISOString(),
        })
      }, 1000)
    })
  },
}

// Mock product endpoints
const mockProducts = {
  getAll: () => {
    return fetch("/mockData/products.json")
      .then((response) => response.json())
      .then((data) => data.products)
  },
}

// Mock dashboard data
const mockDashboard = {
  getData: () => {
    return fetch("/mockData/dashboard.json").then((response) => response.json())
  },
}

// Export the mock API
window.mockApi = {
  auth: mockAuth,
  clients: mockClients,
  products: mockProducts,
  dashboard: mockDashboard,
}
