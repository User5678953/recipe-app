import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../recipeService';
import { toast } from 'react-toastify';

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
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>{recipe.strMeal}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
