function loadMeal(search) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
function displayMeals(meals) {
    let i = 0;
    const container = document.getElementById('container');
    container.innerHTML = '';
    while (i < meals.length) {
        const meal = meals[i];
        const { strMealThumb, strMeal, strInstructions, idMeal } = meal;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card" onclick="loadMealDetail(${idMeal})">
            <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">${strInstructions.length > 300 ? strInstructions.slice(0, 300) + 'Read More...' : strInstructions}</p>
            </div>
        </div>
        `;
        container.appendChild(div);
        i++;
    };
};

function loadMealDetail(idMeal) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
};

function displayMealDetail(meal) {
    const { strMealThumb, strMeal } = meal;
    const mealDetail = document.getElementById('meal-detail');
    mealDetail.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>${strMeal}</h3>
    <img src="${strMealThumb}" class="w-25" />
    `;
    mealDetail.appendChild(div);
}

document.getElementById('search-btn').addEventListener('click', () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeal(searchText);
    searchField.value = '';
})
loadMeal('');