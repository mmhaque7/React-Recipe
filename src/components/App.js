import React from "react";
import SearchBar from "./SearchBar";
import Recipe from "./RecipeList";
import axios from "axios";

class App extends React.Component {
  state = { recipes: [] };
  onSearchSubmit = async (term) => {
    const response = await axios
      .get("data.json")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    this.setState({ recipes: response.data.results });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
