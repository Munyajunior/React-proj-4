import PadData from "../src/assets/pads";
import "../css/pad.css";

import { useState } from "react";

function Pad(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : undefined}
      onClick={() => props.toggle(props.id)}
    ></button>
  );
}

export default function PadLayout(props) {
  props.DarkMode
    ? (document.body.style.backgroundColor = "#1c1917")
    : (document.body.style.backgroundColor = "#eeeee5");

  const [pads, setPads] = useState(PadData);

  function toggle(id) {
    // map over the pads array, and if the current item has
    // the same d as the one passed to tis function, then
    // flip it's 'on' value
    setPads((prevPads) =>
      prevPads.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  }

  const padsElements = pads.map((pad) => (
    <Pad
      key={pad.id}
      id={pad.id}
      color={pad.color}
      on={pad.on}
      toggle={toggle}
    />
  ));

  return (
    <main>
      <div className="pad-container">{padsElements}</div>
    </main>
  );
}
