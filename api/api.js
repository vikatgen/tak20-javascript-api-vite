import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'X-RapidAPI-Key': 'c5b3db7c9dmsh67ca037188eb45cp1f5c7cjsnceb24cc348c6',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
})

export default API;