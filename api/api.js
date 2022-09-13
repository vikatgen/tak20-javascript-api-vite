import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
    }
})

export default API;