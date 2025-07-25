import { useState } from "react";

export default function ComplexStateArray() {
  const [myFavoriteThings, setMyFavoriteThings] = useState([]);
  const allFavoriteThings = ["💦🌹", "🐱", "🔥", "🧤"];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    // we'll work this next, nothing to do here yet
    setMyFavoriteThings((prevFavThing) => [
      ...prevFavThing,
      allFavoriteThings[prevFavThing.length],
    ]);
  }

  return (
    <main>
      <hr />
      <button onClick={addFavoriteThing}>Add Item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}
