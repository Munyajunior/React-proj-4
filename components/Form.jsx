import { useState } from "react";
import Recipe from "./Recipe";

export default function Form() {
  const [Ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const IngredientItem = Ingredients.map((item) => {
    return <li key={item}>{item}</li>;
  });

  function onSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((preIngredients) => [...preIngredients, newIngredient]);
  }
  const [recipeShown, setRecipeShown] = useState(false);
  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          onSubmit(formData);
        }}
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
      {Ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredient-list" aria-live="polite">
            {IngredientItem}
          </ul>
          {Ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={() => setRecipeShown((prev) => !prev)}>
                Get a recipe
              </button>
            </div>
          )}
          {recipeShown && <Recipe />}
        </section>
      )}
    </main>
  );
}
