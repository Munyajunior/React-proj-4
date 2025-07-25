import { useState } from "react";

export default function Form() {
  const [Ingredients, setIngredients] = useState(["oregano", "salt", "pepper"]);
  const IngredientItem = Ingredients.map((item) => {
    return <li key={item}>{item}</li>;
  });

  function handleSubmit(e) {
    e.preventDefault();
    //alert("Form Submitted");
    const formData = new FormData(e.currentTarget);
    //
    const newIngredient = formData.get("ingredient");
    setIngredients((preIngredients) => [...preIngredients, newIngredient]);
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className="form-container" action="">
        <input type="text" placeholder="eg.oregano" name="ingredient" />
        <button type="submit">Add Ingredient</button>
      </form>
      <ul>{IngredientItem}</ul>
    </main>
  );
}
