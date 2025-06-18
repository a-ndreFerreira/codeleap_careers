import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log('erro no request', error)
    }
)

api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log('erro no response', error)
        return Promise.reject(error)
    }
)

export default api;