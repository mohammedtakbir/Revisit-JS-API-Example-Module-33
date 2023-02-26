function loadCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};
function displayCountries(countries) {
    const container = document.getElementById('container');
    let i = 0;
    while (i < countries.length) {
        const country = countries[i];
        const { name, capital } = country;
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Name: ${name?.common}</h3>
        <h4>Capital: ${capital ? capital[0] : 'No Capital'}</h4>
        <button onclick="loadCountryDetails('${name?.common}')">Details</button>
        `;
        container.appendChild(div);
        i++;
    }
};

function loadCountryDetails(name) {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
};
function displayCountryDetails(country) {
    const countryContainer = document.getElementById('country');
    countryContainer.innerHTML = `
    <img src="${country?.flags?.png}" />
    `;
}


loadCountries();