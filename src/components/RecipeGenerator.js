import React, { useState } from "react";
import "../App.css";

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [recipe, setRecipe] = useState("");

  const createRecipe = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/generate-recipe?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}`
      );
      const data = await response.json();
      console.log("Generated recipe:", data);
      setRecipe(data);
    } catch (error) {
      console.error("Error generating image: ", error);
    }
  };

  return (
    <div className="recipe-generator-container">
      <h2>Create a Recipe</h2>
      <div className="input-container">
        <input
          className="recipe-input"
          type="text"
          value={ingredients}
          placeholder="Enter ingredients (comma separated)"
          onChange={(e) => setIngredients(e.target.value)}
        />
        <input
          className="recipe-input"
          type="text"
          value={cuisine}
          placeholder="Enter cuisine type"
          onChange={(e) => setCuisine(e.target.value)}
        />
        <input
          className="recipe-input"
          type="text"
          value={dietaryRestrictions}
          placeholder="Enter dietary restrictions"
          onChange={(e) => setDietaryRestrictions(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button className="recipe-button" onClick={createRecipe}>
          Create Recipe
        </button>
      </div>
      <div className="output">
        <pre className="recipe-text">{recipe}</pre>
      </div>
    </div>
  );
}

export default RecipeGenerator;
