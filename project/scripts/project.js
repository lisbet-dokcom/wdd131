const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const recipesSection = document.querySelector('.recipes');

    const recipes = [
        {
            title: ' Puff-Puff (Fried Dough Balls)',
            description: 'Sweet and fluffy fried dough balls sprinkled with sugar, perfect for a Nigerian breakfast treat.',
            img: 'images/puff.jpeg',
            ingredients: ['Flour', 'Yeast', 'Sugar', 'Salt', 'Vegetable Oil'],
            instructions: 'Mix dough, shape into balls, fry until golden brown.'
        },
        {
            title: 'Jollof Rice',
            description: 'This flavorful and aromatic Nigerian lunch staple is often served with chicken or beef.',
            img: 'images/jollof.jpeg',
            ingredients: ['Rice', 'Tomatoes', 'Onions', 'Peppers', 'Spices and seasoning', 'Oil'],
            instructions: 'Cook rice with tomato mixture, add spices and seasonings.'
        },
        {
            title: 'Ogbono Soup',
            description: 'Indulge in a hearty Nigerian feast featuring our flavorful egusi soup, served with a side of fufu, perfect for a comforting dinner.',
            img: 'images/ogbono.jpeg',
            ingredients: ['Ogbono seed', 'Vegetables', 'Meat or Fish', 'Palm Oil'],
            instructions: 'Prepare ogbono soup, add vegetables and protein.'
        }
    ];

    function displayRecipes(recipes) {
        recipesSection.innerHTML = recipes.map(recipe => `
            <article class="recipe">
                <img src="${recipe.img}" alt="${recipe.title}" loading="lazy">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <button onclick="showRecipeDetails('${recipe.title}')">View Recipe</button>
            </article>
        `).join('');
    }

    window.showRecipeDetails = function (title) {
        const recipe = recipes.find(r => r.title === title);
        if (recipe) {
            const details = `
                <div class="recipe-details">
                    <img src="${recipe.img}" alt="${recipe.title}" loading="lazy">
                    <div>
                        <h3>${recipe.title}</h3>
                        <p><strong>Description:</strong> ${recipe.description}</p>
                        <p><strong>Ingredients:</strong></p>
                        <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                    </div>
                </div>
            `;
            recipesSection.innerHTML = details;
        }
    };

    searchBar.addEventListener('input', function () {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
        displayRecipes(filteredRecipes);
    });

    displayRecipes(recipes);

});
