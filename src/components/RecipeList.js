import React from "react";

const RecipeList = (props) => {
  const recipes = recipes.props.map((recipe) => {
    return <div key={recipe.id}>Name</div>;
  });
  return <div className="recipe-list">{recipes}</div>;
};

export default RecipeList;
