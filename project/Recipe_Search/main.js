const recipeContainer = document.getElementById('recipe-container'); 
const searchInput = document.getElementById('search');

async function fetchRecipes() {
   try {
       const response = await fetch('https://dummyjson.com/recipes');
       const data = await response.json();
       return data.recipes; 
   } catch (error) {
       console.error('Error fetching recipes:', error);
       return [];
   }
}
function displayRecipes(recipes) {
   recipeContainer.innerHTML = ''; 

   recipes.forEach(recipe => {
       const recipeCard = document.createElement('div');
       recipeCard.className = 'recipe-card'; 
       
       recipeCard.innerHTML = `
           <img src="${recipe.image}" alt="${recipe.title}" />
           <h2>${recipe.name}</h2> <!-- Recipe Name -->
           <h4>Ingredients:</h4>
           <ul>
               ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
           </ul>
           <h4>Instructions:</h4>
           <p>${recipe.instructions[0]}</p>
       `;
       
       recipeContainer.appendChild(recipeCard);
   });
}

function filterRecipes(recipes, searchTerm) {
   return recipes.filter(recipe =>
       recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
   );
}
async function init() {
   const recipes = await fetchRecipes();
   displayRecipes(recipes);

   searchInput.addEventListener('input', () => {
       const filteredRecipes = filterRecipes(recipes, searchInput.value);
       displayRecipes(filteredRecipes);
   });
}
init();