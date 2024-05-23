const API_URL = 'https://www.themealdb.com/api/json/v1/1';

/**
 * Fetch recipes based on exclusions.
 * @param {string[]} exclusions - List of ingredients to exclude.
 * @returns {Promise<Array>} - A promise that resolves to an array of recipes.
 */
export const fetchRecipes = async (exclusions) => {
  try {
    const response = await fetch(`${API_URL}/filter.php?i=${exclusions.join(',')}`);
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

/**
 * Fetch detailed information for a specific recipe.
 * @param {string} id - The ID of the recipe.
 * @returns {Promise<Object>} - A promise that resolves to the recipe details.
 */
export const fetchRecipeDetail = async (id) => {
  try {
    const response = await fetch(`${API_URL}/lookup.php?i=${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error('Error fetching recipe detail:', error);
    throw error;
  }
};

/**
 * Fetch a random recipe.
 * @returns {Promise<Object>} - A promise that resolves to a random recipe.
 */
export const fetchRandomRecipe = async () => {
  try {
    const response = await fetch(`${API_URL}/random.php`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error('Error fetching random recipe:', error);
    throw error;
  }
};

/**
 * Fetch all categories of recipes.
 * @returns {Promise<Array>} - A promise that resolves to an array of categories.
 */
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories.php`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

/**
 * Fetch all areas (countries) of recipes.
 * @returns {Promise<Array>} - A promise that resolves to an array of areas.
 */
export const fetchAreas = async () => {
  try {
    const response = await fetch(`${API_URL}/list.php?a=list`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error('Error fetching areas:', error);
    throw error;
  }
};

/**
 * Fetch all ingredients.
 * @returns {Promise<Array>} - A promise that resolves to an array of ingredients.
 */
export const fetchIngredients = async () => {
  try {
    const response = await fetch(`${API_URL}/list.php?i=list`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    throw error;
  }
};
