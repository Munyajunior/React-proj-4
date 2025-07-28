export default function IngredientsList(props) {
  const ingredientItem = props.addIngredientItem.map((item) => {
    return <li key={item}>{item}</li>;
  });
  return (
    <>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredient-list" aria-live="polite">
        {ingredientItem}
      </ul>
      {props.length && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </>
  );
}
