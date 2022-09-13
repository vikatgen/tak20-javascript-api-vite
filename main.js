import API from './api/api'

const countrySelectElement = document.querySelector('#countries');
const resultWrapper = document.querySelector('.result');

// Fetch all countries which will be appended to select element
try {
	API.get('/countries').then((response) => {
		response.data.response.forEach((country) => {
			countrySelectElement.add(new Option(country, country));
		})
	});
} catch (error) {
	throw new Error(error.message)
}

// Get data for specific country
try {
	API.get('/statistics', { params: { country: 'estonia' }}).then((response) => {
		const result = response.data.response[0]
		console.log(result)
		resultWrapper.innerHTML = `
			<p>on day ${result.day}</p>
		`
	})
} catch (error) {
	throw new Error(error.message);
}