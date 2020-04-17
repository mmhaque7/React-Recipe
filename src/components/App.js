import axios from "axios";
import React, { useState } from "react";
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";

const App = () => {
  const [recipes, setRecipies] = useState(null);

  const onSearchSubmit = async (term) => {
    console.log(term);

    const response = await axios.get("data.json");
    setRecipies(response.data.recipe);
  };

  return (
    <div>
      <SearchBar onSubmit={onSearchSubmit} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
