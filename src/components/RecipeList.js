import React from "react";

const RecipeList = ({ recipes }) => {
  const renderRecipes = () => {
    if (!recipes) return;

    return recipes.map((recipe) => {
      return <div key={recipe.id}>{recipe.name}</div>;
    });
  };

  return <div className="recipe-list">{renderRecipes()}</div>;
};

export default RecipeList;
