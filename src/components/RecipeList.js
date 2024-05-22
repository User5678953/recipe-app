// src/components/RecipeList.js
import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../recipeService';

const RecipeList = ({ exclusions }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const meals = await fetchRecipes(exclusions);
        setRecipes(meals);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, [exclusions]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>{recipe.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
