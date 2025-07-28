import { useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./Ingredients";
import { getRecipeFromGemini } from "../src/ai";

export default function Form() {
  const [ingredients, setIngredients] = useState([]); //

  function onSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient && !ingredients.includes(newIngredient)) {
      // Check if the ingredient is not empty and not already in the list
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
  }

  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromGemini(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main>
      <form
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   const formData = new FormData(e.target);
        //   onSubmit(formData);
        // }}
        action={onSubmit}
        className="form-container"
      >
        <input
          type="text"
          placeholder="e.g., oregano"
          name="ingredient"
          required
        />
        <button type="submit">Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <section>
          <IngredientsList
            addIngredientItem={ingredients}
            length={ingredients.length > 3}
            getRecipe={getRecipe}
          />
          {recipe && <Recipe recipe={recipe} />}
        </section>
      )}
    </main>
  );
}
