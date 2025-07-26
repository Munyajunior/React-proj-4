import { useState } from "react";

export default function Form() {
  const [Ingredients, setIngredients] = useState(["oregano", "salt", "pepper"]);
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
      <ul>{IngredientItem}</ul>
    </main>
  );
}
