import { useState } from "react";

export default function Form() {
  const [Ingredients, setIngredients] = useState([]);
  const IngredientItem = Ingredients.map((item) => {
    return <li key={item}>{item}</li>;
  });

  function onSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((preIngredients) => [...preIngredients, newIngredient]);
  }
  return (
    <main>
      <form action={onSubmit} className="form-container">
        <input type="text" placeholder="eg.oregano" name="ingredient" />
        <button type="submit">Add Ingredient</button>
      </form>
      {Ingredients.length > 0 ? (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredient-list" aria-live="polite">
            {IngredientItem}
          </ul>
          {Ingredients.length > 3 ? (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button>Get a recipe</button>
            </div>
          ) : null}
        </section>
      ) : null}
    </main>
  );
}
