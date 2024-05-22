// src/recipeService.js
const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php';

export const fetchRecipes = async (exclusions) => {
  try {
    const response = await fetch(`${API_URL}?i=${exclusions.join(',')}`);
    if (!response.ok) {
      if (response.status === 429) {
        throw new Error('API limit reached. Please try again later.');
      } else {
        throw new Error('Network response was not ok');
      }
    }
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
