import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetail } from '../recipeService';
import { toast } from 'react-toastify';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipeDetail = async () => {
      try {
        const recipeData = await fetchRecipeDetail(id);
        setRecipe(recipeData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getRecipeDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!recipe) return <p>No recipe found</p>;

  const handleSave = () => {
    // Logic to save the recipe goes here
    toast.success('Recipe saved successfully');
  };

  return (
    <div className="recipe-detail">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
      <h3>Ingredients</h3>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.startsWith('strIngredient') && recipe[key])
          .map((key, index) => (
            <li key={key}>
              {recipe[key]} - {recipe[`strMeasure${index + 1}`]}
            </li>
          ))}
      </ul>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default RecipeDetail;
