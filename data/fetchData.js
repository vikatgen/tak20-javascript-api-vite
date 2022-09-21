import API from './api/api';

const fetchCountries = async () => {
    const response = await API.get('/countries');
    console.log(response.data.response);
    return response.data.response
}

const fetchCountryData = async (country) => {
    const response = await API.get('/statistics', { params: { country: country}});
    console.log(response.data.response);
    return response.data.response;
}

export default { fetchCountries, fetchCountryData };