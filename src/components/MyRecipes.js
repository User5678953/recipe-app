import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MyRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([
    // Example saved recipes. Replace this with actual saved recipes.
    { idMeal: '52772', strMeal: 'Teriyaki Chicken Casserole' },
    { idMeal: '52773', strMeal: 'Tandoori Chicken' },
  ]);

  const handleRemoveRecipe = (id) => {
    setSavedRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.idMeal !== id));
    toast.success('Recipe removed successfully');
  };

  return (
    <div>
      <h2>My Recipes</h2>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe.idMeal}>
            {recipe.strMeal}
            <button onClick={() => handleRemoveRecipe(recipe.idMeal)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyRecipes;
