import API from './api/api'

const countrySelectElement = document.querySelector('#countries');
const resultWrapper = document.querySelector('.result');
const emptyStateWrapper = document.querySelector('.empty-result-state');

countrySelectElement.addEventListener('input', async (event) => {
	await fetchCountryStatistics(event.target.value);
})

countrySelectElement.add(new Option('', null, true))

// Fetch all countries which will be appended to select element
try {
	API.get('/countries').then((response) => {
		response.data.response.forEach((country) => {
			countrySelectElement.add(new Option(country, country));
		})
	});
} catch (error) {
	throw new Error(error.response.message)
}

// Get data for specific country

const fetchCountryStatistics = async (country) => {
	await API.get('/statistics', { params: { country: country }}).then((response) => {
		const result = response.data?.response[0]

		if (!result) {
			emptyStateWrapper.classList.remove('hidden');
			resultWrapper.innerHTML = ''
		};

		if (result) {
			emptyStateWrapper.classList.add('hidden')

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
			<p>${result.cases.new || 0 } uut juhtumit.</p>
			<p>${result.cases.active || 0 } aktiivset juhtumit kokku.</p>
			<p>${result.cases.critical || 0 } kriitilist juhtumit hetkel.</p>
			<p>${result.cases.recovered || 0 } taastunud juhtumit läbi ajaloo.</p>
		`	
		}
	})
}