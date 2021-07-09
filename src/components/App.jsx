import React, { useState } from "react";

function App() {
  const [isMouseOver, setBgcolor] = useState(false);
  function mouseOverHandle() {
    setBgcolor(true);
  }
  function mouseOutHandle() {
    setBgcolor(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseOverHandle}
        onMouseOut={mouseOutHandle}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
