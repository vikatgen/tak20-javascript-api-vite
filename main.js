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
		resultWrapper.innerHTML = `
			<p>
				<b>Andmete kuupäev: </b>${result.day}
			</p>
			<p>
				<b>Riik: </b>${result.country}
			</p>
			<p>
				<b>Populatsioon: </b> ${result.population}
			</p>
			<p>${result.cases.new} uut juhtumit.</p>
			<p>${result.cases.active} aktiivset juhtumit kokku.</p>
			<p>${result.cases.critical} kriitilist juhtumit hetkel.</p>
			<p>${result.cases.recovered} taastunud juhtumit läbi ajaloo.</p>
		`
	})
} catch (error) {
	throw new Error(error.message);
}