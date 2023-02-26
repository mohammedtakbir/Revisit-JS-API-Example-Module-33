let loading;


function loadRandomPersons() {
    const load = document.getElementById('loading');
    load.innerText = 'loading...'
    fetch(`https://randomuser.me/api/?results=1000`)
        .then(res => res.json())
        .then(data => {
            displayRandomPersons(data.results);
            loading = false;
            load.innerText = '';
        })
}

function displayRandomPersons(persons) {
    const container = document.getElementById('container');
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        const { name, email, location } = person;
        const div = document.createElement('div');
        div.classList.add('person');
        div.innerHTML = `
        <h2>User Name: ${name?.first} ${name?.last}</h2>
        <h3>Email: ${email}</h3>
        <p>Location: ${location?.city}, ${location?.country}</p>
    `;
        container.appendChild(div)
    }
}